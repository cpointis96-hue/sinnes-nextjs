'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on refaire une clé Mercedes sans concessionnaire ?",
    answer: "Oui. Sinouhé Rochereau maîtrise la programmation HiTag AES et ProxiKey via valise Abrites. Le résultat est identique à celui du concessionnaire Mercedes, sans le délai ni le surcoût.",
  },
  {
    question: "Combien coûte de refaire une clé Mercedes ?",
    answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé étoile Mercedes avec télécommande (Classe A W176). À partir de ${PRICES.cleMainsLibres.sinnes}€ pour un badge ProxiKey (Classe E, GLC, GLE). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Intervenez-vous sur les Mercedes récentes (W205, GLC) ?",
    answer: "Oui. Les Mercedes récentes utilisent le transpondeur HiTag AES, le plus sécurisé du marché. Sinouhé Rochereau dispose de la mise à jour Abrites spécifique à ces modèles.",
  },
  {
    question: "Peut-on refaire une clé Smart (groupe Mercedes) ?",
    answer: `Oui. Les Smart ForTwo et ForFour utilisent la même architecture clé que la Classe A W176 — intervention identique, tarif à partir de ${PRICES.cleCentralisee.sinnes}€.`,
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
