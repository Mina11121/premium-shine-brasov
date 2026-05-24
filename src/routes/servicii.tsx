import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/data/services";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

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
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-[11px] hover:bg-[#1ebe57] transition-colors"
                >
                  <WhatsAppIcon />
                  Cere ofertă pe WhatsApp
                </a>
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors mt-4"
          >
            <WhatsAppIcon />
            Scrie-ne pe WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}