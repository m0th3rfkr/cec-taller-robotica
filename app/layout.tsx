import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clase de Robótica, IA y Reciclaje",
  description: "Proyectos mensuales paso a paso para primaria, secundaria y preparatoria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
