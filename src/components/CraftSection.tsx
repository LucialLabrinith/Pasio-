import { ArrowUpRight } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../data/menu';

export function CraftSection() {
  const customOrderUrl = buildGeneralWhatsAppUrl(
    'Hello Pasio Patisseries! I would like to discuss a bespoke custom celebration / tiered cake order.'
  );

  const b2bOrderUrl = buildGeneralWhatsAppUrl(
    'Hello Pasio Patisseries! I am interested in B2B café dessert supplies or festive corporate hampers.'
  );

  return (
    <section
      id="custom-orders"
      aria-labelledby="craft-heading"
      className="scroll-mt-16 border-t border-[#EAD5D3] bg-[#FFFDFC] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#9B5656]">
            BESPOKE &amp; WHOLESALE
          </p>
          <h2
            id="craft-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#3D2424] [text-wrap:balance]"
          >
            Tailored for Intimate Celebrations &amp; Mumbai Cafés
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 border-t border-[#EAD5D3] pt-10">
          {/* Column 1: Custom Celebration Cakes */}
          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold text-[#9B5656]">01. Bespoke Celebrations</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#3D2424]">
                Custom Theme &amp; Tiered Cakes
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-[1.68] text-[#6B4747]">
                From pastel baby showers and bridal brunches to milestone birthdays, every tiered
                and bento cake is sketched to match your palette and baked 100% eggless using
                couverture chocolate, seasonal fruit compotes, and silky hand-piped buttercream.
              </p>
              <p className="mt-4 text-xs sm:text-[13px] font-medium text-[#6B4747]">
                Custom flavors available · 24–48 hr pre-order recommended · Pickup behind Phoenix
                Marketcity Mall
              </p>
            </div>

            <div className="mt-6">
              <a
                href={customOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#9B5656] underline decoration-[#D8B9B6] underline-offset-4 transition-colors hover:text-[#3D2424] hover:decoration-[#3D2424]"
              >
                <span>Share your inspiration on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Column 2: B2B Café Supplies & Hampers */}
          <div id="b2b" className="scroll-mt-24 flex flex-col justify-between md:border-l md:border-[#EAD5D3] md:pl-10 lg:pl-16">
            <div>
              <span className="text-xs font-semibold text-[#9B5656]">02. Hospitality &amp; Gifting</span>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-[#3D2424]">
                B2B Café Supplies &amp; Festive Hampers
              </h3>
              <p className="mt-3 text-sm sm:text-[15px] leading-[1.68] text-[#6B4747]">
                Partner with our Kurla West patisserie kitchen for consistent daily batches of
                eggless pastries, walnut brownies, cheesecake slices, and ribbon-tied corporate
                gift hampers crafted for cafés, boutiques, and studios across Mumbai.
              </p>
              <p className="mt-4 text-xs sm:text-[13px] font-medium text-[#6B4747]">
                Wholesale pricing · Tasting boxes on request · Kurla West, BKC &amp; Mumbai delivery
              </p>
            </div>

            <div className="mt-6">
              <a
                href={b2bOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-[#9B5656] underline decoration-[#D8B9B6] underline-offset-4 transition-colors hover:text-[#3D2424] hover:decoration-[#3D2424]"
              >
                <span>Request B2B wholesale tasting box</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
