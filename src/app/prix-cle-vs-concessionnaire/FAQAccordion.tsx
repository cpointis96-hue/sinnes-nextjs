'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Pourquoi refaire une clé chez un serrurier auto coûte moins cher qu'au concessionnaire ?",
    answer: "Les concessionnaires facturent les frais de concession, la marge constructeur sur les pièces et le temps d'atelier. Un serrurier indépendant comme Sinnes Automobiles travaille sans ces intermédiaires, avec le même matériel (Abrites, ZedFull) — d'où une économie de 50% à 80%.",
  },
  {
    question: "La clé faite par un serrurier fonctionne-t-elle comme une clé d'origine ?",
    answer: "Oui, à 100%. La lame est gravée à l'identique par machine laser et le transpondeur est programmé avec les codes constructeur via valise de diagnostic officielle. Votre véhicule et votre assurance ne font aucune différence entre une clé d'origine et une clé reproduite par Sinnes.",
  },
  {
    question: "Quel est le délai chez Sinnes vs un concessionnaire ?",
    answer: "Chez Sinnes Automobiles : 30 minutes à 2h, le jour même, à domicile ou à l'atelier. Chez un concessionnaire : généralement 1 à 3 semaines (commande de la pièce + prise de rendez-vous atelier). En cas de perte, votre véhicule est immobilisé tout ce temps.",
  },
  {
    question: "La garantie constructeur de ma voiture est-elle préservée ?",
    answer: "Oui. La garantie constructeur ne peut pas être annulée parce que vous avez fait reproduire une clé chez un tiers, dès lors que la reproduction est faite correctement avec des équipements certifiés. Sinouhé Rochereau utilise Abrites et ZedFull — les mêmes outils que les garages agréés.",
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
