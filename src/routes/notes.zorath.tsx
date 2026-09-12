import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/notes/zorath")({ component: ZorathNote });

function ZorathNote() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        <Link to="/notes" className="hover:text-fg">
          My notes
        </Link>
        {" · Apr 2026 · GDP102"}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        One captain. No daily login.
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        I wrote a game for people who still have a shift in the morning. Real-time
        combat on cursed islands. A ship that grows if you want it to. Nothing
        expires while you are at work.
      </p>
      <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
        <p>
          Pirate ARPGs are thin on the ground. Most of what exists is either a
          session with other people or a linear story. I wanted Diablo-weight
          combat with a flagship you actually own — and a build you can swap
          without rolling a new character because Tuesday got busy.
        </p>
        <p>
          The entity under the water only unmakes. It never creates. That is the
          whole fantasy: power you can use, a ship that gets stranger, and a
          slow walk toward becoming the eighth lord. Casual players can ignore
          the stations. Dedicated players can live in them. The combat still has
          to feel good in thirty minutes.
        </p>
        <p>
          This is the design document. The vertical slice was a Cutter, one
          island, three enemy types. The interesting argument is still the loop:
          fight, return, craft if you want, go back out. No FOMO layer on top.
        </p>
      </div>

      <section className="mt-16 border-t border-line pt-12">
        <p className="font-mono text-xs tracking-widest text-accent uppercase">The GDD</p>
        <p className="mt-2 text-sm text-muted">
          GDP102 — Game Design Principles. Geoff Walsh.
        </p>
        <h2 className="mt-8 text-2xl font-semibold tracking-tight">
          Zorath the Unmaker
        </h2>
        <p className="mt-2 text-base text-silver">
          A single-player pirate ARPG of cursed combat and eldritch ship-building.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Elevator pitch
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Zorath the Unmaker is a single-player pirate ARPG where visceral
          real-time isometric combat on cursed islands forms the core loop.
          Battle skeletal horrors, rival crews, and the servants of the Seven
          Pirate Lords — mortal captains forever twisted by their pact with
          Zorath the Unmaker, an ancient entity that can only corrupt and unmake.
          Return to your growing ship to craft weapons infused with abyssal
          curses, upgrade stations and expand your crew. No classes, no FOMO —
          one persistent captain whose build and flagship evolve exactly as you
          choose, whether you play for 30 minutes, or three hours.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Audience and market
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Primary demographic: 25–40 year old PC gamers — busy professionals,
          parents, students — who love ARPG combat and dark pirate fantasy but
          have limited daily playtime and dislike live-service grind or mandatory
          daily logins.
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>Want satisfying combat without time pressure.</li>
          <li>Desire true build freedom without rerolling characters.</li>
          <li>
            Enjoy optional deep crafting and ship progression but do not want it
            forced.
          </li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Pirate ARPGs are rare. Most existing titles are multiplayer-focused
          (Sea of Thieves) or linear narrative adventures. Zorath the Unmaker
          delivers solo-friendly, weighty combat with meaningful, optional
          eldritch ship-crafting — appealing to fans of Diablo-style action who
          want agency and respect for real life.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Core loop
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Real-time isometric combat on cursed islands. Fight skeletal horrors
          and corrupted crews with weapons infused with Zorath’s abyssal power.
          Return to the ship. Craft, upgrade, or ignore the stations. Sail to
          the next island.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Mechanics
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          <span className="text-fg">The heart.</span> Real-time isometric combat
          — fluid, weighty action using weapons, abilities, and environmental
          interactions.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">The ship as persistent base.</span> Starts as
          a humble Cutter and physically grows with upgrades. Larger ships unlock
          more crafting stations, higher crew limits, and access to higher-tier
          islands.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Stations.</span> Passive (hire NPCs for slow
          resource generation) or an active minigame (faster, higher-quality
          yields).
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Flexible build.</span> No classes. Power
          comes from equipped weapons plus a talent tree. Swap builds freely at
          any time — one persistent captain, many viable playstyles.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-surface font-mono text-xs tracking-wide text-muted uppercase">
              <tr>
                <th className="px-3 py-2 font-medium">Mechanic</th>
                <th className="px-3 py-2 font-medium">Risk</th>
                <th className="px-3 py-2 font-medium">How I would check it</th>
                <th className="px-3 py-2 font-medium">Success</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-muted">
              <tr>
                <td className="px-3 py-2 text-fg">Core isometric combat</td>
                <td className="px-3 py-2">Low</td>
                <td className="px-3 py-2">Playtest with classmates</td>
                <td className="px-3 py-2">Fun, responsive, readable in short sessions</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Ship progression and stations</td>
                <td className="px-3 py-2">Medium</td>
                <td className="px-3 py-2">Spreadsheet plus paper prototype</td>
                <td className="px-3 py-2">
                  Casual players can ignore deep crafting; dedicated players feel
                  rewarded
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Flexible build system</td>
                <td className="px-3 py-2">Low</td>
                <td className="px-3 py-2">Talent and weapon swap prototype</td>
                <td className="px-3 py-2">Players can change builds without frustration</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          World and lore
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Beneath the waves slumbers Zorath the Unmaker, an ancient entity older
          than time that can only corrupt and unmake — never create. Long ago,
          Zorath offered god-like powers to seven ambitious mortal captains in
          exchange for their souls. These captains became the Seven Pirate Lords,
          each twisted by a unique curse and now locked in eternal war across the
          Eternal Sea.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The player begins as a new captain who has unknowingly claimed a
          dangerous shard of Zorath’s essence. This power fuels your growth — but
          every cursed treasure and ship upgrade draws you closer to the Lords’
          monstrous fate, or to becoming the Eighth Lord.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Art direction
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Vibrant yet nightmarish pirate fantasy — warm tropical daylight battles
          contrasting with dark, reality-warping wreck interiors and storm-lashed
          seas. Hand-painted textures on cursed weapons and ship parts emphasise
          the “you forged this from the Abyss” feeling. Mood: empowering,
          adventurous, and increasingly eldritch. The ship visibly evolves from a
          humble Cutter into a majestic, corrupted flagship.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Scope
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Engine: Unity or Unreal. Platform: PC with full controller plus
          mouse and keyboard. Vertical slice: basic combat on one Easy-tier
          island, three enemy types, starting Cutter with two or three stations,
          simple weapon and talent swapping, and one meaningful ship upgrade.
          Prioritise combat feel first, then layer optional ship systems.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Why it is worth making
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Zorath the Unmaker delivers the thrill of cursed pirate combat and loot
          on your own schedule, while offering a deep, optional eldritch
          ship-building layer. Casual players can focus purely on fighting and
          exploring; dedicated players can pour hours into crafting the ultimate
          flagship. In a genre often filled with grind, this title gives genuine
          choice, permanent progression, and the creeping dread of Zorath the
          Unmaker.
        </p>
      </section>
    </main>
  );
}
