"use client";

import { useEffect, useRef } from "react";

const WORDS = ["Strategy", "Accountability", "Results", "Intelligence"];

export default function AnimatedWord() {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    let i = 0;
    let first = true;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function cycle() {
      if (!el) return;
      const isFinal = i >= WORDS.length - 1;

      if (first) {
        // First word: rise in from below, no outgoing fade needed
        first = false;
        el.textContent = WORDS[i];
        timers.push(setTimeout(() => {
          if (!el) return;
          el.style.transition = "opacity 800ms cubic-bezier(0,0,0.2,1), transform 800ms cubic-bezier(0,0,0.2,1)";
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          i++;
          timers.push(setTimeout(cycle, 2400));
        }, 20));
        return;
      }

      // Fade out: ease-in acceleration, drift upward
      el.style.transition = "opacity 550ms cubic-bezier(0.4,0,1,1), transform 550ms cubic-bezier(0.4,0,1,1)";
      el.style.opacity = "0";
      el.style.transform = "translateY(-10px)";

      timers.push(setTimeout(() => {
        if (!el) return;
        // Snap new word in below, no transition so the jump is invisible
        el.textContent = WORDS[i];
        el.style.transition = "none";
        el.style.transform = "translateY(12px)";

        // One frame later: fade in rising upward
        timers.push(setTimeout(() => {
          if (!el) return;
          const inDuration = isFinal ? 1100 : 700;
          el.style.transition = `opacity ${inDuration}ms cubic-bezier(0,0,0.2,1), transform ${inDuration}ms cubic-bezier(0,0,0.2,1)`;
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          if (!isFinal) {
            i++;
            timers.push(setTimeout(cycle, 2400));
          }
        }, 20));
      }, 550));
    }

    timers.push(setTimeout(cycle, 700));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <span
      ref={spanRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: "block",
        width: "100%",
        color: "#34D399",
        fontWeight: 600,
        opacity: 0,
        transform: "translateY(12px)",
      }}
    />
  );
}
