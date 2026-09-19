import { Star } from "lucide-react";
import { DocumentCard } from "@/components/app/document-card";
import { EmptyState } from "@/components/app/empty-state";
import { DemoBadge } from "@/components/ui/demo-badge";
import { demoDocuments } from "@/lib/demo-data";

export const metadata = { title: "Library" };

export default function LibraryPage({
  searchParams,
}: {
  searchParams: { filter?: string };
}) {
  const favoritesOnly = searchParams.filter === "favorites";
  const documents = favoritesOnly
    ? demoDocuments.filter((d) => d.isFavorite)
    : demoDocuments;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
            {favoritesOnly && <Star className="h-5 w-5 fill-amber-400 text-amber-400" />}
            {favoritesOnly ? "Favorites" : "All Documents"}
          </h1>
          <p className="mt-1 text-muted-foreground">
            {documents.length} document{documents.length === 1 ? "" : "s"}
            {favoritesOnly ? " you starred" : " in your library"}
          </p>
        </div>
        <DemoBadge />
      </div>

      {documents.length === 0 ? (
        <EmptyState
          title="No favorites yet"
          description="Star a document and it will show up here for quick access."
        />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {documents.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      )}
    </div>
  );
}
