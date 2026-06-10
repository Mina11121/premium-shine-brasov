import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-covoare.jpg";
import atelierImg from "@/assets/atelier.jpg";
import processImg from "@/assets/process-detail.jpg";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const WhatsAppIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clinica de Covoare — Curățătorie Premium de Covoare în Brașov" },
      { name: "description", content: "Spălare profesională de covoare persane, lână, mătase, viscoză și blană în atelierul nostru din Brașov. Preluare și livrare gratuită. Din 2007." },
    ],
  }),
  component: Index,
});

// Placeholder slots for the user's own before/after photos.
// Replace `beforeImg` / `afterImg` with imported images when ready.
type BeforeAfterSlot = {
  id: string;
  label: string;
  caption: string;
  beforeImg?: string;
  afterImg?: string;
};

const beforeAfterSlots: BeforeAfterSlot[] = [
  { id: "ba-01", label: "Persan vișiniu · 3x4m", caption: "Pată veche de vin, dispărută integral" },
  { id: "ba-02", label: "Shaggy crem · 2x3m", caption: "Praf, păr de pisică și miros eliminate" },
  { id: "ba-03", label: "Kilim de lână · 1.5x2m", caption: "Culori reactivate, franjuri albiți manual" },
  { id: "ba-04", label: "Mătase Tabriz · 2x3m", caption: "Tratament delicat, fără pierderi de luciu" },
];

