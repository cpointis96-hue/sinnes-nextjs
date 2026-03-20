import type { Review } from '@/data/reviews'
import { REVIEW_AGGREGATE, GMB_REVIEWS_URL } from '@/data/reviews'

type Props = {
  review: Review
  serviceName: string
  serviceUrl: string
}

// JSON-LD serialized from internal static data — no user input, no XSS risk
function buildSchema(review: Review, serviceName: string, serviceUrl: string) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    url: `https://sinnes.fr${serviceUrl}`,
    provider: { '@type': 'LocalBusiness', name: 'Sinnes Automobiles' },
    review: {
      '@type': 'Review',
      author: { '@type': 'Person', name: review.author },
      datePublished: review.date,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: review.text,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: REVIEW_AGGREGATE.ratingValue,
      reviewCount: REVIEW_AGGREGATE.reviewCount,
      bestRating: REVIEW_AGGREGATE.bestRating,
    },
  })
}

export default function SingleReview({ review, serviceName, serviceUrl }: Props) {
  const dateDisplay = new Date(review.date).toLocaleDateString('fr-FR', {
    month: 'long',
    year: 'numeric',
  })

  return (
    <section
      style={{ background: '#111111', borderTop: '1px solid rgba(239,173,66,0.15)', borderBottom: '1px solid rgba(239,173,66,0.15)' }}
      className="py-4 px-4"
      aria-label="Avis client Google"
    >
      {/* Schema JSON-LD Service + Review + AggregateRating */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildSchema(review, serviceName, serviceUrl) }}
      />

      <div className="container-sinnes max-w-3xl mx-auto">
        <a
          href="https://search.google.com/local/reviews?placeid=ChIJCS7doSKy_EcRN5-Q-XSfBSs"
          target="_blank"
          rel="noopener noreferrer"
          className="block group hover:opacity-95 transition-opacity duration-200"
        >
          {/* Ligne : G · Avis Google · ★★★★★ · 5.0 · 58 avis */}
          <div className="flex items-center gap-2 mb-3">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
          </svg>
          <span className="font-body font-bold text-sm" style={{ color: '#FFFFFF' }}>Avis Google</span>
          <span className="flex gap-px" aria-label="Note 5 sur 5">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} aria-hidden="true" style={{ color: '#FBBC04' }} className="text-sm leading-none">★</span>
            ))}
          </span>
          <span className="font-body text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>5.0 · 58 avis</span>
        </div>

        {/* Texte de l'avis */}
        <figure className="m-0">
          <blockquote className="not-italic m-0">
            <p className="font-body leading-relaxed mb-3" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9375rem' }}>
              &ldquo;{review.text}&rdquo;
            </p>
          </blockquote>
          <figcaption className="not-italic space-y-0.5">
            <strong className="font-body text-xs font-bold uppercase tracking-wide block group-hover:underline" style={{ color: '#FFFFFF' }}>
              {review.author}
            </strong>
            {review.isLocalGuide && (
              <span className="font-body text-xs block" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Local Guide{review.reviewCount ? ` · ${review.reviewCount} avis` : ''}
              </span>
            )}
            <time className="font-body text-xs block" style={{ color: 'rgba(255,255,255,0.4)' }} dateTime={review.date}>
              {dateDisplay}
            </time>
          </figcaption>
        </figure>
        </a>
      </div>
    </section>
  )
}
