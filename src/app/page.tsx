import { Hero } from "@/components/sections/Hero";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Curriculum } from "@/components/sections/Curriculum";
import { Pricing } from "@/components/sections/Pricing";
import { Results } from "@/components/sections/Results";
import { Team } from "@/components/sections/Team";
import { FAQ } from "@/components/sections/FAQ";
import { QualificationTest } from "@/components/sections/QualificationTest";
import { BestVideos } from "@/components/sections/BestVideos";
import { StickyCTA } from "@/components/layout/StickyCTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 bg-white">
      <Hero />
      <TargetAudience />
      <Results />
      <Curriculum />
      <BestVideos />
      <Pricing />
      <Team />
      <FAQ />
      <QualificationTest />
      <StickyCTA />
    </div>
  );
}
