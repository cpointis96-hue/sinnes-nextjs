'use client'

import { useState } from 'react'

const FAQ_ITEMS = [
  {
    question: "Y a-t-il des frais de déplacement pour les interventions hors Nice ?",
    answer: "À Nice : aucun frais de déplacement. Pour Antibes, Cagnes-sur-Mer et Cannes : des frais kilométriques peuvent s'appliquer selon la distance exacte, communiqués gratuitement lors du devis téléphonique. Appelez le +33 6 75 54 04 11 — Sinouhé vous confirme le prix total avant toute intervention.",
  },
  {
    question: "Pouvez-vous intervenir dans le Vieux-Nice ou le Vieil Antibes ?",
    answer: "Oui. Dans les zones piétonnes et les ruelles historiques inaccessibles en véhicule d'atelier, Sinouhé Rochereau intervient à pied avec son matériel portable Abrites — valise compacte et lecteur RFID. La qualité de l'intervention et les tarifs sont exactement les mêmes.",
  },
  {
    question: "Quel est le délai réaliste pour une intervention à Cannes depuis Nice ?",
    answer: "En dehors des heures de pointe (matin 7h-9h et soir 17h-20h), comptez 35 à 45 minutes depuis Nice. En heure de pointe ou lors des grands événements cannois (Festival de Cannes, MIPIM), prévoir 1h à 1h30. Sinouhé vous confirme le délai exact lors de l'appel.",
  },
  {
    question: "Pouvez-vous intervenir au parking de l'aéroport Nice Côte d'Azur ?",
    answer: "Oui. Sinouhé Rochereau intervient directement aux niveaux P1 à P5 des terminaux T1 et T2. Si votre vol est dans moins d'une heure, signalez-le dès l'appel — une première solution (ouverture du véhicule) peut être mise en place rapidement, avec une reproduction de clé complète programmée à votre retour. Délai depuis le centre de Nice : 20 à 30 minutes hors embouteillages.",
  },
  {
    question: "Intervenez-vous à Sophia Antipolis le week-end et jours fériés ?",
    answer: "Oui, 7 jours sur 7, y compris le week-end et les jours fériés. Sophia Antipolis est moins encombrée en dehors de la semaine — le délai d'intervention depuis Nice est réduit à 25-30 minutes le week-end. Appelez directement le +33 6 75 54 04 11.",
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
