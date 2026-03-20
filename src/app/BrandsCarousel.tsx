'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

// Mapping brand name → logo file in /public/images/brands/
const BRANDS: { name: string; file: string }[] = [
  { name: 'Renault',       file: 'logo-renault-sinnes-automobiles.png' },
  { name: 'Citroën',       file: 'logo-citroen-sinnes-automobiles.png' },
  { name: 'Dacia',         file: 'logo-dacia-sinnes-automobiles.png' },
  { name: 'Volkswagen',    file: 'logo-Volkswagen-sinnes-automobiles.png' },
  { name: 'Toyota',        file: 'logo-toyota-sinnes-automobiles.png' },
  { name: 'Hyundai',       file: 'logo-hyundai-sinnes-automobiles.png' },
  { name: 'Kia',           file: 'logo-kia-sinnes-automobiles.png' },
  { name: 'Ford',          file: 'logo-ford-sinnes-automobiles.png' },
  { name: 'Opel',          file: 'logo-opel-sinnes-automobiles.png' },
  { name: 'Fiat',          file: 'logo-fiat-sinnes-automobiles.png' },
  { name: 'Nissan',        file: 'logo-nissan-sinnes-automobiles.png' },
  { name: 'Suzuki',        file: 'logo-suzuki-sinnes-automobiles.png' },
  { name: 'Mazda',         file: 'logo-mazda-sinnes-automobiles.png' },
  { name: 'Honda',         file: 'logo-honda-sinnes-automobiles.png' },
  { name: 'Mitsubishi',    file: 'logo-mitsubishi-sinnes-automobiles.png' },
  { name: 'Subaru',        file: 'logo-subaru-sinnes-automobiles.png' },
  { name: 'BMW',           file: 'logo-bmw-sinnes-automobiles.png' },
  { name: 'Mercedes-Benz', file: 'logo-mercedes-benz-sinnes-automobiles.png' },
  { name: 'Audi',          file: 'logo-audi-sinnes-automobiles.png' },
  { name: 'Mini',          file: 'logo-mini-sinnes-automobiles.png' },
  { name: 'Smart',         file: 'logo-smart-sinnes-automobiles.png' },
  { name: 'Porsche',       file: 'logo-porsche-sinnes-automobiles.png' },
  { name: 'Skoda',         file: 'logo-skoda-sinnes-automobiles.png' },
  { name: 'Seat',          file: 'logo-seat-sinnes-automobiles.png' },
  { name: 'Cupra',         file: 'logo-cupra-sinnes-automobiles.png' },
  { name: 'Volvo',         file: 'logo-volvo-sinnes-automobiles.png' },
  { name: 'Lexus',         file: 'logo-lexus-sinnes-automobiles.png' },
  { name: 'Land Rover',    file: 'logo-land-rover-sinnes-automobiles.png' },
  { name: 'Jaguar',        file: 'logo-jaguar-sinnes-automobiles.png' },
  { name: 'Jeep',          file: 'logo-jeep-sinnes-automobiles.png' },
  { name: 'Alfa Romeo',    file: 'logo-alfa-romeo-sinnes-automobiles.png' },
  { name: 'DS',            file: 'logo-ds-automobiles-sinnes-automobiles.png' },
  { name: 'MG',            file: 'logo-mg-sinnes-automobiles.png' },
  { name: 'Chevrolet',     file: 'logo-chevrolet-sinnes-automobiles.png' },
  { name: 'Chrysler',      file: 'logo-chrysler-sinnes-automobiles.png' },
  { name: 'Dodge',         file: 'logo-dodge-sinnes-automobiles.png' },
  { name: 'Abarth',        file: 'logo-abarth-sinnes-automobiles.png' },
  { name: 'Lancia',        file: 'logo-lancia-sinnes-automobiles.png' },
  { name: 'Saab',          file: 'logo-saab-sinnes-automobiles.png' },
  { name: 'Iveco',         file: 'logo-iveco-sinnes-automobiles.png' },
]

export default function BrandsCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop
      speed={700}
      breakpoints={{
        0:    { slidesPerView: 3,  spaceBetween: 12 },
        480:  { slidesPerView: 4,  spaceBetween: 28 },
        768:  { slidesPerView: 6,  spaceBetween: 32 },
        1024: { slidesPerView: 10, spaceBetween: 36 },
      }}
      className="w-full px-4"
    >
      {BRANDS.map((brand) => (
        <SwiperSlide key={brand.name}>
          <div className="flex items-center justify-center py-6">
            <Image
              src={`/images/brands/${brand.file}`}
              alt={`Logo ${brand.name} — Sinnes Automobiles`}
              width={140}
              height={87}
              className="object-contain h-[75px] w-auto max-w-[122px] opacity-90 hover:opacity-100 transition-opacity duration-300"
              loading="lazy"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
