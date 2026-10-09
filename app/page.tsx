"use client";

import { useEffect, useState } from "react";

const skills = [
  { title: "Molecular & Laboratory", items: ["PCR", "DNA extraction", "Gel electrophoresis", "Microscopy", "Sample handling", "Culture media preparation"] },
  { title: "Scientific Foundations", items: ["Molecular biology", "Microbiology", "Clinical laboratory procedures", "Biosafety & biosecurity", "Data interpretation"] },
  { title: "Professional Strengths", items: ["Analytical thinking", "Communication", "Teamwork", "Problem-solving", "Adaptability", "Time management", "Content writing"] },
];
const experience = [
  { n: "01", period: "DEC 2025 — PRESENT", role: "Science & Engineering Associate", org: "United Bank Limited (UBL)", type: "Banking · Associate programme", desc: "Building a strong understanding of banking operations, products and processes, with exposure to compliance, regulatory concepts and analytical work.", points: ["Banking operations & product knowledge", "KYC / AML concepts and compliance awareness", "Data interpretation, documentation and teamwork"] },
  { n: "02", period: "NOV 2025 — FEB 2026", role: "Laboratory Intern", org: "National Medical Center", type: "Clinical & molecular laboratories", desc: "Gained supervised practical exposure across hematology, microbiology, clinical pathology and molecular diagnostics.", points: ["Sample handling, culture media preparation and microscopy", "Observed DNA extraction and PCR setup", "Followed laboratory hygiene, biosafety and biosecurity protocols"] },
];
const projects = [
  { n: "01", category: "BIOTECHNOLOGY RESEARCH", title: "Plant-mediated silver nanoparticles", desc: "An academic research project exploring orange- or lemon-peel extracts as biological materials for silver nanoparticle synthesis.", tags: ["Green biotechnology", "Research", "Nanotechnology"], mark: "Ag", filter: "Research" },
  { n: "02", category: "MICROBIOLOGY · ACADEMIC", title: "Winogradsky Column", desc: "An exploration of microbial communities and how environmental gradients can shape visible layers of microbial activity.", tags: ["Microbiology", "Environment", "Observation"], mark: "BIO", filter: "Microbiology" },
  { n: "03", category: "PRODUCT CONCEPT", title: "Neem & Aloe Vera Handwash", desc: "An academic concept exploring plant-derived ingredients in a personal-care formulation, connecting biology with everyday applications.", tags: ["Plant-based", "Formulation", "Applied science"], mark: "N+A", filter: "Applied science" },
];
export default function Home() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState("All");
  const [scrollProgress, setScrollProgress] = useState(0);
  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    const targets = document.querySelectorAll(".content-section, .intro-strip, .experience-item, .value-cards article, .skill-card, .project-card, .education-item, .contact-detail, .quote-inner");
    targets.forEach((el) => el.classList.add("scroll-reveal"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    targets.forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", updateProgress);
      observer.disconnect();
    };
  }, []);
  const visibleProjects = projects.filter(p => filter === "All" || p.filter === filter);
  const closeMenu = () => setMenuOpen(false);
  return <div className={dark ? "site dark" : "site"}>
    <div className="scroll-progress" aria-hidden="true"><span style={{ width: `${scrollProgress}%` }} /></div>
    <div className="announcement"><span className="status-dot" /> OPEN TO PROFESSIONAL OPPORTUNITIES <span className="announcement-line" /> KARACHI, PAKISTAN</div>
    <header className="site-header">
      <a className="wordmark" href="#home" onClick={closeMenu}><span className="wordmark-symbol">W</span><span>Wara Batool<small>PERSONAL PORTFOLIO</small></span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? "×" : "☰"}</button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation"><a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#skills" onClick={closeMenu}>Expertise</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#education" onClick={closeMenu}>Education</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}>{dark ? "☼" : "◐"}</button><a className="header-cta" href="#contact">Let’s connect <span>↗</span></a></div>
    </header>
    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-rule" /> SCIENCE, SERVICE & CONTINUOUS GROWTH</div><h1>Curiosity with<br />a <em>purpose.</em></h1>
          <p className="hero-lede">I’m Wara Batool — a biotechnology graduate with hands-on laboratory exposure and a growing career in banking.</p><p className="hero-subtext">I bring scientific thinking, analytical care and a people-first approach to every new challenge.</p>
          <div className="hero-buttons"><a className="button button-primary" href="#work">Explore my work <span>↗</span></a><a className="text-link" href="#contact">Get in touch <span>→</span></a></div>
          <div className="hero-meta"><span><i /> Karachi, Pakistan</span><span>Biotechnology · Banking · Analysis</span></div>
        </div>
        <div className="hero-art reveal reveal-delay"><div className="art-spark spark-one">✳</div><div className="art-spark spark-two">✧</div><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-card"><div className="art-card-top"><span>WB / 2026</span><span>PORTFOLIO NO. 01</span></div><div className="portrait-placeholder"><div className="portrait-halo" /><div className="portrait-initials">W<span>.</span>B</div><div className="portrait-caption">SCIENCE MEETS POSSIBILITY</div></div><div className="art-card-bottom"><span>WARA BATool</span><span>01 — 04</span></div></div>
          <div className="floating-note note-top"><span className="note-icon">✳</span><span>Scientific mindset<small>Curious by nature</small></span></div><div className="floating-note note-bottom"><span className="note-icon note-icon-gold">↗</span><span>Always evolving<small>Learning in every role</small></span></div><div className="hero-side-label">ANALYTICAL · ADAPTABLE · AMBITIOUS</div>
        </div><a href="#about" className="scroll-cue"><span className="scroll-line" /> SCROLL TO DISCOVER</a>
      </section>
      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="strip-label">MY PERSPECTIVE</span><p>“A scientific mind, a collaborative spirit, and the courage to keep learning.”</p><span className="strip-mark">✳</span></div></section>
      <section className="section-wrap content-section" id="about"><div className="section-heading"><span className="section-index">01 / A LITTLE ABOUT ME</span><span className="section-decor">✳</span></div>
        <div className="about-grid"><h2>Different fields.<br />One <em>curious mind.</em></h2><div className="about-copy"><p className="large-copy">My journey connects the precision of biotechnology with the pace and responsibility of the banking sector.</p><p>From supervised laboratory procedures to learning the systems behind financial services, I value work that asks me to think clearly, communicate thoughtfully and keep improving. I enjoy bringing structure to complex tasks while staying open to new ideas and perspectives.</p><p>My goal is to keep building a career where analytical thinking, attention to detail and meaningful collaboration make a real difference.</p><a href="#experience" className="inline-link">Discover my journey <span>→</span></a></div></div>
        <div className="value-cards"><article><span className="value-num">01</span><h3>Scientific thinking</h3><p>Observation, method and attention to detail guide the way I approach problems.</p></article><article><span className="value-num">02</span><h3>Adaptable by design</h3><p>Comfortable learning across disciplines, systems and new working environments.</p></article><article><span className="value-num">03</span><h3>People-first work</h3><p>Clear communication, collaboration and professionalism in every interaction.</p></article></div>
      </section>
      <section className="experience-section" id="experience"><div className="section-wrap content-section"><div className="section-heading"><span className="section-index">02 / EXPERIENCE</span><span className="section-decor">↗</span></div><div className="section-title-row"><h2>Learning by <em>doing.</em></h2><p>Each experience adds a new perspective — from the laboratory bench to the world of banking.</p></div>
        <div className="timeline">{experience.map(item => <article className="experience-item" key={item.n}><div className="timeline-number">{item.n}</div><div className="experience-date">{item.period}</div><div className="experience-main"><div className="experience-title-line"><div><h3>{item.role}</h3><p className="organisation">{item.org}</p></div><span className="experience-type">{item.type}</span></div><p className="experience-description">{item.desc}</p><ul>{item.points.map(point => <li key={point}><span>↗</span>{point}</li>)}</ul></div></article>)}</div>
      </div></section>
      <section className="section-wrap content-section skills-section" id="skills"><div className="section-heading"><span className="section-index">03 / EXPERTISE</span><span className="section-decor">✳</span></div><div className="section-title-row"><h2>Tools to think.<br /><em>Skills to grow.</em></h2><p>A growing set of scientific, practical and interpersonal skills — strengthened through education, training and experience.</p></div>
        <div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.title}><span className="skill-number">0{i + 1}</span><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div><p className="skills-note"><span>✳</span> Laboratory procedures were performed or observed under supervision where applicable.</p>
      </section>
      <section className="work-section" id="work"><div className="section-wrap content-section"><div className="section-heading"><span className="section-index">04 / SELECTED WORK</span><span className="section-decor">↗</span></div><div className="section-title-row"><h2>Ideas, research<br />& <em>exploration.</em></h2><p>A selection of academic work and concepts that reflect my interest in biotechnology, microorganisms and practical applications of science.</p></div>
        <div className="project-filters" aria-label="Filter projects">{["All", "Research", "Microbiology", "Applied science"].map(item => <button className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)} key={item}>{item}</button>)}</div>
        <div className="projects-grid">{visibleProjects.map(project => <article className="project-card" key={project.n}><div className={"project-visual project-visual-" + project.n}><span className="project-visual-label">ACADEMIC NOTEBOOK / {project.n}</span><span className="project-mark">{project.mark}</span><span className="project-visual-bottom">WARA BATool · STUDY & RESEARCH</span></div><div className="project-content"><span className="project-category">{project.category}</span><h3>{project.title}</h3><p>{project.desc}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div></article>)}</div><p className="project-disclaimer">Academic concepts are presented as portfolio summaries. Detailed methods, results and project dates can be added when supporting materials are available.</p>
      </div></section>
      <section className="section-wrap content-section education-section" id="education"><div className="section-heading"><span className="section-index">05 / EDUCATION & CREDENTIALS</span><span className="section-decor">✳</span></div><div className="education-grid"><div><h2>Built on a<br /><em>strong foundation.</em></h2><p className="education-intro">A foundation in biological science, with an ongoing commitment to professional learning.</p></div><div className="education-list"><article className="education-item"><span className="education-year">2022 — 2025</span><div><h3>Bachelor’s Degree in Biotechnology</h3><p>University of Karachi</p><span>Karachi, Pakistan</span></div><strong>CGPA 3.25</strong></article><article className="education-item credential-item"><span className="education-year">2024</span><div><h3>2nd International Conference for Biotechnology</h3><p>Department of Biotechnology, University of Karachi</p><span>Conference participation</span></div></article><article className="education-item credential-item"><span className="education-year">2022</span><div><h3>Biosafety & Biosecurity for Young Scientists</h3><p>Department of Biotechnology, University of Karachi</p><span>Training / certificate</span></div></article></div></div></section>
      <section className="quote-band"><div className="section-wrap quote-inner"><span className="quote-symbol">“</span><blockquote>Growth happens when we stay curious, work with intention, and remain open to what comes next.</blockquote><span className="quote-credit">WARA BATool <i>·</i> PERSONAL PHILOSOPHY</span></div></section>
      <section className="section-wrap content-section contact-section" id="contact"><div className="section-heading"><span className="section-index">06 / LET’S CONNECT</span><span className="section-decor">↗</span></div><div className="contact-grid"><div><h2>Good things<br />start with <em>hello.</em></h2><p className="contact-lede">Open to conversations, professional opportunities and meaningful collaborations across science, banking and beyond.</p><a className="button button-primary" href="mailto:warabatool67@gmail.com?subject=Professional%20enquiry%20for%20Wara%20Batool">Email Wara <span>↗</span></a><div className="contact-socials"><a href="https://www.linkedin.com/in/wara-batool-a0ab0a315/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://www.instagram.com/warabatool26/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://wa.me/923302635081" target="_blank" rel="noreferrer">WhatsApp ↗</a></div></div>
        <div className="contact-details"><div className="contact-detail"><span>EMAIL</span><a href="mailto:warabatool67@gmail.com">warabatool67@gmail.com ↗</a></div><div className="contact-detail"><span>PHONE / WHATSAPP</span><a href="https://wa.me/923302635081" target="_blank" rel="noreferrer">+92 330 263 5081 ↗</a></div><div className="contact-detail"><span>LOCATION</span><p>Karachi, Pakistan</p></div><div className="contact-detail"><span>CURRICULUM VITAE</span><p className="cv-note">Updated CV will be available here soon. <a href="mailto:warabatool67@gmail.com?subject=Request%20for%20Wara%20Batool%27s%20CV">Request a copy ↗</a></p></div></div></div>
      </section>
    </main>
    <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">W</span><span>Wara Batool<small>PERSONAL PORTFOLIO</small></span></a><p>Thoughtfully curious. Always becoming.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© 2026 Wara Batool</span></div></footer>
  </div>;
}
