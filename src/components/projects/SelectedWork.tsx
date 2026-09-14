import { projects } from "@/data/projects";

export function SelectedWork() {
  const [featured, ...remaining] = projects;
  return <section id="work" className="work-section" aria-labelledby="work-title">
    <header className="section-heading">
      <span className="section-number">03</span>
      <h2 id="work-title">SELECTED WORK</h2>
      <span className="section-rule" aria-hidden="true" />
      <span className="section-tag">PROJECT INDEX</span>
    </header>

    <div className="work-intro">
      <p className="mono-label">A SMALL SELECTION / 04</p>
      <p>Systems, experiments, and product work—each a different way of turning an idea into something usable.</p>
    </div>

    <article className="featured-project">
      <div className="project-serial"><span>{featured.number}</span><span>{featured.category}</span></div>
      <div className="project-geometry" aria-hidden="true"><span /><span /><span /></div>
      <div className="featured-project-content">
        <h3>{featured.title}</h3>
        <p>{featured.description}</p>
        <ul className="tech-list" aria-label={`${featured.title} technologies`}>{featured.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
        <span className="case-note">CASE NOTE IN DEVELOPMENT <span aria-hidden="true">↗</span></span>
      </div>
    </article>

    <div className="project-list">
      {remaining.map((project) => <article className="project-row" key={project.number}>
        <div className="project-row-number">{project.number}</div>
        <div className="project-row-main"><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
        <p className="project-row-description">{project.description}</p>
        <ul className="tech-list project-row-stack" aria-label={`${project.title} technologies`}>{project.stack.map((tech) => <li key={tech}>{tech}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
