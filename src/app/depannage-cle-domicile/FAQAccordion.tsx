'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Est-ce possible de programmer une clé voiture à domicile ?",
    answer: "Oui. Sinouhé Rochereau dispose d'équipements portables (valise Abrites, machine à taille laser portative) permettant de réaliser l'intégralité de l'intervention à votre domicile, sur votre lieu de travail ou sur un parking. Pas besoin de déplacer votre véhicule.",
  },
  {
    question: "Y a-t-il des frais de déplacement pour une intervention à domicile ?",
    answer: "Pas de frais de déplacement pour les interventions à Nice. Des frais kilométriques peuvent s'appliquer pour les communes éloignées (Cannes, Grasse, Menton). Tarif communiqué gratuitement par téléphone avant l'intervention.",
  },
  {
    question: "Apportez-vous tout le matériel nécessaire ?",
    answer: "Oui. Sinouhé Rochereau se déplace avec son matériel complet : valise de diagnostic Abrites, machine à taille de clé portative, stock de lames vierges et puces transpondeurs toutes marques. L'intervention complète est réalisée sur place en une visite.",
  },
  {
    question: "Couvrez-vous toute la Côte d'Azur pour les interventions à domicile ?",
    answer: "Oui. Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer, Menton, Grasse, Vence, Mougins. Contactez-nous au +33 6 75 54 04 11 pour confirmer la disponibilité dans votre zone.",
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
