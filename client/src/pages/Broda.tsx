import { useState } from "react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  MapPin,
  Star,
} from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "../App";
import Seo from "../components/Seo";
import OptimizedImage from "../components/OptimizedImage";

const BRODA_INTERIOR = "/images/broda-interior.jpg";

const menu = [
  {
    tag: "O clássico",
    category: "Hambúrgueres",
    name: "Broda Original",
    description:
      "Carne smash, queijo, pickles, cebola e molho Broda no pão brioche.",
    price: "3.500 Kz",
    image: "/images/broda-original-menu.jpg",
  },
  {
    tag: "Mais pedido",
    category: "Hambúrgueres",
    name: "Broda Cheddar",
    description:
      "Duplo smash, cheddar cremoso, cebola caramelizada e molho da casa.",
    price: "4.500 Kz",
    image: "/images/broda-cheddar-menu.jpg",
  },
  {
    tag: "Crocante",
    category: "Hambúrgueres",
    name: "Broda Chicken",
    description: "Frango crocante, coleslaw fresco, queijo e maionese picante.",
    price: "4.000 Kz",
    image: "/images/broda-chicken-menu.jpg",
  },
  {
    tag: "Para partilhar",
    category: "Acompanhamentos",
    name: "Broda Fries",
    description: "Batata dourada, cheddar, bacon e o toque secreto da casa.",
    price: "2.500 Kz",
    image: "/images/broda-fries-menu.jpg",
  },
];
const menuCategories = ["Tudo", "Hambúrgueres", "Acompanhamentos"];

const weeklyPromotions = [
  {
    label: "Oferta da semana",
    title: "Terça do Cheddar",
    description:
      "Pede o Broda Cheddar e junta batata dourada por conta da casa.",
    detail: "Todas as terças",
    accent: "yellow",
  },
  {
    label: "Combo Broda",
    title: "Dupla que combina",
    description:
      "Dois Broda Originals + duas bebidas frias para dividir com quem é teu.",
    detail: "Quinta a domingo",
    accent: "cream",
  },
  {
    label: "Hora do Broda",
    title: "Final feliz",
    description:
      "A partir das 18h, adiciona fries com cheddar ao teu pedido por mais 500 Kz.",
    detail: "Todos os dias · 18h — 20h",
    accent: "blue",
  },
];

function getWeekOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 1);
  const days = Math.floor((date.getTime() - start.getTime()) / 86400000);
  return Math.floor((days + start.getDay() + 6) / 7);
}

