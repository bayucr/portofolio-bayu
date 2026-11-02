export default function Contact({ t }) {
  const { title, text, email, github, linkedin } = t.contact;

  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
      <p className="mt-4 max-w-xl text-neutral-600">{text}</p>

      <a
        href={`mailto:${email}`}
        className="mt-6 inline-block rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700"
        target="_blank"
        rel="noreferrer"
      >
        {email}
      </a>

      <div className="mt-6 flex gap-6 text-sm font-medium">
        <a
          href={github}
          className="text-neutral-600 hover:text-neutral-900 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
        <a
          href={linkedin}
          className="text-neutral-600 hover:text-neutral-900 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
