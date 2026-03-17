'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on refaire une clé Audi sans aller chez le concessionnaire ?",
    answer: "Oui. Sinouhé Rochereau maîtrise le système VAG avec valise Abrites et calcul du PIN Code IMMO4/IMMO5. Résultat identique au concessionnaire, délai plus court et tarif souvent inférieur.",
  },
  {
    question: "Combien coûte de refaire une clé Audi ?",
    answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé Audi avec lame escamotable (A3 8P, A4 B7). À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une clé KESSY / badge (A4 B9, Q5). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Intervenez-vous sur toutes les générations Audi ?",
    answer: "Oui, de l'Audi A3 8P (2003) aux modèles récents Q5 FY (2017+). Chaque génération utilise un transpondeur différent (ID48, MegaCode, HiTag Pro) — notre valise Abrites couvre l'intégralité de la gamme.",
  },
  {
    question: "Peut-on refaire une clé Audi à domicile ?",
    answer: "Oui. Sinnes Automobiles intervient à domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable Abrites.",
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