export default function Broda() {
  const [activeCategory, setActiveCategory] = useState("Tudo");
  const promotion =
    weeklyPromotions[getWeekOfYear(new Date()) % weeklyPromotions.length];
  const visibleMenu =
    activeCategory === "Tudo"
      ? menu
      : menu.filter(item => item.category === activeCategory);
  return (
    <div className="broda-page">
      <Seo
        title="Hamburgaria Broda — Hambúrgueres no Soyo"
        description="Conheça a Hamburgaria Broda, uma marca do ecossistema JOCACH com hambúrgueres, fries e ambiente urbano no Soyo."
        path="/broda"
        image="https://jocach.com/images/broda-hero.jpg"
      />
      <section
        className="broda-hero"
        style={
          {
            "--broda-hero": `url(/images/broda-hero-2200w.webp)`,
            "--broda-hero-mobile": `url(/images/broda-hero-768w.webp)`,
          } as React.CSSProperties
        }
      >
        <SiteHeader overlay />
        <div className="broda-hero-noise" aria-hidden="true" />
        <div className="container broda-hero-content">
          <div className="broda-hero-copy">
            <span className="broda-kicker">
              <span />
              Uma marca do ecossistema JOCACH
            </span>
            <h1>
              O sabor que
              <br />
              <em>junta a malta.</em>
            </h1>
            <p>
              Hambúrgueres de verdade, ingredientes sem complicação e aquela
              vontade de voltar no dia seguinte.
            </p>
            <div className="broda-actions">
              <a
                className="broda-button broda-button-main"
                href="#menu"
                data-analytics-event="broda_menu_view"
              >
                Ver o menu <ArrowUpRight size={16} />
              </a>
              <a
                className="broda-text-link"
                href="#onde-estamos"
                data-analytics-event="broda_location_view"
              >
                Encontrar a Broda <MapPin size={15} />
              </a>
            </div>
          </div>
          <div className="broda-hero-badge">
            <Star size={15} fill="currentColor" />
            <span>
              Feito no
              <br />
              <strong>Soyo</strong>
            </span>
          </div>
        </div>
        <div className="container broda-hero-bottom">
          <span>
            <ArrowDown size={15} /> Deslize para abrir o apetite
          </span>
          <span>BRD / 01</span>
        </div>
      </section>

      <section className="broda-intro">
        <div className="container broda-intro-grid">
          <span className="broda-side-label">BRODA / DESDE 2026</span>
          <div>
            <span className="broda-kicker broda-kicker-dark">
              <span />
              Uma hamburgaria com identidade
            </span>
            <h2>
              Simples no prato.
              <br />
              <em>Forte na memória.</em>
            </h2>
            <p>
              Na Hamburgaria Broda, o bom sabor encontra uma energia leve,
              urbana e angolana. É para vir com os amigos, ficar mais um bocado
              e pedir só mais uma batata.
            </p>
            <div className="broda-values">
              <span>
                <strong>01</strong> Carne suculenta
              </span>
              <span>
                <strong>02</strong> Molhos da casa
              </span>
              <span>
                <strong>03</strong> Ambiente sem cerimónia
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className={`broda-promo broda-promo-${promotion.accent}`}
        aria-labelledby="broda-promo-title"
      >
        <div className="container broda-promo-grid">
          <div className="broda-promo-label">
            <span className="broda-promo-label-icon">
              <Star size={17} fill="currentColor" />
            </span>
            <span>
              Broda
              <br />
              <strong>Weekly</strong>
            </span>
          </div>
          <div className="broda-promo-main">
            <span className="broda-kicker broda-kicker-promo">
              <span />
              {promotion.label}
            </span>
            <h2 id="broda-promo-title">{promotion.title}</h2>
            <p>{promotion.description}</p>
            <div className="broda-promo-meta">
              <span>
                <CalendarDays size={15} /> {promotion.detail}
              </span>
              <span className="broda-promo-cycle">Oferta rotativa semanal</span>
            </div>
          </div>
          <a
            className="broda-promo-action"
            href="#menu"
            data-analytics-event="broda_menu_view"
          >
            Quero esta oferta <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section id="menu" className="broda-menu">
        <div className="container">
          <div className="broda-section-heading">
            <div>
              <span className="broda-kicker">
                <span />O que sai da chapa
              </span>
              <h2>
                Escolhe o teu <em>Broda.</em>
              </h2>
            </div>
            <span className="broda-menu-note">
              Menu sujeito à disponibilidade do dia.
            </span>
          </div>
          <div
            className="broda-menu-filters"
            role="tablist"
            aria-label="Categorias do menu"
          >
            {menuCategories.map(category => (
              <button
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                className={
                  activeCategory === category ? "broda-filter-active" : ""
                }
                key={category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="broda-menu-grid">
            {visibleMenu.map((item, index) => (
              <article className="broda-menu-card" key={item.name}>
                <div className="broda-menu-image">
                  <OptimizedImage
                    src={item.image}
                    alt={`${item.name} — Hamburgaria Broda no Soyo`}
                    width={1920}
                    height={1920}
                    widths={[480, 768, 1200]}
                    sizes="(max-width: 760px) 100vw, 25vw"
                  />
                  <span className="broda-menu-tag">{item.tag}</span>
                </div>
                <div className="broda-menu-card-top">
                  <span>0{index + 1}</span>
                  <span>{item.category}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="broda-menu-card-bottom">
                  <strong>{item.price}</strong>
                  <span>
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="broda-story">
        <div className="container broda-story-grid">
          <div className="broda-story-image">
            <OptimizedImage
              src={BRODA_INTERIOR}
              alt="Interior acolhedor da Hamburgaria Broda"
              width={2176}
              height={1632}
              sizes="(max-width: 760px) 100vw, 50vw"
            />
            <div className="broda-image-stamp">
              BRODA
              <br />
              <strong>SOYO</strong>
            </div>
          </div>
          <div className="broda-story-copy">
            <span className="broda-kicker broda-kicker-dark">
              <span />O lugar
            </span>
            <h2>
              Chega com fome.
              <br />
              <em>Fica pela vibe.</em>
            </h2>
            <p>
              Uma hamburgaria pensada para a cidade: balcão rápido, mesas para
              conversa e um ambiente que mistura o urbano com o calor de casa.
            </p>
            <div className="broda-opening">
              <div>
                <Clock3 size={18} />
                <span>
                  <strong>Horário</strong>Segunda a domingo · 11h — 22h
                </span>
              </div>
              <div>
                <MapPin size={18} />
                <span>
                  <strong>Localização</strong>Soyo · Zaire · Angola
                </span>
              </div>
            </div>
            <a
              className="broda-button broda-button-dark"
              href="https://www.google.com/maps/search/?api=1&query=Soyo%2C+Zaire%2C+Angola"
              target="_blank"
              rel="noreferrer"
              data-analytics-event="maps_click"
            >
              Abrir no Google Maps <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section id="onde-estamos" className="broda-cta">
        <div className="container broda-cta-inner">
          <div>
            <span className="broda-kicker">
              <span />
              Faz parte da família
            </span>
            <h2>
              O próximo Broda
              <br />
              <em>é contigo.</em>
            </h2>
          </div>
          <div className="broda-cta-copy">
            <p>
              Queres levar a Broda para um novo ponto? Fala connosco e vamos
              conversar sobre o próximo capítulo.
            </p>
            <a
              className="broda-button broda-button-main"
              href="mailto:geral@jocach.com?subject=Hamburgaria%20Broda"
              data-analytics-event="broda_contact_email_click"
            >
              Falar com a Broda <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="broda-group-link">
        <div className="container">
          <Link href="/" className="broda-back-link">
            <ArrowLeft size={15} /> Voltar ao site da JOCACH
          </Link>
          <div className="broda-group-line">
            <span>Hamburgaria Broda</span>
            <span>
              Uma marca ligada à JOCACH Lda · Construção, urbanização e novos
              negócios
            </span>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
