import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects } from "../data";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" style={{ padding:"100px 48px", background:"var(--bg)" }} ref={ref}>
      <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65}} style={{marginBottom:52}}>
        <span style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--coral)", display:"block", marginBottom:10 }}>Selected Projects</span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--t1)" }}>
          Things I've <span className="grad-text">built</span>
        </h2>
      </motion.div>

      {/* Featured card — big */}
      <motion.div initial={{opacity:0,y:32}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7,delay:0.15}}
        style={{ background:"var(--card)", border:"1px solid rgba(108,99,255,0.2)", borderRadius:20, padding:"44px", marginBottom:16, display:"grid", gridTemplateColumns:"1fr 380px", gap:40, alignItems:"center", position:"relative", overflow:"hidden", transition:"all 0.3s" }}
        className="proj-featured"
        onMouseEnter={e=>{ e.currentTarget.style.borderColor="rgba(108,99,255,0.4)"; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow="0 20px 60px rgba(108,99,255,0.12)"; }}
        onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(108,99,255,0.2)"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
        <div style={{position:"absolute",top:-80,right:-80,width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle,rgba(108,99,255,0.08),transparent 70%)",pointerEvents:"none"}} />
        <div>
          <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
            <span style={{ fontSize:"0.68rem", fontWeight:700, background:"rgba(108,99,255,0.15)", color:"var(--indigo)", border:"1px solid rgba(108,99,255,0.25)", borderRadius:8, padding:"3px 12px" }}>Featured · {projects[0].year}</span>
            <span style={{ fontSize:"0.68rem", color:"var(--t3)", fontWeight:500 }}>{projects[0].type}</span>
          </div>
          <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.6rem", fontWeight:800, color:"var(--t1)", marginBottom:12, lineHeight:1.2 }}>{projects[0].title}</h3>
          <p style={{ fontSize:"0.9rem", color:"var(--t2)", lineHeight:1.85, marginBottom:24 }}>{projects[0].desc}</p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:24 }}>
            {projects[0].stack.map(s => (
              <span key={s} style={{ fontSize:"0.75rem", fontWeight:500, color:"var(--indigo)", background:"rgba(108,99,255,0.1)", borderRadius:8, padding:"5px 12px", border:"1px solid rgba(108,99,255,0.18)" }}>{s}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
            {projects[0].outcomes.map((o,i) => (
              <span key={i} style={{ fontSize:"0.75rem", color:"var(--t2)", display:"flex", alignItems:"center", gap:6 }}>
                <span style={{ width:5, height:5, borderRadius:"50%", background:"var(--mint)", display:"inline-block" }} />{o}
              </span>
            ))}
          </div>
        </div>
        {/* Visual placeholder */}
        <div style={{ background:"var(--card2)", borderRadius:14, height:240, display:"flex", alignItems:"center", justifyContent:"center", position:"relative", overflow:"hidden", border:"1px solid var(--line2)" }}>
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(108,99,255,0.08) 0%, rgba(78,205,196,0.05) 100%)" }} />
          <div style={{ position:"absolute", bottom:0, left:0, right:0, height:3, background:"var(--g-main)" }} />
          <div style={{ textAlign:"center", position:"relative", zIndex:1 }}>
            <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"3.5rem", fontWeight:800, color:"rgba(108,99,255,0.15)", lineHeight:1 }}>01</p>
            <div style={{ display:"flex", flexDirection:"column", gap:8, marginTop:12 }}>
              {projects[0].outcomes.map((o,i) => (
                <div key={i} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid var(--line2)", borderRadius:8, padding:"7px 16px", fontSize:"0.75rem", color:"var(--t2)" }}>
                  ✓ {o}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3-column grid */}
      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }} className="proj-grid">
        {projects.slice(1).map((p, i) => (
          <motion.div key={p.id}
            initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.55, delay:0.3+i*0.1}}
            style={{ background:"var(--card)", border:"1px solid var(--line)", borderRadius:16, padding:"28px", position:"relative", overflow:"hidden", transition:"all 0.3s", cursor:"default" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor=`${p.color}35`; e.currentTarget.style.transform="translateY(-4px)"; e.currentTarget.style.boxShadow=`0 16px 40px ${p.color}10`; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--line)"; e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="none"; }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(to right, ${p.color}, transparent)`, borderRadius:"16px 16px 0 0" }} />
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:16 }}>
              <span style={{ fontFamily:"'Syne',sans-serif", fontSize:"2rem", fontWeight:800, color:`${p.color}20`, lineHeight:1 }}>{p.id}</span>
              <span style={{ fontSize:"0.68rem", color:p.color, fontWeight:700, background:`${p.color}12`, borderRadius:6, padding:"3px 10px" }}>{p.year}</span>
            </div>
            <p style={{ fontSize:"0.68rem", color:"var(--t3)", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:8 }}>{p.type}</p>
            <h3 style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.05rem", fontWeight:800, color:"var(--t1)", marginBottom:12, lineHeight:1.3 }}>{p.title}</h3>
            <p style={{ fontSize:"0.82rem", color:"var(--t2)", lineHeight:1.8, marginBottom:20 }}>{p.desc}</p>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
              {p.stack.map(s => (
                <span key={s} style={{ fontSize:"0.7rem", fontWeight:500, color:"var(--t3)", background:"var(--bg3)", borderRadius:6, padding:"3px 10px", border:"1px solid var(--line)" }}>{s}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          #projects{padding:80px 20px !important;}
          .proj-featured{grid-template-columns:1fr !important;}
          .proj-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
