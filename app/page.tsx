import { perfilActual } from "@/lib/perfil";
import { NIVELES, NOMBRE_NIVEL, listarProyectos } from "@/lib/proyectos";
import Barra from "./barra";

export const dynamic = "force-dynamic";

export default async function Inicio() {
  const perfil = await perfilActual();
  const niveles = perfil.rol === "maestro" ? NIVELES : NIVELES.filter((n) => n === perfil.nivel);

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
      </main>
    </>
  );
}
