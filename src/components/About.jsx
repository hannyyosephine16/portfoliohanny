import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education, certs, leadership, profile } from "../data";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" style={{ padding:"100px 48px", background:"var(--bg)" }} ref={ref}>
      <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65}} style={{marginBottom:52}}>
        <span style={{ fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"var(--violet)", display:"block", marginBottom:10 }}>About Me</span>
        <h2 style={{ fontFamily:"'Syne',sans-serif", fontSize:"clamp(2rem,4vw,3rem)", fontWeight:800, letterSpacing:"-0.02em", color:"var(--t1)" }}>
          The person <span className="grad-text">behind the work</span>
        </h2>
      </motion.div>

      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }} className="about-grid">
        {/* Left column */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>

          {/* Profile card */}
          <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.1,duration:0.6}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"28px", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:-50, right:-50, width:160, height:160, borderRadius:"50%", background:"radial-gradient(circle,rgba(108,99,255,0.1),transparent 70%)" }} />
            <div style={{ display:"flex", alignItems:"center", gap:16, marginBottom:20 }}>
              <div style={{ width:52, height:52, borderRadius:14, background:"var(--g-main)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, boxShadow:"0 6px 20px rgba(108,99,255,0.35)" }}>
                <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"1rem", color:"#fff" }}>HY</span>
              </div>
              <div style={{ flex:1 }}>
                <p style={{ fontWeight:700, fontSize:"0.95rem", color:"var(--t1)", marginBottom:2 }}>{profile.name}</p>
                <p style={{ fontSize:"0.75rem", color:"var(--t3)" }}>{profile.location}</p>
              </div>
              <span style={{ fontSize:"0.65rem", background:"rgba(78,205,196,0.12)", color:"var(--mint)", border:"1px solid rgba(78,205,196,0.25)", borderRadius:100, padding:"4px 12px", fontWeight:700, whiteSpace:"nowrap" }}>Available</span>
            </div>
            <p style={{ fontSize:"0.87rem", lineHeight:1.85, color:"var(--t2)" }}>
              I build at the intersection of <strong style={{color:"var(--t1)"}}>engineering and business</strong> — delivering mobile banking features used by real customers, running 500+ QA test cycles, and ensuring product requirements are clearly translated into working software.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.18,duration:0.6}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"24px 28px" }}>
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", marginBottom:16 }}>Education</p>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:10, marginBottom:14 }}>
              <div>
                <p style={{ fontWeight:700, fontSize:"0.92rem", color:"var(--t1)", marginBottom:3 }}>{education.degree}</p>
                <p style={{ fontSize:"0.82rem", color:"var(--indigo)", fontWeight:600 }}>{education.school}</p>
                <p style={{ fontSize:"0.72rem", color:"var(--t3)", marginTop:2 }}>{education.period}</p>
              </div>
              <div style={{ background:"rgba(78,205,196,0.1)", border:"1px solid rgba(78,205,196,0.2)", borderRadius:10, padding:"8px 14px", textAlign:"center" }}>
                <p style={{ fontFamily:"'Syne',sans-serif", fontSize:"1.2rem", fontWeight:800, color:"var(--mint)", lineHeight:1 }}>{education.gpa}</p>
                <p style={{ fontSize:"0.62rem", color:"var(--t3)", fontWeight:600, marginTop:2 }}>GPA</p>
              </div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:6, paddingTop:14, borderTop:"1px solid var(--line)" }}>
              {education.courses.map(c => (
                <span key={c} style={{ fontSize:"0.68rem", fontWeight:500, color:"var(--t3)", background:"var(--bg3)", borderRadius:6, padding:"3px 10px", border:"1px solid var(--line)" }}>{c}</span>
              ))}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.24,duration:0.6}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"24px 28px" }}>
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", marginBottom:16 }}>Leadership</p>
            {leadership.map((l, i) => (
              <div key={i} style={{ display:"flex", gap:14, alignItems:"flex-start", marginBottom:i<leadership.length-1?16:0, paddingBottom:i<leadership.length-1?16:0, borderBottom:i<leadership.length-1?"1px solid var(--line)":"none" }}>
                <div style={{ width:36, height:36, borderRadius:10, background:"rgba(155,143,255,0.12)", border:"1px solid rgba(155,143,255,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:"1rem" }}>🏛</div>
                <div>
                  <p style={{ fontSize:"0.84rem", fontWeight:700, color:"var(--t1)", marginBottom:2 }}>{l.role}</p>
                  <p style={{ fontSize:"0.75rem", color:"var(--violet)", fontWeight:500, marginBottom:2 }}>{l.org}</p>
                  <p style={{ fontSize:"0.72rem", color:"var(--t3)" }}>{l.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column */}
        <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
          {/* Certs */}
          <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.2,duration:0.6}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"24px 28px" }}>
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", marginBottom:16 }}>Certifications & Awards</p>
            {certs.map((c, i) => (
              <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 0", borderBottom:i<certs.length-1?"1px solid var(--line)":"none" }}>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <div style={{ width:32, height:32, borderRadius:8, background:"rgba(255,181,71,0.1)", border:"1px solid rgba(255,181,71,0.2)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"0.85rem" }}>🏅</div>
                  <p style={{ fontSize:"0.84rem", fontWeight:600, color:"var(--t1)" }}>{c.name}</p>
                </div>
                <span style={{ fontSize:"0.72rem", color:"var(--amber)", fontWeight:600, background:"rgba(255,181,71,0.08)", borderRadius:6, padding:"3px 10px", whiteSpace:"nowrap", marginLeft:10 }}>{c.issuer}</span>
              </div>
            ))}
          </motion.div>

          {/* Quick facts — bento style */}
          <motion.div initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}} transition={{delay:0.3,duration:0.6}}
            style={{ background:"var(--card)", border:"1px solid var(--line2)", borderRadius:16, padding:"24px 28px" }}>
            <p style={{ fontSize:"0.7rem", fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--t3)", marginBottom:16 }}>Quick Facts</p>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10 }}>
              {[
                { icon:"📍", label:"Location", val:"Tangerang, Indonesia" },
                { icon:"🌏", label:"English", val:"DET Score: 100" },
                { icon:"✈️", label:"Mobility", val:"Willing to relocate" },
                { icon:"💼", label:"Open to", val:"Full-time, Contract" },
                { icon:"🏦", label:"Domain", val:"FinTech · Digital Banking" },
                { icon:"🟢", label:"Status", val:"Available now" },
              ].map((f, i) => (
                <div key={i} style={{ background:"var(--bg3)", border:"1px solid var(--line)", borderRadius:10, padding:"12px 14px" }}>
                  <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:4 }}>
                    <span style={{ fontSize:"0.9rem" }}>{f.icon}</span>
                    <span style={{ fontSize:"0.64rem", fontWeight:700, color:"var(--t3)", letterSpacing:"0.1em", textTransform:"uppercase" }}>{f.label}</span>
                  </div>
                  <p style={{ fontSize:"0.8rem", fontWeight:600, color:"var(--t1)" }}>{f.val}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          #about{padding:80px 20px !important;}
          .about-grid{grid-template-columns:1fr !important;}
        }
      `}</style>
    </section>
  );
}
