/* eslint-disable @next/next/no-img-element -- Optional user-supplied portrait uses a graceful missing-file fallback. */
"use client";

import { useState } from "react";

const portraitSource = "/images/udit-portrait.avif";

export function HeroPortrait() {
  const [hasPortrait, setHasPortrait] = useState(true);

  return <aside className={`hero-portrait ${hasPortrait ? "hero-portrait--ready" : ""}`} aria-label="Portrait area">
    <img src={portraitSource} alt="Udit Singh" aria-hidden={!hasPortrait} onLoad={() => setHasPortrait(true)} onError={() => setHasPortrait(false)} />
    {!hasPortrait && <div className="hero-portrait-placeholder" aria-hidden="true"><span>PORTRAIT</span><i>ADD IMAGE</i><b>+</b></div>}
    <p></p>
  </aside>;
}
