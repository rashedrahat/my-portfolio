import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mx = useMotionValue(-200);
  const my = useMotionValue(-200);

  const rx = useSpring(mx, { stiffness: 220, damping: 24, mass: 0.5 });
  const ry = useSpring(my, { stiffness: 220, damping: 24, mass: 0.5 });

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!active) setActive(true);
    };

    const onOver = (e) => {
      if (e.target.closest("a, button, [role='button']")) setHovering(true);
    };

    const onOut = (e) => {
      if (e.target.closest("a, button, [role='button']")) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, []);

  if (!active) return null;

  return (
    <>
      {/* Outer ring — spring lag */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-electric/50 pointer-events-none"
        style={{
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99998,
          width: hovering ? 44 : 30,
          height: hovering ? 44 : 30,
          transition: "width 0.18s ease, height 0.18s ease",
        }}
      />
      {/* Inner dot — exact position, no lag */}
      <motion.div
        className="fixed top-0 left-0 rounded-full bg-electric pointer-events-none"
        style={{
          x: mx,
          y: my,
          translateX: "-50%",
          translateY: "-50%",
          zIndex: 99999,
          width: 5,
          height: 5,
        }}
      />
    </>
  );
}
