import { labNotes } from "@/data/lab";

export function Lab() {
  return <section id="lab" className="lab-section" aria-labelledby="lab-title">
    <header className="section-heading"><span className="section-number">06</span><h2 id="lab-title">LAB</h2><span className="section-rule" aria-hidden="true" /><span className="section-tag">EXPERIMENT LOG</span></header>
    <div className="lab-intro"><p className="mono-label">BEYOND THE PRODUCT WORK</p><p>Research, hackathons, and community work: places to test ideas and stay close to the questions worth pursuing.</p></div>
    <div className="lab-notes">
      {labNotes.map((note) => <article className="lab-note" key={note.number}>
        <div className="lab-note-meta"><span>{note.number}</span><span>{note.type}</span></div>
        <div className="lab-note-stamp" aria-hidden="true">+</div>
        <h3>{note.title}</h3>
        <p>{note.detail}</p>
      </article>)}
    </div>
  </section>;
}
