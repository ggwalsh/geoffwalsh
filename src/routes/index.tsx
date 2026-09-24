import { createFileRoute } from "@tanstack/react-router";
import { ApertureG } from "@/components/aperture-g";
import { ToolCard } from "@/components/tool-card";
import { useBrand } from "@/lib/brand-state";
import { pageHead } from "@/lib/seo";
import { tools } from "@/lib/tools";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Geoff Walsh",
      "Geoff Walsh runs branches in Calgary. Labour, cost, stock, and a crew.",
      "/",
    ),
  component: Home,
});

const roles = [
  {
    when: "From Sep 2026",
    title: "Branch Manager",
    workplace: "NABCO Canada",
    city: "Calgary",
    note: "Automatic pedestrian doors. Labour, project cost, and a western Canada service crew.",
  },
  {
    when: "May 2025 — Sep 2026",
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
    note: "Food manufacturing and distribution. Handmade condiments in an HACCP kitchen — people, product, the run.",
  },
];

function Home() {
  const mark = useBrand((s) => s.state);

  return (
    <main>
      <section className="gw-hero">
        <div className="relative mx-auto w-full max-w-6xl px-5 pt-16 pb-16 sm:px-8 sm:pt-24">
          <ApertureG decorative state={mark} className="gw-hero-mark" />
          <div className="relative max-w-xl">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              Calgary · Operations · Data
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-6xl">
              I run branches.
              <span className="block text-silver">The numbers have to be honest.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Geoff Walsh. Fifteen years in distribution and manufacturing — food, safety supply,
              abatement equipment, now automatic doors. The job is labour, cost, stock, and a crew
              that can start on Monday.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex h-12 items-center rounded-full bg-amaranth px-5 text-sm font-medium text-fg hover:bg-accent"
              >
                See the work
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center rounded-full border border-line px-5 text-sm text-silver hover:border-silver hover:text-fg"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">

        <section className="grid gap-8 border-t border-line py-16 lg:grid-cols-[180px_1fr]">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">About</p>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-muted">
            <p>
              Most of the career has been the unglamorous half of a business: stock that has to be
              there, people who have to know the job, customers who do not care how the warehouse
              felt that morning.
            </p>
            <p>
              The gap I kept hitting was signal. Spreadsheets that lie by omission. Dashboards
              nobody trusts. Reorder points living in someone's head. The numbers have to be
              checkable before the truck leaves.
            </p>
          </div>
        </section>

        <section id="work" className="scroll-mt-24 border-t border-line py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Work</p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <li
                key={`${role.workplace}-${role.when}`}
                className="grid gap-2 py-6 sm:grid-cols-[200px_1fr] sm:gap-8"
              >
                <p className="font-mono text-xs tracking-wide text-muted uppercase">{role.when}</p>
                <div>
                  <h3 className="text-lg text-fg">
                    {role.title} · {role.workplace} · {role.city}
                  </h3>
                  <p className="mt-2 max-w-2xl text-muted">{role.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Tools</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            My wall. My board. My min file.
          </h2>
          <ul className="mt-10 grid gap-4 lg:grid-cols-3">
            {tools.map((tool) => (
              <li key={tool.slug}>
                <ToolCard tool={tool} />
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-line py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase">Contact</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Based in Calgary.</h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Branch manager at NABCO. If something here is useful, or wrong, write.
          </p>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-lg">
            <a
              href="mailto:geoffwalsh.gw@gmail.com"
              className="text-fg underline decoration-accent underline-offset-4"
            >
              geoffwalsh.gw@gmail.com
            </a>
            <a
              href="https://x.com/Daghet"
              target="_blank"
              rel="noreferrer"
              className="text-fg underline decoration-accent underline-offset-4"
            >
              @Daghet
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
