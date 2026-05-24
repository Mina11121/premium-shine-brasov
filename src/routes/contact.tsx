import { createFileRoute } from "@tanstack/react-router";

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
              Lăsați-ne câteva detalii despre spațiul și nevoia dumneavoastră. Vă răspundem cu o propunere clară, fără obligații.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[01] Telefon</span>
              <a href="tel:+40268000000" className="block font-serif text-3xl font-light hover:text-primary transition-colors">+40 268 000 000</a>
              <p className="text-sm text-muted-foreground">Luni — Vineri · 08:00–18:00</p>
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[02] Email</span>
              <a href="mailto:office@curatenie-intretinere.info.ro" className="block font-serif text-2xl font-light hover:text-primary transition-colors break-all">
                office@curatenie-intretinere.info.ro
              </a>
            </div>
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary font-bold">[03] Sediu</span>
              <p className="font-serif text-2xl font-light leading-snug">Str. Nicopole nr. 46<br/>Brașov, România</p>
            </div>
          </div>

          <form
            className="lg:col-span-7 space-y-6 border border-border p-8 md:p-12 bg-card"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:office@curatenie-intretinere.info.ro";
            }}
          >
            <h2 className="font-serif text-2xl font-normal mb-2">Formular ofertă</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Nume" name="name" required />
              <Field label="Companie" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Telefon" name="phone" type="tel" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground block">
                Serviciu de interes
              </label>
              <select className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors">
                <option>Administrare clădiri</option>
                <option>Curățenie post-construcție</option>
                <option>Spălare covoare</option>
                <option>Mentenanță birouri</option>
                <option>Tapițerii auto</option>
                <option>Curățenie generală</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground block">
                Detalii proiect
              </label>
              <textarea
                rows={5}
                placeholder="Suprafață, frecvență, particularități..."
                className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-bold uppercase tracking-[0.18em] text-xs hover:bg-foreground transition-colors"
            >
              Trimite solicitarea
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground block">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}