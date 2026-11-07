import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";

const sectionIds = [
  "home",
  "about",
  "projects",
  "skills",
  "education",
  "contact",
];

export default function Navbar({ lang, setLang, theme, toggleTheme, t }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = sectionIds.map((id) => ({ id, label: t.nav[id] }));

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
      ? "gradient-bg text-white shadow-md shadow-violet-500/30"
      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800";

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="relative mx-auto max-w-4xl">
        {/* Pil navbar */}
        <nav className="flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/70 p-2 shadow-lg shadow-slate-900/5 backdrop-blur-xl dark:border-slate-700/60 dark:bg-slate-900/70">
          {/* Hamburger (HP dan tablet) */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-full p-2.5 text-slate-600 hover:bg-slate-100 lg:hidden dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>

          {/* Menu desktop, di tengah */}
          <ul className="hidden flex-1 items-center justify-center gap-1 text-sm font-medium lg:flex">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`block rounded-full px-4 py-2 transition ${linkClass(link.id)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Pengisi ruang di HP, mendorong kontrol ke kanan */}
          <div className="flex-1 lg:hidden" />

          {/* Kontrol: bahasa dan tema */}
          <div className="flex items-center gap-2">
            <div className="flex rounded-full border border-slate-300 p-0.5 text-xs font-medium dark:border-slate-700">
              {["id", "en"].map((code) => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  className={`rounded-full px-3 py-1.5 uppercase transition ${
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
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="rounded-full border border-slate-300 p-2 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          </div>
        </nav>

        {/* Menu HP: kartu membulat di bawah pil */}
        {open && (
          <ul className="absolute inset-x-0 top-full mt-2 space-y-1 rounded-3xl border border-slate-200/80 bg-white/90 p-2 text-sm font-medium shadow-lg backdrop-blur-xl lg:hidden dark:border-slate-700/60 dark:bg-slate-900/90">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-full px-4 py-2.5 transition ${linkClass(link.id)}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
}
