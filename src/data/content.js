import gymnasyum from "../assets/gymnasyum.jpg";
import kopiKuy from "../assets/kopi-kuy.jpg";
import brainwave from "../assets/brainwave.jpg";

export const content = {
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      projects: "Proyek",
      skills: "Skill",
      education: "Belajar",
      contact: "Kontak",
    },
    hero: {
      greeting: "Halo, saya",
      name: "Bayu Catur Ramadhan",
      role: "Full Stack Developer",
      intro:
        "Saya membangun aplikasi web dengan JavaScript, React, dan Express.",
      cta: "Hubungi saya",
      badge: "Terbuka untuk kesempatan",
      cta2: "Lihat proyek",
      cv: "Unduh CV",
      findMe: "Temukan aku di",
    },
    about: {
      title: "Tentang Saya",
      paragraphs: [
        "Saya junior web developer yang saat ini sedang menjalani bootcamp Full Stack Web Developer di Dicoding.",
        "Saya tertarik pada dunia teknologi, terutama pemrograman dan kecerdasan buatan (AI). Itulah alasan saya mulai belajar pengembangan web, dan saya terus membangun proyek untuk mengasah kemampuan front-end maupun back-end.",
      ],
      highlights: [
        { label: "Fokus", value: "Full Stack Web" },
        { label: "Sedang belajar", value: "Bootcamp Dicoding" },
        { label: "Minat", value: "Coding & AI" },
      ],
    },
    projects: {
      title: "Proyek Pilihan",
      items: [
        {
          title: "Gymnasyum App",
          description:
            "Aplikasi pelacakan kebugaran yang dibangun dengan Next.js dan TypeScript.",
          tech: ["Next.js", "TypeScript", "Supabase"],
          demo: "https://gymnasyum-app.vercel.app/",
          repo: "https://github.com/bayucr/gymnasyum-app",
          image: gymnasyum,
        },
        {
          title: "Kopi Kuy",
          description:
            "Aplikasi pemesanan kopi sederhana yang dibangun dengan React.",
          tech: ["React", "JavaScript"],
          demo: "https://bayucr.github.io/kopi-kuy/",
          repo: "https://github.com/bayucr/kopi-kuy",
          image: kopiKuy,
        },
        {
          title: "Brainwave",
          description: "Aplikasi web modern yang dibangun dengan React.",
          tech: ["React"],
          demo: "https://bayucr.github.io/brainwave/",
          repo: "https://github.com/bayucr/brainwave",
          image: brainwave,
        },
      ],
      demoLabel: "Lihat demo",
      repoLabel: "Kode",
    },
    skills: {
      title: "Skill",
      groups: [
        { name: "Frontend", items: ["JavaScript", "React"] },
        { name: "Backend", items: ["Express"] },
        { name: "Tools", items: ["GitHub"] },
      ],
    },
    education: {
      title: "Pendidikan & Belajar",
      items: [
        {
          name: "Bootcamp Full Stack Web Developer",
          place: "Dicoding",
          period: "Sedang berjalan",
        },
      ],
    },
    contact: {
      title: "Kontak",
      text: "Terbuka untuk kesempatan magang, kerja, atau kolaborasi.",
      email: "bayfore@gmail.com",
      github: "https://github.com/bayucr",
      linkedin: "https://www.linkedin.com/in/bayu-catur-ramadhan/",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      education: "Learning",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Bayu Catur Ramadhan",
      role: "Full Stack Developer",
      intro: "I build web applications with JavaScript, React, and Express.",
      cta: "Get in touch",
      badge: "Open to opportunities",
      cta2: "View projects",
      cv: "Download CV",
      findMe: "Find me on",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a junior web developer currently enrolled in the Full Stack Web Developer bootcamp at Dicoding.",
        "I'm drawn to technology, especially programming and artificial intelligence (AI). That's why I started learning web development, and I keep building projects to sharpen both my front-end and back-end skills.",
      ],
      highlights: [
        { label: "Focus", value: "Full Stack Web" },
        { label: "Currently learning", value: "Dicoding Bootcamp" },
        { label: "Interests", value: "Coding & AI" },
      ],
    },
    projects: {
      title: "Selected Projects",
      items: [
        {
          title: "Gymnasyum App",
          description:
            "A fitness tracking application built with Next.js and TypeScript.",
          tech: ["Next.js", "TypeScript", "Supabase"],
          demo: "https://gymnasyum-app.vercel.app/",
          repo: "https://github.com/bayucr/gymnasyum-app",
          image: gymnasyum,
        },
        {
          title: "Kopi Kuy",
          description: "A simple coffee ordering app built with React.",
          tech: ["React", "JavaScript"],
          demo: "https://bayucr.github.io/kopi-kuy/",
          repo: "https://github.com/bayucr/kopi-kuy",
          image: kopiKuy,
        },
        {
          title: "Brainwave",
          description: "A modern web application built with React.",
          tech: ["React"],
          demo: "https://bayucr.github.io/brainwave/",
          repo: "https://github.com/bayucr/brainwave",
          image: brainwave,
        },
      ],
      demoLabel: "View demo",
      repoLabel: "Code",
    },
    skills: {
      title: "Skills",
      groups: [
        { name: "Frontend", items: ["JavaScript", "React"] },
        { name: "Backend", items: ["Express"] },
        { name: "Tools", items: ["GitHub"] },
      ],
    },
    education: {
      title: "Education & Learning",
      items: [
        {
          name: "Full Stack Web Developer Bootcamp",
          place: "Dicoding",
          period: "Ongoing",
        },
      ],
    },
    contact: {
      title: "Contact",
      text: "Open to internships, jobs, and collaboration.",
      email: "bayfore@gmail.com",
      github: "https://github.com/bayucr",
      linkedin: "https://www.linkedin.com/in/bayu-catur-ramadhan/",
    },
  },
};
