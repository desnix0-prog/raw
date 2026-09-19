import { FileText, FileCode2, NotebookPen } from "lucide-react";
import type { FileType } from "@/lib/types";
import { cn } from "@/lib/utils";

const icons: Record<FileType, typeof FileText> = {
  pdf: FileText,
  md: FileCode2,
  txt: NotebookPen,
};

export function FileTypeIcon({
  type,
  className,
}: {
  type: FileType;
  className?: string;
}) {
  const Icon = icons[type];
  return <Icon className={cn("h-4 w-4", className)} />;
}
