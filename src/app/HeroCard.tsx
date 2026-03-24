'use client'

import { motion } from 'framer-motion'
import { NAP, ORG, REVIEWS } from '@/constants/siteConfig'
import { seoData } from '@/data/seoData'

export default function HeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
    >
      {/* Côté Gauche : Textes */}
      <div className="flex-1 text-center md:text-left">
        {/* Badge avis — plus fin et élégant */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 border border-white/10">
          <span className="star-or text-sm leading-none" aria-hidden="true" style={{ color: '#FBBC04' }}>★★★★★</span>
          <span className="font-body text-white/90 text-[10px] md:text-xs font-bold tracking-widest uppercase">
            {REVIEWS.reviewCount} avis Google · {REVIEWS.ratingValue}/5
          </span>
        </div>

        {/* H1 — Blanc pur avec le "&" en jaune branding */}
        <h1 className="font-heading font-bold text-2xl md:text-4xl lg:text-5xl leading-tight mb-2 uppercase tracking-tight text-white">
          {seoData.home.h1.split('').map((char, index) => {
            if (char === '&') {
              return <span key={index} className="italic" style={{ color: '#EFAD42' }}>{char}</span>;
            }
            return <span key={index} style={{ color: 'white' }}>{char}</span>;
          })}
        </h1>

        <h2 className="font-heading font-bold text-base md:text-lg mb-4 leading-snug" style={{ color: 'white' }}>
          {seoData.home.h2[0]}
        </h2>

        {/* Corps — Plus discret */}
        <p className="font-body text-white/70 text-sm md:text-base leading-relaxed max-w-2xl">
          {ORG.name} : service expert de programmation de clé automobile à domicile. 
          Double de clé ou perte totale — intervention rapide sur Nice et Côte d&apos;Azur.
        </p>
      </div>

      {/* Côté Droit : CTA */}
      <div className="flex-shrink-0 flex flex-col items-center md:items-end gap-4 min-w-[280px]">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="btn-accent w-full md:w-auto inline-flex items-center justify-center gap-3 text-lg font-bold rounded-xl transition-all hover:scale-[1.03] shadow-[0_8px_20px_rgba(239,173,66,0.3)]"
        >
          {NAP.phoneDisplay}
        </a>
        
        <p className="font-body text-[10px] md:text-xs text-white/50 text-center md:text-right">
          Besoin d&apos;un{' '}
          <a
            href="/serrurier-automobile-nice/"
            className="text-accent font-semibold underline underline-offset-2 hover:text-white transition-colors"
          >
            serrurier auto à Nice
          </a>{' '}
          maintenant ?
        </p>
      </div>
    </motion.div>
  )
}
