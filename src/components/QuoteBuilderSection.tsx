import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Check, MapPin, MessageCircle, Phone, Users } from 'lucide-react';
import {
  ALL_SERVICES,
  EVENT_TYPES,
  EventTypeOption,
  GUEST_COUNTS,
  GuestCountOption,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_TEL,
  ServiceId,
  TRAVEL_CITIES,
  TravelCityOption,
  buildQuoteMessage,
  buildQuoteWhatsAppUrl,
  formatDisplayDate,
  getServiceNamesByIds,
} from '../data/events';

interface QuoteBuilderSectionProps {
  selectedServiceIds: ServiceId[];
  onToggleService: (id: ServiceId) => void;
  onSelectAllServices: () => void;
  onClearServices: () => void;
}

export function QuoteBuilderSection({
  selectedServiceIds,
  onToggleService,
  onSelectAllServices,
  onClearServices,
}: QuoteBuilderSectionProps) {
  const [eventType, setEventType] = useState<EventTypeOption>('Wedding');
  const [city, setCity] = useState<TravelCityOption>('Dharmapuri / Harur');
  const [venueDetails, setVenueDetails] = useState<string>('');
  const [guestCount, setGuestCount] = useState<GuestCountOption>('200 – 500 Guests');
  const [eventDate, setEventDate] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');

  const todayIso = new Date().toISOString().split('T')[0];

  const quoteInput = {
    eventType,
    city,
    venueDetails,
    guestCount,
    eventDate,
    selectedServiceIds,
    clientName,
  };

  const whatsappUrl = buildQuoteWhatsAppUrl(quoteInput);
  const previewMessage = buildQuoteMessage(quoteInput);
  const selectedNames = getServiceNamesByIds(selectedServiceIds);

  return (
    <motion.section
      id="quote-builder"
      aria-labelledby="quote-builder-heading"
      initial={{ opacity: 0.01, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="scroll-mt-16 border-t border-[#E8DDD0] bg-[#FFFFFF] py-14 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-[#5C6B50]">
            INSTANT PACKAGE BUILDER
          </p>
          <h2
            id="quote-builder-heading"
            className="mt-2 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#242B22] [text-wrap:balance]"
          >
            Event Package &amp; Quote Builder
          </h2>
          <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#525C4F]">
            Skip long DM back-and-forth. Select your event type, city, guest count, date, and
            desired services to send a structured brief directly to our WhatsApp desk.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Interactive Configurator */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Event Type Selector */}
            <div>
              <span className="block text-sm font-semibold text-[#242B22]">1. Event Type</span>
              <div
                role="group"
                aria-label="Select event type"
                className="mt-2.5 grid grid-cols-2 sm:grid-cols-3 gap-2.5"
              >
                {EVENT_TYPES.map((type) => {
                  const isActive = eventType === type;
                  return (
                    <button
                      key={type}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setEventType(type)}
                      className={`min-h-[48px] rounded-xl px-3.5 py-2.5 text-center text-xs sm:text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87D56] ${
                        isActive
                          ? 'bg-[#B87D56] text-[#FFFFFF] shadow-xs'
                          : 'border border-[#E4D7C8] bg-[#FAF5EE] text-[#242B22] hover:border-[#B87D56]'
                      }`}
                    >
                      {type}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Location / Travel City Selector */}
            <div>
              <span className="block text-sm font-semibold text-[#242B22]">
                2. Location / Travel City
              </span>
              <div
                role="group"
                aria-label="Select location or travel city"
                className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5"
              >
                {TRAVEL_CITIES.map((option) => {
                  const isActive = city === option;
                  return (
                    <button
                      key={option}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setCity(option)}
                      className={`min-h-[48px] rounded-xl px-4 py-2.5 text-left text-sm font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5C6B50] ${
                        isActive
                          ? 'bg-[#5C6B50] text-[#FFFFFF] shadow-xs'
                          : 'border border-[#E4D7C8] bg-[#FAF5EE] text-[#242B22] hover:border-[#5C6B50]'
                      }`}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Estimated Guest Count */}
            <div>
              <span className="block text-sm font-semibold text-[#242B22]">
                3. Estimated Guest Count
              </span>
              <div
                role="group"
                aria-label="Select estimated guest count"
                className="mt-2.5 grid grid-cols-1 sm:grid-cols-3 gap-2.5"
              >
                {GUEST_COUNTS.map((count) => {
                  const isActive = guestCount === count;
                  return (
                    <button
                      key={count}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setGuestCount(count)}
                      className={`min-h-[48px] rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold tabular-nums whitespace-nowrap transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87D56] ${
                        isActive
                          ? 'bg-[#B87D56] text-[#FFFFFF] shadow-xs'
                          : 'border border-[#E4D7C8] bg-[#FAF5EE] text-[#242B22] hover:border-[#B87D56]'
                      }`}
                    >
                      {count}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Event Date, Venue & Optional Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="event-date"
                  className="block text-sm font-semibold text-[#242B22]"
                >
                  4. Event Date
                </label>
                <input
                  id="event-date"
                  type="date"
                  min={todayIso}
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="mt-2 min-h-[48px] w-full rounded-xl border border-[#DFD1C2] bg-[#FAF5EE] px-4 py-2.5 text-sm font-medium text-[#242B22] transition-colors focus:border-[#B87D56] focus:bg-[#FFFFFF] focus:outline-none"
                />
                <p className="mt-1.5 text-xs text-[#525C4F]">
                  Optional — leave blank if your muhurtham date is flexible.
                </p>
              </div>

              <div>
                <label
                  htmlFor="venue-details"
                  className="block text-sm font-semibold text-[#242B22]"
                >
                  Marriage Hall / Venue{' '}
                  <span className="font-normal text-[#525C4F]">(Optional)</span>
                </label>
                <input
                  id="venue-details"
                  type="text"
                  value={venueDetails}
                  onChange={(e) => setVenueDetails(e.target.value)}
                  placeholder="e.g., Harur Kalyana Mandapam or Need Venue"
                  className="mt-2 min-h-[48px] w-full rounded-xl border border-[#DFD1C2] bg-[#FAF5EE] px-4 py-2.5 text-sm font-medium text-[#242B22] placeholder:text-[#7E857B] transition-colors focus:border-[#B87D56] focus:bg-[#FFFFFF] focus:outline-none"
                />
              </div>
            </div>

            {/* 5. Interactive Checklist of All 12 Services (Synced with Cards Above) */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="block text-sm font-semibold text-[#242B22]">
                    5. Services Needed (All 12 Services)
                  </span>
                  <span className="text-xs text-[#525C4F]">
                    Synced automatically with the service cards above.
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={onSelectAllServices}
                    className="min-h-[36px] text-[#5C6B50] underline decoration-[#C5CFC0] underline-offset-4 hover:text-[#242B22]"
                  >
                    Select All 12
                  </button>
                  {selectedServiceIds.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearServices}
                      className="min-h-[36px] text-[#9B6542] underline decoration-[#DFC5B2] underline-offset-4 hover:text-[#242B22]"
                    >
                      Clear
                    </button>
                  )}
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ALL_SERVICES.map((service) => {
                  const isChecked = selectedServiceIds.includes(service.id);
                  return (
                    <label
                      key={service.id}
                      className={`flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 transition-all duration-150 ${
                        isChecked
                          ? 'border-[#B87D56] bg-[#FFFBF6]'
                          : 'border-[#E8DDD0] bg-[#FAF5EE]/65 hover:border-[#B87D56]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => onToggleService(service.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                          isChecked
                            ? 'border-[#B87D56] bg-[#B87D56] text-[#FFFFFF]'
                            : 'border-[#CBBCA9] bg-[#FFFFFF]'
                        }`}
                      >
                        {isChecked && <Check className="h-3.5 w-3.5 stroke-[2.5]" />}
                      </span>
                      <span className="text-xs sm:text-[13px] font-semibold text-[#242B22] leading-snug">
                        <span className="text-[#5C6B50] tabular-nums mr-1.5">
                          {service.number}.
                        </span>
                        {service.name}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Optional Name Field */}
            <div>
              <label
                htmlFor="client-name"
                className="block text-sm font-semibold text-[#242B22]"
              >
                Your Name <span className="font-normal text-[#525C4F]">(Optional)</span>
              </label>
              <input
                id="client-name"
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="e.g., Priya & Karthik"
                className="mt-2 min-h-[48px] w-full sm:max-w-md rounded-xl border border-[#DFD1C2] bg-[#FAF5EE] px-4 py-2.5 text-sm font-medium text-[#242B22] placeholder:text-[#7E857B] transition-colors focus:border-[#B87D56] focus:bg-[#FFFFFF] focus:outline-none"
              />
            </div>
          </div>

          {/* Right Sticky Live Inquiry Summary Card */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 rounded-[24px] border border-[#E8DDD0] bg-[#FAF5EE] p-6 sm:p-7 shadow-[0_12px_36px_-18px_rgba(36,43,34,0.16)]">
            <p className="text-xs font-semibold tracking-[0.16em] text-[#5C6B50]">
              READY-TO-SEND BRIEF
            </p>
            <h3 className="mt-1.5 font-serif text-2xl font-semibold text-[#242B22]">
              Your Event Summary
            </h3>

            <dl className="mt-5 divide-y divide-[#E8DDD0] text-sm">
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="text-[#525C4F]">Event Type</dt>
                <dd className="font-semibold text-[#242B22] text-right">{eventType}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="inline-flex items-center gap-1.5 text-[#525C4F]">
                  <MapPin className="h-3.5 w-3.5 text-[#B87D56]" aria-hidden="true" />
                  <span>Location</span>
                </dt>
                <dd className="font-semibold text-[#242B22] text-right">{city}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="inline-flex items-center gap-1.5 text-[#525C4F]">
                  <Users className="h-3.5 w-3.5 text-[#B87D56]" aria-hidden="true" />
                  <span>Guest Count</span>
                </dt>
                <dd className="font-semibold text-[#242B22] tabular-nums text-right">
                  {guestCount}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-3">
                <dt className="inline-flex items-center gap-1.5 text-[#525C4F]">
                  <Calendar className="h-3.5 w-3.5 text-[#B87D56]" aria-hidden="true" />
                  <span>Event Date</span>
                </dt>
                <dd className="font-semibold text-[#242B22] text-right">
                  {formatDisplayDate(eventDate)}
                </dd>
              </div>
              <div className="py-3">
                <dt className="flex items-center justify-between text-[#525C4F]">
                  <span>Selected Services</span>
                  <span className="font-semibold text-[#5C6B50] tabular-nums">
                    {selectedNames.length} / 12
                  </span>
                </dt>
                <dd className="mt-1.5 text-xs sm:text-[13px] font-semibold leading-relaxed text-[#242B22]">
                  {selectedNames.length > 0
                    ? selectedNames.join(' · ')
                    : 'Full Event Consultation'}
                </dd>
              </div>
            </dl>

            {/* Live Formatted WhatsApp Message Preview */}
            <div className="mt-4 rounded-xl border border-[#E8DDD0] bg-[#FFFFFF] p-4">
              <p className="text-[11px] font-semibold tracking-wide text-[#5C6B50]">
                WhatsApp Message Preview
              </p>
              <p className="mt-2 max-h-44 overflow-y-auto whitespace-pre-line text-xs leading-relaxed text-[#525C4F]">
                {previewMessage}
              </p>
            </div>

            {/* Primary Green WhatsApp Inquiry CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[#1E7A4C] px-6 py-3.5 text-sm sm:text-[15px] font-semibold text-[#FFFFFF] shadow-sm transition-all duration-150 hover:bg-[#16623C] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242B22]"
            >
              <MessageCircle className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              <span>Send Event Inquiry on WhatsApp</span>
            </a>

            {/* Secondary Call Button (+91 95858 33051) */}
            <a
              href={`tel:${SECONDARY_PHONE_TEL}`}
              className="mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-[#D8C9B8] bg-[#FFFFFF] px-5 py-3 text-sm font-semibold text-[#242B22] transition-colors duration-150 hover:border-[#B87D56] hover:text-[#9B6542] active:scale-[0.98] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87D56]"
            >
              <Phone className="h-4 w-4 shrink-0 text-[#B87D56]" aria-hidden="true" />
              <span className="tabular-nums">Call {SECONDARY_PHONE_DISPLAY}</span>
            </a>
          </aside>
        </div>
      </div>
    </motion.section>
  );
}
