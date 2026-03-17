'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Qu'est-ce qu'un transpondeur dans une clé de voiture ?",
    answer: "Un transpondeur est une micropuce RFID intégrée dans la clé de voiture. Elle émet un code unique à 125 kHz qui est reconnu par l'antenne du contacteur. Si le code correspond à ceux enregistrés dans le calculateur, l'immobiliseur libère le démarrage du moteur. Sans transpondeur valide, la voiture ne démarre pas même avec la bonne lame mécanique.",
  },
  {
    question: "Comment savoir si ma clé a un transpondeur ?",
    answer: "La plupart des véhicules produits après 1995 ont un transpondeur. Pour vérifier : tentez de démarrer avec une clé double coupée sans électronique (ou un duplicata mécanique) — si le moteur démarre puis s'arrête après 2 secondes, votre véhicule a un immobiliseur transpondeur actif.",
  },
  {
    question: "Peut-on cloner le transpondeur d'une clé de voiture ?",
    answer: "Oui pour les transpondeurs fixes (ID60, ID33, PCF7936 T5). Non pour les transpondeurs cryptés (ID46, ID48, HITAG). Pour les cryptés, une programmation via valise de diagnostic (Abrites ou ZedFull) est obligatoire — c'est la spécialité de Sinouhé Rochereau.",
  },
  {
    question: "Que se passe-t-il si le transpondeur d'une clé est endommagé ?",
    answer: "Si le transpondeur est défaillant, le moteur ne démarre pas (ou démarre puis coupe immédiatement). Sinnes Automobiles peut programmer un nouveau transpondeur sur une clé vierge et l'enregistrer dans le calculateur du véhicule. Intervention à Nice et toute la Côte d'Azur.",
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
