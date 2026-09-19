import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DemoBadge } from "@/components/ui/demo-badge";
import { DemoChat } from "@/components/app/demo-chat";
import { getConversation } from "@/lib/demo-data";

export function generateStaticParams() {
  return [{ id: "chat-1" }, { id: "chat-2" }, { id: "chat-3" }];
}

export default function ChatPage({ params }: { params: { id: string } }) {
  const conversation = getConversation(params.id);
  if (!conversation) notFound();

  return (
    <div className="flex h-full flex-col animate-fade-in">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/chats">
            <ArrowLeft />
            Chats
          </Link>
        </Button>
        <div className="flex min-w-0 items-center gap-2">
          <h1 className="truncate text-sm font-medium">{conversation.title}</h1>
          <DemoBadge />
        </div>
      </div>
      <DemoChat initialMessages={conversation.messages} />
    </div>
  );
}
