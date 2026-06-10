import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/atelier.jpg";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export const Route = createFileRoute("/despre")({
  head: () => ({
    meta: [
      { title: "Despre Noi — Clinica de Covoare Brașov · Din 2007" },
      { name: "description", content: "De peste 17 ani, echipa Clinica de Covoare oferă servicii premium de curățenie și întreținere în Brașov. Aflați povestea noastră." },
    ],
  }),
  component: DesprePage,
});

function DesprePage() {
  return (
    <>
      <section className="border-b border-border py-32 px-6">
        <div className="max-w-5xl mx-auto space-y-8">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
            [ Despre noi · est. 2007 ]
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1] tracking-tight text-balance">
            17 ani de atelier. Mii de covoare. Aceeași grijă pentru fiecare.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <img src={heroImg} alt="Atelierul Clinica de Covoare din Brașov" loading="lazy" width={1600} height={1200} className="w-full h-[60vh] object-cover" />
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Povestea noastră ]
            </span>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Am început în 2007 într-un atelier modest din Brașov, cu o singură mașină de spălat covoare și convingerea că un covor curat schimbă felul în care simți o cameră întreagă.
            </p>
            <p>
              Astăzi avem un atelier propriu cu spațiu dedicat de uscare controlată, echipamente industriale de generație nouă și o echipă care cunoaște fiecare tip de fibră — de la mătasea unui Tabriz până la firul lung al unui shaggy contemporan.
            </p>
            <p>
              Nu spălăm covoare „la kilogram". Fiecare piesă este evaluată, tratată și livrată separat. Așa am ajuns să avem clienți care ne aduc al treilea, al patrulea, al zecelea covor.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-light mb-16 max-w-2xl tracking-tight leading-tight">
            Principii care nu se negociază.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[
              ["Fibra dictează metoda", "Mătasea nu se spală ca polipropilena. Lâna nu se usucă ca viscoza. Fiecare covor primește chimia și temperatura potrivite."],
              ["Apa curată, soluții blânde", "Doar șampoane pH-neutru, bio-degradabile. Sigure pentru copii, animale și pentru cele mai delicate piese de patrimoniu."],
              ["Rezultat sau respălare", "Dacă o pată reapare după livrare, ne întoarcem și refacem operațiunea gratuit. Fără discuții, fără birocrație."],
            ].map(([t, d]) => (
              <div key={t} className="bg-card p-10 space-y-4">
                <h3 className="font-serif text-2xl font-normal">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-tight">
            Lasă-ne covorul tău. Îl tratăm cum am trata unul de-al nostru.
          </h2>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors mt-4"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Scrie-ne pe WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}