import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "../data";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="contact" style={{ padding:"100px 48px 120px", background:"var(--bg2)", position:"relative", overflow:"hidden" }} ref={ref}>
      {/* Gradient bg orbs */}
      <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:700, height:400, borderRadius:"50%", background:"radial-gradient(ellipse, rgba(108,99,255,0.08) 0%, transparent 65%)", pointerEvents:"none" }} />

      <div style={{ maxWidth:720, margin:"0 auto", textAlign:"center", position:"relative", zIndex:1 }}>
        <motion.div initial={{opacity:0,y:28}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7}}>

          {/* Badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(78,205,196,0.1)", border:"1px solid rgba(78,205,196,0.25)", borderRadius:100, padding:"6px 18px 6px 12px", marginBottom:32 }}>
            <span style={{ width:7, height:7, borderRadius:"50%", background:"#4ECDC4", boxShadow:"0 0 8px #4ECDC4", display:"inline-block" }} />
            <span style={{ fontSize:"0.78rem", fontWeight:600, color:"var(--mint)" }}>Open to opportunities</span>
          </div>

          <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2.4rem,6.5vw,5rem)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.05, marginBottom:20 }}>
            Let's build<br/>
            <span className="grad-text">something great</span>
          </h2>

          <p style={{ fontSize:"1rem", color:"var(--t2)", lineHeight:1.85, maxWidth:520, margin:"0 auto 48px", fontWeight:400 }}>
            Looking for opportunities in software development, QA engineering, or business analysis — especially in FinTech and digital product teams. Let's talk!
          </p>

          {/* Buttons */}
          <div style={{ display:"flex", justifyContent:"center", gap:12, marginBottom:64, flexWrap:"wrap" }}>
            <a href={`mailto:${profile.email}`}
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--g-main)", color:"#fff", padding:"14px 32px", borderRadius:12, fontWeight:700, fontSize:"0.95rem", textDecoration:"none", boxShadow:"0 6px 28px rgba(108,99,255,0.4)", transition:"all 0.25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 40px rgba(108,99,255,0.55)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 6px 28px rgba(108,99,255,0.4)"; }}>
              Send Email ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.06)", color:"var(--t1)", padding:"13px 28px", borderRadius:12, fontWeight:600, fontSize:"0.95rem", textDecoration:"none", border:"1px solid var(--line2)", transition:"all 0.25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor="var(--line2)"; }}>
              LinkedIn
            </a>
            <a href={profile.whatsapp} target="_blank" rel="noreferrer"
              style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.06)", color:"var(--t1)", padding:"13px 28px", borderRadius:12, fontWeight:600, fontSize:"0.95rem", textDecoration:"none", border:"1px solid var(--line2)", transition:"all 0.25s" }}
              onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
              onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor="var(--line2)"; }}>
              WhatsApp
            </a>
          </div>

          {/* Info strip */}
          <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{delay:0.4}}
            style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:"var(--line)", borderRadius:16, overflow:"hidden", border:"1px solid var(--line2)" }}>
            {[
              { emoji:"✉️", label:"Email", val:profile.email, href:`mailto:${profile.email}` },
              { emoji:"📱", label:"Phone", val:profile.phone, href:profile.whatsapp },
              { emoji:"📍", label:"Location", val:profile.location },
            ].map(item => (
              <div key={item.label} style={{ background:"var(--card)", padding:"22px 16px", textAlign:"center" }}>
                <p style={{ fontSize:"1.1rem", marginBottom:6 }}>{item.emoji}</p>
                <p style={{ fontSize:"0.66rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", marginBottom:6 }}>{item.label}</p>
                {item.href
                  ? <a href={item.href} target={item.href.startsWith("http")?"_blank":undefined} rel="noreferrer"
                      style={{ fontSize:"0.82rem", fontWeight:500, color:"var(--t2)", textDecoration:"none", transition:"color 0.2s" }}
                      onMouseEnter={e=>e.target.style.color="var(--indigo)"} onMouseLeave={e=>e.target.style.color="var(--t2)"}>
                      {item.val}
                    </a>
                  : <p style={{ fontSize:"0.82rem", fontWeight:500, color:"var(--t2)" }}>{item.val}</p>
                }
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media(max-width:768px){
          #contact{padding:80px 20px 100px !important;}
          #contact > div > div > div:last-child{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
