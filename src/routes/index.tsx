import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import { services } from "@/data/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinica de Covoare — Curățenie Premium în Brașov din 2007" },
      { name: "description", content: "Servicii integrate de curățenie și întreținere pentru companii și rezidențe în Brașov. Administrare imobile, post-construcție, covoare, birouri, auto." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO with big background image */}
      <section className="relative h-[92vh] min-h-[640px] w-full overflow-hidden -mt-20">
        <img
          src={heroImg}
          alt="Lobby corporativ premium curățat de Clinica de Covoare Brașov"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 pt-32">
          <div className="max-w-3xl space-y-8 text-background">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary font-bold">
                Fondat în 2007 · Brașov
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-balance">
              Standardul de <em className="italic text-primary not-italic font-normal">precizie</em> în curățenia profesională.
            </h1>
            <p className="text-lg md:text-xl text-background/75 max-w-xl leading-relaxed font-light">
              De peste 17 ani redăm strălucirea spațiilor de lucru și de locuit din Brașov. Echipa, instrumentele și disciplina noastră fac diferența.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] text-xs hover:bg-background hover:text-foreground transition-colors"
              >
                Solicită ofertă
              </Link>
              <Link
                to="/servicii"
                className="px-8 py-4 border border-background/40 text-background font-bold uppercase tracking-[0.18em] text-xs hover:bg-background hover:text-foreground transition-colors"
              >
                Explorează serviciile
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">
          [ Brașov · 45.6427° N · 25.5887° E ]
        </div>
      </section>

      {/* STATS strip */}
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["01", "17+ ani", "Experiență neîntreruptă"],
            ["02", "450k m²", "Suprafață administrată"],
            ["03", "1.200+", "Clienți în portofoliu"],
            ["04", "24/7", "Disponibilitate operațională"],
          ].map(([n, big, label]) => (
            <div key={n} className="py-12 px-4 md:px-8 first:pl-0 last:pr-0">
              <span className="block font-mono text-xs text-primary mb-3">[{n}]</span>
              <div className="text-3xl md:text-4xl font-black tracking-tight">{big}</div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-3 font-semibold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO — Despre */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Cap. 01 — Filosofia noastră ]
            </span>
          </div>
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-balance">
              De peste 17 ani în lupta cu murdăria, ghidați de disciplină tehnică și respect pentru detaliu.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Activăm pe piața de specialitate încă din anul 2007. Experiența dobândită, cultura și valorile noastre, dar mai ales instrumentele și echipamentele folosite ne recomandă în lupta cu rezultatele nedorite din activitățile clienților noștri. Devenim astfel echipa care poate reda, în modul cel mai eficient, strălucirea spațiilor.
            </p>
            <div className="pt-4">
              <Link to="/despre" className="font-mono text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                Citește povestea →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES grid */}
      <section className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
                [ Cap. 02 — Servicii ]
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                Șase discipline. Un singur standard.
              </h2>
            </div>
            <Link to="/servicii" className="font-mono text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors w-fit">
              Toate serviciile →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
            {services.map((s) => (
              <Link
                key={s.id}
                to="/servicii"
                hash={s.id}
                className="group relative bg-card p-8 hover:bg-background transition-all duration-500"
              >
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-primary group-hover:h-full transition-all duration-500" />
                <div className="mb-6 overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="w-full aspect-[4/3] object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mono text-xs text-primary font-bold">[{s.number}]</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.tagline}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal mb-3 leading-snug">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.description}</p>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-primary">
                  Detalii →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Cap. 03 — Metodologie ]
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-balance">
              Fiecare proiect, o operațiune cu plan, execuție și raport.
            </h2>
            <p className="text-background/60 leading-relaxed">
              Nu improvizăm. Pentru fiecare contract construim un plan tehnic, alocăm echipa potrivită și măsurăm rezultatul.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col divide-y divide-background/10">
            {[
              ["Consultanță & audit", "Specialiștii noștri evaluează spațiul, suprafețele și gradul de uzură pentru un plan personalizat."],
              ["Plan tehnic & ofertă", "Stabilim frecvențele, materialele, echipamentele și costurile, într-o ofertă transparentă."],
              ["Execuție monitorizată", "Implementarea sub supravegherea unui manager dedicat, cu echipa instruită pentru tipul de proiect."],
              ["Verificare & raportare", "Audit de calitate la finalizare și raport detaliat al intervenției pentru orice client B2B."],
            ].map(([title, desc], i) => (
              <div key={i} className="py-10 flex gap-8">
                <span className="font-mono text-sm text-primary font-bold pt-1">0{i + 1}</span>
                <div className="flex-1 space-y-3">
                  <h4 className="font-serif text-2xl font-normal">{title}</h4>
                  <p className="text-background/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto border border-border p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              Răspundem în 24h
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Sunteți pregătiți pentru un spațiu administrat ireproșabil?
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <Link to="/contact" className="px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] text-xs hover:bg-foreground transition-colors">
              Solicită audit gratuit
            </Link>
            <a href="tel:+40268000000" className="font-mono text-sm hover:text-primary transition-colors">
              +40 268 000 000
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
