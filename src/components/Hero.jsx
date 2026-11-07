import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import foto from "../assets/pasfoto.jpg";

export default function Hero({ t }) {
  const { github, linkedin } = t.contact;

  return (
    <section className="relative">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28">
        {/* Teks */}
        <div className="order-2 md:order-1">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
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
              href={`${import.meta.env.BASE_URL}cv-bayu.pdf`}
              download
              className="gradient-bg inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:opacity-90"
            >
              <Download size={16} />
              {t.hero.cv}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {t.hero.cta2}
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Foto + link sosial */}
        <div className="order-1 flex flex-col items-center md:order-2">
          <div className="gradient-bg rounded-full p-1.5 shadow-2xl shadow-violet-500/30">
            <img
              src={foto}
              alt="Foto Bayu Catur Ramadhan"
              className="h-56 w-56 rounded-full border-4 border-slate-50 object-cover object-center sm:h-72 sm:w-72 dark:border-slate-950"
            />
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span>{t.hero.findMe}</span>
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-slate-700 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-slate-700 transition hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-400"
            >
              <FaLinkedin size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
