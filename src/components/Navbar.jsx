import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const sectionIds = ["about", "projects", "skills", "education", "contact"];

export default function Navbar({ lang, setLang, theme, toggleTheme, t }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "skills", label: t.nav.skills },
    { id: "education", label: t.nav.education },
    { id: "contact", label: t.nav.contact },
  ];

  // Tandai menu sesuai section yang sedang tampil di tengah layar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    active === id
      ? "font-medium text-violet-600 dark:text-violet-400"
      : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white";

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/70 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg font-bold">
          Bayu<span className="gradient-text">.</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4">
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} className={linkClass(link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex overflow-hidden rounded-md border border-slate-300 text-xs font-medium dark:border-slate-700">
            {["id", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 uppercase ${
                  lang === code
                    ? "gradient-bg text-white"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                }`}
              >
                {code}
              </button>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
            className="rounded-md border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-md border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 md:hidden dark:border-slate-700 dark:text-slate-400 dark:hover:bg-slate-800"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Menu untuk HP */}
      {open && (
        <ul className="space-y-1 border-t border-slate-200 px-6 py-3 text-sm md:hidden dark:border-slate-800">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 ${linkClass(link.id)}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
