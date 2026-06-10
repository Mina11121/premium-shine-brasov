import { Link, Outlet } from "@tanstack/react-router";
import { ReactNode } from "react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-mono text-[10px] font-bold tracking-tighter text-primary">[BV]</span>
          <span className="text-base font-extrabold tracking-tight uppercase">
            Clinica<span className="font-light text-muted-foreground italic"> de Covoare</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[12px] font-semibold uppercase tracking-[0.18em]">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Acasă</Link>
          <Link to="/servicii" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Proces & Tarife</Link>
          <Link to="/despre" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Despre</Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white hover:bg-[#1ebe57] transition-colors"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.555 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] font-bold tracking-tighter text-primary">[BV]</span>
            <span className="text-base font-extrabold tracking-tight uppercase">Clinica de Covoare</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed max-w-md">
            Din 2007, atelierul nostru din Brașov spală manual și mecanizat covoare de orice tip — persane, lână, mătase, viscoză, blană sau șagrinate — cu rigoarea unei clinici și răbdarea unui artizan.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">Brașov · România</p>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 font-bold">Navigație</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" hash="galerie" className="hover:text-primary">Galerie before / after</Link></li>
            <li><Link to="/servicii" className="hover:text-primary">Proces & tarife</Link></li>
            <li><Link to="/servicii" hash="tipuri" className="hover:text-primary">Tipuri de covoare</Link></li>
            <li><Link to="/servicii" hash="faq" className="hover:text-primary">Întrebări frecvente</Link></li>
            <li><Link to="/despre" className="hover:text-primary">Despre atelier</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 font-bold">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>Str. Nicopole nr. 46</li>
            <li>Brașov, România</li>
            <li>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
            </li>
            <li className="text-background/60 break-all">office@curatenie-intretinere.info.ro</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold text-background/40">
          <span>© 2025 Clinica de Covoare · Brașov</span>
          <span>Curățenie cu rigoare. Întreținere cu metodă.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export { Outlet };