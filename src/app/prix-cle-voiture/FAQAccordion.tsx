'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Quel est le prix d'une clé voiture avec télécommande ?",
    answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ chez Sinnes Automobiles pour une clé centralisée avec télécommande. Ce tarif inclut le décodage de la serrure, le taillage laser de la lame et la programmation du transpondeur + télécommande. Comparaison : ${PRICES.cleCentralisee.concessionnaire.min} à ${PRICES.cleCentralisee.concessionnaire.max}€ chez un concessionnaire.`,
  },
  {
    question: "Combien coûte un double de clé de voiture ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour un double de clé simple (sans télécommande). À partir de ${PRICES.cleCentralisee.sinnes}€ avec télécommande et transpondeur programmé. Devis gratuit au +33 6 75 54 04 11 — tarif ferme communiqué avant toute intervention.`,
  },
  {
    question: "Le prix comprend-il la programmation du transpondeur ?",
    answer: "Oui, tous les tarifs Sinnes sont tout compris : décodage, taille laser et programmation du transpondeur ou de la télécommande sont inclus dans le prix annoncé. Aucun frais supplémentaire ne sera facturé.",
  },
  {
    question: "Y a-t-il des tarifs différents selon la marque de voiture ?",
    answer: "Le tarif dépend principalement du type de clé (simple, centralisée, mains libres) plutôt que de la marque. Certains modèles très récents ou haut de gamme peuvent nécessiter un tarif personnalisé — devis gratuit au +33 6 75 54 04 11.",
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
