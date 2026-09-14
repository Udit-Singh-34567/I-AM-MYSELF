import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { HowIBuild } from "@/components/build/HowIBuild";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Navigation } from "@/components/navigation/Navigation";
import { SelectedWork } from "@/components/projects/SelectedWork";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { DraftingGrid } from "@/components/ui/DraftingGrid";

function FutureSection({ id }: { id: string }) {
  return <section id={id} className="future-section" aria-label={`${id} section placeholder`}><span /></section>;
}

export default function Home() {
  return <main>
    <DraftingGrid />
    <Navigation />
    <Hero />
    <About />
    <SelectedWork />
    <HowIBuild />
    <ExperienceTimeline />
    <FutureSection id="lab" />
    <FutureSection id="beyond" />
    <FutureSection id="contact" />
    <CustomCursor />
  </main>;
}
