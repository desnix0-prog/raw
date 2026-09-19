import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquareText, RotateCcw, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/app/status-badge";
import { getDocument } from "@/lib/demo-data";
import { formatBytes } from "@/lib/utils";

const suggestedQuestions = [
  "Summarize this document",
  "What are the most important concepts?",
  "What questions could I be asked about this?",
];

export function generateStaticParams() {
  return [{ id: "doc-ml-notes" }, { id: "doc-product-design" }];
}

export default function DocumentPage({ params }: { params: { id: string } }) {
  const document = getDocument(params.id);
  if (!document) notFound();

  const failed = document.status === "failed";

  return (
    <div className="space-y-6 animate-fade-in">
      <Button variant="ghost" size="sm" asChild>
        <Link href="/library">
          <ArrowLeft />
          Library
        </Link>
      </Button>

      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            {document.title}
            {document.isFavorite && (
              <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            )}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {document.filename} · {document.fileType.toUpperCase()} ·{" "}
            {formatBytes(document.fileSize)}
            {document.pageCount ? ` · ${document.pageCount} pages` : ""}
            {document.chunkCount > 0 ? ` · ${document.chunkCount} chunks` : ""}
          </p>
        </div>
        <StatusBadge status={document.status} />
      </div>

      {failed ? (
        <div className="rounded-xl border border-destructive/40 bg-destructive/5 p-8 text-center">
          <p className="text-sm font-medium">Text extraction failed</p>
          <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">
            We couldn’t extract text from this file. It may be corrupted,
            password-protected, or an unsupported encoding. You can retry
            processing without re-uploading.
          </p>
          <Button variant="outline" className="mt-4">
            <RotateCcw />
            Retry processing
          </Button>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Document text */}
          <article className="rounded-xl border bg-card p-6">
            <div className="prose-sm whitespace-pre-wrap text-sm leading-7 text-foreground/90">
              {document.content}
            </div>
          </article>

          {/* AI side panel */}
          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            <section className="rounded-xl border bg-card p-4">
              <h2 className="text-sm font-medium">AI Summary</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {document.excerpt}
              </p>
            </section>

            <section className="rounded-xl border bg-card p-4">
              <h2 className="text-sm font-medium">Key Topics</h2>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {document.title.includes("Learning") ? (
                  <>
                    <Badge variant="secondary">gradient descent</Badge>
                    <Badge variant="secondary">regularization</Badge>
                    <Badge variant="secondary">model evaluation</Badge>
                  </>
                ) : (
                  <>
                    <Badge variant="secondary">research</Badge>
                    <Badge variant="secondary">notes</Badge>
                    <Badge variant="secondary">key findings</Badge>
                  </>
                )}
              </div>
            </section>

            <section className="rounded-xl border bg-card p-4">
              <h2 className="text-sm font-medium">Ask about this document</h2>
              <div className="mt-2 space-y-2">
                {suggestedQuestions.map((q) => (
                  <Link
                    key={q}
                    href={`/chats/chat-1`}
                    className="flex items-center gap-2 rounded-lg border px-3 py-2 text-xs transition-colors hover:bg-accent"
                  >
                    <MessageSquareText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    {q}
                  </Link>
                ))}
              </div>
            </section>
          </aside>
        </div>
      )}
    </div>
  );
}
