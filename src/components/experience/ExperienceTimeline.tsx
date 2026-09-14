import { experience } from "@/data/experience";

export function ExperienceTimeline() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-title">
    <header className="section-heading"><span className="section-number">05</span><h2 id="experience-title">EXPERIENCE</h2><span className="section-rule" aria-hidden="true" /><span className="section-tag">TIMELINE</span></header>
    <div className="experience-intro"><p className="mono-label">WORK LOG / 02 RECORDS</p><p>Each role added another layer: applied research, production-minded development, and the habits that help teams keep moving.</p></div>
    <div className="timeline" aria-label="Professional experience">
      {experience.map((item, index) => <article className="timeline-entry" key={item.role}>
        <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span><i aria-hidden="true" /></div>
        <div className="timeline-period">{item.period}</div>
        <div className="timeline-content"><p className="timeline-company">{item.company}</p><h3>{item.role}</h3><p className="timeline-summary">{item.summary}</p><ul>{item.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
      </article>)}
    </div>
  </section>;
}
