import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const projects = [
  { title: "Residência Jurerê Internacional", location: "Florianópolis, SC", image: gallery1 },
  { title: "Villa Riviera", location: "Balneário Camboriú, SC", image: gallery2 },
  { title: "Penthouse Itaim Bibi", location: "São Paulo, SP", image: gallery3 },
  { title: "Residência Lago Sul", location: "Brasília, DF", image: gallery4 },
];

const Gallery = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="font-body text-accent tracking-[0.3em] uppercase text-sm mb-4">Portfólio</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-foreground">
            Projetos que <span className="italic">Inspiram</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div key={project.title} className={`group relative overflow-hidden ${i === 0 || i === 3 ? 'md:aspect-[4/3]' : 'md:aspect-[4/3]'}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex items-end p-8">
                <div>
                  <h3 className="text-xl font-serif text-primary-foreground mb-1">{project.title}</h3>
                  <p className="font-body text-primary-foreground/60 text-sm">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
