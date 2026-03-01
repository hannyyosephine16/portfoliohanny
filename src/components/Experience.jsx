import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { experiences } from "../data";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [active, setActive] = useState(0);
  const exp = experiences[active];

  return (
    <section id="experience" style={{ padding:"100px 48px", background:"var(--bg2)" }} ref={ref}>

      {/* Section header */}
      <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65}} style={{ marginBottom:52 }}>
        <span style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--indigo)", display:"block", marginBottom:10 }}>Work Experience</span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--t1)" }}>
          Where I've <span className="grad-text">worked</span>
        </h2>
      </motion.div>

      <div style={{ display:"grid", gridTemplateColumns:"260px 1fr", gap:16 }} className="exp-grid">
        {/* Tab sidebar */}
        <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
          {experiences.map((e, i) => (
            <motion.button key={i}
              initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}} transition={{delay:i*0.08, duration:0.5}}
              onClick={() => setActive(i)}
              style={{
                textAlign:"left", cursor:"none", padding:"16px 18px", borderRadius:12,
                background: active===i ? "var(--card)" : "transparent",
                border: active===i ? `1px solid ${e.color}30` : "1px solid transparent",
                borderLeft: active===i ? `3px solid ${e.color}` : "3px solid transparent",
                transition:"all 0.25s",
              }}>
              {e.status && <span style={{ fontSize:"0.6rem", background:"rgba(78,205,196,0.15)", color:"var(--mint)", border:"1px solid rgba(78,205,196,0.3)", borderRadius:100, padding:"2px 8px", fontWeight:700, display:"inline-block", marginBottom:6 }}>● {e.status}</span>}
              <p style={{ fontSize:"0.85rem", fontWeight:700, color: active===i ? "var(--t1)" : "var(--t2)", marginBottom:3, lineHeight:1.3 }}>{e.role}</p>
              <p style={{ fontSize:"0.75rem", color: active===i ? e.color : "var(--t3)", fontWeight:500 }}>{e.company}</p>
              <p style={{ fontSize:"0.68rem", color:"var(--t3)", marginTop:3 }}>{e.period}</p>
            </motion.button>
          ))}
        </div>

        {/* Detail */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-10}} transition={{duration:0.35}}
            style={{ background:"var(--card)", border:`1px solid ${exp.color}20`, borderRadius:16, padding:"36px 40px", position:"relative", overflow:"hidden" }}>

            <div style={{ position:"absolute", top:-60, right:-60, width:200, height:200, borderRadius:"50%", background:`radial-gradient(circle, ${exp.color}10 0%, transparent 70%)`, pointerEvents:"none" }} />

            {/* Header */}
            <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:12, marginBottom:24 }}>
              <div>
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:8 }}>
                  <div style={{ width:10, height:10, borderRadius:"50%", background:exp.color, boxShadow:`0 0 10px ${exp.color}80` }} />
                  <span style={{ fontSize:"0.75rem", fontWeight:600, color:"var(--t3)" }}>{exp.period}</span>
                  <span style={{ fontSize:"0.68rem", background:"var(--bg3)", color:"var(--t2)", border:"1px solid var(--line)", borderRadius:6, padding:"2px 10px", fontWeight:500 }}>{exp.type}</span>
                </div>
                <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.35rem", fontWeight:800, color:"var(--t1)", marginBottom:4 }}>{exp.role}</h3>
                <p style={{ fontSize:"0.9rem", color:exp.color, fontWeight:600 }}>{exp.company}</p>
                {exp.product && <p style={{ fontSize:"0.76rem", color:"var(--t3)", marginTop:4 }}>↳ {exp.product}</p>}
              </div>
            </div>

            {/* Metric chips */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24, paddingBottom:24, borderBottom:"1px solid var(--line)" }}>
              {exp.metrics.map((m,i) => (
                <span key={i} style={{ fontSize:"0.75rem", fontWeight:600, color:exp.color, background:`${exp.color}10`, border:`1px solid ${exp.color}25`, borderRadius:8, padding:"5px 12px" }}>{m}</span>
              ))}
            </div>

            {/* Bullets */}
            <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
              {exp.points.map((pt, i) => (
                <div key={i} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                  <span style={{ width:6, height:6, borderRadius:"50%", background:exp.color, marginTop:7, flexShrink:0, display:"block" }} />
                  <p style={{ fontSize:"0.88rem", color:"var(--t2)", lineHeight:1.8 }}>{pt}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        @media(max-width:768px){
          #experience{padding:80px 20px !important;}
          .exp-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
