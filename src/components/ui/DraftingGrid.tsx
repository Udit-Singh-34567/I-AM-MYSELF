"use client";

import { useEffect, useRef } from "react";

export function DraftingGrid() {
  const layer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = layer.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!element || reducedMotion) return;
    let frame = 0;
    const move = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      if (!frame) frame = requestAnimationFrame(() => {
        element.style.setProperty("--grid-x", `${x}%`);
        element.style.setProperty("--grid-y", `${y}%`);
        frame = 0;
      });
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); if (frame) cancelAnimationFrame(frame); };
  }, []);

  return <div ref={layer} className="drafting-grid" aria-hidden="true" />;
}
