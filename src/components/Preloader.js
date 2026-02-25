import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOAD_MS = 1800;
const EXIT_MS = 620;

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min(100, Math.floor(((now - start) / LOAD_MS) * 100));
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => {
            setGone(true);
            onComplete?.();
          }, EXIT_MS + 150);
        }, 280);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  if (gone) return null;

  const r = 52;
  const circ = 2 * Math.PI * r;
  const dashOffset = circ * (1 - progress / 100);

  return (
    <>
      {/* Electric back layer — exits slightly after */}
      <motion.div
        className="fixed inset-0 pointer-events-auto"
        style={{ zIndex: 9991, backgroundColor: "#6366F1" }}
        animate={{ x: exiting ? "-100%" : 0 }}
        transition={{ duration: EXIT_MS / 1000, ease: [0.76, 0, 0.24, 1], delay: 0.13 }}
      />

      {/* Dark front layer with content — exits first */}
      <motion.div
        className="fixed inset-0 flex items-center justify-center pointer-events-auto"
        style={{ zIndex: 9992, backgroundColor: "#070B14" }}
        animate={{ x: exiting ? "-100%" : 0 }}
        transition={{ duration: EXIT_MS / 1000, ease: [0.76, 0, 0.24, 1] }}
      >
        <div className="relative flex items-center justify-center">
          {/* Circular progress arc */}
          <svg width="136" height="136" style={{ transform: "rotate(-90deg)" }}>
            {/* Track */}
            <circle
              cx="68" cy="68" r={r}
              fill="none"
              stroke="rgba(255,255,255,0.05)"
              strokeWidth="1"
            />
            {/* Progress */}
            <circle
              cx="68" cy="68" r={r}
              fill="none"
              stroke="#6366F1"
              strokeWidth="1"
              strokeLinecap="round"
              strokeDasharray={circ}
              strokeDashoffset={dashOffset}
              style={{ transition: "stroke-dashoffset 40ms linear" }}
            />
          </svg>

          {/* Center: initials + percentage */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-0.5">
            <span
              className="font-display font-bold tracking-[0.28em]"
              style={{ fontSize: "1.15rem", color: "rgba(241,245,255,0.8)" }}
            >
              RR
            </span>
            <span
              className="tabular-nums"
              style={{
                fontSize: "0.5rem",
                color: "rgba(241,245,255,0.2)",
                letterSpacing: "0.4em",
                marginTop: "1px",
              }}
            >
              {progress}%
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
