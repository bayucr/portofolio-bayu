export default function Skills({ t }) {
  const { title, items } = t.skills;

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>

      <ul className="mt-8 flex flex-wrap gap-3">
        {items.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-neutral-200 px-4 py-2 text-sm text-neutral-700"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
