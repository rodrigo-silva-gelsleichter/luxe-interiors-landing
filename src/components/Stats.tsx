import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 15, suffix: "+", label: "Anos de História" },
  { number: 500, suffix: "+", label: "Projetos Entregues" },
  { number: 98, suffix: "%", label: "Satisfação dos Clientes" },
  { number: 5, suffix: "", label: "Países com Presença" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref} className="text-5xl md:text-6xl font-serif font-light text-foreground">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-3">
              <Counter target={stat.number} suffix={stat.suffix} />
              <p className="font-body text-muted-foreground text-sm tracking-[0.15em] uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
