import { useState } from "react";
import { content } from "./data/content";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

export default function App() {
  const [lang, setLang] = useState("id");
  const t = content[lang];

  return (
    <div className="min-h-screen">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <main>
        <Hero t={t} />
        <Projects t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-xs text-neutral-500">
        © {new Date().getFullYear()} Bayu Catur Ramadhan
      </footer>
    </div>
  );
}
