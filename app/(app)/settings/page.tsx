import { Monitor, Moon, Sun } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DemoBadge } from "@/components/ui/demo-badge";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { demoUser } from "@/lib/demo-data";

export const metadata = { title: "Settings" };

const rows = [
  {
    title: "Profile",
    description: "Name, email, and avatar",
    body: (
      <div className="flex items-center gap-3">
        <Avatar initials={demoUser.initials} />
        <div>
          <p className="text-sm font-medium">{demoUser.name}</p>
          <p className="text-xs text-muted-foreground">{demoUser.email}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Appearance",
    description: "Dark, light, or follow your system",
    body: (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 rounded-lg border p-1">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <Moon className="h-4 w-4 text-muted-foreground" />
          <Monitor className="h-4 w-4 text-muted-foreground" />
        </div>
        <ThemeToggle />
      </div>
    ),
  },
  {
    title: "AI preferences",
    description: "Answer style and citation detail (Phase 5)",
    body: <Button variant="outline" size="sm" disabled>Coming soon</Button>,
  },
  {
    title: "Storage",
    description: "Documents and embeddings used vs. plan limit (Phase 3)",
    body: <Button variant="outline" size="sm" disabled>Coming soon</Button>,
  },
  {
    title: "Delete account",
    description: "Permanently remove your account and all documents (Phase 2)",
    body: <Button variant="destructive" size="sm" disabled>Delete account</Button>,
  },
];

export default function SettingsPage() {
  return (
    <div className="max-w-2xl space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Settings</h1>
          <p className="mt-1 text-muted-foreground">
            Manage your account and preferences
          </p>
        </div>
        <DemoBadge />
      </div>

      <div className="divide-y rounded-xl border bg-card">
        {rows.map((row) => (
          <div
            key={row.title}
            className="flex flex-col justify-between gap-3 p-5 sm:flex-row sm:items-center"
          >
            <div>
              <h2 className="text-sm font-medium">{row.title}</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {row.description}
              </p>
            </div>
            {row.body}
          </div>
        ))}
      </div>
    </div>
  );
}
