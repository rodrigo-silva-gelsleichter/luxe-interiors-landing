import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Albuquerque",
    role: "Arquiteta & Cliente",
    text: "A Lunnaris superou todas as expectativas. A atenção aos detalhes e a qualidade dos materiais são incomparáveis. Nosso projeto ficou exatamente como sonhamos.",
    initials: "MA",
  },
  {
    name: "Ricardo Mendes",
    role: "Empresário",
    text: "Profissionalismo do início ao fim. O time entendeu perfeitamente nossa visão e transformou nosso apartamento em um espaço que realmente reflete quem somos.",
    initials: "RM",
  },
  {
    name: "Camila Ferreira",
    role: "Designer de Interiores",
    text: "Trabalhar com a Lunnaris é uma experiência premium. As ferragens são impecáveis, os acabamentos perfeitos e o prazo foi rigorosamente cumprido.",
    initials: "CF",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-warm-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">Depoimentos</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
            O Que Dizem Nossos <span className="italic">Clientes</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-background p-8 space-y-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground text-sm leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-body text-primary-foreground text-xs tracking-wider">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body text-foreground text-sm font-medium">{t.name}</p>
                  <p className="font-body text-muted-foreground text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
