import { site } from "@/data/site";

export function Hero() {
  return <section id="entry" className="hero" aria-labelledby="hero-title">
    <div className="hero-corner hero-corner--top" aria-hidden="true" />
    <div className="hero-corner hero-corner--bottom" aria-hidden="true" />
    <div className="hero-topline reveal"><span className="status-dot" />SHEET 01 — COVER</div>
    <div className="hero-content">
      <p className="hero-kicker reveal reveal--two">{site.name}</p>
      <h1 id="hero-title" className="reveal reveal--three"><span>SOFTWARE</span><i>×</i><span>AI</span><i>×</i><span>SYSTEMS</span></h1>
      <div className="hero-footer reveal reveal--four">
        <p>{site.headline}</p>
        <a className="explore-link" href="#about">EXPLORE <span aria-hidden="true">↓</span></a>
      </div>
    </div>
    <div className="hero-bottomline"><span><b className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span><span>SCROLL TO EXPLORE ↓</span></div>
  </section>;
}
