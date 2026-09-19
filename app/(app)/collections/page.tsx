import Link from "next/link";
import { FolderOpen, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoBadge } from "@/components/ui/demo-badge";
import { demoCollections, demoDocuments } from "@/lib/demo-data";

export const metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Collections</h1>
          <p className="mt-1 text-muted-foreground">
            Group documents by project, class, or theme
          </p>
        </div>
        <div className="flex items-center gap-2">
          <DemoBadge />
          <Button size="sm" disabled title="Available in Phase 6">
            <Plus />
            New Collection
          </Button>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {demoCollections.map((col) => (
          <div
            key={col.id}
            id={col.id}
            className="rounded-xl border bg-card p-5 transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: col.color }}
              >
                <FolderOpen className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-sm font-medium">{col.name}</h2>
                <p className="text-xs text-muted-foreground">
                  {col.documentIds.length} document
                  {col.documentIds.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{col.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {col.documentIds.map((docId) => {
                const doc = demoDocuments.find((d) => d.id === docId);
                if (!doc) return null;
                return (
                  <Link
                    key={docId}
                    href={`/document/${docId}`}
                    className="rounded-full border px-2.5 py-1 text-xs transition-colors hover:bg-accent"
                  >
                    {doc.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
