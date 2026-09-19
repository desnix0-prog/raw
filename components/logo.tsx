import { Brain } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
        <Brain className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <span className="text-[17px] font-semibold tracking-tight">
        Recall AI
      </span>
    </div>
  );
}
