import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, REVIEWS } from '@/constants/siteConfig'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

export const metadata: Metadata = {
 title: seoData['qui-sommes-nous'].title,
 description: seoData['qui-sommes-nous'].description,
 alternates: { canonical: 'https://sinnes.fr/qui-sommes-nous/' },
 openGraph: {
  title: seoData['qui-sommes-nous'].title,
  url: 'https://sinnes.fr/qui-sommes-nous/',
  images: [{ url: '/images/Deplacement.png', width: 1024, height: 683 }],
 },
}

const schema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'Organization',
   '@id': 'https://sinnes.fr/#organization',
   name: 'Sinnes Automobiles',
   url: 'https://sinnes.fr/',
   telephone: NAP.phoneTel,
   address: {
    '@type': 'PostalAddress',
    streetAddress: '4 rue Diderot',
    addressLocality: 'Nice',
    postalCode: '06000',
    addressCountry: 'FR',
   },
   member: [
    { '@id': 'https://sinnes.fr/#sinouhe' },
    { '@id': 'https://sinnes.fr/#ines' },
   ],
  },
  {
   '@type': 'Person',
   '@id': 'https://sinnes.fr/#sinouhe',
   name: TEAM.sinouhe.name,
   jobTitle: TEAM.sinouhe.jobTitle,
   description: TEAM.sinouhe.description,
   worksFor: { '@id': 'https://sinnes.fr/#organization' },
   knowsAbout: TEAM.sinouhe.knowsAbout,
  },
  {
   '@type': 'Person',
   '@id': 'https://sinnes.fr/#ines',
   name: TEAM.ines.name,
   jobTitle: TEAM.ines.jobTitle,
   description: TEAM.ines.description,
   worksFor: { '@id': 'https://sinnes.fr/#organization' },
   knowsAbout: TEAM.ines.knowsAbout,
  },
  {
   '@type': 'BreadcrumbList',
   itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
    { '@type': 'ListItem', position: 2, name: 'Qui sommes-nous', item: 'https://sinnes.fr/qui-sommes-nous/' },
   ],
  },
  {
   '@type': 'WebPage',
   '@id': 'https://sinnes.fr/qui-sommes-nous/#webpage',
   url: 'https://sinnes.fr/qui-sommes-nous/',
   datePublished: '2026-03-01',
   dateModified: '2026-03-22',
   isPartOf: { '@id': 'https://sinnes.fr/#website' },
  },
 ],
}

const review = getReviewForPage('/qui-sommes-nous/')

