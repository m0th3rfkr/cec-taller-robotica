// Crea (o actualiza) cuentas de alumnos en Supabase desde un CSV.
//
// Uso:
//   1) Copia alumnos.ejemplo.csv a alumnos.csv y llénalo (nombre,email,nivel[,password]).
//   2) Pon en .env.local (solo en tu computadora, NUNCA en GitHub):
//        NEXT_PUBLIC_SUPABASE_URL=...
//        SUPABASE_SERVICE_ROLE_KEY=...   (Supabase > Project Settings > API > service_role)
//   3) Prueba sin crear nada:  node --env-file=.env.local scripts/crear-alumnos.mjs --prueba
//   4) Crea las cuentas:       node --env-file=.env.local scripts/crear-alumnos.mjs
//
// Resultado: credenciales.csv con correo y contraseña de cada alumno, para repartirlas.
// Es seguro volver a correrlo: si el correo ya existe, solo actualiza nombre y nivel.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { randomInt } from "node:crypto";
import { createClient } from "@supabase/supabase-js";

const NIVELES = ["primaria", "secundaria", "preparatoria"];
const args = process.argv.slice(2);
const prueba = args.includes("--prueba");
const archivo = args.find((a) => !a.startsWith("--")) ?? "alumnos.csv";

// ---------- CSV ----------
function parsearLinea(linea) {
  const celdas = [];
  let actual = "";
  let entreComillas = false;
  for (let i = 0; i < linea.length; i++) {
    const c = linea[i];
    if (c === '"') {
      if (entreComillas && linea[i + 1] === '"') { actual += '"'; i++; }
      else entreComillas = !entreComillas;
    } else if (c === "," && !entreComillas) {
      celdas.push(actual.trim());
      actual = "";
    } else actual += c;
  }
  celdas.push(actual.trim());
  return celdas;
}

function leerAlumnos(ruta) {
  if (!existsSync(ruta)) {
    console.error(`No encuentro ${ruta}. Copia alumnos.ejemplo.csv a alumnos.csv y llénalo.`);
    process.exit(1);
  }
  const texto = readFileSync(ruta, "utf8").replace(/^﻿/, "");
  const lineas = texto.split(/\r?\n/).filter((l) => l.trim() !== "");
  const [cabecera, ...filas] = lineas;
  const cols = parsearLinea(cabecera).map((c) => c.toLowerCase());
  for (const requerida of ["nombre", "email", "nivel"]) {
    if (!cols.includes(requerida)) {
      console.error(`Falta la columna "${requerida}" en la primera fila de ${ruta}.`);
      process.exit(1);
    }
  }
  return filas.map((fila, i) => {
    const valores = parsearLinea(fila);
    const o = Object.fromEntries(cols.map((c, j) => [c, valores[j] ?? ""]));
    return {
      linea: i + 2,
      nombre: o.nombre,
      email: o.email.toLowerCase(),
      nivel: o.nivel.toLowerCase(),
      password: o.password ?? "",
    };
  });
}

// ---------- Validación ----------
function validar(alumnos) {
  const errores = [];
  const vistos = new Set();
  for (const a of alumnos) {
    if (!a.nombre) errores.push(`Línea ${a.linea}: falta el nombre.`);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a.email)) errores.push(`Línea ${a.linea}: correo inválido "${a.email}".`);
    if (!NIVELES.includes(a.nivel)) errores.push(`Línea ${a.linea}: nivel "${a.nivel}" no es ${NIVELES.join(", ")}.`);
    if (a.password && a.password.length < 8) errores.push(`Línea ${a.linea}: la contraseña debe tener 8 o más caracteres.`);
    if (vistos.has(a.email)) errores.push(`Línea ${a.linea}: correo repetido "${a.email}".`);
    vistos.add(a.email);
  }
  return errores;
}

// ---------- Contraseñas fáciles de leer para niños ----------
const PALABRAS_1 = ["robot", "luna", "sol", "rayo", "nube", "cohete", "tigre", "panda", "volcan", "delfin"];
const PALABRAS_2 = ["azul", "verde", "veloz", "listo", "feliz", "fuerte", "genial", "bravo", "claro", "magico"];
function generarPassword() {
  const a = PALABRAS_1[randomInt(PALABRAS_1.length)];
  const b = PALABRAS_2[randomInt(PALABRAS_2.length)];
  return `${a}-${b}-${randomInt(1000, 10000)}`;
}

// ---------- Programa ----------
const alumnos = leerAlumnos(archivo);
const errores = validar(alumnos);
if (errores.length) {
  console.error("Corrige esto en el CSV y vuelve a correr:\n- " + errores.join("\n- "));
  process.exit(1);
}
console.log(`${alumnos.length} alumnos en ${archivo}.`);

if (prueba) {
  for (const a of alumnos) console.log(`  [prueba] ${a.nombre} <${a.email}> · ${a.nivel}`);
  console.log("Modo prueba: no se creó nada.");
  process.exit(0);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const llave = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !llave) {
  console.error("Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local.");
  process.exit(1);
}
const supabase = createClient(url, llave, { auth: { autoRefreshToken: false, persistSession: false } });

// Mapa correo -> id de los usuarios que ya existen (para poder volver a correr el script).
async function usuariosExistentes() {
  const mapa = new Map();
  for (let pagina = 1; ; pagina++) {
    const { data, error } = await supabase.auth.admin.listUsers({ page: pagina, perPage: 1000 });
    if (error) throw error;
    for (const u of data.users) if (u.email) mapa.set(u.email.toLowerCase(), u.id);
    if (data.users.length < 1000) break;
  }
  return mapa;
}

const existentes = await usuariosExistentes();
const salida = [["nombre", "email", "nivel", "password", "estado"]];
let creados = 0, actualizados = 0, fallidos = 0;

for (const a of alumnos) {
  try {
    let id = existentes.get(a.email);
    let password = "";
    let estado;

    if (id) {
      estado = "ya existía (se actualizó perfil)";
      actualizados++;
    } else {
      password = a.password || generarPassword();
      const { data, error } = await supabase.auth.admin.createUser({
        email: a.email,
        password,
        email_confirm: true,
      });
      if (error) throw error;
      id = data.user.id;
      estado = "creado";
      creados++;
    }

    const { error: errPerfil } = await supabase
      .from("perfiles")
      .upsert({ id, nombre: a.nombre, rol: "alumno", nivel: a.nivel });
    if (errPerfil) throw errPerfil;

    salida.push([a.nombre, a.email, a.nivel, password, estado]);
    console.log(`  ✔ ${a.nombre} <${a.email}> · ${a.nivel} · ${estado}`);
  } catch (e) {
    fallidos++;
    salida.push([a.nombre, a.email, a.nivel, "", `ERROR: ${e.message ?? e}`]);
    console.error(`  ✘ ${a.nombre} <${a.email}>: ${e.message ?? e}`);
  }
}

const csv = salida
  .map((fila) => fila.map((c) => `"${String(c).replaceAll('"', '""')}"`).join(","))
  .join("\n");
writeFileSync("credenciales.csv", csv + "\n", { mode: 0o600 });

console.log(`\nListo: ${creados} creados, ${actualizados} actualizados, ${fallidos} con error.`);
console.log("Las contraseñas están en credenciales.csv (no lo subas a GitHub).");
if (fallidos) process.exit(1);
