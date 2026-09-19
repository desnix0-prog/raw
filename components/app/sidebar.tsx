"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { DemoBadge } from "@/components/ui/demo-badge";
import { primaryNav, secondaryNav, type NavItem } from "@/components/app/nav-items";
import { demoCollections, demoUser } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

function NavLink({ item, onClick }: { item: NavItem; onClick?: () => void }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active =
    item.href === "/dashboard"
      ? pathname === "/dashboard"
      : item.href === "/library?filter=favorites"
        ? pathname === "/library" && searchParams.get("filter") === "favorites"
        : pathname.startsWith(item.href);

  return (
    <Link
      href={item.href}
      onClick={onClick}
      className={cn(
        "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm transition-colors",
        active
          ? "bg-accent font-medium text-foreground"
          : "text-muted-foreground hover:bg-accent/60 hover:text-foreground"
      )}
    >
      <item.icon className="h-4 w-4" />
      {item.label}
    </Link>
  );
}

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center px-5">
        <Link href="/" aria-label="Recall AI home">
          <Logo />
        </Link>
      </div>
      <div className="px-3">
        <Button className="w-full justify-start gap-2" asChild>
          <Link href="/library">
            <Plus />
            New Knowledge
          </Link>
        </Button>
      </div>
      <nav className="mt-4 flex-1 space-y-0.5 overflow-y-auto px-3" aria-label="Dashboard">
        {primaryNav.map((item) => (
          <NavLink key={item.label} item={item} onClick={onNavigate} />
        ))}

        <p className="px-2.5 pb-1 pt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Collections
        </p>
        {demoCollections.map((col) => (
          <Link
            key={col.id}
            href={`/collections#${col.id}`}
            onClick={onNavigate}
            className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent/60 hover:text-foreground"
          >
            <span
              className="h-2.5 w-2.5 rounded-sm"
              style={{ backgroundColor: col.color }}
            />
            {col.name}
          </Link>
        ))}

        <p className="px-2.5 pb-1 pt-5 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Workspace
        </p>
        {secondaryNav.map((item) => (
          <NavLink key={item.label} item={item} onClick={onNavigate} />
        ))}
      </nav>
      <div className="border-t p-3">
        <div className="flex items-center gap-2.5 rounded-md px-2 py-1.5">
          <Avatar initials={demoUser.initials} className="h-8 w-8" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium">{demoUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {demoUser.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
