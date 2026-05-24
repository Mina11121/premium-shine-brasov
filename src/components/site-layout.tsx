import { Link, Outlet } from "@tanstack/react-router";
import { ReactNode } from "react";

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
          <Link to="/servicii" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Servicii</Link>
          <Link to="/despre" activeProps={{ className: "text-primary" }} className="hover:text-primary transition-colors">Despre</Link>
          <Link to="/contact" className="px-5 py-2.5 bg-foreground text-background hover:bg-primary transition-colors">Contact</Link>
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
            Din 2007, redăm strălucirea spațiilor de lucru și de locuit din Brașov prin servicii integrate de curățenie și întreținere, executate cu rigoare tehnică.
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40">Brașov · România</p>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 font-bold">Servicii</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/servicii" hash="administrare" className="hover:text-primary">Administrare clădiri</Link></li>
            <li><Link to="/servicii" hash="post-constructie" className="hover:text-primary">Post-construcție</Link></li>
            <li><Link to="/servicii" hash="covoare" className="hover:text-primary">Spălare covoare</Link></li>
            <li><Link to="/servicii" hash="birouri" className="hover:text-primary">Mentenanță birouri</Link></li>
            <li><Link to="/servicii" hash="auto" className="hover:text-primary">Tapițerii auto</Link></li>
            <li><Link to="/servicii" hash="generala" className="hover:text-primary">Curățenie generală</Link></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h5 className="font-mono text-[10px] uppercase tracking-[0.2em] text-background/40 font-bold">Contact</h5>
          <ul className="space-y-2 text-sm">
            <li>Str. Nicopole nr. 46</li>
            <li>Brașov, România</li>
            <li><a href="tel:+40268000000" className="hover:text-primary">+40 268 000 000</a></li>
            <li><a href="mailto:office@curatenie-intretinere.info.ro" className="hover:text-primary break-all">office@curatenie-intretinere.info.ro</a></li>
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