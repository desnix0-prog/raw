import { UploadCloud, MessageSquareText, BookOpenCheck, FolderTree } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: UploadCloud,
    title: "Upload your knowledge",
    text: "Drop in PDFs, text files, and Markdown. Recall AI extracts, cleans, and chunks the text automatically.",
  },
  {
    icon: MessageSquareText,
    title: "Ask questions",
    text: "Ask anything in plain language. Your question is matched against every document you’ve ever saved.",
  },
  {
    icon: BookOpenCheck,
    title: "Get source-grounded answers",
    text: "Answers cite the exact document and pages they came from — no confident hallucinations, no dead ends.",
  },
  {
    icon: FolderTree,
    title: "Organize your knowledge",
    text: "Collections, favorites, and instant semantic search keep a growing library easy to navigate.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t bg-muted/30 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            How Recall AI works
          </h2>
          <p className="mt-3 text-muted-foreground">
            A private, personal RAG pipeline: your documents become a knowledge
            base you can question.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Card key={step.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">
                  <span className="mr-1.5 text-muted-foreground">{i + 1}.</span>
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
