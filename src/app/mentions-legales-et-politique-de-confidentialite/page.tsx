import type { Metadata } from 'next'
import { NAP } from '@/constants/siteConfig'

export const metadata: Metadata = {
  title: 'Mentions légales et politique de confidentialité — Sinnes Automobiles',
  description: 'Mentions légales, politique de confidentialité et informations RGPD de Sinnes Automobiles, 4 rue Diderot, 06000 Nice.',
  alternates: { canonical: 'https://sinnes.fr/mentions-legales-et-politique-de-confidentialite/' },
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <>
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

      <section className="py-16 px-4 bg-white">
        <div className="container-sinnes max-w-3xl font-body text-text space-y-10">

          <h1 className="font-heading font-bold text-3xl md:text-4xl text-text">
            Mentions légales et politique de confidentialité
          </h1>

          {/* MENTIONS LÉGALES */}
          <div>
            <h2 className="font-heading font-bold text-xl mb-4 text-text">1. Mentions légales</h2>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Éditeur du site</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              <strong className="text-text">Sinnes Automobiles</strong><br />
              Entreprise individuelle<br />
              4 rue Diderot — 06000 Nice<br />
              Téléphone : <a href={`tel:${NAP.phoneTel}`} className="hover:underline text-primary">{NAP.phoneDisplay}</a><br />
              E-mail : contact@sinnes.fr
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Directeur de publication</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Sinouhé Rochereau
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Hébergeur</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              <strong className="text-text">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723 — États-Unis<br />
              Site : vercel.com
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Propriété intellectuelle</h3>
            <p className="leading-relaxed text-text-muted">
              L'ensemble du contenu de ce site (textes, images, logos, structure) est protégé par
              le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation
              préalable écrite de Sinnes Automobiles.
            </p>
          </div>

          <hr className="border-card-border" />

          {/* POLITIQUE DE CONFIDENTIALITÉ */}
          <div>
            <h2 className="font-heading font-bold text-xl mb-4 text-text">2. Politique de confidentialité</h2>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Données collectées</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Ce site collecte uniquement les données que vous fournissez volontairement via le
              formulaire de contact : prénom, numéro de téléphone, marque du véhicule et message.
              Ces données sont utilisées exclusivement pour répondre à votre demande de devis.
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Finalité du traitement</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Les données collectées sont utilisées pour :<br />
              — Répondre à vos demandes de devis et d'information<br />
              — Assurer le suivi des interventions<br />
              — Améliorer la qualité de nos services
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Base légale</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Le traitement repose sur votre consentement explicite (soumission du formulaire) et sur
              l'intérêt légitime de Sinnes Automobiles à répondre à ses clients.
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Conservation des données</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Vos données sont conservées pendant la durée nécessaire à l'exécution de la prestation,
              puis pendant 3 ans maximum à des fins de suivi commercial, sauf demande de suppression
              de votre part.
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Partage des données</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Vos données ne sont ni vendues, ni transmises à des tiers à des fins commerciales.
              Elles sont accessibles uniquement par Sinouhé Rochereau et Inès Barthelemy.
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Cookies</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Ce site utilise uniquement des cookies techniques nécessaires à son fonctionnement.
              Aucun cookie de traçage publicitaire ni de profilage n'est déposé sans votre accord.
            </p>

            <h3 className="font-heading font-semibold text-base mb-2 text-text">Vos droits (RGPD)</h3>
            <p className="leading-relaxed mb-4 text-text-muted">
              Conformément au Règlement Général sur la Protection des Données (RGPD — UE 2016/679),
              vous disposez des droits suivants :<br />
              — Droit d'accès à vos données<br />
              — Droit de rectification<br />
              — Droit à l'effacement (droit à l'oubli)<br />
              — Droit à la portabilité<br />
              — Droit d'opposition au traitement
            </p>
            <p className="leading-relaxed mb-4 text-text-muted">
              Pour exercer ces droits, contactez-nous par e-mail à{' '}
              <a href="mailto:contact@sinnes.fr" className="hover:underline text-primary">contact@sinnes.fr</a>{' '}
              ou par téléphone au{' '}
              <a href={`tel:${NAP.phoneTel}`} className="hover:underline text-primary">{NAP.phoneDisplay}</a>.
            </p>
            <p className="leading-relaxed text-text-muted">
              En cas de litige non résolu, vous pouvez saisir la{' '}
              <strong className="text-text">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés)
              à l'adresse : cnil.fr.
            </p>
          </div>

          <hr className="border-card-border" />

          <p className="text-sm text-text-muted">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>
    </>
  )
}
