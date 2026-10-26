import { perfilActual } from "@/lib/perfil";
import { NIVELES, NOMBRE_NIVEL, listarProyectos } from "@/lib/proyectos";
import { listarLecciones } from "@/lib/lecciones";
import Barra from "./barra";

export const dynamic = "force-dynamic";

export default async function Inicio() {
  const perfil = await perfilActual();
  const niveles = perfil.rol === "maestro" ? NIVELES : NIVELES.filter((n) => n === perfil.nivel);
  const lecciones = listarLecciones();

  return (
    <>
      <Barra nombre={perfil.nombre} />
      <main className="contenedor">
        <h1>Un proyecto por mes, una clase por semana</h1>

        {niveles.length === 0 && (
          <div className="caja">
            Tu cuenta todavía no tiene un nivel asignado. Avísale a tu maestro.
          </div>
        )}

        <div className="rejilla">
          {niveles.map((nivel) => (
            <a key={nivel} className="tarjeta" href={`/nivel/${nivel}`}>
              <h2 style={{ border: 0, margin: 0 }}>{NOMBRE_NIVEL[nivel]}</h2>
              <small>{listarProyectos(nivel).length} proyectos</small>
            </a>
          ))}
        </div>

        {lecciones.length > 0 && (
          <>
            <h2>Lecciones para todos</h2>
            <div className="rejilla">
              {lecciones.map((l) => (
                <a key={l.slug} className="tarjeta" href={`/lecciones/${l.slug}`}>
                  <span className="etiqueta">{l.semanas} clases{l.edad ? ` · ${l.edad}` : ""}</span>
                  <h3 style={{ margin: "0.5rem 0" }}>{l.titulo}</h3>
                  <small>{l.resumen}</small>
                </a>
              ))}
            </div>
          </>
        )}
      </main>
    </>
  );
}
