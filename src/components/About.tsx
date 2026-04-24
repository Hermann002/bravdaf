import { Compass, Globe2, Sparkles } from "lucide-react";
import productsImg from "@/assets/products-africa.jpg";

const pillars = [
  {
    icon: Compass,
    title: "Mission",
    text: "Concevoir des solutions technologiques innovantes adaptées aux besoins des particuliers et des entreprises, tout en valorisant les produits Made by Africans.",
  },
  {
    icon: Globe2,
    title: "Vision",
    text: "Bâtir un pont entre l'Afrique et le reste du monde, en facilitant l'accès aux opportunités, aux produits et aux services issus du continent.",
  },
  {
    icon: Sparkles,
    title: "Valeurs",
    text: "Innovation, qualité et impact social. Nous valorisons les talents africains et créons des opportunités économiques durables.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 gradient-soft">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase text-primary">À propos</span>
            <h2 className="mt-3 text-4xl md:text-5xl font-display font-bold text-balance leading-tight">
              La technologie au service du <span className="text-primary">Made in Africa</span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              BravdAf est une entreprise innovante spécialisée dans le numérique, la promotion
              commerciale et les services multisectoriels. Basée à Gatineau (Canada), elle déploie
              son écosystème vers l'Afrique et la diaspora.
            </p>

            <div className="mt-10 space-y-6">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl gradient-warm grid place-items-center shadow-warm">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 gradient-warm rounded-3xl blur-2xl opacity-20" />
            <img
              src={productsImg}
              alt="Marché africain coloré, artisanat et tissus"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-3xl shadow-warm w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-2xl p-5 shadow-card max-w-[220px]">
              <div className="font-display text-2xl font-bold text-primary">+7 ans</div>
              <div className="text-sm text-muted-foreground mt-1">d'expérience en administration, marketing et service client</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
