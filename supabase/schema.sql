-- Ejecutar en Supabase > SQL Editor.
-- Acceso controlado: solo existen cuentas que el maestro crea (registro público desactivado).

create table if not exists public.perfiles (
  id uuid primary key references auth.users (id) on delete cascade,
  nombre text not null,
  rol text not null default 'alumno' check (rol in ('alumno', 'maestro')),
  nivel text check (nivel in ('primaria', 'secundaria', 'preparatoria')),
  creado_en timestamptz not null default now()
);

alter table public.perfiles enable row level security;

-- Cada persona solo puede leer su propio perfil.
drop policy if exists "perfil propio" on public.perfiles;
create policy "perfil propio" on public.perfiles
  for select using (auth.uid() = id);

-- Función auxiliar: evita la recursión infinita de políticas (security definer salta RLS).
create or replace function public.es_maestro()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.perfiles where id = auth.uid() and rol = 'maestro'
  );
$$;

revoke execute on function public.es_maestro() from public, anon;
grant execute on function public.es_maestro() to authenticated;

-- Los maestros leen todos los perfiles.
drop policy if exists "maestros leen todo" on public.perfiles;
create policy "maestros leen todo" on public.perfiles
  for select using (public.es_maestro());

-- Nadie edita perfiles desde el sitio: se asignan en el panel de Supabase.

-- Ejemplo (después de crear el usuario en Authentication > Users):
-- insert into public.perfiles (id, nombre, rol) values ('UUID-DEL-USUARIO', 'Toño', 'maestro');
-- insert into public.perfiles (id, nombre, rol, nivel) values ('UUID', 'Ana', 'alumno', 'primaria');
