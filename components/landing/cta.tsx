import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl border bg-muted/40 px-6 py-16 text-center md:py-24">
          <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
          <div className="relative">
            <h2 className="mx-auto max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Stop re-reading. Start asking.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">
              Your notes already contain the answers. Recall AI just helps you
              get to them faster.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/dashboard">
                Try Recall AI
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
