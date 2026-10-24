import { notFound } from "next/navigation";
import { perfilActual, puedeVerNivel } from "@/lib/perfil";
import { NOMBRE_NIVEL, esNivel, listarProyectos } from "@/lib/proyectos";
import Barra from "../../barra";

export const dynamic = "force-dynamic";

export default async function PaginaNivel({ params }: { params: Promise<{ nivel: string }> }) {
  const { nivel } = await params;
  if (!esNivel(nivel)) notFound();

  const perfil = await perfilActual();
  if (!puedeVerNivel(perfil, nivel)) notFound();

  const proyectos = listarProyectos(nivel);

  return (
    <>
      <Barra nombre={perfil.nombre} />
      <main className="contenedor">
        <p><a href="/">← Inicio</a></p>
        <h1>{NOMBRE_NIVEL[nivel]}</h1>

        {proyectos.length === 0 && <div className="caja">Pronto habrá proyectos aquí.</div>}

        <div className="rejilla">
          {proyectos.map((p) => (
            <a key={p.slug} className="tarjeta" href={`/proyectos/${nivel}/${p.slug}`}>
              <span className="etiqueta">Mes {p.mes}</span>
              <h3 style={{ margin: "0.5rem 0" }}>{p.titulo}</h3>
              <small>{p.resumen}</small>
            </a>
          ))}
        </div>
      </main>
    </>
  );
}
