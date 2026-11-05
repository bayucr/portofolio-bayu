import { ExternalLink, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Projects({ t }) {
  const { title, items, demoLabel, repoLabel } = t.projects;

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <SectionTitle>{title}</SectionTitle>

      {/* Jalur slide */}
      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((project, index) => (
          <article
            key={project.title}
            className="w-full shrink-0 snap-center overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
          >
            {/* Gambar di atas */}
            {project.image ? (
              <div className="aspect-video bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.image}
                  alt={`Screenshot ${project.title}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            ) : (
              <div className="gradient-bg flex aspect-video items-center justify-center">
                <span className="font-display text-7xl font-bold text-white/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            )}

            {/* Teks di bawah */}
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 sm:text-base dark:text-slate-400">
                {project.description}
              </p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300"
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
          </article>
        ))}
      </div>
    </section>
  );
}
