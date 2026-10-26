import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Video } from "@/lib/proyectos";

// Lecciones sueltas: no pertenecen a un nivel, las ve cualquier cuenta con sesión.
export type Leccion = {
  slug: string;
  titulo: string;
  resumen: string;
  edad: string;
  semanas: number;
  materiales: string[];
  videos: Video[];
  contenido: string;
};

const RAIZ = path.join(process.cwd(), "content", "lecciones");

function leer(slug: string): Leccion | null {
  const archivo = path.join(RAIZ, slug, "leccion.md");
  if (!fs.existsSync(archivo)) return null;
  const { data, content } = matter(fs.readFileSync(archivo, "utf8"));
  return {
    slug,
    titulo: String(data.titulo ?? slug),
    resumen: String(data.resumen ?? ""),
    edad: String(data.edad ?? ""),
    semanas: Number(data.semanas ?? 4),
    materiales: Array.isArray(data.materiales) ? data.materiales.map(String) : [],
    videos: Array.isArray(data.videos) ? data.videos : [],
    contenido: content,
  };
}

export function listarLecciones(): Leccion[] {
  if (!fs.existsSync(RAIZ)) return [];
  return fs
    .readdirSync(RAIZ, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => leer(d.name))
    .filter((l): l is Leccion => l !== null)
    .sort((a, b) => a.titulo.localeCompare(b.titulo, "es"));
}

export function obtenerLeccion(slug: string): Leccion | null {
  // Evita rutas raras como ../
  if (!/^[a-z0-9-]+$/.test(slug)) return null;
  return leer(slug);
}
