"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp, FileText } from "lucide-react";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";
import { demoAnswer, demoUser, type ChatMessage } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

/**
 * Phase 1 demo chat: simulates the RAG loop with a canned answer so the
 * UX (thinking state, grounded answer, citations) can be evaluated early.
 * Phase 5 replaces `simulateAssistant` with a real API call.
 */
export function DemoChat({ initialMessages }: { initialMessages: ChatMessage[] }) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function simulateAssistant() {
    setThinking(true);
    window.setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: `demo-${Date.now()}`,
          role: "assistant",
          content: demoAnswer.content,
          sources: demoAnswer.sources,
          createdAt: new Date().toISOString(),
        },
      ]);
    }, 1800);
  }

  function submit() {
    if (!input.trim() || thinking) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `user-${Date.now()}`,
        role: "user",
        content: input.trim(),
        createdAt: new Date().toISOString(),
      },
    ]);
    setInput("");
    simulateAssistant();
  }

  return (
    <div className="flex h-[calc(100dvh-8.5rem)] flex-col md:h-[calc(100dvh-11rem)]">
      <div className="flex-1 space-y-6 overflow-y-auto pr-1 pb-4">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        {thinking && <ThinkingIndicator />}
        <div ref={bottomRef} />
      </div>

      <div className="shrink-0 rounded-2xl border bg-card p-2 shadow-sm focus-within:shadow-md">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                submit();
              }
            }}
            rows={1}
            placeholder="Ask about your knowledge base…"
            className="max-h-32 min-h-[36px] flex-1 resize-none bg-transparent px-2 py-1.5 text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={submit}
            disabled={!input.trim() || thinking}
            aria-label="Send message"
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
              input.trim() && !thinking
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-muted text-muted-foreground"
            )}
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Message({ message }: { message: ChatMessage }) {
  if (message.role === "user") {
    return (
      <div className="flex justify-end gap-3">
        <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary px-4 py-2.5 text-sm text-primary-foreground md:max-w-[70%]">
          {message.content}
        </div>
        <Avatar initials={demoUser.initials} className="h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="flex gap-3">
      <Avatar initials="AI" className="h-8 w-8 bg-primary text-primary-foreground" />
      <div className="min-w-0 max-w-[85%] space-y-3 md:max-w-[75%]">
        <div className="whitespace-pre-line rounded-2xl rounded-bl-md border bg-card px-4 py-3 text-sm leading-relaxed">
          {message.content}
        </div>
        {message.sources && message.sources.length > 0 && (
          <div>
            <p className="mb-1.5 text-xs font-medium text-muted-foreground">
              Sources
            </p>
            <div className="flex flex-wrap gap-2">
              {message.sources.map((source, i) => (
                <Link
                  key={`${source.documentId}-${i}`}
                  href={`/document/${source.documentId}`}
                  className="flex items-center gap-2 rounded-lg border bg-card px-3 py-2 text-xs transition-colors hover:bg-accent"
                >
                  <FileText className="h-3.5 w-3.5 text-muted-foreground" />
                  <span className="font-medium">{source.documentTitle}</span>
                  <span className="text-muted-foreground">{source.pages}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ThinkingIndicator() {
  return (
    <div className="flex items-center gap-3">
      <Avatar initials="AI" className="h-8 w-8 bg-primary text-primary-foreground" />
      <div className="flex items-center gap-1.5 rounded-2xl rounded-bl-md border bg-card px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 animate-thinking-dot rounded-full bg-muted-foreground"
            style={{ animationDelay: `${i * 150}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
