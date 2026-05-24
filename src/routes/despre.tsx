import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";

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
            17 ani de disciplină, instrumente potrivite și echipa care face diferența.
          </h1>
        </div>
      </section>

      <section className="border-b border-border">
        <img src={heroImg} alt="Spațiu administrat de Clinica de Covoare" loading="lazy" width={1920} height={1280} className="w-full h-[60vh] object-cover" />
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
              Activăm pe piața de specialitate încă din anul 2007. Am început într-un atelier modest din Brașov, cu o singură mașină de spălat covoare și convingerea că un mediu curat schimbă felul în care oamenii muncesc, locuiesc și se simt.
            </p>
            <p>
              Astăzi acoperim întregul județ cu o echipă de profesioniști instruiți, echipamente industriale de generație nouă și o metodologie de lucru rafinată prin sute de proiecte — de la apartamente private la hale industriale și sedii corporate.
            </p>
            <p>
              Experiența dobândită, cultura organizațională și instrumentele de lucru ne recomandă în lupta cu rezultatele nedorite din activitățile clienților noștri.
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
              ["Rigoare tehnică", "Fiecare intervenție urmează un protocol clar. Echipamentele și consumabilele sunt selectate în funcție de suprafață, nu de convenabil."],
              ["Discreție și încredere", "Lucrăm în spații sensibile: sedii executive, vile private, clinici. Confidențialitatea este parte din contract."],
              ["Rezultat măsurabil", "Nu plecăm până nu trecem propriul audit de calitate. Pentru clienți B2B, livrăm raport detaliat al fiecărei intervenții."],
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
            Vrem să fim echipa dumneavoastră.
          </h2>
          <Link to="/contact" className="inline-block px-10 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] text-xs hover:bg-foreground transition-colors mt-4">
            Începem o colaborare
          </Link>
        </div>
      </section>
    </>
  );
}