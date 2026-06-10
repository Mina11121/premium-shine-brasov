import { createFileRoute } from "@tanstack/react-router";
import { carpetTypes } from "@/data/services";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Proces, Tarife & Tipuri de Covoare — Clinica de Covoare Brașov" },
      { name: "description", content: "Spălare manuală și mecanizată pentru covoare persane, lână, mătase, viscoză și blană. Tarife transparente, preluare gratuită în Brașov." },
    ],
  }),
  component: ServiciiPage,
});

const priceList = [
  { type: "Covoare sintetice moderne", price: "12 lei / m²", note: "Mochetă, traverse, polipropilenă" },
  { type: "Covoare din lână", price: "18 lei / m²", note: "Bucureștene, moderne, kilim țesut" },
  { type: "Covoare persane & orientale", price: "25 lei / m²", note: "Spălare 100% manuală" },
  { type: "Mătase, viscoză & fibre fine", price: "35 lei / m²", note: "Tratament special, fără mașină" },
  { type: "Blană naturală & shaggy", price: "28 lei / m²", note: "Include ozonificare" },
  { type: "Detratare pete grele", price: "+5 lei / m²", note: "Vin, urină, machiaj, mucegai" },
];

const faq = [
  ["În cât timp îmi primesc covorul înapoi?", "Termenul standard este de 48–72 ore. Pentru piese delicate (mătase, antice) sau cu pete dificile, putem ajunge la 5–7 zile pentru o uscare lentă, corectă."],
  ["Cât costă preluarea și livrarea?", "Gratuite în Brașov și pe o rază de 20 km. Pentru localități mai îndepărtate stabilim un cost simbolic în funcție de distanță."],
  ["Folosiți soluții agresive sau toxice?", "Niciodată. Toate șampoanele și soluțiile noastre sunt pH-neutru, bio-degradabile și sigure pentru copii și animale de companie."],
  ["Riscă covorul meu să se decoloreze?", "Înainte de orice spălare testăm migrarea culorilor pe o porțiune ascunsă. Dacă există risc, trecem la spălarea manuală la rece sau anunțăm clientul înainte."],
  ["Pot spăla un covor cu fir foarte lung (shaggy)?", "Da, este una dintre specialitățile noastre. Folosim pieptănare profundă și uscare cu jet de aer pentru a păstra moliciunea."],
  ["Scoateți mirosul de urină de animale?", "Da. Combinăm soluții enzimatice care descompun cristalele de uree cu ozonificare în spațiu controlat — eliminăm sursa, nu doar mirosul."],
];

function ServiciiPage() {
  return (
    <>
      <section className="border-b border-border py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Proces · tipuri · tarife ]
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1] tracking-tight text-balance">
              Tot ce trebuie să știi înainte să ne lași covorul.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Suntem transparenți cu prețurile, cu termenele și cu metoda. Mai jos găsești detaliat ce facem, pentru ce tip de covor și cu ce preț.
            </p>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section id="tipuri" className="scroll-mt-24">
        {carpetTypes.map((s, i) => (
          <div
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
                    Cere ofertă pentru acest tip
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PRICING */}
      <section id="tarife" className="scroll-mt-24 py-32 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
                [ Tarife orientative ]
              </span>
            </div>
            <div className="md:col-span-8 space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                Prețuri transparente, fără surprize.
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl">
                Tarifele de mai jos sunt orientative. La preluare evaluăm covorul și îți confirmăm prețul ferm înainte să începem.
              </p>
            </div>
          </div>

          <div className="border border-border">
            {priceList.map((p, i) => (
              <div
                key={p.type}
                className={`grid grid-cols-12 gap-4 px-6 md:px-10 py-6 items-center ${
                  i !== priceList.length - 1 ? "border-b border-border" : ""
                } hover:bg-card transition-colors`}
              >
                <span className="col-span-1 font-mono text-xs text-primary font-bold">[0{i + 1}]</span>
                <div className="col-span-7 md:col-span-6">
                  <div className="font-serif text-lg md:text-xl font-normal">{p.type}</div>
                  <div className="text-xs text-muted-foreground mt-1">{p.note}</div>
                </div>
                <div className="col-span-4 md:col-span-5 text-right font-mono text-base md:text-xl font-bold tracking-tight">
                  {p.price}
                </div>
              </div>
            ))}
          </div>

          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-6">
            * Preluare și livrare incluse. Discount 10% pentru peste 30 m².
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Întrebări frecvente ]
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight mt-6">
              Ce ne întreabă cel mai des clienții.
            </h2>
          </div>
          <div className="md:col-span-8 divide-y divide-border border-y border-border">
            {faq.map(([q, a]) => (
              <details key={q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
                  <span className="font-serif text-lg md:text-xl font-normal">{q}</span>
                  <span className="font-mono text-primary text-xl shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-muted-foreground leading-relaxed mt-4 pr-12">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
            Nu ești sigur ce tarif ți se potrivește?
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight leading-tight">
            Trimite-ne o poză. Îți spunem prețul în 5 minute.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors mt-4"
          >
            <WhatsAppIcon />
            Trimite poză pe WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
