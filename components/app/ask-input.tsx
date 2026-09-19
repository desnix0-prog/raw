"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUp, Paperclip, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * The big dashboard ask box. In Phase 1 it navigates to the demo chat;
 * in Phase 5 the same component will POST to the RAG endpoint.
 */
export function AskInput() {
  const [value, setValue] = useState("");
  const router = useRouter();

  function submit() {
    if (!value.trim()) return;
    router.push("/chats/chat-1");
  }

  return (
    <div className="rounded-2xl border bg-card shadow-sm transition-shadow focus-within:shadow-md">
      <div className="flex items-end gap-2 p-3">
        <button
          type="button"
          aria-label="Attach a document (coming in Phase 3)"
          className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <Paperclip className="h-4 w-4" />
        </button>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              submit();
            }
          }}
          rows={1}
          placeholder="What would you like to know?"
          className="max-h-40 min-h-[36px] flex-1 resize-none bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
        />
        <button
          type="button"
          onClick={submit}
          disabled={!value.trim()}
          aria-label="Ask"
          className={cn(
            "mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
            value.trim()
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-muted text-muted-foreground"
          )}
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
      <div className="flex items-center gap-2 border-t px-4 py-2">
        <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">
          Answers are grounded in your documents and cite their sources.
        </p>
      </div>
    </div>
  );
}
