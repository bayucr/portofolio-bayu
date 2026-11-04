import { SiJavascript, SiReact, SiExpress, SiGithub } from "react-icons/si";

// Ikon tiap skill, kuncinya harus sama dengan nama di content.js
const icons = {
  JavaScript: SiJavascript,
  React: SiReact,
  Express: SiExpress,
  GitHub: SiGithub,
};

export default function Skills({ t }) {
  const { title, groups } = t.skills;

  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="font-display text-3xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>
      <div className="gradient-bg mt-3 h-1 w-16 rounded-full" />

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <div
            key={group.name}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <h3 className="font-display text-sm font-semibold tracking-wide text-violet-600 uppercase dark:text-violet-400">
              {group.name}
            </h3>

            <ul className="mt-4 space-y-3">
              {group.items.map((skill) => {
                const Icon = icons[skill];
                return (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-200"
                  >
                    {Icon && <Icon size={20} className="text-indigo-500" />}
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
