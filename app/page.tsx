"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Accueil", id: "home" },
  { label: "À propos", id: "about" },
  { label: "Expérience", id: "experience" },
  { label: "Formation", id: "formation" },
  { label: "Projets", id: "projects" },
  { label: "Compétences", id: "skills" },
  { label: "Contact", id: "contact" },
];

const experiences = [
  {
    date: "Août 2024 - Juillet 2025",
    title: "Inspecteur contrôle qualité produit",
    company: "EMP Sfax",
    points: [
      "Contribution active à la réduction des non-conformités par l'analyse des causes racines et la mise en place d'actions correctives, ainsi que par la réalisation de contrôles dimensionnels à l'aide d'instruments conventionnels et d'une machine à mesurer tridimensionnelle.",
      "Participation au suivi des décisions techniques influençant les coûts de production, les délais de fabrication et la fiabilité des produits.",
      "Coordination et communication régulière avec les services production, ingénierie et qualité pour garantir le respect des exigences techniques et clients.",
    ],
    image: "/images/emp-photo.jpg",
    imageAlt: "Contrôle qualité chez EMP Sfax",
    imageLabel: "Contrôle qualité & métrologie",
    imageHint: "Ligne de production, contrôle, mesure, non-conformités",
  },
  {
    date: "Février 2024 - Mai 2024",
    title: "Concepteur mécanique — Projet de fin d'études",
    company: "ISET Sfax",
    points: [
      "Analyse fonctionnelle et étude du besoin.",
      "Réalisation des calculs de dimensionnement mécanique, simulation mécanique, sélection des matériaux et composants.",
      "Fabrication, assemblage du dispositif et validation expérimentale de la précision et du fonctionnement.",
    ],
    image: "/images/pfe-photo.jpg",
    imageAlt: "Projet de fin d'études mécanique",
    imageLabel: "Projet de fin d'études",
    imageHint: "Plans CAO, simulation, prototype, assemblage",
  },
  {
    date: "Janvier 2023 - Février 2023",
    title: "Assistant méthodes de production — Stage de perfectionnement",
    company: "SFFP Sfax",
    points: [
      "Participation à l'optimisation des procédés d'injection plastique afin d'améliorer la productivité.",
      "Suivi des paramètres machines et contribution à la réduction des écarts de qualité.",
      "Collaboration avec les équipes production pour proposer des améliorations techniques.",
    ],
    image: "/images/sffp-photo.jpg",
    imageAlt: "Stage méthodes de production",
    imageLabel: "Méthodes de production",
    imageHint: "Injection plastique, paramètres machine, productivité",
  },
  {
    date: "Janvier 2022 - Février 2022",
    title: "Opérateur de production — Stage ouvrier",
    company: "EBA Sfax",
    points: [
      "Participation aux opérations d'assemblage et de fabrication de structures métalliques.",
      "Lecture de plans techniques et réalisation de contrôles dimensionnels.",
      "Contribution au respect des standards qualité et des délais de production.",
    ],
    image: "/images/eba-photo.jpg",
    imageAlt: "Stage ouvrier en production",
    imageLabel: "Production & structures métalliques",
    imageHint: "Assemblage, fabrication, contrôle dimensionnel",
  },
];

const formations = [
  { date: "Depuis 2025", title: "Diplôme d'ingénieur en Design Industriel Durable", school: "EPF École d'Ingénieurs, Troyes", desc: "Formation d'ingénieur orientée conception, innovation produit, développement durable et approche design appliquée à l'industrie." },
  { date: "Depuis 2024", title: "Cycle d'ingénieur en Génie Mécanique", school: "Institut International de Technologie, Sfax", desc: "Approfondissement en conception mécanique, industrialisation, calcul et environnement technique de production." },
  { date: "Septembre 2021 - Juin 2024", title: "Licence appliquée en Génie Mécanique", school: "Institut Supérieur des Études Technologiques, Sfax", desc: "Base solide en génie mécanique, métrologie, fabrication, mise en plan, CAO et résolution de problèmes techniques." },
];

