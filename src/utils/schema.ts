import { SITE_URL, ORG, NAP, GEO, HOURS, SAME_AS, SINOUHE_FULL_ENTITY, TEAM, AREA_SERVED_TYPED } from '@/constants/siteConfig'

/**
 * SOURCE DE VÉRITÉ UNIQUE POUR LES SCHEMAS JSON-LD
 */

/** 
 * Entité de base Organization / LocalBusiness
 * Utilisée comme référence partout sur le site.
 */
export const getBaseOrganization = () => ({
  "@type": ["Organization", "LocalBusiness", "AutomotiveBusiness"],
  "@id": `${SITE_URL}/#organization`,
  "name": ORG.name,
  "legalName": ORG.legalName,
  "url": ORG.url,
  "logo": ORG.logo,
  "telephone": NAP.phoneTel,
  "email": NAP.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": NAP.address.streetAddress,
    "addressLocality": NAP.address.addressLocality,
    "postalCode": NAP.address.postalCode,
    "addressCountry": NAP.address.addressCountry,
    "addressRegion": NAP.address.addressRegion
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": GEO.latitude,
    "longitude": GEO.longitude
  },
  "openingHours": HOURS.schemaValue,
  "sameAs": SAME_AS,
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": NAP.phoneTel,
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": ["French"]
  }
})

/**
 * Entité WebSite globale
 */
export const getWebSiteSchema = () => ({
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  "url": `${SITE_URL}/`,
  "name": ORG.name,
  "publisher": { "@id": `${SITE_URL}/#organization` },
  "inLanguage": "fr-FR"
})

/**
 * Entité WebPage standard
 */
export const getWebPageSchema = (url: string, datePublished: string, dateModified: string) => ({
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  "url": url,
  "datePublished": datePublished,
  "dateModified": dateModified,
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "breadcrumb": { "@id": `${url}#breadcrumb` }
})

/**
 * Entité BreadcrumbList
 */
export const getBreadcrumbSchema = (url: string, items: { name: string, item: string }[]) => ({
  "@type": "BreadcrumbList",
  "@id": `${url}#breadcrumb`,
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.item
  }))
})

/**
 * Entité complète pour la Home Page (Organization enrichie)
 */
export const getFullOrganizationSchema = (reviews: any[], offers: any[], employees: any[]) => ({
  ...getBaseOrganization(),
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "58",
    "bestRating": "5"
  },
  "review": reviews,
  "areaServed": AREA_SERVED_TYPED,
  "employee": employees,
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Reproduction & double de clé de voiture",
    "itemListElement": offers
  }
})
