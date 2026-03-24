import type { Metadata } from 'next'
import { NAP, SITE_URL } from '@/constants/siteConfig'
import { seoData } from '@/data/seoData'
import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'

export const metadata: Metadata = {
  title: seoData['mentions-legales-et-politique-de-confidentialite'].title,
  description: seoData['mentions-legales-et-politique-de-confidentialite'].description,
  alternates: { canonical: 'https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/' },
  openGraph: {
    title: seoData['mentions-legales-et-politique-de-confidentialite'].title,
    url: 'https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    getBreadcrumbSchema('https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Mentions légales & Politique de confidentialité', item: 'https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/' }
    ]),
    getWebPageSchema(
      'https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/',
      seoData['mentions-legales-et-politique-de-confidentialite'].publishedAt,
      seoData['mentions-legales-et-politique-de-confidentialite'].modifiedAt
    )
  ]
}

export default function MentionsLegalesPage() {
  const YellowBullet = () => (
    <span className="inline-block w-[10px] h-[10px] min-w-[10px] rounded-full bg-[#EFAD42] mt-[6px] shrink-0" />
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Mentions légales</li>
          </ol>
        </div>
      </nav>

      {/* EN-TÊTE PRINCIPAL */}
      <section className="pt-20 pb-6 px-4 bg-white text-center">
        <div className="container-sinnes max-w-4xl">
          <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-7xl text-black uppercase tracking-wider leading-tight mb-4">
            {seoData['mentions-legales-et-politique-de-confidentialite'].h1}
          </h1>
          <p className="font-body text-gray-500 text-lg md:text-xl italic">
            Transparence et respect de vos données personnelles
          </p>
        </div>
      </section>

      {/* SÉPARATEUR GRAPHIQUE */}
      <div className="bg-white pb-14 text-center">
        <div className="container-sinnes flex justify-center">
          <DiagonalDivider id="dd-mentions-legales" icon={<SteeringWheelIcon size={46} color="#EFAD42" />} color="#000000" />
        </div>
      </div>

      {/* CORPS EN 2 COLONNES */}
      <section className="pb-24 px-4 bg-white">
        <div className="container-sinnes max-w-[1100px] font-body text-text mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-24 gap-y-16 items-start">
            
            {/* COLONNE GAUCHE : MENTIONS LÉGALES */}
            <div className="space-y-10">
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-black inline-block relative border-b-2 border-transparent pb-1">
                  {seoData['mentions-legales-et-politique-de-confidentialite'].h2[0]}
                </h2>
              </div>

              <div className="space-y-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[0]}</h3>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Nom de l&apos;entreprise : SINNES Automobiles</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Statut juridique : Société par Actions Simplifiée (SAS)</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Siège social : 4 rue Diderot, 06000 NICE, France</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Responsables légaux : Sinouhé Rochereau et Inès Barthelemy</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Contact email : contact@sinnes.fr</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Téléphone : <a href={`tel:${NAP.phoneTel}`} className="font-semibold">{NAP.phoneDisplay}</a></span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Numéro SIRET : 94099792700014</span>
                  </li>
                </ul>

                <div className="mt-10 space-y-4">
                  <p className="font-bold text-black border-l-4 border-[#EFAD42] pl-4 text-lg">SINNES Automobiles exerce les activités suivantes :</p>
                  <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Programmation, duplication et dépannage de clés automobiles</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Revente de véhicules d&apos;occasion</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Service de recherche personnalisée de véhicules selon les critères du client</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[1]}</h3>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Hébergeur : OVH</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Adresse de l&apos;hébergeur : 2 rue Kellermann, 59100 Roubaix, France</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Site internet de l&apos;hébergeur : https://www.ovh.com</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Téléphone de l&apos;hébergeur : 09 72 10 10 07</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[2]}</h3>
                <p className="leading-relaxed text-text-muted text-lg">
                  L&apos;ensemble du site (textes, images, photos de véhicules, logos, vidéos, éléments graphiques) est la propriété exclusive de SINNES Automobiles, sauf mention contraire. Toute reproduction partielle ou totale est interdite sans autorisation écrite.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[3]}</h3>
                <p className="leading-relaxed text-text-muted text-lg">
                  SINNES Automobiles s’efforce de fournir des informations exactes et à jour. Cependant, la société ne peut garantir l’exactitude, la complétude ou l’actualité du contenu. Sinouhé Rochereau et Inès Barthelemy déclineront toute responsabilité d&apos;une mauvaise utilisation du site ou des informations fournies.
                </p>
              </div>
            </div>

            {/* COLONNE DROITE : POLITIQUE DE CONFIDENTIALITÉ */}
            <div className="space-y-10">
              <div className="text-center mb-10">
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-black inline-block relative border-b-2 border-transparent pb-1">
                  {seoData['mentions-legales-et-politique-de-confidentialite'].h2[1]}
                </h2>
              </div>

              <div className="space-y-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[4]}</h3>
                <p className="text-text-muted text-lg">Nous collectons les données suivantes lorsque vous utilisez notre site ou nos formulaires :</p>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Nom & Prénom</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Adresse mail</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Numéro de téléphone</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Adresse IP</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Données liées à la demande de service</span>
                  </li>
                </ul>

                <div className="mt-8 space-y-4">
                  <p className="text-text-muted text-lg">Pour les services de revente de véhicules et de recherche personnalisée, nous collectons également :</p>
                  <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Budget souhaité</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Type de véhicule recherché</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Marque / Modèle</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Kilométrage souhaité</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Localisation / disponibilité géographique</span>
                    </li>
                    <li className="flex gap-3">
                      <YellowBullet />
                      <span>Préférences spécifiques (options, motorisation, couleur, etc.)</span>
                    </li>
                  </ul>
                  <p className="text-text-muted text-lg mt-4 italic text-sm">Ces données sont nécessaires pour traiter votre demande et vous accompagner dans votre projet automobile.</p>
                </div>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[5]}</h3>
                <p className="text-text-muted text-lg">Les données collectées servent à :</p>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Vous recontacter</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Proposer un devis ou une intervention (programmation de clé)</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Vous accompagner dans l&apos;achat ou la recherche d&apos;un véhicule</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Proposer des solutions adaptées à vos critères</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Assurer le suivi commercial et la relation client</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Améliorer la navigation sur le site</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[6]}</h3>
                <p className="leading-relaxed text-text-muted text-lg">
                  Les données collectées sont conservées aussi longtemps que nécessaire pour les finalités décrites ci-dessus, ou jusqu&apos;à ce que vous demandiez leur suppression.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[7]}</h3>
                <p className="text-text-muted text-lg">Vos données peuvent être transmises uniquement à :</p>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Partenaires automobiles (professionnels, mandataires, vendeurs)</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Plateformes techniques nécessaires au traitement de votre demande</span>
                  </li>
                </ul>
                <p className="text-text-muted text-lg mt-2">Aucun partage n&apos;est effectué à des fins commerciales externes.</p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[8]}</h3>
                <p className="leading-relaxed text-text-muted text-lg">
                  Nous mettons en place toutes les mesures nécessaires pour protéger vos données personnelles contre tout accès non autorisé, perte ou altération.
                </p>
              </div>

              <div className="space-y-6 pt-6">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[9]}</h3>
                <p className="leading-relaxed text-text-muted text-lg">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px] mt-4">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Droit d&apos;accès, de rectification et de suppression des données vous concernant</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Droit d&apos;opposition au traitement de vos données</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Droit à la portabilité des données</span>
                  </li>
                </ul>
                <p className="text-text-muted text-lg mt-4">Pour exercer vos droits, vous pouvez nous contacter par :</p>
                <div className="flex items-center gap-3 mt-2 text-lg">
                  <span className="text-xl">✉️</span>
                  <span className="font-bold text-black font-heading">Email : contact@sinnes.fr</span>
                </div>
              </div>

              <div className="space-y-6 pt-10">
                <h3 className="font-heading font-bold text-2xl text-black leading-tight">{seoData['mentions-legales-et-politique-de-confidentialite'].h3[10]}</h3>
                <p className="text-text-muted text-lg">Le site utilise des cookies pour :</p>
                <ul className="space-y-3 pl-0 text-text-muted text-[17px]">
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Le fonctionnement général</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Les statistiques de visite</span>
                  </li>
                  <li className="flex gap-3">
                    <YellowBullet />
                    <span>Droit à la portabilité des données</span>
                  </li>
                </ul>
                <p className="text-text-muted text-lg mt-4 text-sm font-light">Vous pouvez gérer vos préférences via la bannière de consentement.</p>
              </div>
            </div>

          </div>
          
          <div className="mt-20 pt-10 border-t border-gray-100">
            <p className="text-gray-950 text-base font-body">
              Dernière mise à jour : <span className="font-bold">{new Date(seoData['mentions-legales-et-politique-de-confidentialite'].modifiedAt).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}</span>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

