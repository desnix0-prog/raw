import {
  FileText,
  FileCode2,
  NotebookPen,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const previewDocs = [
  { icon: FileText, name: "Machine Learning Notes", meta: "PDF · 2.4 MB", status: "ready" },
  { icon: FileText, name: "Product Design Research", meta: "PDF · 5.1 MB", status: "ready" },
  { icon: FileCode2, name: "Startup Ideas", meta: "MD · 18 KB", status: "ready" },
  { icon: NotebookPen, name: "JavaScript Notes", meta: "TXT · 43 KB", status: "embedding" },
] as const;

/** Static visual preview of the product dashboard, rendered on the landing page. */
export function DashboardPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-x-8 -top-8 h-40 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-emerald-500/20 blur-3xl" aria-hidden />
      <Card className="relative overflow-hidden rounded-2xl text-left shadow-xl">
        <div className="flex items-center gap-2 border-b bg-muted/40 px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-muted-foreground">app.recall.ai/dashboard</span>
        </div>
        <div className="grid sm:grid-cols-[180px_1fr]">
          {/* Fake sidebar */}
          <div className="hidden border-r bg-muted/20 p-3 sm:block">
            <div className="mb-4 h-7 w-24 rounded-md bg-muted" />
            {["Library", "Favorites", "Collections", "Chats"].map((item, i) => (
              <div
                key={item}
                className="mb-1.5 flex items-center gap-2 rounded-md px-2 py-1.5 text-xs text-muted-foreground"
              >
                <span className={`h-3.5 w-3.5 rounded-sm ${i === 0 ? "bg-primary/60" : "bg-muted"}`} />
                {item}
              </div>
            ))}
          </div>
          <div className="p-4 sm:p-5">
            <p className="text-sm font-medium">Good evening, Alex</p>
            <p className="text-xs text-muted-foreground">What would you like to know?</p>
            {/* Fake ask input */}
            <div className="mt-3 flex items-center gap-2 rounded-lg border bg-background px-3 py-2.5">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="truncate text-xs text-muted-foreground">
                What are the three main ideas in my ML notes?
              </span>
              <Sparkles className="ml-auto h-4 w-4 text-primary" />
            </div>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {previewDocs.map((doc) => (
                <div
                  key={doc.name}
                  className="flex items-center gap-3 rounded-lg border bg-background p-2.5 transition-colors hover:bg-muted/50"
                >
                  <doc.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs font-medium">{doc.name}</p>
                    <p className="text-[11px] text-muted-foreground">{doc.meta}</p>
                  </div>
                  {doc.status === "ready" ? (
                    <Badge variant="success" className="px-1.5 text-[10px]">Ready</Badge>
                  ) : (
                    <Badge variant="warning" className="px-1.5 text-[10px]">Processing</Badge>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>5 documents · 446 chunks indexed</span>
              <Star className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
