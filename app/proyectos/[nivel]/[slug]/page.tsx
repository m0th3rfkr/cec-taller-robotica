import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { perfilActual, puedeVerNivel } from "@/lib/perfil";
import { esNivel, obtenerProyecto, type Video } from "@/lib/proyectos";
import Barra from "../../../barra";

export const dynamic = "force-dynamic";

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function Reproductor({ video }: { video: Video }) {
  const yt = youtubeId(video.url);
  return (
    <div className="caja">
      <h3 style={{ marginTop: 0 }}>🎬 {video.titulo}</h3>
      {yt ? (
        <iframe
          className="video"
          src={`https://www.youtube-nocookie.com/embed/${yt}`}
          title={video.titulo}
          allow="accelerometer; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video className="video" src={video.url} controls preload="metadata" />
      )}
    </div>
  );
}

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
