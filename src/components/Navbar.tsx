import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#about" },
  { label: "Produits", href: "#produits" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-smooth",
        scrolled
          ? "bg-background/85 backdrop-blur-lg border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#accueil" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-lg gradient-warm text-primary-foreground font-display font-bold shadow-warm">
            B
          </span>
          <span className="font-display font-bold text-lg tracking-tight">
            Brav<span className="text-primary">dAf</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="default" className="gradient-warm border-0 shadow-warm hover:opacity-95">
            <a href="#produits">Nos produits</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-foreground/80 hover:text-primary font-medium"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full gradient-warm border-0">
                <a href="#produits" onClick={() => setOpen(false)}>Nos produits</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
