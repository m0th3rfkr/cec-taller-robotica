import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { perfilActual, puedeVerNivel } from "@/lib/perfil";
import { esNivel, obtenerProyecto } from "@/lib/proyectos";
import Barra from "../../../barra";
import Reproductor from "../../../reproductor";

export const dynamic = "force-dynamic";

export default async function PaginaProyecto({
  params,
}: {
  params: Promise<{ nivel: string; slug: string }>;
}) {
  const { nivel, slug } = await params;
  if (!esNivel(nivel)) notFound();

  const perfil = await perfilActual();
  if (!puedeVerNivel(perfil, nivel)) notFound();

  const proyecto = obtenerProyecto(nivel, slug);
  if (!proyecto) notFound();

  return (
    <>
      <Barra nombre={perfil.nombre} />
      <main className="contenedor">
        <p><a href={`/nivel/${nivel}`}>← Proyectos</a></p>
        <span className="etiqueta">Mes {proyecto.mes} · {proyecto.semanas} clases</span>
        <h1>{proyecto.titulo}</h1>
        <p>{proyecto.resumen}</p>

        {proyecto.materiales.length > 0 && (
          <section className="caja">
            <h2 style={{ marginTop: 0 }}>🧰 Materiales</h2>
            <ul className="materiales">
              {proyecto.materiales.map((m) => (
                <li key={m}>
                  <label><input type="checkbox" />{m}</label>
                </li>
              ))}
            </ul>
          </section>
        )}

        {proyecto.videos.map((v) => (
          <Reproductor key={v.url} video={v} />
        ))}

        <section className="pasos">
          <ReactMarkdown>{proyecto.contenido}</ReactMarkdown>
        </section>
      </main>
    </>
  );
}
