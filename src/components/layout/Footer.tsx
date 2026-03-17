import Image from 'next/image'
import Link from 'next/link'
import { NAP, ORG, SOCIAL, HOURS } from '@/constants/siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer role="contentinfo" className="bg-[#1a1a1a] text-white">
      <div className="container-sinnes py-12">

        {/* Grid 3 colonnes desktop / 1 colonne mobile */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">

          {/* Colonne 1 — Logo + payoff */}
          <div className="flex flex-col items-start gap-4">
            <Link href="/" aria-label="Sinnes Automobiles — Retour à l'accueil">
              <Image
                src="/images/logo-avec-fond-noir-150x150.png"
                alt="Logo Sinnes Automobiles"
                width={100}
                height={100}
                loading="lazy"
                className="rounded-lg"
              />
            </Link>
            <p className="font-body text-sm text-white/70 leading-relaxed max-w-[220px]">
              Spécialiste reproduction &amp; double de clé de voiture à Nice.
              Intervention {HOURS.display}.
            </p>
          </div>

          {/* Colonne 2 — NAP avec microdata schema.org */}
          <div>
            <h3 className="font-heading text-base font-bold text-accent mb-4">
              Nous contacter
            </h3>
            {/*
              itemscope LocalBusiness inline dans le footer
              ⚠️ Rôle : signal NAP additionnel pour les crawlers.
              Le Schema JSON-LD principal est dans la homepage.
            */}
            <address
              itemScope
              itemType="https://schema.org/LocalBusiness"
              className="not-italic font-body text-sm text-white/80 leading-loose"
            >
              <meta itemProp="name" content={ORG.name} />
              <span className="block" itemProp="streetAddress">
                {NAP.address.streetAddress}
              </span>
              <span className="block">
                <span itemProp="postalCode">{NAP.address.postalCode}</span>{' '}
                <span itemProp="addressLocality">{NAP.address.addressLocality}</span>
              </span>
              <a
                href={`tel:${NAP.phoneTel}`}
                itemProp="telephone"
                className="block mt-2 text-accent hover:text-accent-dark transition-colors font-semibold"
                aria-label={`Appeler Sinnes Automobiles au ${NAP.phoneDisplay}`}
              >
                {NAP.phoneDisplay}
              </a>
              <a
                href={`mailto:${NAP.email}`}
                itemProp="email"
                className="block text-white/70 hover:text-white transition-colors"
              >
                {NAP.email}
              </a>
              <span className="block mt-2 text-white/60 text-xs">
                {HOURS.display}
              </span>
              {ORG.siret && (
                <span className="block mt-1 text-white/50 text-xs">
                  SIRET : {ORG.siret}
                </span>
              )}
            </address>
          </div>

          {/* Colonne 3 — Réseaux sociaux + légal */}
          <div>
            <h3 className="font-heading text-base font-bold text-accent mb-4">
              Suivez-nous
            </h3>

            {/* Réseaux sociaux */}
            <nav aria-label="Réseaux sociaux" className="flex gap-4 mb-8">
              <a
                href={SOCIAL.facebook}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Sinnes Automobiles sur Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                {/* Facebook SVG inline */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.instagram}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Sinnes Automobiles sur Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                {/* Instagram SVG inline */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={SOCIAL.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Sinnes Automobiles sur LinkedIn"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-accent transition-colors"
              >
                {/* LinkedIn SVG inline */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </nav>

            {/* Légal */}
            <nav aria-label="Liens légaux">
              <Link
                href="/mentions-legales-et-politique-de-confidentialite/"
                className="text-white/50 hover:text-white/80 text-xs transition-colors"
              >
                Mentions légales &amp; Politique de confidentialité
              </Link>
            </nav>
          </div>
        </div>

        {/* Séparateur */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="font-body text-xs text-white/40">
            © {year} {ORG.name}. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  )
}
