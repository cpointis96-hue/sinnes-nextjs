'use client'

import { useState } from 'react'
import { PRICES } from '@/constants/siteConfig'

const FAQ_ITEMS = [
  {
    question: "Comment programmer une clé de voiture ?",
    answer: "La programmation nécessite une valise de diagnostic (Abrites ou ZedFull) branchée sur la prise OBD du véhicule. Le logiciel calcule les codes PIN constructeur, puis injecte les codes de la nouvelle clé dans le calculateur de bord. Le transpondeur est ensuite reconnu par l'immobiliseur. Intervention réalisée par Sinouhé Rochereau, formateur Incarline.",
  },
  {
    question: "Peut-on reprogrammer une clé voiture perdue pour la désactiver ?",
    answer: "Oui. En cas de perte d'une clé, Sinouhé Rochereau peut reprogrammer l'immobiliseur pour effacer les codes de la clé perdue et réenregistrer uniquement les clés restantes. Cela sécurise votre véhicule contre une utilisation non autorisée.",
  },
  {
    question: "La programmation de clé voiture à domicile est-elle possible ?",
    answer: "Oui. Sinnes Automobiles dispose d'équipements portables Abrites et ZedFull pour intervenir directement à votre domicile, sur votre lieu de travail ou sur un parking. Intervention à Nice, Antibes, Cagnes-sur-Mer et Cannes.",
  },
  {
    question: "Combien coûte la programmation d'une clé de voiture ?",
    answer: `La programmation est incluse dans le tarif de reproduction : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée avec télécommande, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres. Devis gratuit au +33 6 75 54 04 11.`,
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
