# Clase de Robótica, IA y Reciclaje

Sitio web con acceso controlado. Un proyecto por mes, una clase por semana, para primaria, secundaria y preparatoria.

## Cómo está organizado

- `content/proyectos/<nivel>/<mes-NN-nombre>/proyecto.md`: cada proyecto, con materiales, videos y pasos.
- `content/plantilla/proyecto.md`: copia esta carpeta para crear un proyecto nuevo.
- Niveles: `primaria`, `secundaria`, `preparatoria`.

## Crear un proyecto nuevo

1. Copia `content/plantilla/` a `content/proyectos/<nivel>/mes-NN-nombre/`.
2. Edita `proyecto.md`: título, materiales, videos y pasos por clase.
3. Haz commit y push. El sitio se actualiza al desplegar.

## Videos

- YouTube (recomendado: "No listado"): pega el enlace en `videos`.
- Archivo propio: súbelo a Supabase Storage y pega la URL.

## Acceso controlado

- Solo entran cuentas que tú creas en Supabase (Authentication > Users).
- Desactiva el registro público: Authentication > Providers > Email > desactivar "Allow new users to sign up".
- Ejecuta `supabase/schema.sql` y asigna a cada persona su perfil (`alumno` con `nivel`, o `maestro`).
- Los alumnos solo ven su nivel; los maestros ven todo.

## Correr en tu computadora

```bash
cp .env.example .env.local   # llena URL y anon key de Supabase
npm install
npm run dev
```
