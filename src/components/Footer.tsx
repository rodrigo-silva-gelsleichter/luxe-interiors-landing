const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="font-serif text-2xl text-background tracking-wider">Lunnaris</p>
            <p className="font-body text-background/40 text-xs mt-2">Interiores & Design</p>
          </div>
          <p className="font-body text-background/30 text-xs tracking-wider">
            © 2025 Lunnaris Interiores. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
