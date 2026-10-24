import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { NIVELES, type Nivel } from "@/lib/proyectos";

export type Perfil = {
  id: string;
  nombre: string;
  rol: "alumno" | "maestro";
  nivel: Nivel | null;
};

// Devuelve el perfil del usuario con sesión o lo manda a /login.
export async function perfilActual(): Promise<Perfil> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data } = await supabase
    .from("perfiles")
    .select("id, nombre, rol, nivel")
    .eq("id", user.id)
    .single();

  // Sin perfil = sin acceso a contenido hasta que el maestro lo asigne.
  return {
    id: user.id,
    nombre: data?.nombre ?? user.email ?? "Alumno",
    rol: data?.rol === "maestro" ? "maestro" : "alumno",
    nivel: NIVELES.includes(data?.nivel) ? data!.nivel : null,
  };
}

export function puedeVerNivel(perfil: Perfil, nivel: Nivel) {
  return perfil.rol === "maestro" || perfil.nivel === nivel;
}
