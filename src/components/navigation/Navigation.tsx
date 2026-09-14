"use client";

import { useEffect, useState } from "react";
import { chapters, site } from "@/data/site";

export function Navigation() {
  const [active, setActive] = useState<(typeof chapters)[number]>(chapters[0]);

  useEffect(() => {
    const sections = chapters.map(({ id }) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(chapters.find((chapter) => chapter.id === visible.target.id) ?? chapters[0]);
    }, { rootMargin: "-35% 0px -50% 0px", threshold: [0, 0.1, 0.3] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return <header className="site-header">
    <a className="site-mark" href="#entry" aria-label={`${site.name}, return to entry`}>{site.mark}<span>.</span></a>
    <div className="chapter-status" aria-live="polite"><span>{active.number} / 08</span><span className="status-label">— {active.label}</span></div>
    <nav aria-label="Primary navigation"><a href="#work">INDEX <span aria-hidden="true">↘</span></a></nav>
  </header>;
}
