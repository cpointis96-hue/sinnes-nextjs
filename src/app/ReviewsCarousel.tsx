'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

type Avis = {
  nom: string
  date: string
  note: number
  texte: string
}

export default function ReviewsCarousel({ avis }: { avis: Avis[] }) {
  return (
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
      {avis.map((item, i) => (
        <SwiperSlide key={i}>
          <article className="card-sinnes p-6 h-full flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-body font-bold text-text-main text-sm">{item.nom}</span>
              <span className="font-body text-xs text-text-muted">{item.date}</span>
            </div>
            <div className="flex gap-0.5" aria-label={`Note ${item.note} sur 5`}>
              {Array.from({ length: item.note }).map((_, j) => (
                <span key={j} className="text-[#FFD700] text-base" aria-hidden="true">★</span>
              ))}
            </div>
            <p className="font-body text-text-muted text-sm leading-relaxed flex-1">
              &ldquo;{item.texte}&rdquo;
            </p>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
