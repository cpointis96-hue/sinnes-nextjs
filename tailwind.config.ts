/**
 * SINNES AUTOMOBILES — Tailwind CSS v4 Design System
 *
 * Ce fichier est référencé depuis src/app/globals.css via @config.
 * Toutes les valeurs sont extraites des fichiers source WordPress :
 *   - sinnes.fr/wp-content/themes/hello-elementor-enfant/style.css
 *   - sinnes.fr/wp-content/uploads/elementor/css/post-5.css
 *
 * ⚠️  RÈGLE ABSOLUE : ne jamais inventer une couleur ou une taille.
 *     Toute valeur doit être traçable vers les CSS source.
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  // ---------------------------------------------------------------------------
  // CONTENT — chemins de scan pour purge CSS
  // ---------------------------------------------------------------------------
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      // -----------------------------------------------------------------------
      // COULEURS
      // Source : --motors-* et --mvl-* variables (post-5.css + style.css)
      // -----------------------------------------------------------------------
      colors: {
        // --- Accents & CTAs ---
        accent: '#efad42',          // or/ambre — boutons principaux, prix overlay
        'accent-dark': '#d49436',   // hover boutons accent
        'accent-alpha': 'rgba(239, 173, 66, 0.5)',

        // --- Couleurs primaires de marque ---
        primary: '#cc6119',         // orange — couleur primaire identité
        secondary: '#6c98e1',       // bleu clair
        'secondary-dark': '#5a7db6',

        // --- Neutres / structure ---
        third: '#232628',           // quasi-noir — textes titres foncés
        fourth: '#153e4d',          // bleu pétrole — fonds premium

        // --- Fonds ---
        'bg-shade': '#F0F3F7',      // sections alternées (clair)
        'bg-card': '#ffffff',
        'card-hover': '#F1F5F9',

        // --- Textes ---
        'text-main': '#010101',
        'text-muted': 'rgba(1, 1, 1, 0.5)',
        'card-title': '#111827',
        'card-border': 'rgba(17, 24, 39, 0.1)',

        // --- Badges ---
        'cta-urgence': '#e53935',   // rouge vif — CTA urgence (pages serrurier)

        // --- Palette SVG Infographies Fast-Check ---
        // Source : Ajout_au_fichier_sinnes-cocon-semantique-v2.md
        svg: {
          noir: '#0A0A0A',          // fond principal infographies
          'noir-card': '#1A1A1A',   // surfaces élevées (cards SVG)
          jaune: '#FFD700',         // accents, icônes, CTA SVG
          'jaune-hover': '#FFC107', // survols SVG
          blanc: '#FFFFFF',         // textes principaux sur fond noir
          gris: '#6B7280',          // textes tertiaires SVG
        },
      },

      // -----------------------------------------------------------------------
      // TYPOGRAPHIE
      // Source : Google Fonts chargées via next/font (layout.tsx)
      // Variables CSS injectées par next/font : --font-playfair, --font-maven, --font-roboto
      // -----------------------------------------------------------------------
      fontFamily: {
        heading: ['var(--font-playfair)', '"Playfair Display"', 'Georgia', 'serif'],
        body: ['var(--font-maven)', '"Maven Pro"', 'system-ui', 'sans-serif'],
        secondary: ['var(--font-roboto)', '"Roboto"', 'system-ui', 'sans-serif'],
        'secondary-serif': ['"Roboto Slab"', 'Georgia', 'serif'],
      },

      // -----------------------------------------------------------------------
      // TAILLES DE POLICE
      // Extraites des styles Elementor source
      // -----------------------------------------------------------------------
      fontSize: {
        'price-overlay': ['1.3rem', { lineHeight: '1.2', fontWeight: '700' }],
        // Titres H3 cocon
        'h3-cocon': ['1.3rem', { lineHeight: '1.4', fontWeight: '700' }],
      },

      // -----------------------------------------------------------------------
      // CONTAINER
      // Max width 1140px (post-5.css : --mvl-container-width)
      // -----------------------------------------------------------------------
      maxWidth: {
        container: '1140px',
        'container-sm': '720px',
      },

      // -----------------------------------------------------------------------
      // BORDER RADIUS
      // Extrait des cards et boutons source
      // -----------------------------------------------------------------------
      borderRadius: {
        btn: '6px',     // boutons
        card: '12px',   // cards
        badge: '8px',   // prix overlay, badges
      },

      // -----------------------------------------------------------------------
      // BOX SHADOWS
      // -----------------------------------------------------------------------
      boxShadow: {
        card: '0 6px 18px rgba(0, 0, 0, 0.15)',       // card hover
        'price-badge': '0 2px 6px rgba(0, 0, 0, 0.18)', // prix overlay
        'header-sticky': '0 2px 8px rgba(0, 0, 0, 0.25)',
      },

      // -----------------------------------------------------------------------
      // TRANSITIONS
      // Durées extraites des data-settings Elementor
      // -----------------------------------------------------------------------
      transitionDuration: {
        btn: '150ms',
        card: '300ms',
        fast: '250ms',
      },

      // -----------------------------------------------------------------------
      // ANIMATIONS
      // Reproduisent les animations Elementor (data-settings)
      // À combiner avec Framer Motion pour les entrées au scroll
      // -----------------------------------------------------------------------
      keyframes: {
        // pulse — bouton CTA principal
        'cta-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(239, 173, 66, 0.5)' },
          '50%': { boxShadow: '0 0 0 10px rgba(239, 173, 66, 0)' },
        },
        // fadeInDown — H1, H2 (CSS fallback sans Framer)
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // bounceIn — icônes, badges
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // zoomIn — sections au scroll
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // grow — images au scroll
        grow: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' },
        },
      },

      animation: {
        'cta-pulse': 'cta-pulse 2s ease-in-out infinite',
        'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
        'bounce-in': 'bounce-in 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) forwards',
        'zoom-in': 'zoom-in 0.5s ease-out forwards',
        grow: 'grow 0.4s ease-out forwards',
      },

      // -----------------------------------------------------------------------
      // BREAKPOINTS
      // Source : CLAUDE.md section 3 Layout
      // -----------------------------------------------------------------------
      screens: {
        // Valeurs par défaut Tailwind conservées, ajout du breakpoint Elementor exact
        'el-tablet': '768px',
        'el-desktop': '1025px',
      },

      // -----------------------------------------------------------------------
      // SPACING additionnel
      // -----------------------------------------------------------------------
      spacing: {
        // Tap target minimum mobile (WCAG 2.5.5)
        'tap-min': '44px',
      },
    },
  },

  plugins: [],
}

export default config
