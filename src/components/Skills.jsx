import {
  SiJavascript,
  SiReact,
  SiExpress,
  SiGithub,
  SiNextdotjs,
} from "react-icons/si";
import SectionTitle from "./SectionTitle";

// Kunci harus sama dengan nama di content.js
const icons = {
  JavaScript: SiJavascript,
  React: SiReact,
  Express: SiExpress,
  GitHub: SiGithub,
  "Next.js": SiNextdotjs,
};

export default function Skills({ t }) {
  const { title, items } = t.skills;

  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16">
      <SectionTitle>{title}</SectionTitle>

      <ul className="mt-10 flex flex-wrap justify-center gap-5 sm:gap-6">
        {items.map((skill) => {
          const Icon = icons[skill];
          return (
            <li
              key={skill}
              role="img"
              aria-label={skill}
              className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm sm:h-24 sm:w-24 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {Icon && (
                <Icon aria-hidden="true" className="h-9 w-9 sm:h-11 sm:w-11" />
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
