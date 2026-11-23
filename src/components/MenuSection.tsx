import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import {
  CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
  WEIGHT_OPTIONS,
  WeightOption,
  buildWhatsAppOrderUrl,
  formatINR,
} from '../data/menu';

interface MenuCardProps {
  item: MenuItem;
}

function MenuCard({ item }: MenuCardProps) {
  const [selectedWeight, setSelectedWeight] = useState<WeightOption>('0.5 kg');
  const [imageError, setImageError] = useState(false);

  const currentPrice = item.prices[selectedWeight];
  const whatsappUrl = buildWhatsAppOrderUrl(item.name, selectedWeight, currentPrice);

  return (
    <article className="group flex flex-col overflow-hidden rounded-[22px] border border-[#EAD5D3] bg-[#FFFDFC] shadow-[0_8px_28px_-16px_rgba(61,36,36,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-18px_rgba(61,36,36,0.2)]">
      {/* 4:3 Uniform Cake Photography Frame */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F5E3E1]">
        {!imageError ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FBECEB] to-[#EBD1CE] p-6 text-center">
            <span className="font-serif text-lg font-semibold text-[#3D2424]">{item.name}</span>
            <span className="mt-1 text-xs text-[#6B4747]">100% Eggless • Freshly Crafted</span>
          </div>
        )}

        {/* Requested 100% Eggless Pill Badge in #FBECEB */}
        <span className="absolute left-3.5 top-3.5 inline-flex items-center rounded-full bg-[#FBECEB]/95 px-3 py-1 text-[11px] font-semibold tracking-wide text-[#3D2424] shadow-xs backdrop-blur-xs border border-[#EAD5D3]/80">
          100% Eggless
        </span>
      </div>

      {/* Crisp Ivory Card Body */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-medium text-[#9B5656]">{item.category}</p>

        <h3 className="mt-1.5 font-serif text-xl font-semibold leading-snug text-[#3D2424]">
          {item.name}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-[#6B4747]">{item.description}</p>

        {/* Bottom Purchase Module (aligned baselines across grid rows) */}
        <div className="mt-auto pt-5">
          {/* Dynamic Weight Selector */}
          <div>
            <div className="mb-2 flex items-center justify-between text-xs text-[#6B4747]">
              <span className="font-medium">Select Weight</span>
              <span className="tabular-nums font-semibold text-[#3D2424]">{selectedWeight}</span>
            </div>

            <div
              role="group"
              aria-label={`Select weight for ${item.name}`}
              className="grid grid-cols-3 gap-1.5 rounded-xl bg-[#FBECEB] p-1"
            >
              {WEIGHT_OPTIONS.map((weight) => {
                const isSelected = selectedWeight === weight;
                return (
                  <button
                    key={weight}
                    type="button"
                    onClick={() => setSelectedWeight(weight)}
                    aria-pressed={isSelected}
                    className={`min-h-[44px] rounded-lg px-2 text-xs sm:text-[13px] font-semibold tabular-nums whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#B86F6F] ${
                      isSelected
                        ? 'bg-[#FFFDFC] text-[#3D2424] shadow-xs ring-1 ring-[#B86F6F]/45'
                        : 'text-[#6B4747] hover:text-[#3D2424]'
                    }`}
                  >
                    {weight}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scaled Price & WhatsApp Order CTA */}
          <div className="mt-5 flex items-baseline justify-between border-t border-[#F3E2E0] pt-4">
            <div>
              <span className="block text-[11px] font-medium text-[#6B4747]">
                Freshly Baked Price
              </span>
              <span className="font-serif text-2xl font-semibold tabular-nums text-[#3D2424]">
                {formatINR(currentPrice)}
              </span>
            </div>
            <span className="text-xs font-medium text-[#6B4747] tabular-nums">
              {selectedWeight}
            </span>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#B86F6F] px-5 py-3 text-sm font-semibold text-[#FFFDFC] transition-all duration-150 hover:bg-[#9B5656] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2424]"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Order on WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');

  const filteredItems =
    activeCategory === 'All'
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section
      id="menu"
      aria-labelledby="menu-heading"
      className="scroll-mt-16 border-t border-[#EAD5D3] bg-[#FBECEB] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Filter Bar */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#9B5656]">
              SIGNATURE COLLECTION
            </p>
            <h2
              id="menu-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#3D2424] [text-wrap:balance]"
            >
              Handcrafted Eggless Menu
            </h2>
            <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#6B4747]">
              Choose your preferred weight below to preview live pricing and place an instant
              WhatsApp order directly with our Kurla West kitchen.
            </p>
          </div>

          {/* Interactive Category Filter Pills (#B86F6F active state, touch-friendly horizontal scroll on mobile) */}
          <div
            role="group"
            aria-label="Filter menu by category"
            className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2424] ${
                    isActive
                      ? 'bg-[#B86F6F] text-[#FFFDFC] shadow-xs'
                      : 'border border-[#DFC4C1] bg-[#FFFDFC] text-[#3D2424] hover:border-[#B86F6F] hover:text-[#9B5656]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Card Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
