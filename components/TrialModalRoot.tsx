"use client";

import { useState, useEffect } from "react";
import FreeTrialModal from "./FreeTrialModal";

export default function TrialModalRoot() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handler() { setOpen(true); }
    window.addEventListener("parlay:open-trial", handler);
    return () => window.removeEventListener("parlay:open-trial", handler);
  }, []);

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("trial") === "true") {
      setOpen(true);
    }
  }, []);

  if (!open) return null;
  return (
    <FreeTrialModal
      initialPlan={null}
      billing="annual"
      onClose={() => setOpen(false)}
    />
  );
}
