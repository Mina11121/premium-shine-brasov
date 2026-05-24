import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/data/services";

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii de Curățenie & Întreținere — Clinica de Covoare Brașov" },
      { name: "description", content: "Administrare clădiri, curățenie post-construcție, spălare covoare, mentenanță birouri, tapițerii auto, curățenie generală. Servicii premium în Brașov." },
    ],
  }),
  component: ServiciiPage,
});

function ServiciiPage() {
  return (
    <>
      <section className="border-b border-border py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Catalog complet — 06 discipline ]
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1] tracking-tight text-balance">
              Servicii integrate de curățenie și întreținere.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Alegeți serviciul potrivit și bucurați-vă de rezultate fără niciun efort. Fiecare disciplină are propria metodologie, propriile echipamente și propriul echipaj instruit.
            </p>
          </div>
        </div>
      </section>

      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`scroll-mt-24 border-b border-border ${i % 2 === 1 ? "bg-card" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1024}
                height={768}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-sm text-primary font-bold">[{s.number}]</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.tagline}
                </span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                {s.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{s.description}</p>
              <ul className="space-y-3 pt-4">
                {s.details.map((d) => (
                  <li key={d} className="flex gap-4 text-sm">
                    <span className="font-mono text-primary mt-0.5">+</span>
                    <span className="text-foreground/80">{d}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-6">
                <Link to="/contact" className="inline-block px-6 py-3 bg-foreground text-background font-bold uppercase tracking-[0.18em] text-[11px] hover:bg-primary transition-colors">
                  Cere ofertă pentru acest serviciu
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
            Nu sunteți sigur ce vi se potrivește?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Solicitați o consultanță de specialitate.
          </h2>
          <p className="text-background/60 leading-relaxed max-w-2xl mx-auto">
            Specialiștii noștri vă stau la dispoziție cu informații tehnice despre echipamente, materiale și organizarea activității de curățenie pentru spațiul dumneavoastră.
          </p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] text-xs hover:bg-background hover:text-foreground transition-colors mt-4">
            Solicită consultanță
          </Link>
        </div>
      </section>
    </>
  );
}