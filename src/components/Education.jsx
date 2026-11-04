import { GraduationCap } from "lucide-react";

export default function Education({ t }) {
  const { title, items } = t.education;

  return (
    <section
      id="education"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16"
    >
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="gradient-bg mt-3 h-1 w-16 rounded-full" />

      <ul className="mt-10 space-y-8 border-l-2 border-slate-200 pl-8 dark:border-slate-800">
        {items.map((item) => (
          <li key={item.name} className="relative">
            {/* Titik timeline */}
            <span className="gradient-bg absolute top-1 -left-[2.65rem] flex h-8 w-8 items-center justify-center rounded-full text-white ring-4 ring-slate-50 dark:ring-slate-950">
              <GraduationCap size={16} />
            </span>

            <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white">
              {item.name}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {item.place}
            </p>
            <span className="mt-2 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700 dark:bg-violet-500/10 dark:text-violet-300">
              {item.period}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
