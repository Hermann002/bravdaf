import { Mail, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 gradient-soft">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl gradient-warm p-10 md:p-16 shadow-warm">
          <div className="absolute inset-0 pattern-kente opacity-30" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground text-balance leading-tight">
                Prêt à bâtir l'avenir avec nous ?
              </h2>
              <p className="mt-5 text-lg text-primary-foreground/85 max-w-lg">
                Partenariats, investissements ou collaborations — parlons de votre projet
                et construisons ensemble un pont entre l'Afrique et le monde.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="gradient-gold border-0 text-accent-foreground h-12 px-7 hover:opacity-95">
                  <a href="mailto:bravdaf@entreprise.com">
                    Nous contacter
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15">
                <Mail className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-primary-foreground/70">Email</div>
                  <a href="mailto:bravdaf@entreprise.com" className="text-primary-foreground font-semibold hover:text-accent transition-smooth">
                    bravdaf@entreprise.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/15">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <div>
                  <div className="text-sm text-primary-foreground/70">Localisation</div>
                  <div className="text-primary-foreground font-semibold">Gatineau, Canada · Ouvert sur l'Afrique</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
