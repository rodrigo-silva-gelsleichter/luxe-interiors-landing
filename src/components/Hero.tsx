import heroImage from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cozinha gourmet de luxo com mármore e madeira"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/60" />
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <p className="font-body text-champagne tracking-[0.35em] uppercase text-sm mb-6 animate-fade-in">
          Móveis Planejados de Luxo
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-primary-foreground leading-tight mb-8 animate-fade-up">
          Transformamos Lares
          <br />
          <span className="italic font-normal text-champagne">em Obras de Arte</span>
        </h1>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed opacity-0 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Cada projeto é uma expressão única de sofisticação. Design autoral, materiais nobres e atenção obsessiva aos detalhes.
        </p>
        <a
          href="#contato"
          className="inline-block border border-champagne text-champagne px-10 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-champagne hover:text-primary transition-all duration-500 opacity-0 animate-fade-up"
          style={{ animationDelay: '0.6s' }}
        >
          Agende uma Consultoria Exclusiva
        </a>
      </div>
    </section>
  );
};

export default Hero;
