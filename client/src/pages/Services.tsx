import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "wouter";
import {
  ContactLink,
  LocationBlock,
  SectionIntro,
  SiteFooter,
  SiteHeader,
  ServiceIcon,
} from "../App";
import Seo from "../components/Seo";

const serviceRows = [
  {
    id: "01",
    type: "loteamento",
    title: "Loteamento",
    desc: "Estruturamos o território para que cada parcela tenha lógica, acesso e potencial de valorização.",
    details: [
      "Análise e divisão de terrenos",
      "Organização de lotes",
      "Planeamento de acessos",
    ],
  },
  {
    id: "02",
    type: "urbanizacao",
    title: "Urbanização",
    desc: "Criamos conjuntos urbanos com identidade, circulação e espaços que fazem sentido para a vida real.",
    details: [
      "Condomínios e residências",
      "Infraestruturas urbanas",
      "Conceito espacial e paisagístico",
    ],
  },
  {
    id: "03",
    type: "croquis",
    title: "Croquis de localização",
    desc: "Traduzimos a ideia e o território num documento claro para orientar decisões e próximos passos.",
    details: [
      "Levantamento de localização",
      "Implantação de referências",
      "Documentação de apoio",
    ],
  },
  {
    id: "04",
    type: "licenca",
    title: "Projectos para licença",
    desc: "Preparamos projetos com rigor técnico para que a aprovação caminhe com confiança.",
    details: [
      "Projecto de arquitectura",
      "Peças desenhadas",
      "Memória e documentação técnica",
    ],
  },
  {
    id: "05",
    type: "licenca",
    title: "Licença de construção",
    desc: "Apoiamos o processo de licenciamento para reduzir incertezas e acelerar o início da obra.",
    details: [
      "Preparação do processo",
      "Acompanhamento administrativo",
      "Articulação com entidades",
    ],
  },
  {
    id: "06",
    type: "urbanizacao",
    title: "Acompanhamento de obra",
    desc: "Mantemos o projeto fiel à intenção, com presença, controlo e responsabilidade em cada etapa.",
    details: [
      "Coordenação de equipas",
      "Controlo de execução",
      "Acompanhamento no terreno",
    ],
  },
];
const SERVICE_IMAGE = "/images/jocach-projects.jpg";

export default function Services() {
  return (
    <div className="site-shell inner-page">
      <Seo
        title="Serviços de Construção e Urbanização — JOCACH Lda"
        description="Conheça os serviços de loteamento, urbanização, projetos para licença e acompanhamento de obra da JOCACH no Soyo."
        path="/servicos"
      />
      <SiteHeader />
      <section className="inner-hero">
        <div className="container inner-hero-grid">
          <div>
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" />
              Serviços · JOCACH Lda
            </span>
            <h1>
              Construir bem
              <br />
              <em>é construir com método.</em>
            </h1>
          </div>
          <p>
            Uma equipa para organizar o território, tornar a ideia viável e
            levar cada projeto até ao lugar que merece.
          </p>
        </div>
      </section>
      <main>
        <section className="services-list-section section-pad">
          <div className="container services-list-layout">
            <aside className="services-aside">
              <img
                className="services-aside-image"
                src={SERVICE_IMAGE}
                alt="Urbanização moderna no Soyo"
              />
              <span className="vertical-index">01 / SERVIÇOS</span>
              <p>
                Uma abordagem integrada para projetos que pedem mais do que
                execução: pedem visão.
              </p>
              <ContactLink />
            </aside>
            <div className="services-rows">
              {serviceRows.map(service => (
                <article className="service-row" key={service.id}>
                  <div className="service-row-number">{service.id}</div>
                  <div className="service-row-icon">
                    <ServiceIcon type={service.type} />
                  </div>
                  <div className="service-row-main">
                    <h2>{service.title}</h2>
                    <p>{service.desc}</p>
                    <div className="service-details">
                      {service.details.map(detail => (
                        <span key={detail}>
                          <Check size={14} />
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight
                    className="service-row-arrow"
                    size={23}
                    strokeWidth={1.4}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="method-section section-blue">
          <div className="container method-grid">
            <SectionIntro
              light
              eyebrow="A nossa forma de trabalhar"
              title="Menos ruído. Mais clareza."
              body="Cada fase é pensada para que o projeto avance com uma direção clara, desde a leitura inicial até à entrega."
            />
            <div className="method-steps">
              <div>
                <span>01</span>
                <strong>Entender</strong>
                <p>O território, a necessidade e o potencial.</p>
              </div>
              <div>
                <span>02</span>
                <strong>Desenhar</strong>
                <p>A solução com visão técnica e estética.</p>
              </div>
              <div>
                <span>03</span>
                <strong>Construir</strong>
                <p>Com rigor, presença e responsabilidade.</p>
              </div>
            </div>
          </div>
        </section>
        <LocationBlock />
        <section className="simple-cta section-pad">
          <div className="container simple-cta-inner">
            <div>
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                Pronto para começar?
              </span>
              <h2>Vamos dar o primeiro passo.</h2>
            </div>
            <Link className="button button-navy" href="/#contacto">
              Falar com a JOCACH <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
