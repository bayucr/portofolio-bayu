import { useEffect, useState } from "react";
import { content } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import Reveal from "./components/Reveal";

export default function App() {
  const [lang, setLang] = useState("id");
  const [theme, setTheme] = useState(() =>
    document.documentElement.classList.contains("dark") ? "dark" : "light",
  );
  const t = content[lang];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === "id"
        ? "Bayu Catur Ramadhan | Full Stack Developer"
        : "Bayu Catur Ramadhan | Full Stack Developer (Portfolio)";
  }, [lang]);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* abaikan jika penyimpanan diblokir */
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        toggleTheme={toggleTheme}
        t={t}
      />
      <main>
        <Hero t={t} />
        <Reveal>
          <About t={t} />
        </Reveal>
        <Reveal>
          <Projects t={t} />
        </Reveal>
        <Reveal>
          <Skills t={t} />
        </Reveal>
        <Reveal>
          <Education t={t} />
        </Reveal>
        <Reveal>
          <Contact t={t} />
        </Reveal>
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">
            Bayu Catur Ramadhan
          </span>
        </p>
      </footer>
    </div>
  );
}
