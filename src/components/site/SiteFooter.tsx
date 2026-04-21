import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border/50 bg-background/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">
            Ajinava <span className="text-gradient">Edge</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Smart IT solutions, AI products, and a community where builders sharpen
            their edge. From idea to launch — we engineer the future.
          </p>
          <div className="flex gap-3 mt-5">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="p-2 rounded-full glass hover:shadow-glow transition-shadow" aria-label="Social link">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/events" className="hover:text-foreground">Events</Link></li>
            <li><Link to="/announcements" className="hover:text-foreground">Announcements</Link></li>
            <li><Link to="/community-partners" className="hover:text-foreground">Partners</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-sm">Company</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ajinava Edge. Built with intelligence.
      </div>
    </footer>
  );
}