const projects = [
  { title: "Conception mécanique & dimensionnement", description: "Analyse fonctionnelle, dimensionnement mécanique, simulation et validation expérimentale d'un système complet.", image: "/images/projet-1.jpg", tags: ["SolidWorks", "RDM 6", "Prototype", "Blender"], hasDetail: true },
  { title: "Projet fil rouge", description: "Développement de nouveaux produits à partir de matériaux composites recyclés, avec prototypes et validation fonctionnelle.", image: "/images/projet-3.jpg", tags: ["Durabilité", "Composites", "Prototype"], hasDetail: false },
];

const skillCategories = [
  { title: "Logiciels techniques", items: ["SolidWorks", "CATIA V5", "AutoCAD", "Python", "Arduino"] },
  { title: "Compétences mécaniques", items: ["Conception mécanique", "Mise en plan 2D / 3D", "Simulation RDM", "Industrialisation", "Analyse fonctionnelle"] },
  { title: "Qualité & mesure", items: ["Contrôle dimensionnel", "Métrologie", "Machine à mesurer tridimensionnelle", "Analyse des non-conformités", "Amélioration continue"] },
  { title: "Soft skills", items: ["Rigueur", "Curiosité technique", "Esprit d'équipe", "Organisation", "Communication professionnelle"] },
];

const contacts = [
  { icon: "📞", label: "Téléphone", value: "+33 7 53 90 23 28", href: "tel:+33753902328" },
  { icon: "✉️", label: "Email", value: "oussama.rebai@epfedu.fr", href: "mailto:oussama.rebai@epfedu.fr" },
  { icon: "📄", label: "CV", value: "Télécharger mon CV", href: "/cv/Oussama_REBAI_CV.pdf", download: true },
  { icon: "💼", label: "LinkedIn", value: "Voir mon profil LinkedIn", href: "https://www.linkedin.com/in/oussama-rebai-80713b3b2/", external: true },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.12 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const rx = ((e.clientY - r.top - r.height / 2) / (r.height / 2)) * -6;
      const ry = ((e.clientX - r.left - r.width / 2) / (r.width / 2)) * 6;
      el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    };
    const onLeave = () => { el.style.transform = "perspective(1000px) rotateX(0) rotateY(0) translateY(0)"; };
    el.addEventListener("mousemove", onMove); el.addEventListener("mouseleave", onLeave);
    return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
  }, []);
  return ref;
}

function RevealTiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref: rr, visible } = useReveal(); const tr = useTilt();
  return (
    <div ref={(n) => { (rr as React.MutableRefObject<HTMLDivElement | null>).current = n; (tr as React.MutableRefObject<HTMLDivElement | null>).current = n; }} className={`card ${visible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function RevealBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return <div ref={ref} className={`reveal ${visible ? "visible" : ""} ${className}`}>{children}</div>;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const handler = () => {
      let cur = "home";
      sections.forEach((s) => { const r = s.getBoundingClientRect(); if (r.top <= 150 && r.bottom >= 150) cur = s.id; });
      if (window.scrollY < 200) cur = "home";
      setActiveSection(cur);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") { setDetailOpen(false); setMenuOpen(false); } };
    window.addEventListener("keydown", h); return () => window.removeEventListener("keydown", h);
  }, []);

  useEffect(() => { document.body.style.overflow = detailOpen || menuOpen ? "hidden" : ""; }, [detailOpen, menuOpen]);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };

  const heroTilt = useTilt();
  const { ref: hRR, visible: hRV } = useReveal();
  const { ref: hIR, visible: hIV } = useReveal();

  return (
    <>
      <style>{`
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
        :root {
          --accent:#22c55e; --accent-2:#06b6d4; --accent-3:#2563eb;
          --text:#0f172a; --muted:#64748b;
          --shadow:0 18px 50px rgba(15,23,42,0.12);
          --line:rgba(15,23,42,0.08); --radius:22px;
        }
        html { scroll-behavior:smooth; }
        body {
          font-family:"Inter",system-ui,sans-serif; color:var(--text);
          min-height:100vh; overflow-x:hidden;
          background:
            radial-gradient(circle at 10% 10%,rgba(37,99,235,0.08),transparent 24%),
            radial-gradient(circle at 88% 18%,rgba(34,197,94,0.08),transparent 20%),
            radial-gradient(circle at 72% 82%,rgba(6,182,212,0.08),transparent 24%),
            linear-gradient(160deg,#f8fbff 0%,#eef6ff 45%,#fff 100%);
        }
        body::before {
          content:""; position:fixed; inset:0; pointer-events:none; z-index:-1;
          background-image:linear-gradient(rgba(15,23,42,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(15,23,42,0.03) 1px,transparent 1px);
          background-size:38px 38px;
          mask-image:radial-gradient(circle at center,black 40%,transparent 95%);
        }
        .container { max-width:1240px; margin:0 auto; padding:0 24px; }
        a { color:inherit; text-decoration:none; }

        /* ─ NAV ─ */
        nav {
          position:fixed; top:0; width:100%; z-index:1000;
          background:rgba(255,255,255,0.88); backdrop-filter:blur(16px);
          border-bottom:1px solid var(--line);
          box-shadow:0 4px 24px rgba(15,23,42,0.06);
        }
        .nav-inner {
          display:flex; justify-content:space-between; align-items:center;
          height:64px; padding:0 24px; max-width:1240px; margin:0 auto;
        }
        .logo {
          width:44px; height:44px; border-radius:14px; flex-shrink:0;
          display:flex; align-items:center; justify-content:center;
          font-weight:800; font-size:0.88rem; letter-spacing:0.08em; color:#fff;
          background:linear-gradient(135deg,var(--accent-3),var(--accent-2));
          box-shadow:0 8px 20px rgba(37,99,235,0.22); cursor:pointer; border:none;
          transition:transform 0.3s,box-shadow 0.3s;
        }
        .logo:hover { transform:translateY(-2px) rotate(-2deg); }

        /* Desktop links */
        .nav-links { display:flex; list-style:none; gap:0.2rem; align-items:center; }
        .nav-links button {
          background:none; border:none; color:var(--muted); font-weight:600;
          padding:0.4rem 0.75rem; border-radius:999px; cursor:pointer;
          font-size:0.86rem; transition:0.2s ease; white-space:nowrap;
        }
        .nav-links button:hover, .nav-links button.active {
          color:var(--text); background:rgba(37,99,235,0.08);
        }

        /* Hamburger */
        .hamburger {
          display:none; flex-direction:column; justify-content:center; gap:5px;
          width:40px; height:40px; background:none; border:none; cursor:pointer;
          border-radius:10px; padding:8px; transition:background 0.2s;
        }
        .hamburger:hover { background:rgba(37,99,235,0.08); }
        .hamburger span { display:block; height:2px; border-radius:2px; background:var(--text); transition:0.3s ease; width:100%; }
        .hamburger.open span:nth-child(1) { transform:translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity:0; transform:scaleX(0); }
        .hamburger.open span:nth-child(3) { transform:translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .mobile-drawer {
          position:fixed; top:64px; left:0; right:0; bottom:0; z-index:999;
          background:rgba(255,255,255,0.97); backdrop-filter:blur(20px);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:0.4rem;
          transform:translateY(-110%); opacity:0; transition:transform 0.38s cubic-bezier(0.4,0,0.2,1),opacity 0.38s ease;
          pointer-events:none;
        }
        .mobile-drawer.open { transform:translateY(0); opacity:1; pointer-events:all; }
        .mobile-drawer button {
          background:none; border:none; color:var(--text); font-weight:700; font-size:1.5rem;
          padding:0.75rem 2.5rem; border-radius:16px; cursor:pointer; width:100%; max-width:300px;
          text-align:center; transition:background 0.2s,color 0.2s;
        }
        .mobile-drawer button:hover, .mobile-drawer button.active {
          background:rgba(37,99,235,0.08); color:var(--accent-3);
        }

        /* Show hamburger only on mobile */
        @media (max-width:840px) {
          .nav-links { display:none; }
          .hamburger { display:flex; }
        }

        /* ─ SECTIONS ─ */
        section { padding:110px 0; position:relative; }
        section::before { content:""; position:absolute; left:24px; right:24px; top:0; border-top:1px solid rgba(15,23,42,0.06); }
        section:first-of-type::before { display:none; }
        h2 { font-size:clamp(2.1rem,4vw,3rem); margin-bottom:2.7rem; color:var(--text); font-weight:800; letter-spacing:-0.04em; }

        /* ─ HERO ─ */
        .hero { min-height:100vh; display:flex; align-items:center; padding-top:100px; }
        .hero-grid { display:grid; grid-template-columns:1.1fr 0.9fr; gap:60px; align-items:center; width:100%; }
        .hero h1 { font-size:clamp(3rem,7vw,5.6rem); line-height:0.95; margin-bottom:18px; font-weight:800; letter-spacing:-0.05em; background:linear-gradient(90deg,#0f172a,var(--accent-3),var(--accent)); -webkit-background-clip:text; color:transparent; }
        .subtitle { font-size:0.95rem; color:var(--accent-2); margin-bottom:14px; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; }
        .description { font-size:1.05rem; color:var(--muted); margin-bottom:2rem; line-height:1.9; }
        .cta-button { display:inline-block; background:linear-gradient(135deg,var(--accent-3),var(--accent-2)); color:#fff; padding:1rem 1.5rem; border-radius:14px; font-weight:800; border:none; cursor:pointer; transition:transform 0.3s,box-shadow 0.3s; box-shadow:0 14px 34px rgba(37,99,235,0.16); }
        .cta-button:hover { transform:translateY(-4px) scale(1.02); box-shadow:0 22px 42px rgba(6,182,212,0.2); }
        .hero-img-wrap { position:relative; display:flex; justify-content:center; }
        .hero-img-wrap::before { content:""; position:absolute; inset:24px -12px -18px 24px; border-radius:32px; background:linear-gradient(135deg,rgba(37,99,235,0.12),rgba(6,182,212,0.12)); border:1px solid rgba(15,23,42,0.06); }
        .hero-img-wrap img { width:min(390px,100%); height:500px; object-fit:cover; border-radius:28px; position:relative; z-index:1; box-shadow:var(--shadow); border:1px solid rgba(15,23,42,0.08); }

        /* ─ CARDS ─ */
        .card { background:linear-gradient(160deg,rgba(255,255,255,0.86),rgba(249,251,255,0.96)); border:1px solid rgba(15,23,42,0.08); box-shadow:var(--shadow); backdrop-filter:blur(12px); border-radius:var(--radius); opacity:0; transform:translateY(50px) scale(0.98); transition:opacity 0.9s ease,transform 0.9s ease,box-shadow 0.25s,border-color 0.25s; }
        .card.visible { opacity:1; transform:translateY(0) scale(1); }
        .card:hover { box-shadow:0 24px 52px rgba(15,23,42,0.16); border-color:rgba(37,99,235,0.14); }
        .reveal { opacity:0; transform:translateY(50px) scale(0.98); transition:opacity 0.9s ease,transform 0.9s ease; }
        .reveal.visible { opacity:1; transform:translateY(0) scale(1); }

        /* ─ ABOUT ─ */
        .about-text-box { background:rgba(255,255,255,0.92); border:1px solid rgba(15,23,42,0.08); border-radius:24px; padding:1.8rem 2rem; margin-bottom:2rem; box-shadow:0 12px 30px rgba(15,23,42,0.08); color:var(--muted); line-height:1.8; }
        .about-text-box p { margin-bottom:1rem; }
        .about-text-box p:last-child { margin-bottom:0; }
        .about-info { padding:2rem; }
        .info-item { display:flex; align-items:baseline; gap:0.7rem; flex-wrap:wrap; padding-bottom:1rem; margin-bottom:1rem; border-bottom:1px solid rgba(15,23,42,0.06); }
        .info-item:last-child { margin-bottom:0; border-bottom:none; padding-bottom:0; }
        .info-item strong { color:var(--accent-3); min-width:120px; font-size:0.82rem; text-transform:uppercase; letter-spacing:0.08em; }

        /* ─ TIMELINE ─ */
        .timeline { display:grid; gap:1.5rem; }
        .timeline-content { padding:1.8rem; border-left:4px solid var(--accent-3); }
        .timeline-date { background:rgba(37,99,235,0.1); color:var(--accent-3); padding:0.45rem 0.9rem; border-radius:999px; font-size:0.82rem; margin-bottom:1rem; display:inline-block; font-weight:700; }
        .timeline-content h3 { color:var(--text); margin-bottom:0.5rem; font-size:1.35rem; }
        .timeline-content p { color:var(--muted); margin-bottom:0.55rem; line-height:1.8; }
        .img-placeholder { border:1px dashed rgba(37,99,235,0.26); border-radius:16px; padding:1rem; text-align:center; background:rgba(248,251,255,0.85); margin-top:1rem; min-height:180px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:14px; overflow:hidden; }
        .img-label { color:var(--text); font-weight:700; }
        .img-hint { color:var(--muted); font-size:0.9rem; }

        /* ─ PROJECTS ─ */
        .projects-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(320px,1fr)); gap:2rem; }
        .project-card { overflow:hidden; }
        .project-img { width:100%; height:230px; overflow:hidden; background:linear-gradient(135deg,rgba(37,99,235,0.14),rgba(6,182,212,0.14)); display:flex; align-items:center; justify-content:center; padding:8px; }
        .project-img img { width:100%; height:100%; object-fit:cover; border-radius:14px; }
        .project-body { padding:1.5rem; }
        .project-title { color:var(--text); font-size:1.35rem; font-weight:800; margin-bottom:0.5rem; }
        .project-desc { color:var(--muted); margin-bottom:1rem; line-height:1.8; }
        .project-tags { display:flex; flex-wrap:wrap; gap:0.5rem; }
        .tag { background:#eef4ff; color:var(--text); padding:0.35rem 0.82rem; border-radius:999px; font-size:0.8rem; border:1px solid rgba(15,23,42,0.08); }
        .open-btn { display:inline-block; margin-bottom:1rem; background:linear-gradient(135deg,var(--accent-3),var(--accent-2)); color:#fff; padding:0.8rem 1.2rem; border-radius:12px; border:none; cursor:pointer; font-weight:800; transition:transform 0.25s,box-shadow 0.25s; }
        .open-btn:hover { transform:translateY(-2px) scale(1.02); box-shadow:0 14px 30px rgba(37,99,235,0.2); }

        /* ─ MODAL ─ */
        .modal-overlay { position:fixed; inset:0; background:rgba(255,255,255,0.65); backdrop-filter:blur(10px); display:flex; align-items:center; justify-content:center; z-index:3000; padding:24px; }
        .modal-card { width:min(1100px,100%); max-height:92vh; overflow-y:auto; background:linear-gradient(160deg,rgba(255,255,255,0.98),rgba(249,251,255,0.98)); border:1px solid rgba(15,23,42,0.08); border-radius:24px; padding:2rem; box-shadow:var(--shadow); }
        .modal-header { display:flex; justify-content:space-between; align-items:center; gap:1rem; margin-bottom:1.5rem; flex-wrap:wrap; }
        .modal-title { color:var(--text); font-size:2rem; font-weight:800; }
        .modal-desc { color:var(--muted); margin-bottom:1.5rem; line-height:1.85; }
        .modal-gallery { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:16px; }
        .modal-media { background:rgba(37,99,235,0.04); border-radius:18px; overflow:hidden; min-height:220px; border:1px solid rgba(15,23,42,0.06); }
        .modal-media img,.modal-media video { width:100%; height:100%; object-fit:cover; display:block; }

        /* ─ SKILLS ─ */
        .skills-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(260px,1fr)); gap:1.5rem; }
        .skill-card { padding:1.8rem; }
        .skill-card h3 { color:var(--text); margin-bottom:1rem; font-size:1.2rem; }
        .skill-list { list-style:none; }
        .skill-list li { padding:0.62rem 0; border-bottom:1px solid rgba(15,23,42,0.06); color:var(--muted); }
        .skill-list li:last-child { border-bottom:none; }

        /* ─ CONTACT ─ */
        .contact-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:1.5rem; }
        .contact-card { padding:1.8rem; text-align:center; }
        .contact-card h3 { margin-bottom:0.5rem; color:var(--text); }
        .contact-card p { color:var(--muted); }
        .contact-icon { font-size:2rem; margin-bottom:0.85rem; }

        footer { border-top:1px solid rgba(15,23,42,0.06); color:var(--muted); text-align:center; padding:2rem 0; }

        /* ─ RESPONSIVE ─ */
        @media (max-width:900px) {
          .hero-grid { grid-template-columns:1fr; text-align:center; }
          h2 { text-align:center; }
        }
        @media (max-width:600px) {
          .hero-img-wrap img { height:360px; }
          .projects-grid,.skills-grid,.contact-grid { grid-template-columns:1fr; }
          .modal-card { padding:1.2rem; }
          .modal-gallery { grid-template-columns:1fr; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav>
        <div className="nav-inner">
          <button className="logo" onClick={() => scrollTo("home")}>OR</button>

          {/* Desktop */}
          <ul className="nav-links">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button className={activeSection === l.id ? "active" : ""} onClick={() => scrollTo(l.id)}>{l.label}</button>
              </li>
            ))}
          </ul>

          {/* Hamburger mobile */}
          <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        {navLinks.map((l) => (
          <button key={l.id} className={activeSection === l.id ? "active" : ""} onClick={() => scrollTo(l.id)}>
            {l.label}
          </button>
        ))}
      </div>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="container hero-grid">
          <div ref={hRR} className={`reveal ${hRV ? "visible" : ""}`}>
            <h1>Oussama REBAI</h1>
            <p className="subtitle">Élève ingénieur en génie mécanique & design industriel durable</p>
            <p className="description">Étudiant ingénieur en double diplôme à l'EPF, je recherche une alternance à partir de septembre dans le domaine industriel. Intéressé par l'usinage, le contrôle qualité et la conception mécanique, je suis polyvalent, rigoureux et motivé à mettre en pratique mes compétences en fabrication, métrologie et conception, tout en contribuant à l'amélioration des processus et à la conformité des pièces.</p>
            <button className="cta-button" onClick={() => scrollTo("contact")}>Me contacter</button>
          </div>
          <div ref={hIR} className={`hero-img-wrap reveal ${hIV ? "visible" : ""}`}>
            <div ref={heroTilt} style={{ display: "contents" }}>
              <Image src="/images/oussema pdp.jpeg" alt="Oussama REBAI" width={390} height={500} style={{ objectFit: "cover", borderRadius: 28 }} priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── À PROPOS ── */}
      <section id="about">
        <div className="container">
          <RevealBox><h2>À propos</h2></RevealBox>
          <RevealBox className="about-text-box">
            <p>Je suis Oussama REBAI, étudiant ingénieur en 4ᵉ année à l'EPF, spécialisé en design industriel durable.</p>
            <p>Mon parcours combine conception mécanique, métrologie, contrôle qualité, industrialisation et modélisation 3D. Je suis motivé par les projets qui demandent à la fois rigueur technique, créativité et sens de l'innovation.</p>
          </RevealBox>
          <RevealTiltCard className="about-info">
            {[["Localisation :", "Mobilité sur toute la France"], ["Formation :", "EPF France & IIT Sfax"], ["Domaine :", "Génie mécanique / Design industriel durable"], ["Email :", "oussama.rebai@epfedu.fr"], ["Téléphone :", "+33 7 53 90 23 28"], ["Objectif :", "Évoluer entre ingénierie, innovation et management technique"]].map(([k, v]) => (
              <div key={k} className="info-item"><strong>{k}</strong><span>{v}</span></div>
            ))}
          </RevealTiltCard>
        </div>
      </section>

      {/* ── EXPÉRIENCE ── */}
      <section id="experience">
        <div className="container">
          <RevealBox><h2>Expérience professionnelle</h2></RevealBox>
          <div className="timeline">
            {experiences.map((exp) => (
              <RevealTiltCard key={exp.title} className="timeline-content">
                <span className="timeline-date">{exp.date}</span>
                <h3>{exp.title}</h3>
                <p><strong>{exp.company}</strong></p>
                {exp.points.map((pt, i) => <p key={i}>- {pt}</p>)}
                <div className="img-placeholder">
                  <Image src={exp.image} alt={exp.imageAlt} width={600} height={300} style={{ width: "100%", height: "auto", borderRadius: 12 }} />
                  <div className="img-label">{exp.imageLabel}</div>
                  <div className="img-hint">{exp.imageHint}</div>
                </div>
              </RevealTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMATION ── */}
      <section id="formation">
        <div className="container">
          <RevealBox><h2>Formation</h2></RevealBox>
          <div className="timeline">
            {formations.map((f) => (
              <RevealTiltCard key={f.title} className="timeline-content">
                <span className="timeline-date">{f.date}</span>
                <h3>{f.title}</h3>
                <p><strong>{f.school}</strong></p>
                <p>{f.desc}</p>
              </RevealTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS ── */}
      <section id="projects">
        <div className="container">
          <RevealBox><h2>Mes projets</h2></RevealBox>
          <div className="projects-grid">
            {projects.map((p) => (
              <RevealTiltCard key={p.title} className="project-card">
                <div className="project-img"><Image src={p.image} alt={p.title} width={600} height={230} style={{ objectFit: "cover", borderRadius: 14 }} /></div>
                <div className="project-body">
                  <div className="project-title">{p.title}</div>
                  <div className="project-desc">{p.description}</div>
                  {p.hasDetail && <button className="open-btn" onClick={() => setDetailOpen(true)}>Voir le projet réalisé</button>}
                  <div className="project-tags">{p.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              </RevealTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODAL ── */}
      {detailOpen && (
        <div className="modal-overlay" onClick={() => setDetailOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">Conception mécanique & dimensionnement</div>
              <button className="open-btn" onClick={() => setDetailOpen(false)}>Fermer</button>
            </div>
            <p className="modal-desc">Étude fonctionnelle, calculs de dimensionnement, modélisation 3D, simulation, fabrication, assemblage et validation expérimentale.</p>
            <div className="modal-gallery">
              {["/images/projet-meca.jpg", "/images/projet-meca-2.jpg", "/images/projet-meca-3.jpg"].map((src, i) => (
                <div key={i} className="modal-media"><Image src={src} alt={`Projet ${i + 1}`} width={400} height={300} style={{ objectFit: "cover" }} /></div>
              ))}
              <div className="modal-media"><video controls style={{ width: "100%", height: "100%" }}><source src="/images/projet-meca.mp4" type="video/mp4" /></video></div>
            </div>
          </div>
        </div>
      )}

      {/* ── COMPÉTENCES ── */}
      <section id="skills">
        <div className="container">
          <RevealBox><h2>Compétences</h2></RevealBox>
          <div className="skills-grid">
            {skillCategories.map((cat) => (
              <RevealTiltCard key={cat.title} className="skill-card">
                <h3>{cat.title}</h3>
                <ul className="skill-list">{cat.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </RevealTiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="container">
          <RevealBox><h2>Me contacter</h2></RevealBox>
          <div className="contact-grid">
            {contacts.map((c) => (
              <RevealTiltCard key={c.label} className="contact-card">
                <a href={c.href} target={c.external ? "_blank" : undefined} rel={c.external ? "noopener noreferrer" : undefined} download={c.download} style={{ display: "block" }}>
                  <div className="contact-icon">{c.icon}</div>
                  <h3>{c.label}</h3>
                  <p>{c.value}</p>
                </a>
              </RevealTiltCard>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div className="container"><p>&copy; 2026 Oussama REBAI. Tous droits réservés.</p></div>
      </footer>
    </>
  );
}