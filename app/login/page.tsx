"use client";

import { useActionState } from "react";
import { entrar } from "./actions";

export default function Login() {
  const [estado, accion, pendiente] = useActionState(entrar, undefined);

  return (
    <main className="contenedor">
      <h1>🤖 Entrar a la clase</h1>
      <p>Usa el correo y la contraseña que te dio tu maestro.</p>
      <form className="login" action={accion}>
        <input name="email" type="email" placeholder="Correo" autoComplete="username" required />
        <input name="password" type="password" placeholder="Contraseña" autoComplete="current-password" required />
        <button type="submit" disabled={pendiente}>
          {pendiente ? "Entrando…" : "Entrar"}
        </button>
        {estado?.error && <p className="error">{estado.error}</p>}
      </form>
    </main>
  );
}
