import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { perfilActual } from "@/lib/perfil";
import { obtenerLeccion } from "@/lib/lecciones";
import Barra from "../../barra";
import Reproductor from "../../reproductor";

export const dynamic = "force-dynamic";

export default async function PaginaLeccion({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Cualquier cuenta con sesión puede entrar (el middleware ya exige sesión).
  const perfil = await perfilActual();

  const leccion = obtenerLeccion(slug);
  if (!leccion) notFound();

  return (
    <>
      <Barra nombre={perfil.nombre} />
      <main className="contenedor">
        <p><a href="/">← Inicio</a></p>
        <span className="etiqueta">
          {leccion.semanas} clases{leccion.edad ? ` · ${leccion.edad}` : ""}
        </span>
        <h1>{leccion.titulo}</h1>
        <p>{leccion.resumen}</p>

        {leccion.materiales.length > 0 && (
          <section className="caja">
            <h2 style={{ marginTop: 0 }}>🧰 Materiales</h2>
            <ul className="materiales">
              {leccion.materiales.map((m) => (
                <li key={m}>
                  <label><input type="checkbox" />{m}</label>
                </li>
              ))}
            </ul>
          </section>
        )}

        {leccion.videos.map((v) => (
          <Reproductor key={v.url} video={v} />
        ))}

        <section className="pasos">
          <ReactMarkdown>{leccion.contenido}</ReactMarkdown>
        </section>
      </main>
    </>
  );
}
