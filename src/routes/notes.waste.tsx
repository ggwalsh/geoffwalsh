import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/waste")({ component: WasteNote });

function WasteNote() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        <Link to="/notes" className="hover:text-fg">
          Notes
        </Link>
        {" · Jun 2026 · AAI202"}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        Bins that wait for a Tuesday
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        Calgary already did the hard cultural work. Black, blue, green. Landfill
        waste halved in the households that stuck with it. The trucks still
        treat every street the same.
      </p>
      <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
        <p>
          A fixed route does not know that a bin is a quarter full, or that a
          long weekend stuffed the next one. In winter that waste compounds:
          ice, short days, a chassis that still has to finish the sheet. Alberta
          still sits near the top of the country for kilos to landfill — about
          880 per person. The cart program was the first half. The second half
          is not sending a diesel truck to empty air.
        </p>
        <p>
          The useful move is boring. Ultrasonic fill sensors, a nightly run of
          a capacitated routing problem, skip what is empty. Cities that have
          tried it report on the order of 10–30% fewer kilometres and the fuel
          that goes with that. Cleaner, more regular pickups are also what keep
          people sorting: overflow is how blue carts turn into garbage.
        </p>
        <p>
          On the plant side, vision on the belt is the other half — less
          contamination, more material that is actually saleable. Neither piece
          needs a science-fiction stack. Both need a winter pilot in a couple
          of suburbs before anyone talks city-wide, and a public sentence that
          is not “the algorithm decided.”
        </p>
        <p>
          This is not a proposal. It is the argument I wrote for an applied AI
          paper: the constraint is not whether Calgary can sort. It is whether
          the collection still pretends Tuesday is the same every week.
        </p>
      </div>
    </main>
  );
}
