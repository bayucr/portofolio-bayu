import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";

export default function Projects({ t }) {
  const { title, items, demoLabel, repoLabel } = t.projects;
  const [active, setActive] = useState(0);

  const goTo = (index) => {
    setActive(Math.max(0, Math.min(items.length - 1, index)));
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <SectionTitle>{title}</SectionTitle>

      {/* Jendela: hanya satu slide yang terlihat */}
      <div
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="region"
        aria-label={title}
        className="mt-10 overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
      >
        {/* Jalur: semua slide berjajar, digeser dengan translateX */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {items.map((project, index) => (
            <article
              key={project.title}
              inert={active !== index}
              aria-hidden={active !== index}
              className="w-full shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
            >
              {/* Gambar di atas */}
              {project.image ? (
                <div className="aspect-video bg-slate-100 dark:bg-slate-800">
                  <img
                    src={project.image}
                    alt={`Screenshot ${project.title}`}
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
      </div>

      {/* Kontrol sementara: panah + titik (panah dipindah di langkah 3) */}
      <div className="mt-4 flex items-center justify-center gap-4">
        <button
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous project"
          className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-2">
          {items.map((project, index) => (
            <button
              key={project.title}
              onClick={() => goTo(index)}
              aria-label={`Go to project ${index + 1}`}
              aria-current={active === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                active === index
                  ? "gradient-bg w-8"
                  : "w-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-600"
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(active + 1)}
          disabled={active === items.length - 1}
          aria-label="Next project"
          className="rounded-full border border-slate-300 p-2 text-slate-600 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}
