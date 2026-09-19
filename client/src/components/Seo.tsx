import { useEffect } from "react";

export const SITE_URL = "https://jocach.com";
const DEFAULT_IMAGE = `${SITE_URL}/images/jocach-hero.jpg`;
const LOGO_IMAGE = `${SITE_URL}/images/jocach-logo.jpeg`;
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const LOCAL_BUSINESS_ID = `${SITE_URL}/#localbusiness`;

export type SeoProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
};

const address = {
  "@type": "PostalAddress",
  addressLocality: "Soyo",
  addressRegion: "Zaire",
  addressCountry: "AO",
};

export const JOCACH_SCHEMA = [
  {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "JOCACH Lda",
    url: SITE_URL,
    logo: LOGO_IMAGE,
    email: "geral@jocach.com",
    telephone: "+244 923 879 645",
    address,
  },
  {
    "@type": "LocalBusiness",
    "@id": LOCAL_BUSINESS_ID,
    name: "JOCACH Lda",
    description:
      "Construção civil, urbanização, loteamento, residências e prestação de serviços no Soyo, Zaire, Angola.",
    url: SITE_URL,
    image: DEFAULT_IMAGE,
    logo: LOGO_IMAGE,
    email: "geral@jocach.com",
    telephone: "+244 923 879 645",
    address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.1349,
      longitude: 12.3689,
    },
    areaServed: {
      "@type": "City",
      name: "Soyo",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Zaire",
      },
    },
    parentOrganization: {
      "@id": ORGANIZATION_ID,
    },
  },
];

function upsertMeta(
  attribute: "name" | "property",
  key: string,
  content: string
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  noindex = false,
  structuredData,
}: SeoProps) {
  useEffect(() => {
    const canonicalUrl = `${SITE_URL}${path === "/" ? "/" : path}`;
    const graph = Array.isArray(structuredData)
      ? [...JOCACH_SCHEMA, ...structuredData]
      : structuredData
        ? [...JOCACH_SCHEMA, structuredData]
        : JOCACH_SCHEMA;

    document.documentElement.lang = "pt-AO";
    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "author", "JOCACH Lda");
    upsertMeta(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow"
    );
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "pt_AO");
    upsertMeta("property", "og:site_name", "JOCACH Lda");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonicalUrl);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:image:alt", title);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
    upsertLink("canonical", canonicalUrl);

    let schemaElement = document.head.querySelector<HTMLScriptElement>(
      "script[data-site-seo-schema]"
    );
    if (!schemaElement) {
      schemaElement = document.createElement("script");
      schemaElement.type = "application/ld+json";
      schemaElement.dataset.siteSeoSchema = "true";
      document.head.appendChild(schemaElement);
    }
    schemaElement.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": graph,
    });

    return () => {
      schemaElement?.remove();
    };
  }, [description, image, noindex, path, structuredData, title]);

  return null;
}
