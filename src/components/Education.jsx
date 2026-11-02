export default function Education({ t }) {
  const { title, items } = t.education;

  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>

      <ul className="mt-8 space-y-6 border-l border-neutral-200 pl-6">
        {items.map((item) => (
          <li key={item.name}>
            <h3 className="font-semibold text-neutral-900">{item.name}</h3>
            <p className="text-sm text-neutral-600">{item.place}</p>
            <p className="mt-1 text-xs text-indigo-600">{item.period}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
