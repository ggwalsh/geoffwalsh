import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { ApertureG } from "@/components/aperture-g";
import { ToolCard } from "@/components/tool-card";
import { useBrand } from "@/lib/brand-state";
import { tools } from "@/lib/tools";
import { notes } from "@/lib/notes";

export const Route = createFileRoute("/")({ component: Home });

const roles = [
  {
    when: "From Sep 2026",
    title: "Branch Manager",
    workplace: "NABCO Canada",
    city: "Calgary",
    note: "Automatic pedestrian doors — labour, project cost, and a western Canada service crew.",
  },
  {
    when: "May 2025 — Sep 2025",
    title: "Operations Supervisor",
    workplace: "Abatement Technologies",
    city: "Calgary",
    note: "IAQ and restoration equipment. Inventory, logistics, and the western branches from a Calgary desk.",
  },
  {
    when: "Sep 2022 — Oct 2024",
    title: "Branch Manager",
    workplace: "Safety Express",
    city: "Kelowna",
    note: "PPE, abatement, and restoration supply. The branch: stock, people, the counter.",
  },
  {
    when: "Feb 2016 — Aug 2022",
    title: "General Manager",
    workplace: "The Other Chef",
    city: "Port Macquarie",
    note: "Contract manufacturing. Handmade condiments in an HACCP kitchen — people, product, the run.",
  },
];

function Home() {
  const mark = useBrand((s) => s.state);

  return (
    <main>
      <section className="mx-auto grid max-w-5xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-widest text-accent uppercase">
            Calgary · Operations · Data
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
            I run branches.
            <span className="block text-silver">I am teaching the numbers to talk back.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Geoff Walsh. Fifteen years in operations — hospitality, safety supply,
            restoration equipment, now automatic doors. Studying software engineering
            with a focus on AI, and building tools in the hours around the job.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/tools"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-amaranth px-5 text-sm font-medium text-fg transition-transform duration-150 hover:bg-accent active:scale-[0.96]"
            >
              Open my tools
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#work"
              className="inline-flex min-h-11 items-center rounded-full border border-line px-5 text-sm text-silver transition-colors hover:border-silver hover:text-fg"
            >
              See my work
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="rounded-lg border border-line bg-surface p-10">
            <ApertureG state={mark} className="size-40 text-silver sm:size-48" />
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 sm:grid-cols-[minmax(0,200px)_1fr]">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">About</p>
          <div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Most of my career has been the unglamorous half of a business: stock that
              has to be there, people who have to know the job, customers who do not
              care how the warehouse felt that morning.
            </p>
            <p>
              The gap I kept hitting was signal. Spreadsheets that lie by omission.
              Dashboards nobody trusts. Reorder points living in someone's head.
              I started writing software because I wanted those numbers honest — and
              because I wanted a second craft that still serves the first.
            </p>
            <p>
              This site is where my tools live. Working things a branch, a counter,
              or a small crew can use on a Monday. Yours included.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Work</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Ops first. Code in the margins, then in the middle.
          </h2>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li
                key={`${role.workplace}-${role.when}`}
                className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs tracking-wide text-muted uppercase">
                  {role.when}
                </p>
                <div>
                  <p className="font-medium text-fg">
                    {role.title}
                    <span className="text-silver">
                      {" "}
                      · {role.workplace} · {role.city}
                    </span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{role.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Tools</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            My planner. My board. My min file.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Notes</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            My notes from the course work that still hold.
          </h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {notes.map((n) => (
              <li key={n.slug} className="py-6">
                <p className="font-mono text-xs tracking-wide text-muted uppercase">
                  {n.when} · {n.subject}
                </p>
                <Link
                  to={n.to}
                  className="mt-2 block text-lg font-medium text-fg hover:text-silver"
                >
                  {n.title}
                </Link>
                <p className="mt-1 max-w-xl text-sm text-muted">{n.dek}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contact" className="border-t border-line">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Contact</p>
          <h2 className="mt-3 max-w-xl text-2xl font-semibold tracking-tight sm:text-3xl">
            Based in Calgary. Usually on a job or a laptop after hours.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            If you run a branch, a counter, or a crew and one of my tools is
            useful — or wrong in a way that matters — that is the conversation.
          </p>
          <a
            href="https://x.com/Daghet"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-silver transition-colors hover:text-fg"
          >
            <svg viewBox="0 0 24 24" className="size-4 fill-current" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            @Daghet
          </a>
        </div>
      </section>
    </main>
  );
}
