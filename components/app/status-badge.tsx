import { CheckCircle2, AlertTriangle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { ProcessingStatus } from "@/lib/types";

const config: Record<
  ProcessingStatus,
  { label: string; variant: "success" | "warning" | "destructive" | "secondary"; icon: React.ReactNode }
> = {
  ready: { label: "Ready", variant: "success", icon: <CheckCircle2 /> },
  processing: { label: "Processing…", variant: "warning", icon: <Loader2 className="animate-spin" /> },
  embedding: { label: "Creating embeddings…", variant: "warning", icon: <Loader2 className="animate-spin" /> },
  failed: { label: "Processing failed", variant: "destructive", icon: <AlertTriangle /> },
};

export function StatusBadge({ status }: { status: ProcessingStatus }) {
  const { label, variant, icon } = config[status];
  return (
    <Badge variant={variant}>
      {icon}
      {label}
    </Badge>
  );
}
