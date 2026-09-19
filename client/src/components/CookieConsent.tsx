import { useEffect, useState } from "react";
import { Link } from "wouter";

const CONSENT_KEY = "jocach_cookie_consent";

type Consent = "accepted" | "rejected" | null;

function loadAnalytics() {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
  if (!endpoint || !websiteId || document.querySelector("script[data-jocach-analytics]")) return;
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${endpoint.replace(/\/$/, "")}/umami`;
  script.dataset.websiteId = websiteId;
  script.dataset.jocachAnalytics = "true";
  document.head.appendChild(script);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === "undefined") return null;
    return (window.localStorage.getItem(CONSENT_KEY) as Consent) || null;
  });

  useEffect(() => {
    if (consent === "accepted") loadAnalytics();
  }, [consent]);

  const choose = (value: Exclude<Consent, null>) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  if (consent) return null;

  return <aside className="cookie-consent" role="dialog" aria-label="Preferências de cookies"><div><span className="cookie-kicker">Privacidade</span><h2>Cookies com propósito.</h2><p>Usamos cookies essenciais para o funcionamento do site. Com a sua autorização, também podemos usar analytics para melhorar a experiência.</p><Link href="/privacidade" className="cookie-policy-link">Ler a Política de Privacidade e Cookies <span aria-hidden="true">↗</span></Link><span className="cookie-note">Pode alterar esta escolha limpando os dados do navegador.</span></div><div className="cookie-actions"><button type="button" className="cookie-reject" onClick={() => choose("rejected")}>Apenas essenciais</button><button type="button" className="cookie-accept" onClick={() => choose("accepted")}>Aceitar cookies</button></div></aside>;
}
