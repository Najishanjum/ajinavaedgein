import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { socialLinks } from "@/lib/site-data";

export function SiteFooter() {
  const socials = [
    { Icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { Icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
    { Icon: Youtube, href: socialLinks.youtube, label: "YouTube" },
    { Icon: MessageCircle, href: socialLinks.whatsapp, label: "Join WhatsApp Community" },
  ];

  return (
    <footer className="mt-20 border-t border-border/50 bg-background/50 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-10 md:grid-cols-5">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl font-bold">
            Ajinava <span className="text-gradient">Edge</span>
          </h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Smart IT solutions, AI products, and a community where builders sharpen
            their edge. From idea to launch — we engineer the future.
          </p>
          <div className="flex gap-3 mt-5">
            {socials.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full glass hover:shadow-glow transition-shadow"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
          <a
            href={socialLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-5 items-center gap-2 rounded-full bg-gradient-edge px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow"
          >
            <MessageCircle size={14} /> Join Community
          </a>
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
        <div>
          <h4 className="font-semibold mb-3 text-sm">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>
              <a href="mailto:ajinavaedge@gmail.com" className="flex items-start gap-2 hover:text-foreground">
                <Mail size={14} className="mt-0.5 shrink-0" />
                <span>ajinavaedge@gmail.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+919109530117" className="flex items-start gap-2 hover:text-foreground">
                <Phone size={14} className="mt-0.5 shrink-0" />
                <span>+91 9109530117</span>
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              <span>Jabalpur, Madhya Pradesh, India 482004</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Ajinava Edge · Powered by Team ILM Tech
      </div>
    </footer>
  );
}
