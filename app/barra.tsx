import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

async function salir() {
  "use server";
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/login");
}

export default function Barra({ nombre }: { nombre: string }) {
  return (
    <header className="barra">
      <a href="/">🤖 Robótica · IA · Reciclaje</a>
      <form action={salir}>
        <span style={{ marginRight: "0.8rem" }}>Hola, {nombre}</span>
        <button type="submit">Salir</button>
      </form>
    </header>
  );
}
