export default function Projects({ t }) {
  const { title, items, demoLabel, repoLabel } = t.projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => (
          <article
            key={project.title}
            className="flex flex-col rounded-lg border border-neutral-200 p-6 transition hover:border-neutral-400"
          >
            <h3 className="text-lg font-semibold text-neutral-900">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-neutral-600">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-700"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex gap-4 text-sm font-medium">
              <a
                href={project.demo}
                className="text-indigo-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {demoLabel}
              </a>
              <a
                href={project.repo}
                className="text-neutral-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {repoLabel}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
