import { ExternalLink, Code } from "lucide-react";

// Warna label teknologi, dipakai bergantian
const chipColors = [
  "bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300",
  "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  "bg-pink-50 text-pink-700 dark:bg-pink-500/10 dark:text-pink-300",
];

export default function Projects({ t }) {
  const { title, items, demoLabel, repoLabel } = t.projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="gradient-bg mt-3 h-1 w-16 rounded-full" />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project, index) => (
          <article
            key={project.title}
            className="group hover:gradient-bg rounded-2xl bg-slate-200 p-px transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-500/20 dark:bg-slate-800"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-[0.9rem] bg-white dark:bg-slate-900">
              {/* Screenshot (atau banner gradasi kalau belum ada gambar) */}
              {project.image ? (
                <div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
              ) : (
                <div className="gradient-bg relative flex aspect-video items-center justify-center overflow-hidden">
                  <span className="font-display text-6xl font-bold text-white/30 transition duration-300 group-hover:scale-110">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <li
                      key={tech}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${chipColors[i % chipColors.length]}`}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center gap-5 text-sm font-medium">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-indigo-600 hover:underline dark:text-indigo-400"
                  >
                    <ExternalLink size={15} />
                    {demoLabel}
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-slate-600 hover:underline dark:text-slate-400"
                  >
                    <Code size={15} />
                    {repoLabel}
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
