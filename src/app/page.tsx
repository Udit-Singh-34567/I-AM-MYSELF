import { Hero } from "@/components/hero/Hero";
import { Navigation } from "@/components/navigation/Navigation";
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
    <FutureSection id="about" />
    <FutureSection id="work" />
    <FutureSection id="build" />
    <FutureSection id="experience" />
    <FutureSection id="lab" />
    <FutureSection id="beyond" />
    <FutureSection id="contact" />
    <CustomCursor />
  </main>;
}
