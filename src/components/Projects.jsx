import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Code } from "lucide-react";
import SectionTitle from "./SectionTitle";

const arrowClass =
  "pointer-events-auto rounded-full bg-white/80 p-2 text-slate-700 shadow-lg backdrop-blur transition hover:scale-110 hover:bg-white disabled:pointer-events-none disabled:opacity-0 sm:p-3 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-900";

export default function Projects({ t }) {
  const { title, items, demoLabel, repoLabel } = t.projects;
  const [active, setActive] = useState(0);
  const touchStart = useRef(null);

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

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e) => {
    if (!touchStart.current) return;

    const touch = e.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    // Abaikan gesekan pendek (di bawah 50px) atau yang lebih condong vertikal
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy)) return;

    goTo(dx < 0 ? active + 1 : active - 1);
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <SectionTitle>{title}</SectionTitle>

      <div className="relative mt-10">
        {/* Jendela: hanya satu slide yang terlihat */}
        <div
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchCancel={() => (touchStart.current = null)}
          tabIndex={0}
          role="region"
          aria-label={title}
          className="touch-pan-y overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
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

        {/* Lapisan panah: tingginya sama dengan gambar (16:9) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex aspect-video items-center justify-between px-2 sm:px-4">
          <button
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            aria-label="Previous project"
            className={arrowClass}
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
          <button
            onClick={() => goTo(active + 1)}
            disabled={active === items.length - 1}
            aria-label="Next project"
            className={arrowClass}
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>

      {/* Titik indikator */}
      <div className="mt-5 flex items-center justify-center gap-2">
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
      <p className="sr-only" aria-live="polite">
        {`${active + 1} / ${items.length}`}
      </p>
    </section>
  );
}
