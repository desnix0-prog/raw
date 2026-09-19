import {
  ShieldCheck,
  Search,
  MessagesSquare,
  Layers,
  SunMoon,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessagesSquare,
    title: "RAG chat with citations",
    text: "Every answer is grounded in your documents and shows its sources: file, page, and chunk.",
  },
  {
    icon: Search,
    title: "Semantic search",
    text: "Search by meaning, not keywords. “machine learning optimization” finds gradient descent notes.",
  },
  {
    icon: Layers,
    title: "Collections & favorites",
    text: "Organize documents into Work, College, Research — whatever fits how you think.",
  },
  {
    icon: ShieldCheck,
    title: "Private by design",
    text: "Row-level security ensures you can only ever see your own documents and conversations.",
  },
  {
    icon: SunMoon,
    title: "Dark & light mode",
    text: "A premium interface that respects your system theme and looks great everywhere.",
  },
  {
    icon: FileText,
    title: "PDF, TXT & Markdown",
    text: "Drop files in and watch them move from Uploading to Processing to Ready — with retries on failure.",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Built like a real product
          </h2>
          <p className="mt-3 text-muted-foreground">
            Not a chatbot demo — a complete knowledge system with the states,
            polish, and security a startup would ship.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {feature.text}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
