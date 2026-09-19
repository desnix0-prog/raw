import { Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const questions = [
  "What are the main ideas in this document?",
  "Summarize the key points from my research.",
  "What did I write about machine learning?",
  "Compare the ideas in these two documents.",
];

export function ExampleQuestions() {
  return (
    <section id="examples" className="border-t bg-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Ask it anything
          </h2>
          <p className="mt-3 text-muted-foreground">
            If it’s in your library, Recall AI can find it — and show you where
            the answer came from.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {questions.map((q) => (
            <Card
              key={q}
              className="cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <CardContent className="flex items-center gap-3 p-4">
                <Sparkles className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm">{q}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
