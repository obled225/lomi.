"use client";

import { useEffect } from "react";
import { initSoundGate } from "@/lib/sound";

// Mount-only client component to initialize the global sound gate.
const SoundGateInit = () => {
  useEffect(() => {
    try {
      initSoundGate();
    } catch {
      // ignore
    }
  }, []);

  return null;
};

export default SoundGateInit;
