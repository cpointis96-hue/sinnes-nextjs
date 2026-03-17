'use client'

import dynamic from 'next/dynamic'

export const BrandsCarousel = dynamic(() => import('./BrandsCarousel'), { ssr: false })
export const ReviewsCarousel = dynamic(
  () => import('./ReviewsCarousel').then((m) => m.default),
  { ssr: false }
)
