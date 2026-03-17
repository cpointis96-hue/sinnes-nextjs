'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Que faire si on a perdu ses clés de voiture sans double ?",
    answer: "Appelez Sinnes Automobiles au +33 6 75 54 04 11. Sinouhé Rochereau intervient directement sur votre véhicule : crochetage sans effraction, décodage de la serrure, gravure de la nouvelle lame et programmation du transpondeur. Intervention à Nice et toute la Côte d'Azur.",
  },
  {
    question: "Combien coûte la création d'une clé voiture perdue sans double ?",
    answer: `À partir de ${PRICES.perteTotale.sinnes}€ pour une perte totale (aucun double existant). Ce tarif comprend le crochetage sans effraction, le décodage de la serrure, le taillage laser de la lame et la programmation complète du transpondeur et de la télécommande. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Peut-on vraiment ouvrir une voiture sans abîmer la serrure ?",
    answer: "Oui, dans la grande majorité des cas. Sinouhé Rochereau utilise des outils de crochetage professionnel certifiés. La serrure et la carrosserie sont intégralement préservées. Cette technique est différente du crochetage d'urgence des pompiers ou des amateurs.",
  },
  {
    question: "Combien de temps pour créer une clé perdue sans double ?",
    answer: "En général 1h30 à 2h : 15-20 min de crochetage, 20-30 min de décodage, 30-45 min de taillage et programmation. Sinouhé intervient directement sur place — pas besoin de remorquer le véhicule.",
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
