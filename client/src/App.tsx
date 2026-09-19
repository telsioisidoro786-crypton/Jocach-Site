import { useState } from "react";
import { Link, Route, Switch, useLocation } from "wouter";
import { ArrowUpRight, Building2, ChevronRight, CircleArrowOutUpRight, Compass, HardHat, MapPin, Menu, Phone, Ruler, X } from "lucide-react";
import { MapView } from "./components/Map";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Broda from "./pages/Broda";
import NotFound from "./pages/NotFound";

const MAP_CENTER = { lat: -6.1349, lng: 12.3689 };

export function LogoMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <div className={`brand-lockup ${inverted ? "brand-lockup-inverted" : ""}`} aria-label="JOCACH Lda">
      <span className="brand-mark" aria-hidden="true"><span className="brand-mark-j">J</span><span className="brand-mark-line" /></span>
      <span className="brand-name"><strong>JOCACH</strong><small>PRESTAÇÃO DE SERVIÇO E COMÉRCIO</small></span>
    </div>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  const navItems = [
    { label: "A JOCACH", href: "/#sobre" },
    { label: "Serviços", href: "/servicos" },
    { label: "Projetos", href: "/projetos" },
    { label: "Broda", href: "/broda" },
    { label: "Localização", href: "/#localizacao" },
  ];
  return (
    <header className={`site-header ${overlay ? "site-header-overlay" : ""}`}>
      <div className="container header-inner">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}><LogoMark inverted={overlay} /></Link>
        <nav className={`desktop-nav ${open ? "desktop-nav-open" : ""}`} aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href} className={location === item.href ? "nav-link-active" : ""} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a className="header-cta" href="/#contacto" onClick={() => setOpen(false)}>Fale connosco <ArrowUpRight size={15} /></a>
        </nav>
        <button type="button" className="mobile-menu-button" aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div><LogoMark inverted /><p className="footer-description">Territórios pensados para viver. Construção com visão angolana.</p></div>
        <div className="footer-column"><span className="footer-label">Explorar</span><Link href="/">A JOCACH</Link><Link href="/servicos">Serviços</Link><Link href="/projetos">Projetos</Link></div>
        <div className="footer-column"><span className="footer-label">Contactos</span><a href="https://www.google.com/maps/search/?api=1&query=Soyo%2C+Zaire%2C+Angola" target="_blank" rel="noreferrer"><MapPin size={15} /> Soyo, Zaire</a><a href="mailto:geral@jocach.com">geral@jocach.com</a><a href="https://wa.me/244923879645" target="_blank" rel="noreferrer"><Phone size={15} /> +244 923 879 645</a></div>
        <div className="footer-column footer-business"><span className="footer-label">Ecossistema JOCACH</span><p>Outros negócios ligados à JOCACH Lda, com identidade e páginas próprias.</p><Link href="/broda" className="footer-coming">Conhecer · Hamburgaria Broda <ArrowUpRight size={13} /></Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} JOCACH Lda. Todos os direitos reservados.</span><span>Construção · Urbanização · Futuro</span></div>
    </footer>
  );
}

export function SectionIntro({ eyebrow, title, body, light = false }: { eyebrow: string; title: string; body?: string; light?: boolean }) {
  return <div className={`section-intro ${light ? "section-intro-light" : ""}`}><span className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}</div>;
}

export function LocationBlock() {
  return (
    <section id="localizacao" className="location-section">
      <div className="container location-grid">
        <div className="location-copy"><SectionIntro eyebrow="Presença local" title="Soyo é o nosso ponto de partida." body="É no Soyo, província do Zaire, que conhecemos o território, as pessoas e as possibilidades que dão forma a cada projeto." /><div className="location-meta"><div className="location-meta-item"><MapPin size={17} /><div><span>Escritório e operações</span><strong>Soyo · Zaire · Angola</strong></div></div><div className="location-meta-item"><Compass size={17} /><div><span>Coordenadas de referência</span><strong>6°08'06.0&quot;S · 12°22'08.0&quot;E</strong></div></div></div><a className="text-link" href="https://www.google.com/maps/search/?api=1&query=Soyo%2C+Zaire%2C+Angola" target="_blank" rel="noreferrer">Abrir no Google Maps <ArrowUpRight size={16} /></a></div>
        <div className="map-frame"><div className="map-fallback" aria-hidden="true"><span className="map-fallback-water">RIO CONGO</span><span className="map-fallback-city">SOYO</span><span className="map-fallback-road map-road-one" /><span className="map-fallback-road map-road-two" /><span className="map-fallback-pin" /></div><MapView initialCenter={MAP_CENTER} initialZoom={13} className="map-canvas" onMapReady={(map) => { if (window.google?.maps?.marker?.AdvancedMarkerElement) new window.google.maps.marker.AdvancedMarkerElement({ map, position: MAP_CENTER, title: "JOCACH Lda · Soyo" }); }} /><div className="map-tag"><span className="map-tag-pulse" />JOCACH · SOYO</div></div>
      </div>
    </section>
  );
}

function AppRouter() {
  return <Switch><Route path="/" component={Home} /><Route path="/servicos" component={Services} /><Route path="/projetos" component={Projects} /><Route path="/broda" component={Broda} /><Route component={NotFound} /></Switch>;
}

export default function App() { return <ThemeProvider defaultTheme="light"><AppRouter /></ThemeProvider>; }

export const ServiceIcon = ({ type }: { type: string }) => { const icons: Record<string, typeof Ruler> = { loteamento: Compass, urbanizacao: Building2, croquis: Ruler, licenca: HardHat }; const Icon = icons[type] || CircleArrowOutUpRight; return <Icon size={22} strokeWidth={1.6} />; };
export const ArrowLink = ({ href, children }: { href: string; children: React.ReactNode }) => <a className="arrow-link" href={href}>{children}<ChevronRight size={17} /></a>;
export const ContactLink = () => <a className="contact-link" href="mailto:geral@jocach.com"><Phone size={16} /> Solicitar proposta</a>;
export { MAP_CENTER };
