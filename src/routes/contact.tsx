import { createFileRoute } from "@tanstack/react-router";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const WhatsAppIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Clinica de Covoare Brașov" },
      { name: "description", content: "Contactați-ne pentru servicii de curățenie și întreținere în Brașov. Str. Nicopole nr. 46. Răspundem în 24h." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="border-b border-border py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Contact · răspundem în 24h ]
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1] tracking-tight text-balance">
              Începem cu o conversație.
            </h1>
          </div>
          <div className="md:col-span-5">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Scrieți-ne pe WhatsApp câteva detalii despre spațiul și nevoia dumneavoastră. Vă răspundem cu o propunere clară, fără obligații.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[01] WhatsApp</span>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-serif text-3xl md:text-4xl font-light hover:text-[#25D366] transition-colors"
              >
                {WHATSAPP_DISPLAY}
              </a>
              <p className="text-sm text-muted-foreground">Luni — Vineri · 08:00–18:00 · Răspuns rapid</p>
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[02] Email</span>
              <p className="font-serif text-2xl font-light break-all text-foreground/80">
                office@curatenie-intretinere.info.ro
              </p>
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[03] Sediu</span>
              <p className="font-serif text-2xl font-light leading-snug">Str. Nicopole nr. 46<br/>Brașov, România</p>
            </div>
          </div>

          <div className="lg:col-span-6 border border-border bg-card p-10 md:p-14 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">
                Cel mai rapid mod să ne contactezi
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight">
                Trimite-ne un mesaj pe WhatsApp și primești o ofertă personalizată în aceeași zi.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Descrieți pe scurt spațiul, suprafața aproximativă și tipul de curățenie de care aveți nevoie. Vă răspundem cu o propunere clară, fără obligații.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 px-8 py-5 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors"
            >
              <WhatsAppIcon />
              Deschide WhatsApp
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
              {WHATSAPP_DISPLAY}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}