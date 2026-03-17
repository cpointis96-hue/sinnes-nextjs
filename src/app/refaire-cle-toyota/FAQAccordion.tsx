'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on refaire une clé Toyota hybride (Yaris, Auris) ?",
    answer: "Oui. Les Toyota hybrides utilisent un système Smart Entry avec RFID double fréquence. Sinouhé Rochereau maîtrise la programmation du G-chip Toyota via valise Abrites — identique pour les modèles thermiques et hybrides.",
  },
  {
    question: "Combien coûte de refaire une clé Toyota ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé Toyota simple (Corolla avant 2007). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une Smart Key / badge. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Intervenez-vous sur les Toyota récents (RAV4, C-HR) ?",
    answer: "Oui. Les Toyota récents (2015+) équipés du G-chip nécessitent une programmation via Abrites avec firmware récent. Sinouhé Rochereau intervient sur tous les modèles, y compris C-HR et RAV4 hybride.",
  },
  {
    question: "La garantie Toyota est-elle préservée si je refais la clé chez Sinnes ?",
    answer: "Oui. La méthode de programmation utilisée par Sinouhé Rochereau est non-invasive — elle n'affecte pas le calculateur moteur ni la garantie constructeur Toyota.",
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
