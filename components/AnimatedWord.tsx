"use client";

import { useState, useEffect, useRef } from "react";

const WORDS: { text: string; weight: number }[] = [
  { text: "Connections", weight: 500 },
  { text: "Conversations", weight: 600 },
  { text: "Context", weight: 700 },
  { text: "Relationships", weight: 800 },
  { text: "Follow-Through", weight: 700 },
  { text: "Conversation", weight: 600 },
];

const HOLD_MS = 2200;
const TRANSITION_MS = 250;

export default function AnimatedWord() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const cycle = () => {
      setVisible(false);
      timerRef.current = setTimeout(() => {
        setIndex((i) => (i + 1) % WORDS.length);
        setVisible(true);
      }, TRANSITION_MS);
    };

    const interval = setInterval(cycle, HOLD_MS);
    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const { text, weight } = WORDS[index];

  return (
    <span
      style={{
        display: "inline-block",
        color: "#34D399",
        fontWeight: weight,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(10px)",
        transition: `opacity ${TRANSITION_MS}ms ease, transform ${TRANSITION_MS}ms ease`,
        minWidth: "12ch",
      }}
    >
      {text}
    </span>
  );
}
