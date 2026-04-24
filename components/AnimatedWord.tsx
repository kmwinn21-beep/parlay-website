"use client";

import { useEffect, useRef } from "react";

const WORDS = ["Connections", "Conversations", "Relationships", "Outcomes", "Conversations"];

export default function AnimatedWord() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    let i = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function cycle() {
      if (!el) return;

      if (i >= WORDS.length - 1) {
        // Final word — slow 1.8s fade, never cycles again
        el.style.transition = "opacity 1.8s ease";
        el.style.opacity = "0";
        timers.push(
          setTimeout(() => {
            el.textContent = WORDS[i];
            el.style.opacity = "1";
          }, 400)
        );
        return;
      }

      el.style.transition = "opacity 0.3s ease";
      el.style.opacity = "0";
      timers.push(
        setTimeout(() => {
          el.textContent = WORDS[i];
          el.style.transition = "opacity 0.4s ease";
          el.style.opacity = "1";
          i++;
          timers.push(setTimeout(cycle, 1200));
        }, 300)
      );
    }

    timers.push(setTimeout(cycle, 800));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <span
      ref={spanRef}
      style={{
        display: "inline-block",
        color: "#34D399",
        fontWeight: 600,
        opacity: 0,
        minWidth: "12ch",
      }}
    />
  );
}
