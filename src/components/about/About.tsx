const practices = [
  ["01", "BUILD", "Backend APIs and responsive interfaces."],
  ["02", "TEST", "Machine-learning experiments in Python."],
  ["03", "DOCUMENT", "Clear progress and technical notes as part of the work."],
] as const;

export function About() {
  return <section id="about" className="about-section" aria-labelledby="about-title">
    <header className="section-heading">
      <span className="section-number">02</span>
      <h2 id="about-title">WHO I AM</h2>
      <span className="section-rule" aria-hidden="true" />
      <span className="section-tag">FIELD NOTES</span>
    </header>

    <div className="about-intro">
      <p className="about-label">WORKING NOTE / 001</p>
      <p className="about-statement">I’m interested in the point where <em>software, data and intelligent systems</em> become useful to real people.</p>
    </div>

    <div className="about-grid">
      <div className="about-summary">
        <p className="mono-label">SUMMARY</p>
        <p>An early-career software engineer with a foundation in Python, full-stack web development, and applied AI/ML. I’ve contributed to backend APIs, responsive interfaces, and machine-learning experiments through internships and independent projects.</p>
      </div>
      <div className="about-index" aria-label="Ways of working">
        <p className="mono-label">PRACTICE INDEX</p>
        <ol>
          {practices.map(([number, title, copy]) => <li key={number}>
            <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
          </li>)}
        </ol>
      </div>
    </div>

    <p className="about-footnote"><span>NOTE</span> I pick up new stacks quickly, work well on distributed teams, and treat documentation as part of the job—not an afterthought.</p>
  </section>;
}
