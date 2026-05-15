"use client";

import { useState, useEffect } from "react";
import DemoModal from "./DemoModal";

export default function DemoModalRoot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler() { setOpen(true); }
    window.addEventListener("parlay:open-demo", handler);
    return () => window.removeEventListener("parlay:open-demo", handler);
  }, []);

  if (!open) return null;
  return <DemoModal onClose={() => setOpen(false)} />;
}
