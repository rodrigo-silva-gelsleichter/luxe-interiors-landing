import { Gem, Cog, Palette } from "lucide-react";

const items = [
  { icon: Gem, title: "Materiais Nobres", description: "Mármores selecionados, madeiras de reflorestamento certificadas e revestimentos importados que garantem durabilidade e beleza atemporal." },
  { icon: Cog, title: "Ferragens Alemãs", description: "Utilizamos exclusivamente ferragens Blum e Hettich, referências mundiais em precisão, suavidade e longevidade." },
  { icon: Palette, title: "Design Autoral", description: "Cada projeto é concebido do zero por nosso time de arquitetos, garantindo peças únicas que refletem a personalidade de cada cliente." },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 md:py-32 bg-primary">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-champagne tracking-[0.3em] uppercase text-sm mb-4">Por que nos escolher</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-primary-foreground">
            Excelência em Cada <span className="italic">Detalhe</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {items.map((item) => (
            <div key={item.title} className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-champagne/30 rounded-full">
                <item.icon className="text-champagne" size={28} strokeWidth={1.2} />
              </div>
              <h3 className="text-xl font-serif text-primary-foreground">{item.title}</h3>
              <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;
