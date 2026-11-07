import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Contact({ t }) {
  const { title, text, email, github, linkedin } = t.contact;

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-16">
      <div className="gradient-bg relative overflow-hidden rounded-3xl px-8 py-14 text-center text-white shadow-2xl shadow-violet-500/30 sm:px-16">
        {/* Hiasan lingkaran */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -left-16 h-56 w-56 rounded-full bg-white/5"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-12 -bottom-20 h-64 w-64 rounded-full bg-white/5"
        />

        <h2 className="font-display relative text-3xl font-bold sm:text-4xl">
          {title}
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-white/90">{text}</p>

        <a
          href={`mailto:${email}`}
          className="relative mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-slate-100"
        >
          <Mail size={16} />
          {email}
        </a>

        <div className="relative mt-6 flex justify-center gap-3">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
          >
            <FaGithub size={20} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/30"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
