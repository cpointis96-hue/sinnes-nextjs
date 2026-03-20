'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { getHomepageReviews, GMB_REVIEWS_URL } from '@/data/reviews'

function buildCarouselSchema(reviews: ReturnType<typeof getHomepageReviews>) {
 return JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sinnes Automobiles',
  '@id': 'https://sinnes.fr/#business',
  aggregateRating: {
   '@type': 'AggregateRating',
   ratingValue: '5.0',
   reviewCount: '58',
  },
  review: reviews.map((r) => ({
   '@type': 'Review',
   author: { '@type': 'Person', name: r.author },
   datePublished: r.date,
   reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
   reviewBody: r.text,
  })),
 })
}

export default function ReviewsCarousel() {
 const reviews = getHomepageReviews()

 return (
  <>
   <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: buildCarouselSchema(reviews) }}
   />
   {/* Badge global */}
   <div className="flex flex-col items-center gap-3 mb-8">
    <div className="inline-flex items-center gap-2 bg-white border border-card-border rounded-full px-5 py-2.5 shadow-sm">
     {/* Google G logo */}
     <svg width="18" height="18" viewBox="0 0 24 24" aria-label="Google" role="img" focusable="false">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
     </svg>
     <span className="font-body font-bold text-text-main text-sm">Avis Google</span>
     <span className="font-body text-2xl leading-none" aria-hidden="true" style={{ color: '#FBBC04' }}>★★★★★</span>
     <span className="font-body font-bold text-text-main text-sm">5.0 / 5</span>
     <span className="font-body text-xs text-text-muted">· 58 avis</span>
    </div>
   </div>

   {/* Carousel */}
   <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
    loop
    speed={500}
    breakpoints={{
     0: { slidesPerView: 1, spaceBetween: 16 },
     768: { slidesPerView: 2, spaceBetween: 20 },
     1024: { slidesPerView: 3, spaceBetween: 24 },
    }}
   >
    {reviews.map((review) => (
     <SwiperSlide key={review.id}>
      <a
       href="https://search.google.com/local/reviews?placeid=ChIJCS7doSKy_EcRN5-Q-XSfBSs"
       target="_blank"
       rel="noopener noreferrer"
       className="block h-full cursor-pointer hover:opacity-95 transition-opacity duration-200"
      >
       <figure className="card-sinnes p-6 h-full flex flex-col gap-3 m-0">
        <figcaption className="flex items-center justify-between gap-2">
         <span className="font-body font-bold text-text-main text-sm">{review.author}</span>
         {review.isLocalGuide && (
          <span className="font-body text-xs text-text-muted whitespace-nowrap">Local Guide</span>
         )}
        </figcaption>
        <div className="flex gap-0.5" aria-label="Note 5 sur 5">
         {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="star-or text-base" aria-hidden="true" style={{ color: '#FBBC04' }}>★</span>
         ))}
        </div>
        <blockquote className="flex-1 m-0">
         <p className="font-body text-text-muted text-sm leading-relaxed m-0">
          &ldquo;{review.text}&rdquo;
         </p>
        </blockquote>
        <time className="font-body text-xs text-text-muted" dateTime={review.date}>
         {new Date(review.date).toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
        </time>
       </figure>
      </a>
     </SwiperSlide>
    ))}
   </Swiper>

   {/* CTA GMB */}
   <div className="text-center mt-8">
    <a
     href={GMB_REVIEWS_URL}
     rel="noopener noreferrer"
     target="_blank"
     className="font-body text-sm text-primary font-semibold hover:underline"
    >
     Voir nos 58 avis Google →
    </a>
   </div>
  </>
 )
}
