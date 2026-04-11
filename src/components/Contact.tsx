import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", ambiente: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", ambiente: "" });
  };

  return (
    <section id="contato" className="py-24 md:py-32 bg-primary">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-body text-champagne tracking-[0.3em] uppercase text-sm mb-4">Contato</p>
          <h2 className="text-3xl md:text-5xl font-serif font-light text-primary-foreground mb-6">
            Vamos Criar Algo <span className="italic">Extraordinário</span>
          </h2>
          <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
            Agende uma consultoria exclusiva e descubra como podemos transformar seu espaço.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Seu nome"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm py-4 focus:outline-none focus:border-champagne transition-colors"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm py-4 focus:outline-none focus:border-champagne transition-colors"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Qual ambiente deseja transformar?"
              value={formData.ambiente}
              onChange={(e) => setFormData({ ...formData, ambiente: e.target.value })}
              required
              className="w-full bg-transparent border-b border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 font-body text-sm py-4 focus:outline-none focus:border-champagne transition-colors"
            />
          </div>
          <div className="pt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center gap-3 border border-champagne text-champagne px-12 py-4 text-sm tracking-[0.2em] uppercase font-body hover:bg-champagne hover:text-primary transition-all duration-500"
            >
              {submitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
              <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
