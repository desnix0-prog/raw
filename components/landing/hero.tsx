import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DashboardPreview } from "@/components/landing/dashboard-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-grid bg-grid-fade absolute inset-0" aria-hidden />
      <div className="container relative flex flex-col items-center pb-16 pt-20 text-center md:pb-24 md:pt-28">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Your personal knowledge base, powered by AI
        </div>
        <h1 className="animate-fade-up mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl md:leading-[1.1]">
          Everything you know,
          <br />
          <span className="text-muted-foreground">one question away.</span>
        </h1>
        <p className="animate-fade-up mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg [animation-delay:100ms]">
          Upload your documents, notes, and research. Recall AI helps you find,
          understand, and connect the information that matters.
        </p>
        <div className="animate-fade-up mt-8 flex flex-col items-center gap-3 sm:flex-row [animation-delay:200ms]">
          <Button size="lg" asChild>
            <Link href="/dashboard">
              Try Recall AI
              <ArrowRight />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/dashboard">
              <Play />
              View Demo
            </Link>
          </Button>
        </div>
        <div className="animate-fade-up mt-16 w-full max-w-4xl [animation-delay:300ms]">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
