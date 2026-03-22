"use client"

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

interface PricingPlan {
  title: string
  price: number
  conces: string
  features: string[]
  hasOr?: boolean
  description: string
}

const PLANS: PricingPlan[] = [
  {
    title: 'Clé Simple',
    price: PRICES.cleSimple.sinnes,
    conces: `${PRICES.cleSimple.concessionnaire.min}–${PRICES.cleSimple.concessionnaire.max}€`,
    features: ['Décodage de la clé', 'Taillage de la clé', 'Programmation'],
    hasOr: true,
    description: 'Reproduction de clé voiture simple sans télécommande : décodage, taillage laser et programmation transpondeur. Délai : 1–2h.',
  },
  {
    title: 'Clé Centralisée',
    price: PRICES.cleCentralisee.sinnes,
    conces: `${PRICES.cleCentralisee.concessionnaire.min}–${PRICES.cleCentralisee.concessionnaire.max}€`,
    features: [
      'Décodage de la clé',
      'Taillage de la clé',
      'Programmation du transpondeur',
      'Programmation de la télécommande',
    ],
    description: 'Reproduction de clé voiture centralisée avec télécommande : décodage, taillage laser, programmation transpondeur et télécommande. Délai : 2–3h.',
  },
  {
    title: 'Clé Mains Libres',
    price: PRICES.cleMainsLibres.sinnes,
    conces: `${PRICES.cleMainsLibres.concessionnaire.min}–${PRICES.cleMainsLibres.concessionnaire.max}€`,
    features: [
      'Programmation de la clé',
      'Décodage de la clé',
      "Taillage de l'insert de secours",
      'Programmation de la télécommande',
    ],
    description: 'Reproduction de clé mains libres ou badge : programmation, décodage, taillage insert de secours et télécommande. Délai : 2–4h.',
  },
  {
    title: 'Perte Totale',
    price: PRICES.perteTotale.sinnes,
    conces: `${PRICES.perteTotale.concessionnaire.min}–${PRICES.perteTotale.concessionnaire.max}€`,
    features: [
      'Crochetage de la serrure',
      'Décodage de la serrure',
      'Taillage de la clé',
      'Programmation de la clé',
    ],
    description: 'Reproduction de clé voiture en cas de perte totale sans aucun double : crochetage, décodage serrure, taillage et programmation.',
  },
]

const TRANSITION = 'all 300ms ease'
const SPRING = 'transform 320ms cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 320ms ease'

function KeyholeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      {/* NE — long */}
      <line x1="17.3" y1="6.7" x2="19.8" y2="4.2" stroke="#EFAD42" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19.8" cy="4.2" r="1.8" fill="#EFAD42" />
      {/* SW — long */}
      <line x1="6.7" y1="17.3" x2="4.2" y2="19.8" stroke="#EFAD42" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="4.2" cy="19.8" r="1.8" fill="#EFAD42" />
      {/* NW — court */}
      <line x1="6.7" y1="6.7" x2="5.3" y2="5.3" stroke="#EFAD42" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="5.3" cy="5.3" r="1.6" fill="#EFAD42" />
      {/* SE — court */}
      <line x1="17.3" y1="17.3" x2="18.7" y2="18.7" stroke="#EFAD42" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="18.7" cy="18.7" r="1.6" fill="#EFAD42" />
      {/* Cercle principal or */}
      <circle cx="12" cy="12" r="7.5" fill="#EFAD42" />
      {/* Trou de serrure */}
      <circle cx="12" cy="10.2" r="2.2" fill="white" />
      <path d="M 10.6 11.8 L 9.3 16.2 L 14.7 16.2 L 13.4 11.8 Z" fill="white" />
    </svg>
  )
}

function PricingCard({ plan }: { plan: PricingPlan }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-testid="pricing-card"
      itemScope
      itemType="https://schema.org/Offer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: 40,
        background: 'white',
        border: '1px solid #f3f4f6',
        boxShadow: hovered
          ? '0 30px 70px rgba(0, 0, 0, 0.12)'
          : '0 10px 30px rgba(0, 0, 0, 0.06)',
        transform: hovered ? 'scale(1.03) translateY(-5px)' : 'scale(1) translateY(0)',
        transition: SPRING,
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        isolation: 'isolate',
        height: '100%',
        width: '100%',
      }}
    >
      {/* Titre */}
      <h3
        className="font-heading"
        itemProp="name"
        style={{
          fontSize: '1.25rem',
          fontWeight: 700,
          color: '#1A1A1A',
          marginBottom: '1.5rem',
          textAlign: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        {plan.title}
      </h3>
      <meta itemProp="description" content={plan.description} />
      <meta itemProp="priceCurrency" content="EUR" />
      <meta itemProp="availability" content="https://schema.org/InStock" />
      <link itemProp="seller" href="https://sinnes.fr/#organization" />

      {/* Badge prix */}
      <div
        data-testid="price-badge"
        style={{
          width: '100%',
          borderRadius: 9999,
          padding: '1.25rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          backgroundColor: hovered ? '#EFAD42' : '#1A1A1A',
          boxShadow: hovered ? '0 10px 30px rgba(239, 173, 66, 0.40)' : 'none',
          color: 'white',
          transition: TRANSITION,
        }}
      >
        <span className="font-body" style={{ fontSize: '1.25rem', fontWeight: 300, marginRight: 4, alignSelf: 'flex-start', marginTop: 4 }}>€</span>
        <span className="font-heading" itemProp="price" content={String(plan.price)} style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1 }}>{plan.price}</span>
        <span className="font-body" style={{ fontSize: '0.625rem', fontWeight: 500, marginLeft: 8, opacity: 0.9, lineHeight: 1.2, textTransform: 'uppercase' }}>
          à partir de*
        </span>
      </div>

      {/* Prix concessionnaire barré */}
      <p
        className="font-body"
        style={{ fontSize: '0.75rem', textAlign: 'center', color: '#9CA3AF', marginBottom: '1.5rem' }}
      >
        Concessionnaire : <span style={{ textDecoration: 'line-through' }}>{plan.conces}</span>
      </p>

      {/* Liste des prestations */}
      <div style={{ flexGrow: 1, width: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
        {plan.features.map((feature, idx) => (
          <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0 0.5rem' }}>
            <KeyholeIcon />
            <p className="font-body" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3 }}>
              {feature}
            </p>
          </div>
        ))}

        {plan.hasOr && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div className="font-body" style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: '#9CA3AF', padding: '0.25rem 0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              ou
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0 0.5rem' }}>
              <KeyholeIcon />
              <p className="font-body" style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3 }}>
                Clonage du transpondeur
              </p>
            </div>
          </div>
        )}
      </div>

      {/* CTA */}
      <a
        href="/contactez-nous/"
        className="font-body"
        style={{
          display: 'block',
          width: '100%',
          padding: '1rem 1.5rem',
          borderRadius: 9999,
          border: '2px solid #EFAD42',
          backgroundColor: '#EFAD42',
          color: '#1A1A1A',
          fontWeight: 800,
          fontSize: '0.875rem',
          textAlign: 'center',
          textDecoration: 'none',
          boxShadow: hovered ? '0 10px 25px rgba(239, 173, 66, 0.4)' : '0 4px 12px rgba(239, 173, 66, 0.15)',
          transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
          transition: TRANSITION,
        }}
      >
        Obtenir un devis gratuit
      </a>
    </div>
  )
}

export default function PricingSection() {
  return (
    <div
      data-testid="pricing-grid"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
    >
      {PLANS.map((plan, index) => (
        <PricingCard key={index} plan={plan} />
      ))}
    </div>
  )
}
