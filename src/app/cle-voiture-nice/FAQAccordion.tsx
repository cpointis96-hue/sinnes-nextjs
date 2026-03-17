'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Intervenez-vous pour une clé de voiture à Antibes ?",
    answer: "Oui. Sinnes Automobiles intervient à Antibes, notamment à Sophia Antipolis, dans le Vieil Antibes et au Port Vauban. Contactez-nous au +33 6 75 54 04 11 — Sinouhé Rochereau se déplace directement sur place.",
  },
  {
    question: "Pouvez-vous intervenir dans le Vieux-Nice ?",
    answer: "Oui, avec une particularité : les ruelles du Vieux-Nice ne sont pas accessibles en véhicule d'atelier. Sinouhé Rochereau intervient à pied avec son matériel portable Abrites — cela ne change rien à la qualité ni aux tarifs de l'intervention.",
  },
  {
    question: "Quel est le délai d'intervention à Cannes ou Cagnes-sur-Mer ?",
    answer: "En général 1h à 2h depuis Nice. Sinouhé Rochereau couvre Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer et toute la Côte d'Azur. Pas de frais de déplacement pour les interventions à Nice.",
  },
  {
    question: "Intervenez-vous à l'aéroport de Nice ?",
    answer: "Oui. En cas de clé perdue avant un vol ou au retour, Sinnes Automobiles peut intervenir directement aux parkings des terminaux 1 et 2 de l'aéroport Nice Côte d'Azur. Appelez le +33 6 75 54 04 11 dès que vous constatez le problème.",
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
