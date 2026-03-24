'use client'

import { TEAM } from '@/constants/siteConfig'

/**
 * Composant Byline pour renforcer l'aspect E-E-A-T (Expertise, Authoritativeness, Trustworthiness).
 * Utilisé pour identifier le référent d'une page (ex: Inès pour les tarifs).
 */
export default function BylineInes() {
  return (
    <p className="text-sm text-white/70 border-l-4 border-accent pl-4 text-left max-w-xl mx-auto mt-6">
      Tarifs et devis gérés par <strong className="text-white">{TEAM.ines.name}</strong> · {TEAM.ines.jobTitle}. Transparence totale, sans frais cachés.
    </p>
  )
}


