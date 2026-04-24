import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-africa.jpg";

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <img
        src={heroImg}
        alt="Savane africaine au coucher du soleil avec un réseau numérique"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute inset-0 pattern-kente opacity-40" />

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent text-sm font-medium backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Made by Africans · Built for the World
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-display font-bold text-primary-foreground text-balance leading-[1.05]">
            Connecter l'Afrique
            <span className="block bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              au monde.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            Les Braves d'Afrique (BravdAf) conçoit des solutions numériques innovantes
            et valorise les talents et produits africains à l'échelle internationale.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="gradient-gold border-0 text-accent-foreground shadow-glow hover:opacity-95 h-12 px-7 text-base">
              <a href="#produits">
                Découvrir nos produits
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 px-7 text-base bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20 hover:text-primary-foreground backdrop-blur-sm">
              <a href="#about">En savoir plus</a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "1", v: "Plateforme en ligne" },
              { k: "3+", v: "Produits en développement" },
              { k: "🌍", v: "Vision panafricaine" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-display text-3xl md:text-4xl font-bold text-accent">{s.k}</div>
                <div className="text-sm text-primary-foreground/70 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
