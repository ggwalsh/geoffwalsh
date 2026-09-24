import { createFileRoute, Link } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/notes/kiosk")({
  head: () =>
    pageHead(
      "The kiosk still has to be fair",
      "SVMs and CNNs win the accuracy contest. The people in front of the camera still have to survive the training set.",
      "/notes/kiosk",
    ),
  component: KioskNote,
});

function KioskNote() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-16">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">
        <Link to="/notes" className="hover:text-fg">
          My notes
        </Link>
        {" · Jul 2026"}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
        The kiosk still has to be fair
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-muted">
        I compared four algorithms that sit behind a customer-service kiosk. The
        accuracy table is not the interesting part. The interesting part is who
        gets recognised, who gets transcribed, and who loses the desk.
      </p>
      <div className="mt-10 space-y-5 text-base leading-relaxed text-muted">
        <p>
          Supervised models win when the labels exist. CNNs for faces, SVMs when
          the feature set is small and you can still see the boundary. Unsupervised
          models do the cheap work — PCA to shrink the space, K-Means to find the
          piles of similar calls nobody had time to tag. Production systems use
          both.
        </p>
        <p>
          The bit that stuck is the cost of being wrong on a person. Face systems
          have a documented accuracy gap across demographic groups. Speech systems
          drop non-native accents and noisy rooms. Contact-centre roles built on
          scripted talk are the ones automation actually takes. A kiosk that is
          fast and a kiosk that is fair are not the same product.
        </p>
        <p>
          I wrote the practical next: a webcam detector and a microphone
          transcriber, on{" "}
          <a
            href="https://github.com/ggwalsh/multimodal"
            target="_blank"
            rel="noreferrer"
            className="text-silver hover:text-fg"
          >
            GitHub
          </a>
          . Haar cascades are old. The point of putting them up is the pipeline,
          not the backbone.
        </p>
      </div>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="text-2xl font-semibold tracking-tight">
          A Comparative Case Study of Supervised and Unsupervised Machine Learning
          Approaches in Artificial Intelligence: Applications to Multimodal Customer
          Service Systems
        </h2>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Abstract</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          This case study compares two supervised learning approaches — Support
          Vector Machines (SVMs) and Convolutional Neural Networks (CNNs) — with
          two unsupervised approaches — K-Means clustering and Principal Component
          Analysis (PCA) — in the context of multimodal artificial intelligence
          systems for customer service. The selected methods are widely applied in
          face detection and speech recognition pipelines that power intelligent
          kiosks, virtual agents, and contact-centre analytics. The report outlines
          the background and significance of these techniques, states clear aims
          and objectives, describes the models and algorithms in detail, and
          provides a structured comparison across complexity, efficiency and
          accuracy. Economic and social challenges, including labour displacement
          in contact centres, biometric bias, privacy risks and accessibility
          benefits, are examined critically. Findings indicate that supervised
          methods generally deliver higher accuracy when labelled data are
          available, while unsupervised methods offer valuable exploratory power
          and lower labelling costs. The analysis prepares the ground for practical
          multimodal system development and highlights the need for careful
          governance when deploying biometric AI in customer-facing environments.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Introduction</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Artificial intelligence has moved rapidly from research laboratories into
          everyday customer service environments. Intelligent kiosks that recognise
          faces for personalised greetings, voice-enabled virtual agents that
          transcribe and interpret spoken queries, and analytics platforms that
          cluster customer interactions for insight are no longer experimental;
          they are operational in banks, telecommunications firms, airlines and
          government services centres. These systems rely on a combination of
          computer vision and natural language processing, two domains in which
          both supervised and unsupervised machine learning play essential roles.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Supervised learning algorithms learn from labelled examples to map inputs
          to known outputs, making them well suited to classification tasks such as
          identifying a face or recognising a spoken command. Unsupervised
          algorithms discover structure in unlabelled data, enabling dimensionality
          reduction, clustering of similar customer behaviours, and exploratory
          analysis of large interaction logs. Understanding the relative strengths,
          limitations and trade-offs of these families of methods is therefore
          critical for practitioners designing multimodal customer-service systems.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          This case study examines four representative approaches — Support Vector
          Machines and Convolutional Neural Networks on the supervised side, and
          K-Means clustering together with Principal Component Analysis on the
          unsupervised side. The discussion is framed around their application to
          face detection and speech recognition components that support modern
          customer-service interfaces. The analysis also addresses the economic
          and social challenges that accompany the deployment of such technologies.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Significance of the case study
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The significance of this comparative analysis is both practical and
          academic. From a practical perspective, customer-service organisations
          face rising volumes of digital and voice interactions while
          simultaneously seeking to reduce operational cost and improve customer
          experience. Multimodal AI systems that combine visual and auditory
          channels can deliver faster, more personalised service, yet the choice of
          underlying algorithms materially affects accuracy, computational cost,
          data requirements and risk profile.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Academically, the case study addresses the subject learning outcomes of
          differentiating AI algorithms and methods, explaining their real-world
          application, and describing components relevant to natural language
          processing and vision systems. By selecting techniques commonly employed
          in face detection and speech recognition, the work also provides a
          conceptual foundation for subsequent practical development of a
          multimodal interaction system.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Finally, the study contributes to critical awareness of the broader
          societal implications of biometric and conversational AI.
          Customer-service deployments of face and speech technologies raise
          questions of fairness, privacy, employment impact and accessibility that
          cannot be ignored if organisations are to adopt AI responsibly.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Aims and objectives
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The overall aim of this case study is to compare selected supervised and
          unsupervised machine learning approaches and to evaluate their
          suitability for multimodal AI applications in customer service, with
          particular reference to face detection and speech recognition.
        </p>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-base leading-relaxed text-muted">
          <li>
            Describe two supervised learning approaches (SVMs and CNNs), including
            their underlying models and algorithms, and illustrate their
            application to face detection and speech-related tasks in customer
            service.
          </li>
          <li>
            Describe two unsupervised learning approaches (K-Means clustering and
            PCA), including their models and algorithms, and illustrate their use
            in exploratory analysis and pre-processing for the same domains.
          </li>
          <li>
            Compare the four approaches systematically in terms of complexity,
            efficiency and accuracy.
          </li>
          <li>
            Analyse key economic and social challenges associated with the
            deployment of these AI methods in customer-service contexts.
          </li>
          <li>
            Draw conclusions that inform both theoretical understanding and
            practical system design.
          </li>
        </ol>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Supervised learning
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          <span className="text-fg">Support Vector Machines.</span> SVMs are
          supervised classifiers that seek a hyperplane maximising the margin
          between classes in a high-dimensional feature space (Cortes & Vapnik,
          1995). The decision boundary is determined by a subset of training
          examples known as support vectors. Non-linear problems are handled via
          the kernel trick, which implicitly maps data into a higher-dimensional
          space without explicit computation of the mapping.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          In customer-service applications, SVMs have been applied both to face
          detection (as binary classifiers distinguishing face from non-face
          patches) and to speech-related tasks such as speaker verification or
          intent classification from acoustic features. Their strengths include
          strong theoretical foundations, effectiveness in high-dimensional
          spaces, and relatively modest data requirements compared with deep
          networks. Limitations include sensitivity to the choice of kernel and
          regularisation parameters, and reduced scalability on very large
          datasets.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Convolutional Neural Networks.</span> CNNs are
          deep learning architectures that apply learnable filters across spatial
          or temporal dimensions, followed by non-linear activation and pooling
          operations (LeCun et al., 2015). Hierarchical feature learning allows
          early layers to detect simple patterns (edges, phoneme-like units) while
          deeper layers capture complex structures such as facial landmarks or
          higher-level speech representations.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          CNNs dominate modern face detection pipelines; detectors such as those
          based on single-shot multi-box detection or RetinaFace rely on
          convolutional backbones to achieve high accuracy across scales and poses
          (Deng et al., 2020). In speech processing, CNNs operating on
          spectrograms or raw waveforms contribute to acoustic modelling and
          keyword spotting. Their principal advantages are superior accuracy on
          large labelled datasets and the ability to learn features end-to-end.
          Drawbacks include high computational and data demands during training,
          and reduced interpretability relative to linear models.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Unsupervised learning
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          <span className="text-fg">K-Means clustering.</span> K-Means is a
          centroid-based clustering algorithm that partitions a dataset into{" "}
          <em>k</em> groups by iteratively assigning points to the nearest
          centroid and updating centroids as the mean of assigned points (Lloyd,
          1982). The objective is to minimise within-cluster sum of squared
          distances.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          In multimodal customer-service systems, K-Means is valuable for
          exploratory analysis: clustering acoustic embeddings to discover common
          query types, grouping facial embeddings for identity or demographic
          analysis (subject to ethical constraints), or segmenting customer
          interaction patterns for personalisation. It is computationally efficient
          and easy to implement, yet sensitive to the choice of <em>k</em> and
          initialisation, and assumes roughly spherical clusters of similar size.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          <span className="text-fg">Principal Component Analysis.</span> PCA is a
          linear dimensionality-reduction technique that projects data onto
          orthogonal axes of maximum variance (Pearson, 1901; Hotelling, 1933). By
          retaining only the leading principal components, PCA compresses data
          while preserving most of the variance, and can also serve as a denoising
          step.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Historically, PCA underpinned the Eigenfaces method for face recognition
          (Turk & Pentland, 1991). In contemporary pipelines it remains useful
          as a pre-processing stage that reduces feature dimensionality before
          supervised classification or clustering, thereby improving computational
          efficiency and mitigating the curse of dimensionality. In speech
          processing, PCA or related techniques are applied to acoustic feature
          vectors. PCA is computationally efficient and deterministic, but captures
          only linear relationships and may discard subtle discriminative
          information if too few components are retained.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Comparison</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Supervised methods (particularly CNNs) currently deliver the highest
          accuracy for core recognition tasks when labelled data are plentiful, at
          the cost of greater complexity and training expense. Unsupervised methods
          excel at data exploration, dimensionality reduction and reducing the need
          for expensive annotation. Hybrid pipelines that use PCA or clustering as
          pre-processing stages before supervised classifiers are common in
          production systems and often represent the most pragmatic balance.
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg border border-line">
          <table className="w-full min-w-[40rem] text-left text-sm">
            <thead className="bg-surface font-mono text-xs tracking-wide text-muted uppercase">
              <tr>
                <th className="px-3 py-2 font-medium">Dimension</th>
                <th className="px-3 py-2 font-medium">Supervised (SVM / CNN)</th>
                <th className="px-3 py-2 font-medium">Unsupervised (K-Means / PCA)</th>
                <th className="px-3 py-2 font-medium">For customer service</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line text-muted">
              <tr>
                <td className="px-3 py-2 text-fg">Complexity</td>
                <td className="px-3 py-2">
                  High labelling cost. CNNs need compute and tuning. SVMs simpler,
                  kernel still critical.
                </td>
                <td className="px-3 py-2">
                  Lower labelling burden. K-Means needs <em>k</em>. PCA is linear
                  and parameter-light.
                </td>
                <td className="px-3 py-2">
                  Supervised systems demand curated faces and transcribed speech.
                  Unsupervised methods accelerate early exploration of interaction
                  data.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Efficiency</td>
                <td className="px-3 py-2">
                  Training can be expensive. Inference is fast once deployed. SVMs
                  scale less well to millions of examples.
                </td>
                <td className="px-3 py-2">
                  Generally faster to train. K-Means and PCA are computationally
                  light and scale well to large unlabelled corpora.
                </td>
                <td className="px-3 py-2">
                  Real-time kiosk or call-centre inference favours pre-trained
                  supervised models. Unsupervised methods suit offline analytics
                  and pre-processing.
                </td>
              </tr>
              <tr>
                <td className="px-3 py-2 text-fg">Accuracy</td>
                <td className="px-3 py-2">
                  Typically higher when labelled data exists. CNNs are
                  state-of-the-art for face detection. SVMs remain competitive on
                  smaller engineered feature sets.
                </td>
                <td className="px-3 py-2">
                  No ground-truth labels for direct accuracy. Judged by internal
                  metrics (silhouette, reconstruction error) or downstream
                  supervised utility.
                </td>
                <td className="px-3 py-2">
                  Customer-facing accuracy requirements favour supervised models.
                  Unsupervised methods improve feature quality and reduce labelling
                  cost.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">
          Economic and social challenges
        </h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          The deployment of face detection and speech recognition technologies in
          customer service generates both economic opportunity and significant
          social risk. On the economic side, automation of routine enquiries can
          reduce average handling time and operating cost, while personalisation
          enabled by face or voice recognition can improve conversion and
          satisfaction metrics. However, these gains are unevenly distributed.
          Contact-centre roles that consist largely of scripted interactions are
          among the most exposed to automation; displacement effects are already
          observable in some markets and raise questions of transitional support,
          reskilling and the quality of the remaining human roles (International
          Labour Organization, 2024).
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Social challenges centre on bias, privacy and accessibility. Face
          recognition systems have historically exhibited higher error rates for
          certain demographic groups, a problem that can translate into
          discriminatory service experiences if not rigorously audited (Buolamwini
          & Gebru, 2018). Speech recognition accuracy likewise varies with
          accent, dialect and background noise, potentially disadvantaging
          non-native speakers or customers in noisy environments. Privacy concerns
          are acute: continuous or opportunistic capture of facial images and
          voice recordings creates sensitive biometric datasets whose secondary
          use, retention and security must be governed carefully under privacy
          legislation and emerging AI regulation.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          At the same time, well-designed multimodal systems can advance inclusion.
          Speech interfaces assist customers with visual impairments or literacy
          barriers; face-based authentication can reduce friction for users who
          struggle with passwords. Realising these benefits while mitigating harms
          requires deliberate design choices, diverse training data, ongoing
          fairness evaluation, transparent consent mechanisms and human oversight
          for high-stakes decisions. Organisations that treat these considerations
          as peripheral rather than integral risk both reputational damage and
          regulatory sanction.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Longer-term risks include over-reliance on proprietary models,
          concentration of capability among a small number of technology
          providers, and the environmental cost of training and serving large
          neural networks. These systemic issues reinforce the need for critical
          evaluation rather than uncritical adoption.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">Conclusion</h3>
        <p className="mt-3 text-base leading-relaxed text-muted">
          This case study has compared Support Vector Machines and Convolutional
          Neural Networks as representative supervised approaches with K-Means
          clustering and Principal Component Analysis as representative
          unsupervised approaches. The analysis demonstrates that supervised
          methods currently offer superior accuracy for face detection and speech
          recognition tasks when adequate labelled data are available, while
          unsupervised methods provide essential tools for exploration,
          dimensionality reduction and cost-effective pre-processing. Complexity
          and efficiency trade-offs further favour hybrid architectures in many
          practical customer-service settings.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          Economic benefits in the form of productivity and personalisation must
          be weighed against labour-market disruptions, biometric bias, privacy
          exposure and accessibility implications. Responsible deployment therefore
          requires not only technical competence in algorithm selection but also
          organisational commitment to fairness, transparency and continuous
          evaluation.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted">
          The comparative understanding developed here supplies a direct
          conceptual foundation for the design and implementation of a multimodal
          system that combines computer vision and speech recognition — work that
          constitutes the next stage of practical application in this subject.
        </p>

        <h3 className="mt-10 font-mono text-xs tracking-widest text-silver uppercase">References</h3>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
          <li>
            Buolamwini, J., & Gebru, T. (2018). Gender shades: Intersectional
            accuracy disparities in commercial gender classification.{" "}
            <em>Proceedings of Machine Learning Research, 81</em>, 1–15.
          </li>
          <li>
            Cortes, C., & Vapnik, V. (1995). Support-vector networks.{" "}
            <em>Machine Learning, 20</em>(3), 273–297.
          </li>
          <li>
            Deng, J., Guo, J., Ververas, E., Kotsia, I., & Zafeiriou, S. (2020).
            RetinaFace: Single-shot multi-level face localisation in the wild.{" "}
            <em>Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition</em>
            , 5203–5212.
          </li>
          <li>
            Hotelling, H. (1933). Analysis of a complex of statistical variables
            into principal components. <em>Journal of Educational Psychology, 24</em>
            (6), 417–441.
          </li>
          <li>
            International Labour Organization. (2024).{" "}
            <em>Mind the AI divide: Shaping a global perspective on the future of work.</em>{" "}
            ILO / United Nations.
          </li>
          <li>
            LeCun, Y., Bengio, Y., & Hinton, G. (2015). Deep learning.{" "}
            <em>Nature, 521</em>(7553), 436–444.
          </li>
          <li>
            Lloyd, S. (1982). Least squares quantization in PCM.{" "}
            <em>IEEE Transactions on Information Theory, 28</em>(2), 129–137.
          </li>
          <li>
            Pearson, K. (1901). On lines and planes of closest fit to systems of
            points in space. <em>Philosophical Magazine, 2</em>(11), 559–572.
          </li>
          <li>
            Turk, M., & Pentland, A. (1991). Eigenfaces for recognition.{" "}
            <em>Journal of Cognitive Neuroscience, 3</em>(1), 71–86.
          </li>
        </ul>
      </section>
    </main>
  );
}
