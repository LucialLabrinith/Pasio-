import { useState, type ComponentType } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Camera,
  Check,
  Crown,
  Disc3,
  Flower2,
  Gift,
  HandHeart,
  Mail,
  Music,
  Palette,
  Plus,
  Sparkles,
  UtensilsCrossed,
} from 'lucide-react';
import {
  ALL_SERVICES,
  EventServiceItem,
  GALLERY_HIGHLIGHTS,
  GalleryHighlight,
  SERVICE_CATEGORIES,
  ServiceCategory,
  ServiceId,
} from '../data/events';

const SERVICE_ICON_MAP: Record<ServiceId, ComponentType<{ className?: string }>> = {
  'wedding-planning': Crown,
  'stage-floral-decor': Flower2,
  'bridal-groom-entries': Sparkles,
  'catering-live-stalls': UtensilsCrossed,
  'candid-photography': Camera,
  'dj-sound-entertainment': Disc3,
  'sangeet-choreography': Music,
  'bridal-makeup': Palette,
  'mehandi-artists': HandHeart,
  'venue-booking': Building2,
  'return-gifts': Gift,
  'invitation-cards': Mail,
};

interface GalleryCardProps {
  item: GalleryHighlight;
}

function GalleryCard({ item }: GalleryCardProps) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <figure className="group snap-start shrink-0 w-[82vw] sm:w-auto overflow-hidden rounded-[20px] border border-[#E8DDD0] bg-[#FFFFFF] shadow-[0_8px_24px_-16px_rgba(36,43,34,0.14)]">
      <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFE6DA]">
        {!imgFailed ? (
          <img
            src={item.image}
            alt={item.imageAlt}
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FAF5EE] to-[#E6D6C3] p-5 text-center">
            <span className="font-serif text-base font-semibold text-[#242B22]">{item.title}</span>
          </div>
        )}
      </div>
      <figcaption className="p-4 sm:p-5">
        <h3 className="font-serif text-base sm:text-lg font-semibold text-[#242B22]">
          {item.title}
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[#525C4F]">
          {item.subtitle}
        </p>
      </figcaption>
    </figure>
  );
}

interface ServiceCardProps {
  service: EventServiceItem;
  isSelected: boolean;
  onToggle: (id: ServiceId) => void;
}

function ServiceCard({ service, isSelected, onToggle }: ServiceCardProps) {
  const IconComponent = SERVICE_ICON_MAP[service.id];

  return (
    <article
      className={`group flex flex-col rounded-[20px] border p-5 sm:p-6 transition-all duration-200 hover:-translate-y-0.5 ${
        isSelected
          ? 'border-[#B87D56] bg-[#FFFBF6] ring-1 ring-[#B87D56]/45 shadow-[0_14px_32px_-16px_rgba(184,125,86,0.32)]'
          : 'border-[#E8DDD0] bg-[#FFFFFF] shadow-[0_8px_24px_-18px_rgba(36,43,34,0.12)] hover:border-[#CFAE93] hover:shadow-[0_14px_30px_-16px_rgba(36,43,34,0.16)]'
      }`}
    >
      {/* Top Row: Refined Icon Medallion & Editorial Index */}
      <div className="flex items-center justify-between gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors duration-200 ${
            isSelected
              ? 'bg-[#B87D56] text-[#FFFFFF]'
              : 'bg-[#FAF5EE] text-[#B87D56] border border-[#E8DDD0] group-hover:border-[#B87D56]/40'
          }`}
          aria-hidden="true"
        >
          <IconComponent className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold tabular-nums tracking-wider text-[#5C6B50]">
          {service.number} · {service.category}
        </span>
      </div>

      {/* Service Title & Description */}
      <h3 className="mt-4 font-serif text-lg sm:text-xl font-semibold leading-snug text-[#242B22]">
        {service.name}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[#525C4F]">{service.description}</p>

      {/* Toggleable '+ Add to My Event Plan' Button */}
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={() => onToggle(service.id)}
          aria-pressed={isSelected}
          className={`inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-150 active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242B22] ${
            isSelected
              ? 'bg-[#B87D56] text-[#FFFFFF] hover:bg-[#9B6542]'
              : 'border border-[#DDD0C0] bg-[#FAF5EE] text-[#242B22] hover:border-[#B87D56] hover:bg-[#B87D56] hover:text-[#FFFFFF]'
          }`}
        >
          {isSelected ? (
            <>
              <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Added to My Event Plan</span>
            </>
          ) : (
            <>
              <Plus className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Add to My Event Plan</span>
            </>
          )}
        </button>
      </div>
    </article>
  );
}

interface ServicesSectionProps {
  selectedServiceIds: ServiceId[];
  onToggleService: (id: ServiceId) => void;
}

export function ServicesSection({
  selectedServiceIds,
  onToggleService,
}: ServicesSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('All 12 Services');

  const filteredServices =
    activeCategory === 'All 12 Services'
      ? ALL_SERVICES
      : ALL_SERVICES.filter((service) => service.category === activeCategory);

  return (
    <>
      {/* Curated Wedding Showcase Gallery */}
      <motion.section
        id="gallery"
        aria-labelledby="gallery-heading"
        initial={{ opacity: 0.01, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="scroll-mt-16 border-t border-[#E8DDD0] bg-[#FFFFFF] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#5C6B50]">
              SIGNATURE AESTHETICS
            </p>
            <h2
              id="gallery-heading"
              className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#242B22] [text-wrap:balance]"
            >
              Crafted for Royal South Indian Celebrations
            </h2>
            <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#525C4F]">
              From intimate temple muhurthams in Harur to grand palace receptions across Tamil Nadu.
            </p>
          </div>

          <div className="mt-8 flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 pb-2 sm:pb-0">
            {GALLERY_HIGHLIGHTS.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Interactive 'Our 12 Complete Event Services' Grid */}
      <motion.section
        id="services"
        aria-labelledby="services-heading"
        initial={{ opacity: 0.01, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="scroll-mt-16 border-t border-[#E8DDD0] bg-[#FAF5EE] py-14 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header & Selected Plan Link */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.16em] text-[#5C6B50]">
                END-TO-END PRODUCTION
              </p>
              <h2
                id="services-heading"
                className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#242B22] [text-wrap:balance]"
              >
                Our 12 Complete Event Services
              </h2>
              <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#525C4F]">
                Tap <strong className="font-semibold text-[#242B22]">+ Add to My Event Plan</strong>{' '}
                on any service below to highlight it and sync directly with your Quote Builder.
              </p>
            </div>

            <a
              href="#quote-builder"
              className="inline-flex min-h-[44px] w-fit items-center gap-2 text-sm font-semibold text-[#9B6542] underline decoration-[#D8C1AE] underline-offset-4 transition-colors hover:text-[#242B22] hover:decoration-[#242B22] whitespace-nowrap"
            >
              <span className="tabular-nums">
                {selectedServiceIds.length} of 12 Services in Your Plan
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="group"
            aria-label="Filter our 12 complete event services"
            className="mt-7 flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
          >
            {SERVICE_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-[44px] rounded-full px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242B22] ${
                    isActive
                      ? 'bg-[#B87D56] text-[#FFFFFF] shadow-xs'
                      : 'border border-[#DDD0C0] bg-[#FFFFFF] text-[#242B22] hover:border-[#B87D56] hover:text-[#9B6542]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* 12 Services Uniform Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isSelected={selectedServiceIds.includes(service.id)}
                onToggle={onToggleService}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
