"use client";

import { useState } from "react";
import { capabilities } from "@/data/capabilities";

export function CapabilityMatrix() {
  const [activeId, setActiveId] = useState<(typeof capabilities)[number]["id"]>(capabilities[0].id);
  const active = capabilities.find((capability) => capability.id === activeId) ?? capabilities[0];

  return <div className="capability-matrix">
    <div className="capability-controls" aria-label="Ways of working">
      {capabilities.map((capability) => <button key={capability.id} type="button" aria-pressed={activeId === capability.id} aria-controls="capability-panel" onClick={() => setActiveId(capability.id)}><span>{capability.number}</span>{capability.label}<i aria-hidden="true">↘</i></button>)}
    </div>
    <div id="capability-panel" className="capability-panel" role="region" aria-live="polite" aria-label={`${active.label} capabilities`}>
      <div className="capability-panel-heading"><span>{active.number} / 05</span><h3>{active.label}</h3></div>
      <p>{active.description}</p>
      <ul>{active.tools.map((tool, index) => <li key={tool}><span>{String(index + 1).padStart(2, "0")}</span>{tool}</li>)}</ul>
    </div>
  </div>;
}
