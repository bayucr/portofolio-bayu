export default function About({ t }) {
  const { title, paragraphs, highlights } = t.about;

  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="gradient-bg mt-3 h-1 w-16 rounded-full" />

      <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <div className="space-y-4 text-slate-600 dark:text-slate-400">
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <ul className="space-y-3">
          {highlights.map((item) => (
            <li
              key={item.label}
              className="rounded-xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                {item.label}
              </p>
              <p className="font-display mt-1 font-semibold text-slate-900 dark:text-white">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
