import { ArrowUpRight, Wheat, ShoppingBag, Smartphone, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import epiafrika from "@/assets/epiafrika.png";

type Product = {
  name: string;
  tagline: string;
  description: string;
  status: "live" | "soon";
  url?: string;
  icon: typeof Wheat;
  accent: string;
  logo?: string;
};

const products: Product[] = [
  {
    name: "EpiAfrika",
    tagline: "Marketplace agricole africaine",
    description:
      "La place de marché qui connecte producteurs africains et consommateurs internationaux. Disponible dès aujourd'hui.",
    status: "live",
    url: "https://epiafrika.bravdaf.com",
    icon: Wheat,
    accent: "from-amber-500 to-orange-600",
    logo: epiafrika,
  },
  {
    name: "BravShop",
    tagline: "Boutiques en ligne clé-en-main",
    description:
      "Permettez aux artisans et commerçants africains de créer leur boutique en ligne en quelques minutes.",
    status: "soon",
    icon: ShoppingBag,
    accent: "from-rose-500 to-red-600",
  },
  {
    name: "BravConnect",
    tagline: "App mobile communautaire",
    description:
      "Une application qui relie la diaspora africaine aux services, événements et opportunités du continent.",
    status: "soon",
    icon: Smartphone,
    accent: "from-emerald-500 to-teal-600",
  },
];

const Products = () => {
  return (
    <section id="produits" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pattern-kente opacity-50" />

      <div className="container relative">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">Nos produits</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-balance leading-tight">
            Un écosystème en pleine <span className="text-primary">expansion</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Découvrez nos plateformes — une déjà en ligne, d'autres en développement actif.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => {
            const Icon = p.icon;
            const isLive = p.status === "live";
            const Wrapper: any = isLive ? "a" : "div";
            const wrapperProps = isLive
              ? { href: p.url, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={p.name}
                {...wrapperProps}
                className={`group relative bg-card border border-border rounded-2xl p-7 shadow-card transition-smooth ${
                  isLive ? "hover:-translate-y-1 hover:shadow-warm cursor-pointer" : ""
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${p.accent} grid place-items-center shadow-warm`}>
                    {p.logo ? (
                      <img src={p.logo} alt={p.name} className="w-9 h-9 object-contain" />
                    ) : (
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    )}
                  </div>
                  {isLive ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      En ligne
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-semibold">
                      <Lock className="w-3 h-3" />
                      Bientôt
                    </span>
                  )}
                </div>

                <h3 className="mt-6 font-display text-2xl font-bold">{p.name}</h3>
                <p className="text-sm font-medium text-primary mt-1">{p.tagline}</p>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.description}</p>

                {isLive && (
                  <div className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-smooth">
                    Visiter le site
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                )}
              </Wrapper>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="gradient-warm border-0 text-primary-foreground shadow-warm hover:opacity-95 h-12 px-7">
            <a href="https://epiafrika.bravdaf.com" target="_blank" rel="noopener noreferrer">
              Visiter EpiAfrika maintenant
              <ArrowUpRight className="ml-1 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
