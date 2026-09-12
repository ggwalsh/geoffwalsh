import { createFileRoute, Link } from "@tanstack/react-router";
import { notes } from "@/lib/notes";

export const Route = createFileRoute("/notes/")({ component: NotesIndex });

function NotesIndex() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">My notes</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        My notes. Ops, data, a cursed ship.
      </h1>
      <ol className="mt-12 divide-y divide-line border-y border-line">
        {notes.map((n) => (
          <li key={n.slug} className="py-6">
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              {n.when} · {n.subject}
            </p>
            <Link
              to={n.to}
              className="mt-2 block text-xl font-semibold tracking-tight text-fg hover:text-silver"
            >
              {n.title}
            </Link>
            <p className="mt-2 text-sm leading-relaxed text-muted">{n.dek}</p>
          </li>
        ))}
      </ol>
    </main>
  );
}
