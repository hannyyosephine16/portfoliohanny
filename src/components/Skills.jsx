import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillGroups, stack } from "../data";

function Bar({ name, pct, color, inView, delay }) {
  return (
    <div style={{ marginBottom:18 }}>
      <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
        <span style={{ fontSize:"0.84rem", color:"var(--t2)", fontWeight:500 }}>{name}</span>
        <span style={{ fontSize:"0.75rem", fontWeight:700, color }}>
          {pct}<span style={{ fontSize:"0.65rem", opacity:0.6 }}>%</span>
        </span>
      </div>
      <div style={{ height:5, background:"var(--bg3)", borderRadius:99, overflow:"hidden" }}>
        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.1, delay, ease: [0.4, 0, 0.2, 1] }}
          style={{ height:"100%", width:`${pct}%`, background:`linear-gradient(to right, ${color}, ${color}99)`, transformOrigin:"left", borderRadius:99 }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="skills" style={{ padding:"100px 48px", background:"var(--bg2)" }} ref={ref}>
      <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65}} style={{marginBottom:52}}>
        <span style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--mint)", display:"block", marginBottom:10 }}>Skills & Expertise</span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--t1)" }}>
          What I <span className="grad-cool">bring to the table</span>
        </h2>
      </motion.div>

      {/* 3-col skill bars */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16, marginBottom:20 }} className="skills-grid">
        {skillGroups.map((g, gi) => (
          <motion.div key={gi}
            initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.55, delay:gi*0.12}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"28px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(to right, ${g.color}, transparent)`, borderRadius:"16px 16px 0 0" }} />
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:g.color, boxShadow:`0 0 8px ${g.color}` }} />
              <p style={{ fontSize:"0.75rem", fontWeight:700, color:g.color, letterSpacing:"0.1em", textTransform:"uppercase" }}>{g.label}</p>
            </div>
            {g.items.map((s, i) => (
              <Bar key={s.name} name={s.name} pct={s.pct} color={g.color} inView={inView} delay={gi*0.12+i*0.09} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Tools grid — nice chip cloud */}
      <motion.div initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.55,duration:0.6}}
        style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"28px 32px" }}>
        <p style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.16em", textTransform:"uppercase", color:"var(--t3)", marginBottom:20 }}>All Tools & Technologies</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }} className="stack-grid">
          {stack.map((s, i) => {
            const cols = ["var(--indigo)","var(--coral)","var(--mint)","var(--amber)"];
            return (
              <div key={i}>
                <p style={{ fontSize:"0.68rem", fontWeight:700, color:cols[i], letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:10 }}>{s.cat}</p>
                <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
                  {s.items.map(item => (
                    <span key={item} style={{ fontSize:"0.8rem", fontWeight:500, color:"var(--t2)", background:"var(--bg3)", border:"1px solid var(--line)", borderRadius:8, padding:"6px 12px", transition:"all 0.2s" }}
                      onMouseEnter={e=>{ e.target.style.color=cols[i]; e.target.style.borderColor=`${cols[i]}30`; }}
                      onMouseLeave={e=>{ e.target.style.color="var(--t2)"; e.target.style.borderColor="var(--line)"; }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <style>{`
        @media(max-width:768px){
          #skills{padding:80px 20px !important;}
          .skills-grid{grid-template-columns:1fr !important;}
          .stack-grid{grid-template-columns:repeat(2,1fr) !important;}
        }
      `}</style>
    </section>
  );
}
