import Link from "next/link";

type LegalSection = {
  title: string;
  body: string[];
};

export function LegalPage({
  title,
  intro,
  sections,
}: {
  title: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <main className="min-h-screen bg-page text-navy">
      <header className="border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <nav className="section-shell flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            Facturely
          </Link>
          <Link
            href="/"
            className="focus-ring rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-navy transition hover:border-teal/50 hover:text-teal"
          >
            Retour au site
          </Link>
        </nav>
      </header>

      <section className="section-shell py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal">
            Facturely
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-6 text-lg leading-8 text-slateText">{intro}</p>
        </div>

        <div className="mt-12 grid gap-5">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
            >
              <h2 className="text-xl font-semibold tracking-tight">{section.title}</h2>
              <div className="mt-4 space-y-4 leading-7 text-slateText">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
