import { site } from "@/data/site";

const links = [
  { label: "EMAIL", href: `mailto:${site.email}`, external: false },
  { label: "GITHUB", href: site.github, external: true },
  { label: "LINKEDIN", href: site.linkedin, external: true },
] as const;

export function Contact() {
  return <section id="contact" className="contact-section" aria-labelledby="contact-title">
    <header className="section-heading"><span className="section-number">07</span><h2 id="contact-title">LET&apos;S BUILD</h2><span className="section-rule" aria-hidden="true" /><span className="section-tag">OPEN CHANNEL</span></header>
    <div className="contact-body">
      <p className="mono-label">HAVE AN INTERESTING PROBLEM?</p>
      <h3>LET&apos;S BUILD<br /><em>SOMETHING.</em></h3>
      <div className="contact-links" aria-label="Contact links">
        {links.map((link) => <a key={link.label} href={link.href} {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}>{link.label}<span aria-hidden="true">↗</span></a>)}
      </div>
    </div>
    <footer className="contact-footer"><span>{site.mark}</span><span>AVAILABLE FOR OPPORTUNITIES</span><span>END OF NOTE / 08</span></footer>
  </section>;
}
