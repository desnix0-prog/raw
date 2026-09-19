"use client";

import { Suspense, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { Sidebar } from "@/components/app/sidebar";
import { MobileNav } from "@/components/app/mobile-nav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { DemoBadge } from "@/components/ui/demo-badge";
import { Button } from "@/components/ui/button";

/**
 * Dashboard shell: fixed sidebar on desktop (lg+), slide-over on tablet,
 * bottom navigation on mobile.
 */
export function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop sidebar */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r bg-card lg:block">
        <Suspense fallback={null}>
          <Sidebar />
        </Suspense>
      </aside>

      {/* Tablet slide-over */}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 lg:hidden" />
          <Dialog.Content className="fixed inset-y-0 left-0 z-50 w-72 border-r bg-card shadow-xl outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-left lg:hidden">
            <Dialog.Title className="sr-only">Navigation</Dialog.Title>
            <Dialog.Close asChild>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-3.5"
                aria-label="Close menu"
              >
                <X />
              </Button>
            </Dialog.Close>
            <Suspense fallback={null}>
              <Sidebar onNavigate={() => setOpen(false)} />
            </Suspense>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="lg:pl-64">
        {/* Top bar (tablet/mobile) */}
        <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background/80 px-4 backdrop-blur-md lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="hidden md:inline-flex"
          >
            <Menu />
          </Button>
          <DemoBadge />
        </header>

        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-6 sm:px-6 md:pb-10 lg:px-10">
          <div className="mb-6 hidden items-center justify-end lg:flex">
            <ThemeToggle />
          </div>
          {children}
        </main>
      </div>

      <MobileNav />
    </div>
  );
}
