export default function Hero({ t }) {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
      <p className="text-sm font-medium text-indigo-600">{t.hero.greeting}</p>
      <h1 className="font-display gradient-text mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
        {t.hero.name}
      </h1>
      <p className="mt-4 text-xl text-neutral-500">{t.hero.role}</p>
      <p className="mt-6 max-w-xl text-neutral-600">{t.hero.intro}</p>
      <a
        href="#contact"
        className="mt-8 inline-block rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700"
      >
        {t.hero.cta}
      </a>
    </section>
  );
}
