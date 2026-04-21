import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/ajinava-edge-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/events", label: "Events" },
  { to: "/services", label: "Services" },
  { to: "/announcements", label: "Announcements" },
  { to: "/community-partners", label: "Partners" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 glass border-b border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative h-9 w-9 rounded-full overflow-hidden ring-2 ring-primary/40 group-hover:ring-primary transition-all shadow-glow">
            <img src={logo} alt="Ajinava Edge logo" className="h-full w-full object-cover" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">
            Ajinava <span className="text-gradient">Edge</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-sm text-foreground bg-white/5" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gradient-edge px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow hover:opacity-95 transition-opacity"
          >
            Join Community
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border/50 px-4 py-3 space-y-1 bg-background/90 backdrop-blur">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-white/5"
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center mt-2 rounded-full bg-gradient-edge px-5 py-2 text-sm font-semibold text-primary-foreground"
          >
            Join Community
          </Link>
        </div>
      )}
    </header>
  );
}
