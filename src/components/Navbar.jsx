export default function Navbar({ lang, setLang, t }) {
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.skills },
    { href: "#education", label: t.nav.education },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-semibold text-neutral-900">
          Bayu<span className="text-indigo-600">.</span>
        </a>

        <div className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm text-neutral-600 sm:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-neutral-900">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex overflow-hidden rounded-md border border-neutral-300 text-xs font-medium">
            {["id", "en"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                className={`px-3 py-1.5 uppercase ${
                  lang === code
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
