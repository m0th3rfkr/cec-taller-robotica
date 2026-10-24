import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const NIVELES = ["primaria", "secundaria", "preparatoria"] as const;
export type Nivel = (typeof NIVELES)[number];

export const NOMBRE_NIVEL: Record<Nivel, string> = {
  primaria: "Primaria",
  secundaria: "Secundaria",
  preparatoria: "Preparatoria",
};

export type Video = { titulo: string; url: string };

export type Proyecto = {
  slug: string;
  nivel: Nivel;
  titulo: string;
  mes: number;
  resumen: string;
  semanas: number;
  materiales: string[];
  videos: Video[];
  contenido: string;
};

const RAIZ = path.join(process.cwd(), "content", "proyectos");

export function esNivel(valor: string): valor is Nivel {
  return (NIVELES as readonly string[]).includes(valor);
}

function leer(nivel: Nivel, slug: string): Proyecto | null {
  const archivo = path.join(RAIZ, nivel, slug, "proyecto.md");
  if (!fs.existsSync(archivo)) return null;
  const { data, content } = matter(fs.readFileSync(archivo, "utf8"));
  return {
    slug,
    nivel,
    titulo: String(data.titulo ?? slug),
    mes: Number(data.mes ?? 0),
    resumen: String(data.resumen ?? ""),
    semanas: Number(data.semanas ?? 4),
    materiales: Array.isArray(data.materiales) ? data.materiales.map(String) : [],
    videos: Array.isArray(data.videos) ? data.videos : [],
    contenido: content,
  };
}

export function listarProyectos(nivel: Nivel): Proyecto[] {
  const carpeta = path.join(RAIZ, nivel);
  if (!fs.existsSync(carpeta)) return [];
  return fs
    .readdirSync(carpeta, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => leer(nivel, d.name))
    .filter((p): p is Proyecto => p !== null)
    .sort((a, b) => a.mes - b.mes);
}

export function obtenerProyecto(nivel: Nivel, slug: string): Proyecto | null {
  return leer(nivel, slug);
}
