'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Peut-on faire un double de clé voiture sans l'originale ?",
    answer: `Oui, via décodage mécanique de la serrure. Sinouhé Rochereau utilise une valise de diagnostic pour lire le code de la serrure sans clé originale, puis grave la lame par laser. Tarif à partir de ${PRICES.perteTotale.sinnes}€ (perte totale).`,
  },
  {
    question: "Combien coûte un double de clé de voiture ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple sans télécommande. Clé centralisée avec télécommande : à partir de ${PRICES.cleCentralisee.sinnes}€. Clé mains libres / badge : à partir de ${PRICES.cleMainsLibres.sinnes}€. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Combien de temps pour faire un double de clé ?",
    answer: "Avec la clé originale : 30 à 45 minutes. Programmation d'un transpondeur incluse dans ce délai pour les clés avec puce. Sinouhé intervient à domicile ou à l'atelier à Nice.",
  },
  {
    question: "Peut-on commander un double de clé voiture en ligne ?",
    answer: "Non. La reproduction d'une clé de voiture nécessite une intervention physique : décodage de la serrure, taillage laser de la lame et programmation du transpondeur. Ces opérations ne peuvent pas se faire à distance. Sinnes Automobiles se déplace chez vous sur la Côte d'Azur ou vous accueille à l'atelier, 4 rue Diderot, Nice.",
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
