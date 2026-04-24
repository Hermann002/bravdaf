const Footer = () => {
  return (
    <footer className="bg-foreground text-background/70 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="grid place-items-center w-9 h-9 rounded-lg gradient-warm text-primary-foreground font-display font-bold">
              B
            </span>
            <div>
              <div className="font-display font-bold text-background">Les Braves d'Afrique</div>
              <div className="text-xs">Connecter l'Afrique au monde.</div>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#about" className="hover:text-accent transition-smooth">À propos</a>
            <a href="#produits" className="hover:text-accent transition-smooth">Produits</a>
            <a href="#services" className="hover:text-accent transition-smooth">Services</a>
            <a href="#contact" className="hover:text-accent transition-smooth">Contact</a>
          </div>
          <div className="text-xs">© {new Date().getFullYear()} BravdAf. Tous droits réservés.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
