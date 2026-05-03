import { useEffect, useState } from "react";
import heroImage from "@/assets/hero-kitchen.jpg";
import { fetchPagina } from "../../utils/fetchPagina";
import { parseContent } from "../../utils/parseContent";

type Conteudo = ReturnType<typeof parseContent>;


const Hero = () => {

  const [conteudo, setConteudo] = useState<Conteudo | null>(null);

  useEffect(() => {
    fetchPagina("pagina-1")
      .then(pagina => {
        // fetchPagina trouxe o JSON completo da página
        // parseContent separa o HTML em paragrafos, titulos, imagens...
        const elementos = parseContent(pagina.content.rendered);
        setConteudo(elementos);
      })
      .catch(() => {
        console.warn("Não foi possível buscar o conteúdo do WordPress.");
      });
  }, []);


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
        {/* titulos[0] = primeiro título do conteúdo da página no WordPress */}
        <p className="font-body text-champagne tracking-[0.35em] uppercase text-sm mb-6 animate-fade-in">
          {conteudo.titulos[0]?.textContent}
          {/*          ↑ se carregou, usa o WP   ↑ senão, mostra o texto padrão */}
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
