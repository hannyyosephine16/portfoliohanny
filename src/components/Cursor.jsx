import { useEffect, useRef } from "react";
export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  const mouse = useRef({ x: -100, y: -100 });
  const pos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.left = e.clientX - 4 + "px";
        dot.current.style.top = e.clientY - 4 + "px";
      }
    };
    window.addEventListener("mousemove", move);
    let raf;
    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.14;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.14;
      if (ring.current) {
        ring.current.style.left = pos.current.x - 20 + "px";
        ring.current.style.top = pos.current.y - 20 + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    const on = () => ring.current && (ring.current.style.transform = "scale(1.7)");
    const off = () => ring.current && (ring.current.style.transform = "scale(1)");
    document.querySelectorAll("a,button").forEach(el => {
      el.addEventListener("mouseenter", on);
      el.addEventListener("mouseleave", off);
    });
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} style={{ position:"fixed", width:8, height:8, borderRadius:"50%", background:"var(--indigo)", pointerEvents:"none", zIndex:9999, transition:"transform 0.15s" }} />
      <div ref={ring} style={{ position:"fixed", width:40, height:40, borderRadius:"50%", border:"1.5px solid rgba(108,99,255,0.5)", pointerEvents:"none", zIndex:9998, transition:"transform 0.3s ease" }} />
    </>
  );
}
