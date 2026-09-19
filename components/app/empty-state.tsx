import Link from "next/link";
import { UploadCloud } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EmptyState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-16 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-muted-foreground">
        <UploadCloud className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-sm font-medium">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      <Button variant="outline" className="mt-5" asChild>
        <Link href="/library">Upload a document</Link>
      </Button>
    </div>
  );
}
