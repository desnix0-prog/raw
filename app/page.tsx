import { LandingNavbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { FeatureGrid } from "@/components/landing/features";
import { ExampleQuestions } from "@/components/landing/example-questions";
import { CallToAction } from "@/components/landing/cta";
import { LandingFooter } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <LandingNavbar />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FeatureGrid />
        <ExampleQuestions />
        <CallToAction />
      </main>
      <LandingFooter />
    </div>
  );
}
