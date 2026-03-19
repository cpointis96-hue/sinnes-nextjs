'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: 'Combien coûte la reproduction d\'une clé de voiture ?',
    answer: `Le prix varie selon le type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres, ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit sur demande.`,
  },
  {
    question: 'Est-il possible de reproduire une clé de voiture sans l\'originale ?',
    answer:
      'Oui, dans la majorité des cas. Sinouhé Rochereau décode la serrure ou la centrale électronique pour recréer une clé fonctionnelle, même sans clé originale. Ce service est disponible pour la quasi-totalité des marques.',
  },
  {
    question: "Qu'est-ce que la gravure d'une clé de voiture ?",
    answer:
      "La gravure (ou taillage) consiste à découper la lame de la clé selon le profil exact de votre serrure, par machine laser ou à commande numérique. C'est l'étape mécanique de la reproduction, réalisée après décodage de la serrure. Elle est systématiquement couplée à la programmation du transpondeur pour les clés électroniques.",
  },
  {
    question: "Peut-on changer uniquement la coque d'une clé voiture ?",
    answer:
      "Oui. Si votre télécommande ou coque est cassée mais que l'électronique fonctionne encore, Sinnes Automobiles peut remplacer la coque seule et transférer la carte électronique. Une solution rapide et bien moins coûteuse qu'une reproduction complète.",
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
