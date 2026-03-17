/**
 * SINNES AUTOMOBILES — next.config.ts
 *
 * Objectifs Core Web Vitals non négociables :
 *   LCP < 2.0s | CLS < 0.1 | INP < 200ms
 *
 * Redirections SEO :
 *   301 : /refaire-sa-cle-auto/ → /reproduction-cle-voiture/
 *   301 : /programmation-de-cle/ → /reproduction-cle-voiture/
 *   302 : /nos-services/ → /  (⚠️  audit : passé en 301 — hub supprimé définitivement)
 *
 * ✅ Bombes désamorcées :
 *   - /nos-services/ : 302 → 301 (évite que Google conserve l'association sémantique croisée)
 *   - Trailing slash activé (canonical uniforme : https://sinnes.fr/slug/)
 *   - Headers sécurité + SEO (X-Robots, referrer, permissions)
 *   - Compression Brotli activée
 *   - Images WebP/AVIF activées (pas de stock photos — images locales uniquement)
 */

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ---------------------------------------------------------------------------
  // TRAILING SLASH
  // Canonical cible : https://sinnes.fr/slug/ (avec slash final)
  // Cohérence avec tous les schemas JSON-LD et la matrice de maillage
  // ---------------------------------------------------------------------------
  trailingSlash: true,

  // ---------------------------------------------------------------------------
  // OPTIMISATION IMAGES
  // Formats modernes, domaines autorisés, taille limitée
  // ---------------------------------------------------------------------------
  images: {
    formats: ['image/avif', 'image/webp'],
    // Aucun domaine externe autorisé (zéro stock photo)
    // Toutes les images sont dans /public/images/ (migrées depuis sinnes.fr/wp-content/uploads/)
    remotePatterns: [],
    // Tailles deviceSizes alignées sur les breakpoints Elementor + mobile
    deviceSizes: [375, 640, 768, 1024, 1140, 1280, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 500],
    // Durée de cache des images optimisées (7 jours)
    minimumCacheTTL: 604800,
  },

  // ---------------------------------------------------------------------------
  // COMPRESSION
  // ---------------------------------------------------------------------------
  compress: true,

  // ---------------------------------------------------------------------------
  // HEADERS HTTP
  // Sécurité + SEO + performance
  // ---------------------------------------------------------------------------
  async headers() {
    return [
      // --- Headers appliqués à TOUTES les routes ---
      {
        source: '/(.*)',
        headers: [
          // Sécurité
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
          },
          // CSP — protège contre XSS et injections tierces
          // unsafe-inline nécessaire pour les scripts JSON-LD (schema.org) et styles Tailwind
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob:",
              "font-src 'self'",
              "connect-src 'self'",
              "media-src 'self'",
              "frame-src 'none'",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
          // CORS restreint à l'origine propre (override du wildcard Vercel)
          {
            key: 'Access-Control-Allow-Origin',
            value: 'https://sinnes.fr',
          },
          // Performance : prefetch DNS pour Google Fonts (chargées via next/font en local — backup CDN)
          {
            key: 'Link',
            value: '<https://fonts.gstatic.com>; rel=preconnect; crossorigin',
          },
        ],
      },

      // --- Cache long terme pour les assets statiques ---
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },

      // --- SVG infographies : cache long + type MIME correct ---
      {
        source: '/images/svg/(.*).svg',
        headers: [
          {
            key: 'Content-Type',
            value: 'image/svg+xml',
          },
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // ---------------------------------------------------------------------------
  // REDIRECTIONS SEO
  // Règle : une URL, une destination définitive.
  // ✅ Correction audit : /nos-services/ passe en permanent:true (301)
  // ---------------------------------------------------------------------------
  async redirects() {
    return [
      // --- 301 Permanentes : URLs WordPress obsolètes ---
      {
        source: '/refaire-sa-cle-auto',
        destination: '/reproduction-cle-voiture/',
        permanent: true,
      },
      {
        source: '/refaire-sa-cle-auto/',
        destination: '/reproduction-cle-voiture/',
        permanent: true,
      },
      {
        source: '/programmation-de-cle',
        destination: '/reproduction-cle-voiture/',
        permanent: true,
      },
      {
        source: '/programmation-de-cle/',
        destination: '/reproduction-cle-voiture/',
        permanent: true,
      },
      // Hub supprimé — 301 (corrigé vs 302 initial du plan)
      // Justification audit : une 302 conserve l'autorité sur la source et maintient
      // l'association sémantique clé/VO dans l'index. La 301 transfère et éteint la source.
      {
        source: '/nos-services',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nos-services/',
        destination: '/',
        permanent: true,
      },

      // Normalisation trailing slash gérée automatiquement par trailingSlash: true
    ]
  },

  // ---------------------------------------------------------------------------
  // REWRITES (aucun pour l'instant — cocon entièrement statique)
  // ---------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // EXPERIMENTAL
  // Optimisations CSS (inline critical CSS) — compatible Next.js 15+
  // ---------------------------------------------------------------------------
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig
