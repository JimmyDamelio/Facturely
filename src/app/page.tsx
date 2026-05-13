import Image from "next/image";

const BETA_FORM_URL = "https://tally.so/r/kdOyOo";
const CONTACT_EMAIL = "facturely.app@proton.me";
const LINKEDIN_URL = "https://www.linkedin.com/company/facturely";
const X_URL = "https://x.com/facturely?s=20";

const navLinks = [
  { label: "Fonctionnement", href: "#fonctionnement" },
  { label: "Pour qui ?", href: "#pour-qui" },
  { label: "Beta", href: "#beta" },
];

const problems = [
  {
    title: "Factures dispersées",
    text: "PDF, emails, Drive, exports et tableaux finissent par créer une zone floue dès que plusieurs clients paient à des dates différentes.",
  },
  {
    title: "Retards peu visibles",
    text: "Une échéance dépassée se repère souvent trop tard, quand il faut déjà fouiller dans les documents pour comprendre quoi relancer.",
  },
  {
    title: "Relances pénibles à écrire",
    text: "Trouver le ton juste entre professionnel, clair et ferme demande de l’énergie, surtout quand la relation client est importante.",
  },
];

const solutionCards = [
  "Importez vos factures PDF",
  "Retrouvez les montants, clients et échéances",
  "Repérez rapidement les factures en retard",
  "Générez une relance claire à personnaliser",
];

const steps = [
  {
    title: "Importez",
    text: "Ajoutez vos factures PDF dans un espace de suivi unique.",
  },
  {
    title: "Analysez",
    text: "Facturely extrait les informations utiles pour structurer le suivi.",
  },
  {
    title: "Surveillez",
    text: "Les statuts rendent visibles les factures à encaisser ou à relancer.",
  },
  {
    title: "Relancez",
    text: "L’IA prépare un message professionnel, prêt à adapter.",
  },
];

const features = [
  { label: "Suivi des factures", tag: "Beta" },
  { label: "Détection des retards", tag: "Beta" },
  { label: "Relances générées par IA", tag: "Beta" },
  { label: "Statuts clairs", tag: "Beta" },
  { label: "Export CSV", tag: "Bientôt" },
  { label: "Rappels automatiques", tag: "Bientôt" },
];

const betaTests = [
  {
    title: "Importer quelques factures réelles",
    text: "Tester l’ajout de PDF et vérifier si les informations utiles sont faciles à retrouver.",
  },
  {
    title: "Identifier les factures à suivre",
    text: "Repérer les paiements en attente, les échéances proches et les retards déjà visibles.",
  },
  {
    title: "Préparer une relance client",
    text: "Générer un premier message professionnel, puis l’adapter avant de l’envoyer.",
  },
  {
    title: "Partager vos retours",
    text: "Dire ce qui manque, ce qui fait gagner du temps et ce qui doit être simplifié.",
  },
];

const useCases = [
  {
    title: "Facture en retard",
    text: "Vous voyez rapidement la facture concernée, le client, le montant et l’échéance dépassée.",
  },
  {
    title: "Relance à écrire",
    text: "Facturely prépare une base claire pour relancer sans repartir d’une page blanche.",
  },
  {
    title: "Point mensuel",
    text: "Vous gardez une vue simple des factures payées, en attente et à surveiller.",
  },
];

const audiences = [
  "Freelances",
  "Consultants",
  "Agences web",
  "Agences marketing",
  "Formateurs",
  "Petites entreprises B2B",
];

const productHighlights = [
  "Vue claire des factures payées, en attente et en retard",
  "Recherche et filtres pour retrouver rapidement un client",
  "Statuts lisibles pour prioriser les relances",
];

const faqs = [
  {
    question: "Facturely remplace-t-il mon logiciel de facturation ?",
    answer:
      "Non. Facturely est d’abord un assistant de suivi et de relance. Il vous aide à mieux suivre vos factures existantes, sans remplacer votre outil de facturation.",
  },
  {
    question: "Est-ce gratuit ?",
    answer:
      "La beta est gratuite pour les premiers testeurs. Elle sert à construire une première version utile avec des retours réels.",
  },
  {
    question: "Dois-je faire un appel pour tester ?",
    answer:
      "Non. Tout peut se faire par écrit. Vous pouvez tester et partager vos retours simplement, à votre rythme.",
  },
  {
    question: "Puis-je utiliser Facturely si je suis freelance ?",
    answer:
      "Oui. Les freelances font partie des utilisateurs principaux, surtout lorsqu’ils suivent leurs factures avec des PDF, emails ou tableaux.",
  },
  {
    question: "Mes factures sont-elles traitées automatiquement ?",
    answer:
      "L’objectif est d’extraire les informations clés pour faciliter le suivi. La première version sera améliorée avec les retours beta.",
  },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="Accueil Facturely">
      <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-xl border border-white/15 bg-white/10 shadow-glow">
        <Image
          src="/facturelynewlogo.png"
          alt=""
          width={44}
          height={44}
          className="h-full w-full object-cover"
        />
      </span>
      <span className="text-lg font-semibold tracking-tight text-white">Facturely</span>
    </a>
  );
}

