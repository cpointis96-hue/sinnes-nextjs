'use client'

import { useState } from 'react'
import { NAP } from '@/constants/siteConfig'

export default function ContactForm() {
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

  if (submitted) {
    return (
      <div className="p-6 rounded-lg" style={{ background: 'rgba(239,173,66,0.1)', border: '1px solid rgba(239,173,66,0.3)' }}>
        <p className="font-body font-semibold" style={{ color: '#EFAD42' }}>
          Votre demande a été envoyée. Sinouhé ou Inès vous rappelle dans les plus brefs délais.
        </p>
      </div>
    )
  }

  return (
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
        style={{ background: '#EFAD42', color: '#0A0A0A' }}
      >
        Envoyer ma demande
      </button>
      <p className="font-body text-xs text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
        Ou appelez directement le{' '}
        <a href={`tel:${NAP.phoneTel}`} className="hover:underline" style={{ color: '#EFAD42' }}>
          <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
        </a>
      </p>
    </form>
  )
}
