import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);
  const fadeRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/music/audio-site.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;
    return () => {
      audio.pause();
      audio.src = "";
    };
  }, []);

  const fadeTo = (target, cb) => {
    clearInterval(fadeRef.current);
    const audio = audioRef.current;
    const step = target > audio.volume ? 0.025 : -0.025;
    fadeRef.current = setInterval(() => {
      const next = audio.volume + step;
      if ((step > 0 && next >= target) || (step < 0 && next <= target)) {
        audio.volume = target;
        clearInterval(fadeRef.current);
        cb?.();
      } else {
        audio.volume = Math.min(1, Math.max(0, next));
      }
    }, 40);
  };

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      fadeTo(0, () => audio.pause());
      setIsPlaying(false);
    } else {
      audio.play();
      fadeTo(0.32);
      setIsPlaying(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed right-5 top-1/2 -translate-y-1/2 z-50 select-none hover:opacity-80 transition-opacity"
      style={{
        writingMode: "vertical-rl",
        transform: "rotate(180deg)",
        fontSize: "9px",
        letterSpacing: "0.4em",
        textTransform: "uppercase",
      }}
      aria-label={isPlaying ? "Pause background music" : "Play background music"}
    >
      <span style={{ color: "rgba(241,245,255,0.25)" }}>Sound </span>
      <span
        style={{
          color: isPlaying ? "#6366F1" : "rgba(241,245,255,0.15)",
          transition: "color 0.3s ease",
        }}
      >
        {isPlaying ? "on" : "off"}
      </span>
    </button>
  );
}
