import type { Video } from "@/lib/proyectos";

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{11})/);
  return m ? m[1] : null;
}

export default function Reproductor({ video }: { video: Video }) {
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
