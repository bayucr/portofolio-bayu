import { Flame, Handshake, MessagesSquare, Sparkles } from "lucide-react";
import SectionTitle from "./SectionTitle";

// Kunci harus sama dengan nilai "icon" di content.js
const icons = {
  communicative: MessagesSquare,
  cooperative: Handshake,
  ai: Sparkles,
  passion: Flame,
};

export default function WhyHire({ t }) {
  const { title, items } = t.why;

  return (
    <section id="why" className="mx-auto max-w-5xl px-6 py-16">
      <SectionTitle>{title}</SectionTitle>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = icons[item.icon];
          return (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="gradient-bg mx-auto flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg shadow-violet-500/30">
                {Icon && <Icon size={26} />}
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
