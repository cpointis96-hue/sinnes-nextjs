'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on doubler une clé Fiat 500 sans concessionnaire ?",
    answer: "Oui. La Fiat 500 (2007+) utilise un transpondeur ID46 — Sinouhé Rochereau peut réaliser la programmation directement avec valise ZedFull ou Abrites. Intervention possible à domicile à Nice et alentours.",
  },
  {
    question: "Combien coûte de refaire une clé Fiat ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple Fiat (sans télécommande). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande intégrée (Fiat 500, Panda 3e gen). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Intervenez-vous sur les Fiat professionnelles (Ducato) ?",
    answer: "Oui. Le Fiat Ducato est l'un des véhicules utilitaires les plus fréquents sur la Côte d'Azur. Sinouhé Rochereau intervient sur toutes les générations, clé simple ou avec télécommande.",
  },
  {
    question: "Peut-on refaire une clé Fiat à domicile ?",
    answer: "Oui. Sinnes Automobiles intervient à votre domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes. Pas besoin de vous déplacer.",
  },
]

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {FAQ_ITEMS.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={i} className="border border-card-border rounded-card bg-white overflow-hidden">
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
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px]' : 'max-h-0'}`}>
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
