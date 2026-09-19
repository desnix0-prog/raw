import Link from "next/link";
import { MessageSquareText, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/app/empty-state";
import { DemoBadge } from "@/components/ui/demo-badge";
import { demoConversations } from "@/lib/demo-data";
import { timeAgo } from "@/lib/utils";

export const metadata = { title: "Chats" };

export default function ChatsPage() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Recent Chats</h1>
          <p className="mt-1 text-muted-foreground">
            Conversations grounded in your knowledge base
          </p>
        </div>
        <DemoBadge />
      </div>

      {demoConversations.length === 0 ? (
        <EmptyState
          title="No conversations yet"
          description="Ask a question from your dashboard to start your first chat."
        />
      ) : (
        <div className="divide-y rounded-xl border bg-card">
          {demoConversations.map((chat) => (
            <div
              key={chat.id}
              className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-accent/50"
            >
              <Link
                href={`/chats/${chat.id}`}
                className="flex min-w-0 flex-1 items-center gap-3"
              >
                <MessageSquareText className="h-4 w-4 shrink-0 text-muted-foreground" />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{chat.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {chat.messageCount} messages · updated {timeAgo(chat.updatedAt)}
                  </p>
                </div>
              </Link>
              <span className="hidden shrink-0 text-xs text-muted-foreground sm:block">
                {timeAgo(chat.createdAt)}
              </span>
              <div className="flex shrink-0 items-center gap-1">
                <Button variant="ghost" size="icon" aria-label="Rename conversation">
                  <Pencil />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Delete conversation"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