function BetaButton({
  children = "Rejoindre la beta gratuite",
  variant = "primary",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-teal text-navy shadow-[0_18px_55px_rgba(20,184,166,0.32)] hover:bg-[#2dd4bf]"
      : "border border-white/15 bg-white/[0.08] text-white backdrop-blur-xl hover:bg-white/[0.14]";

  return (
    <a
      href={BETA_FORM_URL}
      target="_blank"
      rel="noreferrer"
      className={`focus-ring group inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
      <span className="ml-2 transition group-hover:translate-x-0.5">→</span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
        {eyebrow}
      </p>
      <h2
        className={`text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {text ? (
        <p className={`mt-4 text-lg leading-8 ${light ? "text-slate-300" : "text-slateText"}`}>
          {text}
        </p>
      ) : null}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="hero-visual relative mx-auto w-full max-w-[650px]">
      <div className="absolute -left-6 top-10 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white shadow-glow backdrop-blur-xl lg:block">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-teal" />
        Relance prête
      </div>
      <div className="absolute -right-3 bottom-16 z-20 hidden rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white shadow-glow backdrop-blur-xl sm:block">
        + 4 860 € à suivre
      </div>

      <div className="glass-panel overflow-hidden rounded-[28px] p-3 shadow-2xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white">
          <div className="absolute left-4 top-4 z-10 rounded-full border border-slate-200 bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-card backdrop-blur-xl">
            Aperçu Facturely
          </div>
          <Image
            src="/facturely-dashboard-wide.png"
            alt="Aperçu du tableau de suivi des factures Facturely"
            width={1672}
            height={941}
            priority
            sizes="(min-width: 1024px) 650px, 92vw"
            className="h-auto w-[122%] max-w-none -translate-x-[19%] rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}

function ProductShowcase() {
  return (
    <section className="bg-white py-20">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Aperçu produit"
            title="Une interface lisible pour savoir quoi encaisser, quoi vérifier et quoi relancer."
            text="Les informations importantes sont visibles immédiatement : montant, client, échéance et statut. L’objectif est de réduire le temps passé à chercher dans les PDF et tableaux."
          />
          <div className="mt-8 grid gap-3">
            {productHighlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-navy"
              >
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-teal" />
                {highlight}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-4 -top-4 hidden rounded-2xl border border-teal/20 bg-teal/10 px-4 py-3 text-sm font-semibold text-teal shadow-card lg:block">
            Statuts prêts à scanner
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-soft">
            <Image
              src="/facturely-invoices-overview.png"
              alt="Liste de factures avec montants, échéances et statuts"
              width={1448}
              height={1086}
              sizes="(min-width: 1024px) 620px, 92vw"
              className="h-auto w-[124%] max-w-none -translate-x-[20%] rounded-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-page">
      <section className="relative min-h-screen bg-navy text-white">
        <div className="hero-grid absolute inset-0" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
        <div className="aurora aurora-three" />

        <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/55 backdrop-blur-2xl">
          <nav className="section-shell flex h-20 items-center justify-between gap-4">
            <Logo />
            <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/[0.06] px-6 py-3 text-sm font-medium text-slate-300 backdrop-blur-xl md:flex">
              {navLinks.map((link) => (
                <a key={link.href} className="transition hover:text-white" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <div className="hidden sm:block">
              <BetaButton>Rejoindre la beta</BetaButton>
            </div>
          </nav>
        </header>

        <div className="section-shell relative z-10 grid min-h-[calc(100vh-80px)] items-center gap-12 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
          <div className="animate-rise">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/12 bg-white/[0.08] px-3 py-1.5 text-sm font-medium text-slate-200 shadow-glow backdrop-blur-xl">
              <span className="mr-2 h-2 w-2 rounded-full bg-teal shadow-[0_0_24px_rgba(20,184,166,0.9)]" />
              Beta gratuite · premiers utilisateurs
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Ne laissez plus vos factures impayées dormir dans vos PDF.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Facturely aide les freelances, agences et petites entreprises à suivre leurs
              factures, détecter les retards de paiement et générer des relances clients
              professionnelles avec l’IA.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BetaButton />
              <a
                href="#fonctionnement"
                className="focus-ring inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.14]"
              >
                Voir comment ça marche
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-slate-400">
              Beta gratuite, sans engagement. Retours possibles simplement par email.
            </p>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                ["PDF", "centralisés"],
                ["Retards", "visibles"],
                ["Relances", "plus simples"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl">
                  <p className="text-lg font-semibold text-white">{value}</p>
                  <p className="mt-1 text-xs text-slate-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <DashboardMockup />
        </div>
      </section>

      <section className="relative bg-[#0b1220] py-20 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Le problème"
            title="Le suivi des factures devient vite incontrôlable."
            text="Quand les informations vivent dans des PDF, des emails et des tableaux séparés, chaque relance devient une mini-enquête administrative."
            light
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {problems.map((problem, index) => (
              <article
                key={problem.title}
                className="glass-card group rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-teal/30"
              >
                <span className="mb-6 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-semibold text-teal">
                  0{index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white">{problem.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{problem.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <SectionHeading
            eyebrow="La solution"
            title="Facturely transforme vos factures en tableau de suivi clair."
            text="L’idée est simple : importer, structurer, surveiller, relancer. Sans promettre un logiciel comptable complet, Facturely se concentre sur le suivi qui vous évite les oublis."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {solutionCards.map((item, index) => (
              <div
                key={item}
                className="rounded-3xl border border-slate-200/80 bg-white/75 p-6 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <p className="text-lg font-semibold text-navy">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductShowcase />

      <section id="fonctionnement" className="scroll-mt-24 bg-navy py-20 text-white">
        <div className="section-shell">
          <SectionHeading eyebrow="Fonctionnement" title="Comment ça marche ?" light />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {steps.map((step, index) => (
              <article key={step.title} className="glass-card rounded-3xl p-6">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-lg font-semibold text-navy shadow-[0_18px_45px_rgba(20,184,166,0.25)]">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="section-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Fonctionnalités"
              title="Une première version simple, pensée pour gagner du temps."
            />
            <p className="max-w-md leading-7 text-slateText">
              Le produit reste volontairement concentré : un meilleur suivi, des retards plus
              visibles, des relances plus faciles à formuler.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.label}
                className="group rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-card backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-teal/40"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-semibold text-navy">{feature.label}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      feature.tag === "Beta"
                        ? "bg-teal/10 text-teal"
                        : "bg-slate-100 text-slateText"
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pour-qui" className="scroll-mt-24 bg-[#0b1220] py-20 text-white">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Pour qui ?"
            title="Pensé pour les indépendants et petites structures."
            text="Facturely vise les profils qui facturent déjà, mais qui veulent un suivi plus propre sans installer une usine à gaz."
            light
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 font-semibold text-white backdrop-blur-xl transition hover:border-teal/40 hover:bg-white/[0.1]"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="section-shell">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Beta"
                title="Ce que vous pourrez vraiment tester."
                text="La beta sert à valider le workflow central : partir de factures existantes, comprendre ce qui doit être suivi, puis préparer une relance claire."
              />
              <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-teal">
                  Format simple
                </p>
                <p className="mt-3 leading-7 text-slateText">
                  Pas besoin d’appel obligatoire. Vous pouvez tester, répondre par email et
                  partager vos retours quand vous avez un cas concret.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {betaTests.map((item, index) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-teal/40"
                >
                  <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-navy text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slateText">{item.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-navy">{useCase.title}</h3>
                <p className="mt-3 leading-7 text-slateText">{useCase.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="beta" className="scroll-mt-24 py-20">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[32px] bg-navy p-8 text-white shadow-soft sm:p-10 lg:p-14">
            <div className="aurora aurora-cta" />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  Beta gratuite
                </p>
                <h2 className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">
                  Nous construisons Facturely avec nos premiers utilisateurs.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                  Nous cherchons actuellement quelques freelances, agences et petites
                  entreprises pour tester la beta gratuitement et nous aider à construire un
                  outil réellement utile.
                </p>
              </div>
              <div>
                <BetaButton />
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
                  Inscription rapide via Tally. Aucun paiement demandé pour rejoindre la beta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="section-shell">
          <SectionHeading eyebrow="FAQ" title="Questions fréquentes" />
          <div className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white/85 shadow-card backdrop-blur-xl">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-white transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-3xl leading-7 text-slateText">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-navy py-10 text-white">
        <div className="section-shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Logo />
            <p className="mt-4 leading-7 text-slate-300">
              L’assistant IA pour suivre vos factures et relancer vos clients avec
              professionnalisme.
            </p>
            <a className="mt-4 inline-block text-sm font-medium text-teal" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </div>
          <div className="flex flex-wrap gap-5 text-sm text-slate-300">
            <a className="transition hover:text-white" href="/confidentialite">
              Confidentialité
            </a>
            <a className="transition hover:text-white" href="/conditions">
              Conditions
            </a>
            <a className="transition hover:text-white" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="transition hover:text-white" href={X_URL} target="_blank" rel="noreferrer">
              X
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
