'use client'

import { useState } from 'react'
import { NAP } from '@/constants/siteConfig'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sinnes.fr/#organization',
      name: 'Sinnes Automobiles',
      telephone: NAP.phoneTel,
      email: 'contact@sinnes.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4 rue Diderot',
        addressLocality: 'Nice',
        postalCode: '06000',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 43.7031,
        longitude: 7.2620,
      },
      openingHours: 'Mo-Su 08:00-20:00',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Contactez-nous', item: 'https://sinnes.fr/contactez-nous/' },
      ],
    },
  ],
}

export default function ContactezNousPage() {
  const [formData, setFormData] = useState({
    prenom: '',
    telephone: '',
    marque: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Prénom: ${formData.prenom}%0ATéléphone: ${formData.telephone}%0AMarque: ${formData.marque}%0AMessage: ${formData.message}`
    window.location.href = `mailto:contact@sinnes.fr?subject=Demande de devis — Sinnes Automobiles&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Contactez-nous</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Contactez Sinnes Automobiles
          </h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Devis gratuit · Intervention 7j/7 · Nice et Côte d'Azur
          </p>
        </div>
      </section>

      {/* NAP + FORMULAIRE */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* NAP */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color: '#FFD700' }}>
                Coordonnées
              </h2>
              <dl className="space-y-4 font-body">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Téléphone</dt>
                  <dd>
                    <a href={`tel:${NAP.phoneTel}`} className="text-lg font-bold hover:underline" style={{ color: '#FFD700' }}>
                      {NAP.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Adresse</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>4 rue Diderot<br />06000 Nice</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Horaires</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>7j/7 sur rendez-vous<br />8h00 – 20h00</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Zone d'intervention</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>Nice · Antibes · Cagnes-sur-Mer<br />Cannes · Menton · Côte d'Azur</dd>
                </div>
              </dl>
            </div>

            {/* FORMULAIRE */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color: '#FFD700' }}>
                Demande de devis
              </h2>
              {submitted ? (
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,215,0,0.1)', border: '1px solid rgba(255,215,0,0.3)' }}>
                  <p className="font-body font-semibold" style={{ color: '#FFD700' }}>
                    Votre demande a été envoyée. Sinouhé ou Inès vous rappelle dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="prenom" className="block font-body text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Prénom *
                    </label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      value={formData.prenom}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-body text-sm focus:outline-none focus:ring-2"
                      style={{ background: '#1A1A1A', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="telephone" className="block font-body text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Téléphone *
                    </label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      required
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg font-body text-sm focus:outline-none"
                      style={{ background: '#1A1A1A', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="marque" className="block font-body text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Marque du véhicule
                    </label>
                    <input
                      id="marque"
                      name="marque"
                      type="text"
                      value={formData.marque}
                      onChange={handleChange}
                      placeholder="ex : Renault Clio, Toyota Yaris…"
                      className="w-full px-4 py-3 rounded-lg font-body text-sm focus:outline-none"
                      style={{ background: '#1A1A1A', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block font-body text-sm font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin…"
                      className="w-full px-4 py-3 rounded-lg font-body text-sm focus:outline-none resize-none"
                      style={{ background: '#1A1A1A', color: '#FFFFFF', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full font-body font-bold text-lg py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
                    style={{ background: '#FFD700', color: '#0A0A0A' }}
                  >
                    Envoyer ma demande
                  </button>
                  <p className="font-body text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                    Ou appelez directement le{' '}
                    <a href={`tel:${NAP.phoneTel}`} className="hover:underline" style={{ color: '#FFD700' }}>
                      {NAP.phoneDisplay}
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* STICKY MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="flex items-center justify-center w-full font-body font-bold text-lg py-4 min-h-[56px]"
          style={{ background: '#FFD700', color: '#0A0A0A' }}
        >
          Appeler — {NAP.phoneDisplay}
        </a>
      </div>
    </>
  )
}
