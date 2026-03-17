'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on cloner une clé Hyundai sans aller chez le concessionnaire ?",
    answer: `Sur les modèles avant 2010 équipés du transpondeur PCF7936 : oui, clonage direct possible. Sur les modèles 2010+ avec ID46 ou Texas Crypto : non, une programmation via valise Abrites est obligatoire — c'est exactement ce que propose Sinouhé Rochereau.`,
  },
  {
    question: "Combien coûte de refaire une clé Hyundai ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple Hyundai (i10 base, sans télécommande). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande intégrée (i30, Tucson). À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une Smart Key / badge (Ioniq, Tucson 2021+). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Intervenez-vous sur les Hyundai hybrides et électriques ?",
    answer: "Oui. Les Ioniq hybride, Ioniq 5 et Kona électrique utilisent un système Smart Key spécifique. Sinouhé Rochereau maîtrise la programmation des badges et inserts de secours pour ces modèles via valise Abrites avec mise à jour firmware récente.",
  },
  {
    question: "Peut-on refaire une clé Hyundai à domicile ?",
    answer: "Oui. Sinnes Automobiles intervient à votre domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable complet. Pas besoin de remorquer votre Hyundai.",
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
