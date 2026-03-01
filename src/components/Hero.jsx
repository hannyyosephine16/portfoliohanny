import { motion } from "framer-motion";
import { profile, metrics, stack } from "../data";

const f = (d = 0) => ({ initial:{opacity:0,y:28}, animate:{opacity:1,y:0}, transition:{duration:0.75, delay:d, ease:[0.22,1,0.36,1]} });

export default function Hero() {
  return (
    <section id="home" style={{ minHeight:"100vh", display:"flex", flexDirection:"column", justifyContent:"center", padding:"130px 48px 80px", position:"relative", overflow:"hidden" }}>

      {/* Soft blurred orbs — more visible but pleasant */}
      <div style={{ position:"absolute", top:"-10%", right:"15%", width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(108,99,255,0.14) 0%, transparent 65%)", pointerEvents:"none", filter:"blur(1px)" }} />
      <div style={{ position:"absolute", bottom:"5%", left:"-5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(78,205,196,0.1) 0%, transparent 65%)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", top:"50%", right:"5%", width:300, height:300, borderRadius:"50%", background:"radial-gradient(circle, rgba(255,107,107,0.07) 0%, transparent 65%)", pointerEvents:"none" }} />

      {/* Available badge */}
      <motion.div {...f(0.05)} style={{ alignSelf:"flex-start", display:"inline-flex", alignItems:"center", gap:8, background:"rgba(78,205,196,0.1)", border:"1px solid rgba(78,205,196,0.25)", borderRadius:100, padding:"6px 16px 6px 10px", marginBottom:36 }}>
        <span style={{ width:8, height:8, borderRadius:"50%", background:"#4ECDC4", boxShadow:"0 0 10px #4ECDC4", display:"inline-block" }} />
        <span style={{ fontSize:"0.78rem", fontWeight:600, color:"#4ECDC4", letterSpacing:"0.03em" }}>Open to opportunities · Tangerang, Indonesia</span>
      </motion.div>

      {/* Name */}
      <motion.div {...f(0.12)}>
        <h1 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(3.2rem,8.5vw,8rem)", fontWeight:800, lineHeight:0.95, letterSpacing:"-0.03em", marginBottom:20 }}>
          <span style={{ display:"block", color:"var(--t1)" }}>Hanny</span>
          <span className="grad-text" style={{ display:"block" }}>Yosephine</span>
        </h1>
      </motion.div>

      {/* Role pills */}
      <motion.div {...f(0.22)} style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:28 }}>
        {[
          { label:"Software Developer", color:"var(--indigo)", bg:"rgba(108,99,255,0.12)" },
          { label:"QA Engineer", color:"var(--coral)", bg:"rgba(255,107,107,0.10)" },
          { label:"Business Analyst", color:"var(--mint)", bg:"rgba(78,205,196,0.10)" },
        ].map(r => (
          <span key={r.label} style={{ fontSize:"0.82rem", fontWeight:600, color:r.color, background:r.bg, border:`1px solid ${r.color}30`, borderRadius:100, padding:"5px 14px" }}>{r.label}</span>
        ))}
      </motion.div>

      {/* Summary */}
      <motion.p {...f(0.3)} style={{ fontSize:"1.05rem", lineHeight:1.85, color:"var(--t2)", maxWidth:560, marginBottom:40, fontWeight:400 }}>
        {profile.summary}
      </motion.p>

      {/* CTA row */}
      <motion.div {...f(0.38)} style={{ display:"flex", gap:12, marginBottom:64, flexWrap:"wrap" }}>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--g-main)", color:"#fff", padding:"13px 28px", borderRadius:12, fontWeight:700, fontSize:"0.9rem", textDecoration:"none", boxShadow:"0 6px 24px rgba(108,99,255,0.38)", transition:"all 0.25s" }}
          onMouseEnter={e=>{ e.currentTarget.style.transform="translateY(-3px)"; e.currentTarget.style.boxShadow="0 12px 36px rgba(108,99,255,0.5)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 6px 24px rgba(108,99,255,0.38)"; }}>
          View LinkedIn <span>↗</span>
        </a>
        <a href={profile.whatsapp} target="_blank" rel="noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.05)", color:"var(--t1)", padding:"12px 24px", borderRadius:12, fontWeight:600, fontSize:"0.9rem", textDecoration:"none", border:"1px solid var(--line2)", transition:"all 0.25s" }}
          onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor="var(--line2)"; }}>
          WhatsApp
        </a>
        <a href="mailto:hannyyosephine37@gmail.com"
          style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(255,255,255,0.05)", color:"var(--t1)", padding:"12px 24px", borderRadius:12, fontWeight:600, fontSize:"0.9rem", textDecoration:"none", border:"1px solid var(--line2)", transition:"all 0.25s" }}
          onMouseEnter={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.09)"; e.currentTarget.style.borderColor="rgba(255,255,255,0.18)"; }}
          onMouseLeave={e=>{ e.currentTarget.style.background="rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor="var(--line2)"; }}>
          Email
        </a>
      </motion.div>

      {/* Metric cards */}
      <motion.div {...f(0.46)} style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12, maxWidth:680, marginBottom:44 }} className="metrics-grid">
        {metrics.map((m, i) => {
          const colors = ["var(--indigo)","var(--coral)","var(--mint)","var(--amber)"];
          return (
            <div key={i} style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:14, padding:"18px 16px", position:"relative", overflow:"hidden", transition:"transform 0.2s" }}
              onMouseEnter={e=>e.currentTarget.style.transform="translateY(-3px)"}
              onMouseLeave={e=>e.currentTarget.style.transform="none"}>
              <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:`linear-gradient(to right, ${colors[i]}, transparent)` }} />
              <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.75rem", fontWeight:800, color:colors[i], lineHeight:1, marginBottom:4 }}>{m.value}</p>
              <p style={{ fontSize:"0.72rem", fontWeight:600, color:"var(--t1)", marginBottom:2, lineHeight:1.3 }}>{m.label}</p>
              <p style={{ fontSize:"0.66rem", color:"var(--t3)" }}>{m.sub}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Stack chips */}
      <motion.div {...f(0.54)}>
        <p style={{ fontSize:"0.68rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", fontWeight:600, marginBottom:12 }}>Stack</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
          {stack.flatMap(s => s.items).map((item, i) => (
            <span key={i} style={{ fontSize:"0.78rem", fontWeight:500, color:"var(--t2)", background:"var(--card)", border:"1px solid var(--line)", borderRadius:8, padding:"5px 12px", transition:"all 0.2s" }}
              onMouseEnter={e=>{ e.target.style.color="var(--t1)"; e.target.style.borderColor="var(--line2)"; }}
              onMouseLeave={e=>{ e.target.style.color="var(--t2)"; e.target.style.borderColor="var(--line)"; }}>
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <style>{`
        @media(max-width:768px){
          #home { padding: 110px 20px 60px !important; }
          .metrics-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
