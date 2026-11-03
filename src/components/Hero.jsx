import { ArrowRight } from "lucide-react";
import foto from "../assets/pasfoto.jpg";

export default function Hero({ t }) {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Blob gradasi di latar */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute top-40 -right-24 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        {/* Teks */}
        <div className="order-2 md:order-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </span>

          <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400">
            {t.hero.greeting}
          </p>
          <h1 className="font-display gradient-text mt-2 pb-1 text-4xl leading-tight font-bold tracking-tight sm:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-700 dark:text-slate-300">
            {t.hero.role}
          </p>
          <p className="mt-5 max-w-xl text-slate-600 dark:text-slate-400">
            {t.hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="gradient-bg inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90"
            >
              {t.hero.cta}
              <ArrowRight size={16} />
            </a>
            <a
              href="#projects"
              className="rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="order-1 flex justify-center md:order-2">
          <div className="gradient-bg rounded-full p-1.5 shadow-2xl shadow-violet-500/30">
            <img
              src={foto}
              alt="Foto Bayu Catur Ramadhan"
              className="h-56 w-56 rounded-full border-4 border-slate-50 object-cover object-center sm:h-72 sm:w-72 dark:border-slate-950"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
