import { FlaskConical } from "lucide-react";
import { cn } from "@/lib/utils";

/** Marks demo/sample data so it is never confused with real user data. */
export function DemoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-dashed border-amber-500/50 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-400",
        className
      )}
    >
      <FlaskConical className="h-3 w-3" />
      Demo data
    </span>
  );
}
