import { Code2, Megaphone, Users, Truck, LineChart, Handshake } from "lucide-react";

const services = [
  { icon: Code2, title: "Solutions numériques", text: "Applications, plateformes web et outils sur mesure pour particuliers et entreprises." },
  { icon: Megaphone, title: "Marketing digital", text: "Stratégie, contenu et campagnes ciblées pour faire briller votre marque." },
  { icon: Users, title: "Accompagnement", text: "Conseil et formation pour réussir votre transformation digitale." },
  { icon: Handshake, title: "Intermédiation B2B/B2C", text: "Mise en relation entre producteurs, distributeurs et consommateurs." },
  { icon: Truck, title: "Logistique & livraison", text: "Partenariats fiables pour acheminer vos produits partout dans le monde." },
  { icon: LineChart, title: "Visibilité premium", text: "Mettez en avant votre activité auprès de la diaspora et à l'international." },
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-foreground text-background relative">
      <div className="container">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold tracking-widest uppercase text-accent">Nos services</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-balance leading-tight">
            Une offre <span className="text-accent">complète</span> pour grandir
          </h2>
          <p className="mt-5 text-lg text-background/70">
            Du développement de votre plateforme jusqu'à la livraison du dernier kilomètre.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {services.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-foreground p-8 hover:bg-background/5 transition-smooth group">
              <div className="w-12 h-12 rounded-xl gradient-gold grid place-items-center shadow-glow group-hover:scale-110 transition-smooth">
                <Icon className="w-5 h-5 text-accent-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-background/70 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
