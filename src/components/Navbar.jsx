import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: "0 40px",
        height: 68,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(15,17,23,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(24px) saturate(1.4)" : "none",
        borderBottom: scrolled ? "1px solid var(--line)" : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Logo */}
      <button onClick={() => go("home")} style={{ background:"none", border:"none", cursor:"none", display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:36, height:36, borderRadius:10, background:"var(--g-main)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 16px rgba(108,99,255,0.4)" }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.85rem", color:"#fff" }}>HY</span>
        </div>
        <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:700, fontSize:"1rem", color:"var(--t1)", letterSpacing:"-0.01em" }}>
          Hanny<span style={{ color:"var(--indigo)" }}>.</span>
        </span>
      </button>

      {/* Desktop links */}
      <nav style={{ display:"flex", alignItems:"center", gap:6 }} className="desktop-nav">
        {links.map(l => (
          <button key={l.id} onClick={() => go(l.id)}
            style={{ background:"none", border:"none", cursor:"none", color:"var(--t2)", fontSize:"0.85rem", fontWeight:500, padding:"7px 14px", borderRadius:8, transition:"all 0.2s", fontFamily:"'Plus Jakarta Sans',sans-serif" }}
            onMouseEnter={e => { e.target.style.color = "var(--t1)"; e.target.style.background = "rgba(255,255,255,0.05)"; }}
            onMouseLeave={e => { e.target.style.color = "var(--t2)"; e.target.style.background = "none"; }}>
            {l.label}
          </button>
        ))}
        <a href="mailto:hannyyosephine37@gmail.com"
          style={{ marginLeft:8, padding:"8px 22px", borderRadius:10, background:"var(--g-main)", color:"#fff", fontWeight:600, fontSize:"0.85rem", textDecoration:"none", boxShadow:"0 4px 20px rgba(108,99,255,0.35)", transition:"all 0.2s" }}
          onMouseEnter={e => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 8px 28px rgba(108,99,255,0.5)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 20px rgba(108,99,255,0.35)"; }}>
          Hire Me
        </a>
      </nav>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)} className="hamburger" style={{ display:"none", background:"none", border:"1px solid var(--line2)", borderRadius:8, padding:"8px 10px", cursor:"none", flexDirection:"column", gap:5 }}>
        {[0,1,2].map(i => <span key={i} style={{ display:"block", width:18, height:1.5, background:"var(--t2)" }} />)}
      </button>

      {/* Mobile menu */}
      {open && (
        <div style={{ position:"fixed", top:68, left:0, right:0, bottom:0, background:"rgba(15,17,23,0.97)", backdropFilter:"blur(20px)", zIndex:190, padding:"40px 32px", display:"flex", flexDirection:"column", gap:4 }}>
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)}
              style={{ background:"none", border:"none", color:"var(--t1)", fontSize:"1.6rem", fontFamily:"'Syne',sans-serif", fontWeight:700, textAlign:"left", padding:"14px 0", borderBottom:"1px solid var(--line)", cursor:"none" }}>
              {l.label}
            </button>
          ))}
          <a href="mailto:hannyyosephine37@gmail.com" style={{ marginTop:24, background:"var(--g-main)", color:"#fff", padding:"16px", borderRadius:12, fontWeight:700, fontSize:"1rem", textDecoration:"none", textAlign:"center" }}>
            Get In Touch
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
          header { padding: 0 20px !important; }
        }
      `}</style>
    </motion.header>
  );
}
