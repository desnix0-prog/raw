import {
  Library,
  Star,
  FolderOpen,
  MessagesSquare,
  Settings,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

export const primaryNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/library", label: "All Documents", icon: Library },
  { href: "/library?filter=favorites", label: "Favorites", icon: Star },
  { href: "/collections", label: "Collections", icon: FolderOpen },
  { href: "/chats", label: "Recent Chats", icon: MessagesSquare },
];

export const secondaryNav: NavItem[] = [
  { href: "/settings", label: "Settings", icon: Settings },
];
