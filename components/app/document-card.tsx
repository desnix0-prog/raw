import Link from "next/link";
import { Star } from "lucide-react";
import type { Document } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { StatusBadge } from "@/components/app/status-badge";
import { FileTypeIcon } from "@/components/app/file-type-icon";
import { formatBytes, formatDate } from "@/lib/utils";

export function DocumentCard({ document }: { document: Document }) {
  return (
    <Link href={`/document/${document.id}`} className="group block h-full">
      <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-md">
        <CardContent className="flex h-full flex-col p-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <FileTypeIcon type={document.fileType} />
            </div>
            <div className="flex items-center gap-1.5">
              {document.isFavorite && (
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-label="Favorite" />
              )}
              <StatusBadge status={document.status} />
            </div>
          </div>
          <h3 className="mt-3 line-clamp-1 text-sm font-medium group-hover:underline">
            {document.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">
            {document.excerpt}
          </p>
          <div className="mt-auto flex items-center justify-between pt-3 text-[11px] text-muted-foreground">
            <span className="uppercase">{document.fileType}</span>
            <span>{formatBytes(document.fileSize)}</span>
            <span>{formatDate(document.createdAt)}</span>
            <span>{document.chunkCount > 0 ? `${document.chunkCount} chunks` : "—"}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
