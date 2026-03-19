'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Combien de temps pour une intervention urgence à Nice ?",
    answer: "Sinnes Automobiles intervient en moins de 2h sur Nice et les communes voisines. Disponible 7j/7, week-ends et jours fériés inclus, sur rendez-vous immédiat au +33 6 75 54 04 11.",
  },
  {
    question: "Intervenez-vous la nuit pour une urgence clé voiture ?",
    answer: "Oui, Sinnes est joignable 7j/7. Pour toute urgence nocturne, contactez-nous par téléphone au +33 6 75 54 04 11. L'intervention est planifiée en fonction de la disponibilité de Sinouhé Rochereau.",
  },
  {
    question: "Que faire si ma clé est bloquée à l'intérieur de ma voiture ?",
    answer: "Appelez immédiatement le +33 6 75 54 04 11. Sinouhé Rochereau intervient avec son matériel portable pour ouvrir le véhicule sans effraction et récupérer la clé coincée dans la serrure ou dans l'habitacle, sans abîmer la carrosserie ni la serrure.",
  },
  {
    question: "Quel est le tarif d'une intervention urgence ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.perteTotale.sinnes}€ pour une perte totale. Devis gratuit par téléphone avant toute intervention — aucun frais caché.`,
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
