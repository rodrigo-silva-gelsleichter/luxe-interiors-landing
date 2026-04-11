import { ArrowRight } from "lucide-react";
import heroKitchen from "@/assets/hero-kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import homeOffice from "@/assets/home-office.jpg";
import livingRoom from "@/assets/living-room.jpg";

const services = [
  { title: "Cozinhas Gourmet", description: "Espaços que unem funcionalidade e estética com bancadas em mármore, iluminação integrada e acabamentos impecáveis.", image: heroKitchen },
  { title: "Dormitórios Master", description: "Ambientes de descanso projetados para o conforto absoluto, com painéis em madeira nobre e iluminação cênica.", image: bedroom },
  { title: "Home Offices", description: "Escritórios de alta performance com marcenaria sob medida, organização inteligente e design que inspira produtividade.", image: homeOffice },
  { title: "Áreas Sociais", description: "Living rooms e espaços de convivência que impressionam pela amplitude, materiais nobres e design contemporâneo.", image: livingRoom },
];

const Services = () => {
  return (
    <section id="ambientes" className="py-24 md:py-32 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">Nossos Ambientes</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
            Cada Espaço, Uma <span className="italic">Experiência</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.title} className="group relative overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-all duration-500 flex items-end">
                <div className="p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-primary-foreground mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.title}
                  </h3>
                  <p className="font-body text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md">
                    {service.description}
                  </p>
                  <ArrowRight className="text-champagne mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" size={20} />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-xl font-serif text-primary-foreground drop-shadow-lg">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
