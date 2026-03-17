'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Quel est le délai d'intervention d'un serrurier automobile à Nice ?",
    answer:
      "Sinnes Automobiles intervient généralement en moins de 2h sur Nice et les communes voisines. Disponible 7j/7, y compris week-ends et jours fériés, sur rendez-vous.",
  },
  {
    question: 'Combien coûte un serrurier automobile à Nice ?',
    answer: `Le tarif dépend du type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres. Devis gratuit sur demande.`,
  },
  {
    question: 'Intervenez-vous aussi à Antibes, Cannes et Cagnes-sur-Mer ?',
    answer:
      "Oui. Sinnes Automobiles couvre Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer et toute la Côte d'Azur.",
  },
  {
    question: "Est-il possible d'ouvrir une voiture sans casser la serrure ?",
    answer:
      "Oui, dans la plupart des cas. Sinouhé Rochereau utilise des techniques de crochetage professionnel sans effraction, préservant intégralement la serrure et la carrosserie.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className="border border-card-border rounded-card bg-white overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-4
                         font-body font-semibold text-left text-text-main
                         hover:bg-bg-shade transition-colors min-h-[56px]
                         focus-visible:outline-accent"
            >
              <span>{item.question}</span>
              <span
                className={`flex-shrink-0 w-6 h-6 flex items-center justify-center
                             rounded-full border-2 border-accent text-accent font-bold text-lg
                             transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out
                          ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}
            >
              <p className="font-body text-text-muted leading-relaxed px-6 pb-5 pt-2">
                {item.answer}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
