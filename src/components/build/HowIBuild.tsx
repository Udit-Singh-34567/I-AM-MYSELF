import { CapabilityMatrix } from "@/components/build/CapabilityMatrix";

export function HowIBuild() {
  return <section id="build" className="build-section" aria-labelledby="build-title">
    <header className="section-heading"><span className="section-number">04</span><h2 id="build-title">HOW I BUILD</h2><span className="section-rule" aria-hidden="true" /><span className="section-tag">SYSTEM MAP</span></header>
    <div className="build-intro"><p className="mono-label">TOOLS ARE EVIDENCE, NOT THE STORY</p><p>I use different parts of the stack for different kinds of problems—then connect them into a system that can do useful work.</p></div>
    <CapabilityMatrix />
  </section>;
}
