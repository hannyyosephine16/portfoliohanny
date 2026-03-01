export default function Footer() {
  return (
    <footer style={{ background:"var(--bg)", borderTop:"1px solid var(--line)", padding:"28px 48px", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:10 }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:28, height:28, borderRadius:8, background:"var(--g-main)", display:"flex", alignItems:"center", justifyContent:"center" }}>
          <span style={{ fontFamily:"'Syne',sans-serif", fontWeight:800, fontSize:"0.72rem", color:"#fff" }}>HY</span>
        </div>
        <p style={{ fontSize:"0.8rem", color:"var(--t3)" }}>© 2025 <span style={{color:"var(--t2)",fontWeight:600}}>Hanny Yosephine</span></p>
      </div>
      <p style={{ fontSize:"0.78rem", color:"var(--t3)" }}>Built with <span style={{color:"var(--indigo)",fontWeight:600}}>React</span> + <span style={{color:"var(--mint)",fontWeight:600}}>Framer Motion</span></p>
    </footer>
  );
}
