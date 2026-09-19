import { cn } from "@/lib/utils";

/** Lightweight avatar — initials only (no image dependency in Phase 1). */
export function Avatar({
  initials,
  className,
}: {
  initials: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-9 w-9 shrink-0 select-none items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground",
        className
      )}
    >
      {initials}
    </div>
  );
}
