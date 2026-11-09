/**
 * Production-ready Schema.org JSON-LD Structured Data Generators
 * For KV Property Inc.
 * https://www.kvpropertyinc.com/
 */

export const BUSINESS_INFO = {
  name: "KV Property Inc.",
  legalName: "KV Property Inc.",
  url: "https://www.kvpropertyinc.com/",
  domain: "https://www.kvpropertyinc.com",
  phone: "(732) 677-6674",
  telephone: "+1-732-677-6674",
  email: "kvpropertyinc@gmail.com",
  owner: "KV Property Inc.",
  streetAddress: "Neptune",
  addressLocality: "Neptune",
  addressRegion: "NJ",
  postalCode: "07753",
  addressCountry: "US",
  latitude: 40.2204,
  longitude: -74.0329,
  priceRange: "$$",
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Neptune", sameAs: "https://en.wikipedia.org/wiki/Neptune_Township,_New_Jersey" },
    { "@type": "City", name: "Neptune City" },
    { "@type": "City", name: "Asbury Park" },
    { "@type": "City", name: "Ocean Grove" },
    { "@type": "City", name: "Bradley Beach" },
    { "@type": "City", name: "Belmar" },
    { "@type": "City", name: "Wall Township" },
    { "@type": "City", name: "Tinton Falls" },
    { "@type": "City", name: "Freehold" },
    { "@type": "City", name: "Howell" },
    { "@type": "AdministrativeArea", name: "Monmouth County", sameAs: "https://en.wikipedia.org/wiki/Monmouth_County,_New_Jersey" },
    { "@type": "AdministrativeArea", name: "Ocean County", sameAs: "https://en.wikipedia.org/wiki/Ocean_County,_New_Jersey" },
    { "@type": "AdministrativeArea", name: "Jersey Shore" },
  ],
  sameAs: [
    "https://facebook.com",
    "https://instagram.com",
  ],
};

/**
 * Generates LocalBusiness & GeneralContractor JSON-LD Schema
 */
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
    "@id": `${BUSINESS_INFO.domain}/#business`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    priceRange: BUSINESS_INFO.priceRange,
    image: `${BUSINESS_INFO.domain}/assets/wel-bg.png`,
    logo: `${BUSINESS_INFO.domain}/assets/logo.png`,
    description:
      "KV Property Inc. delivers premier residential and commercial remodeling, general contracting, kitchen & bathroom renovations, custom home additions, deck construction, and property improvements in Neptune, NJ and surrounding 25-mile communities across Monmouth and Ocean counties. 20+ years of craftsmanship. Licensed and insured.",
    address: {
      "@type": "PostalAddress",
      addressLocality: BUSINESS_INFO.addressLocality,
      addressRegion: BUSINESS_INFO.addressRegion,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: BUSINESS_INFO.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS_INFO.latitude,
      longitude: BUSINESS_INFO.longitude,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS_INFO.latitude,
        longitude: BUSINESS_INFO.longitude,
      },
      geoRadius: "40000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: BUSINESS_INFO.sameAs,
  };
}

/**
 * Generates WebSite Schema
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS_INFO.domain}/#website`,
    url: BUSINESS_INFO.url,
    name: BUSINESS_INFO.name,
    description:
      "Neptune, NJ's Premier Licensed & Insured Remodeling, General Contracting and Property Improvement Contractor.",
    publisher: {
      "@id": `${BUSINESS_INFO.domain}/#business`,
    },
  };
}

/**
 * Generates Service Schema for a specific service page
 */
export function getServiceSchema({
  name,
  description,
  serviceType,
  url,
  image,
  areaServedName,
}: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  image?: string;
  areaServedName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BUSINESS_INFO.domain}${url}#service`,
    name,
    description,
    serviceType,
    url: `${BUSINESS_INFO.domain}${url}`,
    image: image ? `${BUSINESS_INFO.domain}${image}` : `${BUSINESS_INFO.domain}/assets/wel-bg.png`,
    provider: {
      "@type": ["HomeAndConstructionBusiness", "GeneralContractor", "LocalBusiness"],
      "@id": `${BUSINESS_INFO.domain}/#business`,
      name: BUSINESS_INFO.name,
      telephone: BUSINESS_INFO.telephone,
      url: BUSINESS_INFO.url,
    },
    areaServed: areaServedName
      ? {
          "@type": "AdministrativeArea",
          name: areaServedName,
        }
      : BUSINESS_INFO.areaServed,
  };
}

/**
 * Generates FAQPage Schema
 */
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates BreadcrumbList Schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${BUSINESS_INFO.domain}${item.url}`,
    })),
  };
}
