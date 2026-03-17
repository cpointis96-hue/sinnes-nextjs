'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: 'Quel est le prix pour reproduire une clé de voiture à Nice ?',
    answer: `Chez Sinnes Automobiles à Nice, les tarifs sont : ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres ou badge, et ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit avant toute intervention.`,
  },
  {
    question: 'Y a-t-il des frais de déplacement en plus du tarif ?',
    answer:
      'Pas de frais de déplacement pour les interventions sur Nice. Pour les déplacements hors Nice (Antibes, Cannes, Cagnes-sur-Mer…), un forfait déplacement peut s\'appliquer — il est toujours précisé lors du devis.',
  },
  {
    question: 'Est-ce moins cher chez Sinnes qu\'au concessionnaire ?',
    answer:
      'Oui, sensiblement. Un concessionnaire facture en général 150-250€ pour une clé simple, 200-400€ pour une clé centralisée, et jusqu\'à 1200€ en cas de perte totale. Sinnes Automobiles propose les mêmes prestations 2 à 5 fois moins cher, avec intervention à domicile.',
  },
  {
    question: 'Peut-on payer par carte bancaire ?',
    answer:
      'Oui. Sinnes Automobiles accepte le paiement par carte bancaire, virement et espèces. La facture est remise systématiquement après l\'intervention.',
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
