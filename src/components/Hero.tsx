import { useState } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { HERO_SHOWCASE_IMAGE, buildGeneralWhatsAppUrl } from '../data/menu';
import { BrandBadge } from './BrandBadge';

export function Hero() {
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  return (
    <section id="top" className="relative overflow-hidden bg-[#FBECEB]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Editorial Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Circular Brand Badge with Logo Slot & Exact Tagline */}
            <div className="mb-6 sm:mb-8">
              <BrandBadge size="lg" showLockupText />
            </div>

            <h1 className="font-serif text-[2rem] sm:text-[2.65rem] lg:text-[3.15rem] font-semibold leading-[1.12] tracking-tight text-[#3D2424] [text-wrap:balance]">
              Baking Dreams Into Reality — Handcrafted Eggless Cakes &amp; Hampers
            </h1>

            <p className="mt-4 sm:mt-5 max-w-xl text-[15px] sm:text-base leading-[1.65] text-[#6B4747]">
              Bespoke celebration cakes, bento boxes, pastries &amp; B2B café supplies crafted
              fresh behind Phoenix Marketcity Mall, Kurla West.
            </p>

            {/* Primary & Secondary Touch-Optimized CTAs */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5">
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[#B86F6F] px-7 py-3.5 text-sm sm:text-[15px] font-semibold text-[#FFFDFC] shadow-sm transition-all duration-150 hover:bg-[#9B5656] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2424]"
              >
                <MessageCircle className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href="#menu"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-[#D8B9B6] bg-[#FFFDFC] px-6 py-3 text-sm sm:text-[15px] font-semibold text-[#3D2424] transition-colors duration-150 hover:border-[#B86F6F] hover:text-[#9B5656] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B86F6F]"
              >
                <span>Explore Menu</span>
                <ArrowDown className="h-4 w-4 shrink-0 text-[#B86F6F]" aria-hidden="true" />
              </a>
            </div>

            {/* Clean Unboxed Trust Line */}
            <div className="mt-8 pt-6 border-t border-[#EAD5D3] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-[13px] font-medium text-[#6B4747]">
              <span className="text-[#3D2424] font-semibold">5.0★ Rated in Kurla West</span>
              <span aria-hidden="true" className="text-[#B86F6F]">
                ·
              </span>
              <span>100% Eggless Kitchen</span>
              <span aria-hidden="true" className="text-[#B86F6F]">
                ·
              </span>
              <span>Baked Fresh to Order</span>
            </div>
          </div>

          {/* Right Framed Patisserie Showcase Photograph */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full overflow-hidden rounded-[24px] bg-[#FFFDFC] p-2.5 sm:p-3 border border-[#EAD5D3] shadow-[0_12px_36px_-18px_rgba(61,36,36,0.16)]">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full w-full overflow-hidden rounded-[16px] bg-[#F3DFDD]">
                {!heroImgFailed ? (
                  <img
                    src={HERO_SHOWCASE_IMAGE}
                    alt="Handcrafted dusty-rose floral celebration cake and chocolate truffle pastry at Pasio Patisseries"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FBECEB] via-[#F2D5D3] to-[#E6BEBC] p-8 text-center">
                    <span className="font-serif text-2xl font-semibold text-[#3D2424]">
                      Pasio Patisseries
                    </span>
                    <span className="mt-2 text-xs tracking-[0.18em] text-[#6B4747]">
                      HANDCRAFTED EGGLESS PATISSERIE
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
