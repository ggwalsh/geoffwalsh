import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/notes/waste")({
  head: () =>
    pageHead(
      "Bins that wait for a Tuesday",
      "Calgary already sorts three streams. The trucks still run like the fill level never changed.",
      "/notes/waste",
    ),
  component: WasteNote,
});

function WasteNote() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        <Link to="/notes" className="hover:text-fg">
          My notes
        </Link>
        {" · Jun 2026"}
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
          This is not a proposal. The constraint is not whether Calgary can sort.
          It is whether the collection still pretends Tuesday is the same every week.
        </p>
      </div>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          Leveraging Artificial Intelligence for Optimized Waste Collection and Improved Recycling Outcomes: Implications for Calgary, Alberta
        </h2>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Abstract</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Municipal waste management faces mounting pressures from inefficient
          fixed-route collection, variable waste generation, and ambitious diversion
          targets. Traditional systems frequently result in unnecessary vehicle
          travel, elevated fuel consumption and emissions, and overflows that
          undermine public participation in source segregation. This report examines
          the motivation for implementing artificial intelligence (AI) in waste
          management and analyses real-world improvements in collection and recycling
          processes. Drawing on peer-reviewed literature and government statistics,
          it evaluates dynamic route optimisation using IoT sensors and metaheuristic
          algorithms, alongside AI-supported segregation technologies. Evidence
          indicates potential reductions of 10–30% in vehicle kilometres and fuel
          use, delivering meaningful economic and environmental benefits. For Calgary,
          these applications build directly on the success of the Blue and Green Cart
          programs while addressing Alberta’s high per-capita disposal rates. The
          analysis concludes that AI offers a feasible and high-impact pathway toward
          more sustainable, efficient, and equitable urban waste management.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Introduction</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Effective waste collection, segregation, and recycling are foundational to
          sustainable urban development and the circular economy. In Calgary, The City
          operates a three-stream residential system — Black Cart garbage, Blue Cart
          recyclables, and Green Cart organics — that has already achieved substantial
          progress. Per-person landfill waste was halved in participating households
          following program implementation, and residential diversion rates improved
          significantly with the rollout of organics collection (City of Calgary, n.d.;
          CBC News, 2018). Despite these gains, Alberta continues to record among the
          highest per-capita waste disposal rates in Canada, approximately 880 kg per
          person in 2022, with suburban population growth placing increasing pressure
          on collection fleets and landfill capacity (Environment and Climate Change
          Canada, 2024).
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Traditional fixed-schedule collection is inherently limited in its ability
          to respond to real-time variations in waste generation. This inefficiency
          drives higher operational costs, increased greenhouse gas emissions, and
          reduced service reliability, which in turn discourages proper source
          segregation. Artificial intelligence offers transformative solutions through
          predictive analytics and real-time optimisation. This report analyses the
          motivation for AI adoption in waste management, evaluates documented
          improvements in collection and recycling, and assesses their economic and
          social impacts with specific reference to Calgary’s context.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Motivation to implement AI</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Fixed-route waste collection is fundamentally suboptimal because bin fill
          rates vary significantly according to neighbourhood density, seasonality,
          events, and household behaviour. Collection vehicles frequently travel long
          distances to service partially full containers or arrive after bins have
          overflowed. These inefficiencies generate substantial fuel and labour costs,
          elevated greenhouse gas emissions, accelerated vehicle depreciation, and
          diminished service reliability. In winter cities such as Calgary, snow
          accumulation, ice, and reduced daylight hours further exacerbate the
          limitations of static scheduling (Rattanawai et al., 2024).
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Critically, unreliable collection directly undermines segregation and
          recycling outcomes. When residents experience missed pickups or overflowing
          bins, participation rates and proper sorting behaviour decline, resulting in
          higher contamination within recycling streams and reduced material recovery
          rates. AI enables a fundamental shift from reactive, schedule-driven
          operations to proactive, demand-responsive systems. By integrating real-time
          IoT sensor data with optimisation algorithms, municipalities can minimise
          unnecessary travel while maximising the collection of recyclables and
          organics. For a rapidly growing, winter-challenged city such as Calgary, AI-driven
          solutions offer feasible, high-impact improvements without requiring entirely
          new physical infrastructure (Fang et al., 2023).
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          1. Dynamic route optimisation
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The core technical challenge is a variant of the Capacitated Vehicle Routing
          Problem (CVRP). IoT-enabled smart bins equipped with ultrasonic or weight
          sensors transmit real-time fill-level data, which is integrated with traffic,
          weather, and historical generation patterns. Metaheuristic algorithms such as
          Ant Colony Optimisation (ACO) and Genetic Algorithms (GA) are then applied to
          generate dynamic daily routes.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Peer-reviewed studies consistently demonstrate substantial performance gains.
          Reviews of metaheuristic applications report travel distance reductions of
          7–66% and significant time savings across real municipal deployments (Thakur
          et al., 2024). Hybrid models have achieved fuel consumption reductions of
          16–23%, with corresponding cuts in greenhouse gas emissions. Broader
          implementations combining IoT sensors with AI routing commonly deliver 10–30%
          reductions in vehicle kilometres and fuel use (Fang et al., 2023; Rattanawai
          et al., 2024).
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Economic impact.</span> These efficiencies translate
          into meaningful savings in fuel, labour, and vehicle maintenance — critical
          considerations for Calgary’s publicly operated collection model.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Social and environmental impact.</span> Lower
          emissions improve local air quality, while more reliable pickups encourage
          greater participation in Blue and Green Cart programs, thereby boosting
          diversion rates and reducing landfill pressure (CBC News, 2018).
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <thead className="bg-surface font-mono text-xs tracking-wide text-muted uppercase">
              <tr>
                <th className="px-3 py-2 font-medium">Criterion</th>
                <th className="px-3 py-2 font-medium">Fixed route</th>
                <th className="px-3 py-2 font-medium">AI dynamic routing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-muted">
              <tr>
                <td className="px-3 py-2 text-fg">Efficiency</td>
                <td className="px-3 py-2">Ignores real-time fill</td>
                <td className="px-3 py-2">Adapts to actual bin levels</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Fuel and emissions</td>
                <td className="px-3 py-2">High</td>
                <td className="px-3 py-2">10–30% reduction</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Reliability</td>
                <td className="px-3 py-2">Overflows and missed bins</td>
                <td className="px-3 py-2">Significantly improved</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Recycling</td>
                <td className="px-3 py-2">Unreliability cuts participation</td>
                <td className="px-3 py-2">Supports source separation</td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Scale</td>
                <td className="px-3 py-2">Strains with growth</td>
                <td className="px-3 py-2">Grows with the sensor net</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          2. AI-supported segregation
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          At material recovery facilities, computer vision systems using Convolutional
          Neural Networks (CNNs) and deep learning classify waste streams on conveyor
          belts with high accuracy, substantially reducing contamination. Reviews of AI
          applications in smart cities highlight that these technologies increase
          recoverable material volumes and improve the economic viability of recycling
          (Fang et al., 2023). Optimised collection routes further amplify these
          benefits by delivering cleaner, more consistent feedstock to processing
          facilities.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Challenges for Calgary
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Successful implementation requires initial investment in sensor networks,
          data platforms, and staff capability development. Data quality, cybersecurity,
          and integration with existing City systems present technical considerations.
          Winter-specific modelling and pilot testing in representative neighbourhoods
          are recommended prior to city-wide rollout. Transparent public communication
          will be essential to maintain community engagement and trust.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Conclusion</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Artificial intelligence applications in route optimisation and segregation
          offer proven, practical improvements to waste collection, segregation, and
          recycling. Motivated by the inherent limitations of traditional fixed-route
          systems and supported by robust peer-reviewed evidence of cost, fuel, and
          emissions reductions, these technologies are particularly relevant for
          Calgary. They build directly on the demonstrated success of existing diversion
          programs and provide a scalable pathway to enhanced economic efficiency,
          environmental sustainability, and improved community outcomes.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          To realise these benefits, The City of Calgary should consider targeted
          pilot programs in selected suburban areas, incorporating winter-specific
          modelling and robust data infrastructure. Such initiatives would position
          Calgary as a leader in intelligent municipal waste management while delivering
          tangible progress toward circular economy and climate objectives.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">References</h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li>
            CBC News. (2018, July 15).{" "}
            <em>Calgarians cut landfill waste by half — but much of what is thrown out is still recyclable.</em>
          </li>
          <li>
            City of Calgary. (n.d.). <em>Annual waste volumes</em> [Dataset]. Open Calgary.
          </li>
          <li>
            Environment and Climate Change Canada. (2024).{" "}
            <em>Solid waste diversion and disposal.</em>
          </li>
          <li>
            Fang, B., Yu, J., Chen, Z., & Osman, A. I. (2023). Artificial intelligence
            for waste management in smart cities: A review. <em>Environmental Chemistry Letters, 21</em>(4), 1959–1989.
          </li>
          <li>
            Rattanawai, N., et al. (2024). Optimizing municipal solid waste collection
            vehicle routing with the objective of minimizing total fuel consumption.{" "}
            <em>Sustainable Operations and Computers.</em>
          </li>
          <li>
            Thakur, G., et al. (2024). A significant exploration on meta-heuristic based
            approaches for optimization of solid waste collection vehicle routing problems.{" "}
            <em>Environmental Science and Pollution Research.</em>
          </li>
        </ul>
      </section>
    </main>
  );
}
