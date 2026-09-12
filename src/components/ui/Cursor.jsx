import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [state, setState] = useState("default");
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-none-fine");
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e) => {
      const t = e.target.closest("[data-cursor]");
      if (t) {
        setState(t.getAttribute("data-cursor") || "link");
        setLabel(t.getAttribute("data-cursor-label") || "");
      } else if (e.target.closest("a,button")) {
        setState("link"); setLabel("");
      } else {
        setState("default"); setLabel("");
      }
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", over, { passive: true });
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.documentElement.classList.remove("cursor-none-fine");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div id="makan-cursor" data-state={state} style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }} aria-hidden="true">
      <motion.div
        className="dot"
        animate={{ scale: state === "default" ? 1 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        <span>{state === "view" ? label || "VIEW" : state === "drag" ? "DRAG" : ""}</span>
      </motion.div>
    </div>
  );
}