function PhotoSlot({ kind, src, label }: { kind: "before" | "after"; src?: string; label: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden bg-gradient-to-br from-secondary to-muted border border-border">
      {src ? (
        <img src={src} alt={label} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
            {kind === "before" ? "[ Înainte ]" : "[ După ]"}
          </span>
          <span className="block h-px w-12 bg-primary/40" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Spațiu pentru poză
          </span>
        </div>
      )}
      <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-[0.25em] bg-foreground text-background px-2 py-1 font-bold">
        {kind === "before" ? "Înainte" : "După"}
      </span>
    </div>
  );
}

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[94vh] min-h-[640px] w-full overflow-hidden -mt-20">
        <img
          src={heroImg}
          alt="Covor persan vișiniu spălat manual în atelierul Clinica de Covoare Brașov"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-transparent to-transparent" />

        <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-24 pt-32">
          <div className="max-w-3xl space-y-8 text-background">
            <div className="inline-flex items-center gap-3">
              <div className="h-px w-12 bg-primary" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-primary font-bold">
                Atelier de curățătorie · Brașov · Din 2007
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-balance">
              Covoarele tale,<br/>
              <em className="italic text-primary not-italic font-normal">spălate ca în prima zi.</em>
            </h1>
            <p className="text-lg md:text-xl text-background/75 max-w-xl leading-relaxed font-light">
              Spălare manuală și mecanizată în atelier propriu. Persane, lână, mătase, viscoză, blană sau șagrinate — fiecare fibră, tratamentul ei. Preluare și livrare gratuită în Brașov.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Programează ridicarea
              </a>
              <a
                href="#galerie"
                className="px-8 py-4 border border-background/40 text-background font-bold uppercase tracking-[0.18em] text-xs hover:bg-background hover:text-foreground transition-colors"
              >
                Vezi before / after
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-10 font-mono text-[10px] uppercase tracking-[0.25em] text-background/50">
          [ Brașov · 45.6427° N · 25.5887° E ]
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            ["01", "17+ ani", "Experiență în atelier"],
            ["02", "28.000+", "Covoare spălate"],
            ["03", "48h", "Termen mediu de livrare"],
            ["04", "0 lei", "Preluare și livrare"],
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

      {/* MANIFESTO */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Cap. 01 — Filosofia atelierului ]
            </span>
          </div>
          <div className="md:col-span-8 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-balance">
              Un covor nu se spală. Se îngrijește. Fibră cu fibră, nod cu nod.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Pentru noi, fiecare covor are istoria lui — moștenit de la bunici, adus dintr-o călătorie, cumpărat pentru salonul nou. Indiferent de valoarea lui sentimentală sau materială, primește același tratament: apă curată, șampoane pH-neutru, mâini de profesioniști și răbdarea de a-l usca exact cât trebuie.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Nu lucrăm „la kilogram" și nu spălăm două covoare în același cazan. Fiecare piesă este tratată separat, evaluată separat, livrată separat.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER GALLERY */}
      <section id="galerie" className="scroll-mt-24 border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
                [ Cap. 02 — Galerie ]
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
                Diferența se vede. Mai ales pe lângă.
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Fotografii reale din atelier — același covor, înainte de procedură și după. Fără filtre, fără retuș, fără promisiuni goale.
              </p>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors w-fit"
            >
              Trimite-mi covorul tău →
            </a>
          </div>

          <div className="space-y-16">
            {beforeAfterSlots.map((slot, idx) => (
              <div key={slot.id} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-1 hidden lg:block">
                  <span className="font-mono text-xs text-primary font-bold">[0{idx + 1}]</span>
                </div>
                <div className="lg:col-span-5 grid grid-cols-2 gap-3">
                  <PhotoSlot kind="before" src={slot.beforeImg} label={slot.label} />
                  <PhotoSlot kind="after" src={slot.afterImg} label={slot.label} />
                </div>
                <div className="lg:col-span-6 lg:pl-12 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Caz #{String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light leading-tight">{slot.label}</h3>
                  <p className="text-muted-foreground leading-relaxed">{slot.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 border-t border-border pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              [ Slot-uri pregătite pentru fotografiile voastre din atelier ]
            </p>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Update săptămânal
            </span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <img
          src={processImg}
          alt="Detaliu spălare manuală a unui covor"
          loading="lazy"
          width={1200}
          height={1500}
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        />
        <div className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32 self-start">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Cap. 03 — Procesul ]
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-balance">
              Șapte pași. Niciun compromis.
            </h2>
            <p className="text-background/60 leading-relaxed">
              Fiecare covor trece prin același protocol — pentru că rezultatul final depinde de fiecare etapă, nu doar de spălarea propriu-zisă.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col divide-y divide-background/10">
            {[
              ["Preluare gratuită", "Venim la adresa ta, evaluăm covorul pe loc și îl preluăm într-un ambalaj curat. Primești bon de preluare."],
              ["Inspecție & test culori", "Identificăm fibra, vechimea, pătările dificile și testăm migrarea culorilor pe o porțiune ascunsă."],
              ["Praf-out mecanizat", "Extragem praful adânc cu echipament dedicat. Un covor poate ține până la 1.5 kg de praf invizibil pe metru pătrat."],
              ["Spălare adaptată", "Manuală pentru piese delicate sau de valoare, automatizată pentru covoare moderne. Soluții pH-neutru, bio-degradabile."],
              ["Detratare pete", "Vin, cafea, urină de animale, grăsimi, machiaj — fiecare pată primește soluția ei, fără să atace fibra."],
              ["Uscare controlată", "Spațiu dedicat cu temperatură și umiditate reglate. Pe verticală pentru a păstra forma, ferit de soare direct."],
              ["Periere & livrare", "Periere finală pentru reactivarea texturii, ambalare în folie protectoare, livrare la adresa ta."],
            ].map(([title, desc], i) => (
              <div key={i} className="py-8 flex gap-8">
                <span className="font-mono text-sm text-primary font-bold pt-1">0{i + 1}</span>
                <div className="flex-1 space-y-2">
                  <h4 className="font-serif text-2xl font-normal">{title}</h4>
                  <p className="text-background/60 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TYPES TEASER */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-4">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
                [ Cap. 04 — Ce spălăm ]
              </span>
            </div>
            <div className="md:col-span-8 space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight text-balance">
                Persane, lână, mătase, viscoză, blană, șagrinate.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Nu există fibră pe care să nu o fi spălat. Fiecare covor primește chimia, temperatura și uscarea care i se potrivesc — nu un protocol standardizat aplicat orbește.
              </p>
              <Link to="/servicii" className="inline-block font-mono text-xs uppercase tracking-[0.2em] font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                Vezi tipurile detaliat →
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
            {[
              "Persane & orientale",
              "Lână naturală",
              "Mătase & viscoză",
              "Blană & shaggy",
              "Kilim & țesute plat",
              "Bumbac",
              "Sintetice moderne",
              "Mochete & traverse",
            ].map((t) => (
              <div key={t} className="bg-card p-8 flex items-center justify-center text-center hover:bg-background transition-colors">
                <span className="font-serif text-lg font-light">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <img
            src={atelierImg}
            alt="Atelierul nostru de covoare din Brașov"
            loading="lazy"
            width={1600}
            height={1200}
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="space-y-8">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              [ Promisiunea atelierului ]
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight tracking-tight">
              Dacă nu ești mulțumit, nu plătești.
            </h2>
            <ul className="space-y-4 text-foreground/85">
              {[
                "Preluare și livrare gratuită în Brașov și 20 km împrejur",
                "Cotaț ferm la preluare — fără surprize la livrare",
                "Garanție de re-spălare gratuită pentru orice pată reapărută",
                "Asigurare integrală a covoarelor pe durata procesului",
                "Termen mediu de 48–72h pentru covoarele standard",
              ].map((line) => (
                <li key={line} className="flex gap-4">
                  <span className="font-mono text-primary mt-1">+</span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto border border-border p-12 md:p-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary font-bold">
              Răspundem în mai puțin de o oră
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light tracking-tight leading-tight">
              Spune-ne ce covor ai și unde locuiești. Venim la tine.
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-[0.18em] text-xs hover:bg-[#1ebe57] transition-colors"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Programează ridicarea
            </a>
            <span className="font-mono text-sm text-muted-foreground">{WHATSAPP_DISPLAY}</span>
          </div>
        </div>
      </section>
    </>
  );
}
