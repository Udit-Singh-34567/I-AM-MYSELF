import { curiosityNotes, travelLists } from "@/data/beyond";

export function BeyondCode() {
  return <section id="beyond" className="beyond-section" aria-labelledby="beyond-title">
    <header className="section-heading"><span className="section-number">06</span><h2 id="beyond-title">BEYOND CODE</h2><span className="section-rule" aria-hidden="true" /><span className="section-tag">SIDE QUESTS</span></header>
    <div className="beyond-intro"><p className="mono-label">A FEW THINGS THAT KEEP THE SYSTEM HUMAN</p><p>Maps to follow, worlds to get lost in, and a table where the plan inevitably changes.</p></div>
    <div className="beyond-grid">
      <div className="travel-module"><p className="mono-label">HEAVENLY PLACES ON EARTH</p><p className="travel-draft"></p><div className="travel-lists">{travelLists.map((list) => <section key={list.label}><h3>{list.label}</h3><ul>{list.places.map((place) => <li className={place.status === "done" ? "is-done" : ""} key={place.name}><span aria-hidden="true">{place.status === "done" ? "✓" : "□"}</span>{place.name}<em>{place.status === "done" ? "DONE" : "PENDING"}</em></li>)}</ul></section>)}</div></div>
      <div className="curiosity-module">{curiosityNotes.map((note, index) => <article key={note.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{note.title}</h3><p>{note.copy}</p></article>)}</div>
    </div>
  </section>;
}