export default function QuiSommesNousPage() {
 return (
  <>
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

   {/* BREADCRUMB */}
   <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
    <div className="container-sinnes">
     <ol className="flex gap-2 text-sm font-body text-text-muted">
      <li><a href="/" className="hover:text-primary">Accueil</a></li>
      <li aria-hidden="true" className="select-none">›</li>
      <li aria-current="page">Qui sommes-nous</li>
     </ol>
    </div>
   </nav>

   {/* HERO */}
   <section style={{ background: '#0A0A0A' }} className="pt-16 pb-6 px-4">
    <div className="container-sinnes max-w-3xl">
     <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['qui-sommes-nous'].h1}
     </h1>
     <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Sinnes Automobiles est une entreprise niçoise fondée en janvier 2025, spécialisée dans la
      reproduction de clé de voiture et la vente de véhicules d'occasion. Deux expertises
      complémentaires, une équipe de deux personnes : Sinouhé Rochereau et Inès Barthelemy.
     </p>
    </div>
   </section>

   <div style={{ background: '#111111' }}><div className="container-sinnes"><DiagonalDivider id="dd-quisommesnous" icon={<SteeringWheelIcon size={42} color="#EFAD42" />} color="#EFAD42" /></div></div>

   {/* SINOUHÉ */}
   <section style={{ background: '#111111' }} className="pt-6 pb-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['qui-sommes-nous'].h2[0]}
     </h2>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      <strong style={{ color: '#FFFFFF' }}>Sinouhé Rochereau</strong> est l'expert technique de
      Sinnes Automobiles. Formateur international certifié chez{' '}
      <strong style={{ color: '#FFFFFF' }}>Incarline</strong>, l'organisme de référence pour la
      programmation de clés automobiles en Europe. Il maîtrise l'ensemble des systèmes
      d'immobilisation modernes : IMMO3 Hyundai, IVER Renault, VAG KESSY, HiTag AES Mercedes,
      G-chip Toyota.
     </p>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Passionné d'automobile depuis l'enfance, Sinouhé est également{' '}
      <strong style={{ color: '#FFFFFF' }}>commissaire au Grand Prix de Monaco</strong> depuis 2016.
      Ce rôle, qui exige rigueur, précision et sang-froid, illustre parfaitement son approche du
      métier : chaque intervention est réalisée avec le même niveau d'exigence.
     </p>
     <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Sinouhé intervient sur toute la Côte d'Azur (Nice, Antibes, Cagnes-sur-Mer, Cannes)
      directement à votre domicile ou à l'atelier. Il prend en charge toutes les marques et
      toutes les générations, des véhicules les plus anciens aux modèles les plus récents.
     </p>
    </div>
   </section>

   {/* INÈS */}
   <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['qui-sommes-nous'].h2[1]}
     </h2>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      <strong style={{ color: '#FFFFFF' }}>Inès Barthelemy</strong> est la co-fondatrice et
      référente commerciale de Sinnes Automobiles. Avant de rejoindre l'aventure Sinnes, elle a
      acquis une solide expérience en gestion et comptabilité au sein du{' '}
      <strong style={{ color: '#FFFFFF' }}>Mas de Daumas Gassac</strong>, domaine viticole
      d'exception du Languedoc-Roussillon, reconnu pour son exigence de qualité.
     </p>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Inès prend en charge les devis, la facturation et la relation client. C'est elle qui
      répond au téléphone, établit les devis personnalisés et assure le suivi de chaque
      intervention. Son sens de l'organisation et de la rigueur garantit une expérience client
      sans friction, du premier appel à la remise de clé.
     </p>
     <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Pour un devis ou toute question tarifaire, Inès est joignable au {NAP.phoneDisplay}.
     </p>
     <a href="/tarif-cle-voiture/" className="font-body font-semibold hover:underline" style={{ color: '#EFAD42' }}>
      &rarr; Consulter notre grille tarifaire
     </a>
    </div>
   </section>

   {/* HISTOIRE / TIMELINE */}
   <section style={{ background: '#111111' }} className="py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10" style={{ color: '#FFFFFF' }}>
      {seoData['qui-sommes-nous'].h2[2]}
     </h2>

     <div className="space-y-8">
      <div className="flex gap-6">
       <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full mt-1 flex-shrink-0" style={{ background: '#EFAD42' }}></div>
        <div className="w-px flex-1 mt-2" style={{ background: 'rgba(239,173,66,0.3)' }}></div>
       </div>
       <div>
        <p className="font-body text-sm font-semibold mb-1" style={{ color: '#EFAD42' }}>Janvier 2025</p>
        <p className="font-heading font-bold text-xl mb-2" style={{ color: '#FFFFFF' }}>Ouverture : Reproduction de clé voiture</p>
        <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
         Sinouhé et Inès lancent Sinnes Automobiles à Nice, avec une spécialisation unique sur
         la Côte d'Azur : la reproduction de clé voiture toutes marques, directement chez le
         client. Le service de{' '}
         <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
          reproduction de clé
         </a>{' '}
         démarre immédiatement avec 5 étoiles sur Google.
        </p>
       </div>
      </div>

      <div className="flex gap-6">
       <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full mt-1 flex-shrink-0" style={{ background: '#EFAD42' }}></div>
        <div className="w-px flex-1 mt-2" style={{ background: 'rgba(239,173,66,0.3)' }}></div>
       </div>
       <div>
        <p className="font-body text-sm font-semibold mb-1" style={{ color: '#EFAD42' }}>Octobre 2025</p>
        <p className="font-heading font-bold text-xl mb-2" style={{ color: '#FFFFFF' }}>Extension : Vente de véhicules d'occasion</p>
        <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
         Fort de la confiance des clients niçois, Sinnes élargit son activité à la vente de
         véhicules d'occasion. Des modèles récents et fiables, sélectionnés avec la même
         exigence. Découvrez notre sélection sur la page{' '}
         <a href="/acheter-une-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
          vente de véhicules d'occasion
         </a>.
        </p>
       </div>
      </div>

      <div className="flex gap-6">
       <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full mt-1 flex-shrink-0" style={{ background: '#EFAD42' }}></div>
       </div>
       <div>
        <p className="font-body text-sm font-semibold mb-1" style={{ color: '#EFAD42' }}>2026 et au-delà</p>
        <p className="font-heading font-bold text-xl mb-2" style={{ color: '#FFFFFF' }}>{REVIEWS.reviewCount} avis · {REVIEWS.ratingValue}/5 · La référence Nice</p>
        <p className="font-body leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
         {REVIEWS.reviewCount} avis Google avec une note parfaite de {REVIEWS.ratingValue}/5. Des clients de Nice, Antibes,
         Cagnes-sur-Mer, Cannes et Menton font confiance à Sinnes Automobiles. L'ambition :
         rester la référence indépendante de la reproduction de clé voiture sur la Côte d'Azur.
        </p>
       </div>
      </div>
     </div>
    </div>
   </section>

   {/* CTA */}
   <section style={{ background: '#EFAD42' }} className="py-12 text-center px-4">
    <div className="container-sinnes">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#0A0A0A' }}>
      {seoData['qui-sommes-nous'].h2[3]}
     </h2>
     <p className="font-body text-lg mb-6" style={{ color: 'rgba(0,0,0,0.7)' }}>
      Sinouhé et Inès répondent 7j/7
     </p>
     <a
      href={`tel:${NAP.phoneTel}`}
      className="inline-block font-body font-bold text-xl px-10 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
      style={{ background: '#0A0A0A', color: '#EFAD42' }}
     >
      {NAP.phoneDisplay}
     </a>
    </div>
   </section>
   {review && <SingleReview review={review} serviceName="Qui sommes-nous — Sinnes Automobiles" serviceUrl="/qui-sommes-nous/" />}
  </>
 )
}
