import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { SiteFooter, SiteHeader } from "../App";
import Seo from "../components/Seo";

const sections = [
  {
    title: "1. Quem somos",
    body: "A JOCACH Lda — Prestação de Serviço e Comércio é uma empresa sediada no Soyo, província do Zaire, Angola. Nesta política, JOCACH, nós e empresa referem-se à entidade responsável por este site e pelos contactos disponibilizados através dele.",
  },
  {
    title: "2. Dados que podemos receber",
    body: "Quando utiliza o formulário de contacto, podemos receber o seu nome, email, telefone, tipo de projeto e a mensagem enviada. Também podemos receber dados técnicos básicos do navegador necessários para a segurança, funcionamento e melhoria do site.",
  },
  {
    title: "3. Para que usamos os dados",
    body: "Utilizamos os dados para responder a pedidos de informação, preparar contactos comerciais, compreender o tipo de projeto solicitado, manter o site seguro e melhorar a experiência digital. Não vendemos os seus dados pessoais.",
  },
  {
    title: "4. Cookies e analytics",
    body: "O site utiliza apenas cookies e armazenamento local essenciais por defeito. O analytics, quando configurado, só é carregado depois de escolher “Aceitar cookies”. A sua escolha fica guardada no navegador para não voltarmos a mostrar o aviso em cada visita. Pode remover essa escolha limpando os dados do navegador.",
  },
  {
    title: "5. Partilha e conservação",
    body: "Podemos utilizar fornecedores técnicos para alojamento, segurança, formulários ou estatísticas, sempre de acordo com a finalidade do serviço. Conservamos os dados apenas pelo tempo necessário para responder ao pedido, cumprir obrigações aplicáveis ou defender direitos legítimos da empresa.",
  },
  {
    title: "6. Os seus direitos",
    body: "Pode solicitar informação sobre os dados que mantemos, pedir correção, atualização ou eliminação quando aplicável, retirar o consentimento para analytics e opor-se a comunicações comerciais. Para exercer estes direitos, escreva para geral@jocach.com.",
  },
  {
    title: "7. Segurança e alterações",
    body: "Aplicamos medidas razoáveis para proteger os dados contra acesso indevido, perda ou utilização indevida. Podemos atualizar esta política para refletir mudanças no site, nos serviços ou nas obrigações aplicáveis. A data no topo indica a versão mais recente.",
  },
];

export default function Privacy() {
  return (
    <div className="site-shell privacy-page">
      <Seo
        title="Política de Privacidade e Cookies — JOCACH Lda"
        description="Consulte a política de privacidade e cookies da JOCACH Lda, incluindo dados tratados, finalidades e direitos dos visitantes."
        path="/privacidade"
      />
      <SiteHeader />
      <main>
        <section className="privacy-hero">
          <div className="container privacy-hero-inner">
            <span className="eyebrow eyebrow-light">
              <span className="eyebrow-dot" />
              Privacidade · JOCACH Lda
            </span>
            <h1>
              Transparência para
              <br />
              <em>construir confiança.</em>
            </h1>
            <p>
              Como tratamos os dados e as preferências de cookies quando visita
              o nosso site.
            </p>
            <span className="privacy-date">
              Última atualização · 19 de setembro de 2026
            </span>
          </div>
        </section>
        <section className="privacy-content section-pad">
          <div className="container privacy-layout">
            <aside className="privacy-aside">
              <div className="privacy-aside-icon">
                <ShieldCheck size={23} />
              </div>
              <span>
                Política de Privacidade
                <br />
                <strong>e Cookies</strong>
              </span>
              <a href="mailto:geral@jocach.com">
                Falar com a JOCACH <ArrowUpRight size={15} />
              </a>
            </aside>
            <article className="privacy-copy">
              <p className="privacy-lead">
                Esta política explica, de forma simples, que dados podem ser
                tratados neste site, para que finalidades e como pode exercer os
                seus direitos.
              </p>
              {sections.map(section => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
              <div className="privacy-contact">
                <strong>Dúvidas sobre privacidade?</strong>
                <p>
                  Entre em contacto através de{" "}
                  <a href="mailto:geral@jocach.com">geral@jocach.com</a> ou pelo
                  WhatsApp{" "}
                  <a
                    href="https://wa.me/244923879645"
                    target="_blank"
                    rel="noreferrer"
                  >
                    +244 923 879 645
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
      <section className="privacy-back">
        <div className="container">
          <Link href="/">
            <ArrowLeft size={15} /> Voltar ao site da JOCACH
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
