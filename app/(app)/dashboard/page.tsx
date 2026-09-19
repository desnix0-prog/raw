import { FileText, Layers, MessagesSquare, Puzzle } from "lucide-react";
import { AskInput } from "@/components/app/ask-input";
import { DocumentCard } from "@/components/app/document-card";
import { StatCard } from "@/components/app/stat-card";
import { DemoBadge } from "@/components/ui/demo-badge";
import { demoDocuments, demoStats, demoUser } from "@/lib/demo-data";
import { greetingFor, timeAgo } from "@/lib/utils";

export default function DashboardPage() {
  const greeting = greetingFor(new Date());
  const recent = demoDocuments.slice(0, 4);
  const readyDocs = demoDocuments.filter((d) => d.status === "ready");

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {greeting}, {demoUser.name.split(" ")[0]}
          </h1>
          <p className="mt-1 text-muted-foreground">
            What would you like to know?
          </p>
        </div>
        <DemoBadge />
      </div>

      <AskInput />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <StatCard label="Documents" value={demoStats.totalDocuments} icon={FileText} />
        <StatCard label="Knowledge items (chunks)" value={demoStats.totalChunks} icon={Puzzle} />
        <StatCard label="Collections" value={demoStats.totalCollections} icon={Layers} />
        <StatCard label="Conversations" value={demoStats.totalConversations} icon={MessagesSquare} />
      </div>

      <section aria-labelledby="recent-docs">
        <div className="mb-3 flex items-center justify-between">
          <h2 id="recent-docs" className="text-sm font-medium">
            Recent Documents
          </h2>
          <span className="text-xs text-muted-foreground">
            {readyDocs.length} of {demoStats.totalDocuments} ready
          </span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {recent.map((doc) => (
            <DocumentCard key={doc.id} document={doc} />
          ))}
        </div>
      </section>

      <section aria-labelledby="recent-chats">
        <h2 id="recent-chats" className="mb-3 text-sm font-medium">
          Recent Conversations
        </h2>
        <div className="divide-y rounded-xl border bg-card">
          {demoConversations.slice(0, 3).map((chat) => (
            <a
              key={chat.id}
              href={`/chats/${chat.id}`}
              className="flex items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-accent/50"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{chat.title}</p>
                <p className="text-xs text-muted-foreground">
                  {chat.messageCount} messages
                </p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">
                {timeAgo(chat.updatedAt)}
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

