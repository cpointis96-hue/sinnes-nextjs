import type { Metadata } from 'next'
import { Playfair_Display, Maven_Pro, Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ORG, NAP, GEO, HOURS, SAME_AS } from '@/constants/siteConfig'

// ---------------------------------------------------------------------------
// FONTS — next/font/google (zéro @import externe, display:swap = CLS 0)
// ---------------------------------------------------------------------------

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
  weight: ['400', '700'],
})

const mavenPro = Maven_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-maven',
  weight: ['400', '500', '600', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '700'],
})

// ---------------------------------------------------------------------------
// METADATA GLOBALE
// Chaque page surcharge via generateMetadata() propre.
// Title template = max 60 car. au total → "%s | Sinnes Nice"
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL('https://sinnes.fr'),
  title: {
    default: 'Sinnes Automobiles — Reproduction de clé voiture Nice',
    template: '%s | Sinnes Nice',
  },
  description:
    'Reproduction et double de clé de voiture à Nice. Intervention 7j/7. Devis gratuit : +33 6 75 54 04 11',
  alternates: {
    canonical: 'https://sinnes.fr/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    siteName: 'Sinnes Automobiles',
    locale: 'fr_FR',
    type: 'website',
  },
}

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${playfairDisplay.variable} ${mavenPro.variable} ${roboto.variable}`}
    >
      {/*
        suppressHydrationWarning évite le warning React 19 sur les attributs
        injectés par extensions navigateur (ex: Grammarly, LastPass).
      */}
      <body suppressHydrationWarning className="font-body text-text-main bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://sinnes.fr/#website",
                  "url": "https://sinnes.fr/",
                  "name": "Sinnes Automobiles",
                  "publisher": { "@id": "https://sinnes.fr/#organization" },
                  "inLanguage": "fr-FR"
                },
                {
                  "@type": ["Organization", "LocalBusiness", "AutomotiveBusiness"],
                  "@id": "https://sinnes.fr/#organization",
                  "name": ORG.name,
                  "legalName": ORG.legalName,
                  "identifier": ORG.siret,
                  "foundingDate": ORG.foundingDate,
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
                }
              ]
            })
          }}
        />
        <Header />
        {/*
          padding-top = hauteur du header fixe (72px) pour éviter le content shift.
          Sur mobile on ajoute pb-14 pour le CTA sticky bottom.
        */}
        <main className="pt-[72px] pb-14 md:pb-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
