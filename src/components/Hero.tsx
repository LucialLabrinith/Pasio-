import { useState } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { HERO_SHOWCASE_IMAGE, buildGeneralWhatsAppUrl } from '../data/events';
import { BrandBadge } from './BrandBadge';

export function Hero() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-[#FAF5EE]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Circular Royal Monogram Brand Badge */}
            <div className="mb-6 sm:mb-7">
              <BrandBadge size="lg" showLockupText />
            </div>

            <h1 className="font-serif text-[1.95rem] sm:text-[2.55rem] lg:text-[2.95rem] font-semibold leading-[1.14] tracking-tight text-[#242B22] [text-wrap:balance]">
              Crafting Timeless Celebrations — Turning Your Special Moments Into Unforgettable
              Memories
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-base leading-[1.68] text-[#525C4F]">
              End-to-end luxury wedding planning, royal floral stage decor, live food stalls,
              bridal entries, photography &amp; DJ nights across Tamil Nadu.
            </p>

            {/* Primary & Secondary Touch-Optimized CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4">
              <a
                href="#quote-builder"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-[#B87D56] px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#9B6542] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242B22]"
              >
                <span>Build Your Event Package</span>
                <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>

              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#5C6B50] bg-[#FFFFFF] px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#242B22] transition-colors duration-150 hover:bg-[#5C6B50] hover:text-[#FFFFFF] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C6B50]"
              >
                <MessageCircle className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Clean Unboxed Regional Service Line */}
            <div className="mt-8 pt-6 border-t border-[#E8DDD0] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-[13px] font-medium text-[#525C4F]">
              <span className="text-[#242B22] font-semibold">Harur, Dharmapuri</span>
              <span aria-hidden="true" className="text-[#B87D56]">
                ·
              </span>
              <span>Salem</span>
              <span aria-hidden="true" className="text-[#B87D56]">
                ·
              </span>
              <span>Krishnagiri</span>
              <span aria-hidden="true" className="text-[#B87D56]">
                ·
              </span>
              <span>Open to Travel Across Tamil Nadu</span>
            </div>
          </div>

          {/* Right Framed Royal Wedding Showcase Photograph */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full overflow-hidden rounded-[24px] bg-[#FFFFFF] p-2.5 sm:p-3 border border-[#E8DDD0] shadow-[0_14px_40px_-18px_rgba(36,43,34,0.18)]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-[16px] bg-[#EFE5D8]">
                {!heroImgFailed ? (
                  <img
                    src={HERO_SHOWCASE_IMAGE}
                    alt="Luxury South Indian royal wedding mandap with champagne drapes, floral arches, and brass lamps"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FAF5EE] via-[#EFE3D4] to-[#E2CFB9] p-8 text-center">
                    <span className="font-serif text-2xl font-semibold text-[#242B22]">
                      The Grand Affair
                    </span>
                    <span className="mt-2 text-xs tracking-[0.18em] text-[#5C6B50]">
                      CRAFTING TIMELESS CELEBRATIONS
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
