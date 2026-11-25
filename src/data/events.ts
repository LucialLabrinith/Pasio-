export type ServiceCategory =
  | 'All 12 Services'
  | 'Planning & Decor'
  | 'Food & Entertainment'
  | 'Bridal & Guest Experience';

export type EventTypeOption =
  | 'Wedding'
  | 'Reception'
  | 'Engagement'
  | 'Birthday Celebration'
  | 'Baby Shower'
  | 'Corporate Event';

export type TravelCityOption =
  | 'Dharmapuri / Harur'
  | 'Salem'
  | 'Krishnagiri'
  | 'Outstation Travel Across Tamil Nadu';

export type GuestCountOption =
  | 'Under 200 Guests'
  | '200 – 500 Guests'
  | '500 – 1,000+ Guests';

export type ServiceId =
  | 'wedding-planning'
  | 'stage-floral-decor'
  | 'bridal-groom-entries'
  | 'catering-live-stalls'
  | 'candid-photography'
  | 'dj-sound-entertainment'
  | 'sangeet-choreography'
  | 'bridal-makeup'
  | 'mehandi-artists'
  | 'venue-booking'
  | 'return-gifts'
  | 'invitation-cards';

export interface EventServiceItem {
  id: ServiceId;
  number: string;
  name: string;
  category: Exclude<ServiceCategory, 'All 12 Services'>;
  description: string;
}

export interface GalleryHighlight {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}

/**
 * Easy Logo Image Slot:
 * Uses the attached TGA circular emblem directly. Swap to '/tga-logo.png'
 * anytime if you upload a new file into /public.
 */
export const LOGO_IMAGE_SRC = '/assets/aistudio/image_11f49a5c.png';

export const HERO_SHOWCASE_IMAGE =
  '/src/assets/images/hero_royal_wedding_stage_1795587509110.jpg';

/** Verified Business Contact Details */
export const PRIMARY_WHATSAPP_NUMBER = '918667702582';
export const PRIMARY_PHONE_DISPLAY = '+91 86677 02582';
export const SECONDARY_PHONE_TEL = '+919585833051';
export const SECONDARY_PHONE_DISPLAY = '+91 95858 33051';
export const CONTACT_EMAIL = 'thegrandaffairevents.in@gmail.com';
export const INSTAGRAM_HANDLE = '@thegrandaffairevents.in';
export const INSTAGRAM_URL = 'https://instagram.com/thegrandaffairevents.in';
export const BASE_ADDRESS = 'Harur, Dharmapuri, Tamil Nadu 635305';

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'All 12 Services',
  'Planning & Decor',
  'Food & Entertainment',
  'Bridal & Guest Experience',
];

export const EVENT_TYPES: EventTypeOption[] = [
  'Wedding',
  'Reception',
  'Engagement',
  'Birthday Celebration',
  'Baby Shower',
  'Corporate Event',
];

export const TRAVEL_CITIES: TravelCityOption[] = [
  'Dharmapuri / Harur',
  'Salem',
  'Krishnagiri',
  'Outstation Travel Across Tamil Nadu',
];

export const GUEST_COUNTS: GuestCountOption[] = [
  'Under 200 Guests',
  '200 – 500 Guests',
  '500 – 1,000+ Guests',
];

export const GALLERY_HIGHLIGHTS: GalleryHighlight[] = [
  {
    id: 'gallery-decor',
    title: 'Royal Stage & Floral Decor',
    subtitle: 'Bespoke mandaps, jasmine drapes & grand reception lighting',
    image: '/src/assets/images/service_wedding_decor_1795587510014.jpg',
    imageAlt: 'Royal Indian floral wedding mandap and grand ballroom reception stage',
  },
  {
    id: 'gallery-catering',
    title: 'Gourmet Catering & Live Stalls',
    subtitle: 'Traditional wedding feasts, tawa chaat & artisanal sweet counters',
    image: '/src/assets/images/service_gourmet_catering_1795587512338.jpg',
    imageAlt: 'Upscale Indian wedding catering spread with hammered copper vessels and live chaat stall',
  },
  {
    id: 'gallery-photo',
    title: 'Candid Photography & Films',
    subtitle: 'Golden hour couple portraits, rituals & 4K drone wedding films',
    image: '/src/assets/images/service_candid_photography_1795587512363.jpg',
    imageAlt: 'Candid South Indian bride and groom portrait beneath warm floral fairy-light arch',
  },
  {
    id: 'gallery-dj',
    title: 'Sangeet DJ & Cold Pyros',
    subtitle: 'Concert-grade sound, couple entries & choreographed dance nights',
    image: '/src/assets/images/service_dj_sangeet_1795587516787.jpg',
    imageAlt: 'Grand Sangeet night stage with DJ lighting beams and cold pyro sparkler fountains',
  },
  {
    id: 'gallery-banquet',
    title: 'End-to-End Royal Receptions',
    subtitle: 'Full show-calling, guest hospitality & seamless vendor direction',
    image: '/src/assets/images/package_royal_wedding_1795587514861.jpg',
    imageAlt: 'Luxury royal wedding reception banquet tables with copper candelabras and chandeliers',
  },
  {
    id: 'gallery-travel',
    title: 'Travel Across Tamil Nadu',
    subtitle: 'Turnkey execution across Dharmapuri, Salem, Krishnagiri & beyond',
    image: '/src/assets/images/package_destination_events_1795587515097.jpg',
    imageAlt: 'South Indian heritage palace courtyard styled for a twilight destination wedding',
  },
];

export const ALL_SERVICES: EventServiceItem[] = [
  {
    id: 'wedding-planning',
    number: '01',
    name: 'Full Wedding Planning',
    category: 'Planning & Decor',
    description:
      'Complete end-to-end event direction—budgeting, timelines, vendor curation, and calm on-ground show-calling from engagement to reception.',
  },
  {
    id: 'stage-floral-decor',
    number: '02',
    name: 'Stage & Floral Decor',
    category: 'Planning & Decor',
    description:
      'Royal floral mandaps, fresh jasmine & rose backdrops, sculpted reception stages, brass lamps, and warm ambient chandelier lighting.',
  },
  {
    id: 'bridal-groom-entries',
    number: '03',
    name: 'Grand Bridal & Groom Entries',
    category: 'Planning & Decor',
    description:
      'Show-stopping couple entrances featuring synchronized cold pyros, low-fog clouds, floral phoolon ki chadar, dhol, and live percussion.',
  },
  {
    id: 'catering-live-stalls',
    number: '04',
    name: 'Gourmet Catering & Live Food Stalls',
    category: 'Food & Entertainment',
    description:
      'Traditional South & North Indian wedding banquets paired with live tawa chaat, dosa, mocktail, filter coffee, and handcrafted dessert counters.',
  },
  {
    id: 'candid-photography',
    number: '05',
    name: 'Candid Photography & Videography',
    category: 'Food & Entertainment',
    description:
      'Editorial candid stills, traditional ceremony coverage, pre-wedding shoots, aerial drone visuals, and cinematic 4K wedding films.',
  },
  {
    id: 'dj-sound-entertainment',
    number: '06',
    name: 'DJ, Concert Sound & Entertainment',
    category: 'Food & Entertainment',
    description:
      'High-energy wedding DJs, concert line-array acoustics, moving-head light rigs, LED walls, and charismatic emcees for reception & sangeet nights.',
  },
  {
    id: 'sangeet-choreography',
    number: '07',
    name: 'Sangeet & Dance Choreography',
    category: 'Food & Entertainment',
    description:
      'Tailored couple first dances, family flashmobs, and rehearsed Sangeet medleys designed for every age group to shine effortlessly on stage.',
  },
  {
    id: 'bridal-makeup',
    number: '08',
    name: 'Bridal Makeup Artists',
    category: 'Bridal & Guest Experience',
    description:
      'HD & airbrush bridal styling, traditional South Indian saree draping, floral hairstyling, and groom grooming by vetted senior artists.',
  },
  {
    id: 'mehandi-artists',
    number: '09',
    name: 'Bridal & Guest Mehandi Artists',
    category: 'Bridal & Guest Experience',
    description:
      'Intricate custom bridal henna storytelling and dedicated speed-artist teams for family and guests using 100% organic dark-stain cones.',
  },
  {
    id: 'venue-booking',
    number: '10',
    name: 'Marriage Hall & Venue Booking',
    category: 'Planning & Decor',
    description:
      'Curated kalyana mandapams, luxury lawns, resorts, and banquet halls across Dharmapuri, Harur, Salem, Krishnagiri, and Tamil Nadu.',
  },
  {
    id: 'return-gifts',
    number: '11',
    name: 'Custom Return Gifts & Hampers',
    category: 'Bridal & Guest Experience',
    description:
      'Thoughtful thamboolam bags, brass keepsakes, artisanal sweet hampers, and monogrammed gift boxes styled to match your wedding theme.',
  },
  {
    id: 'invitation-cards',
    number: '12',
    name: 'Designer Invitation Cards',
    category: 'Bridal & Guest Experience',
    description:
      'Luxury foil-stamped print suites, royal monogrammed box invitations, and bespoke animated WhatsApp save-the-date e-invites.',
  },
];

export function buildGeneralWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage ??
    'Hello The Grand Affair — Weddings & Events! We would love to enquire about planning an upcoming celebration in Tamil Nadu.';
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export interface EventQuoteInput {
  eventType: EventTypeOption;
  city: TravelCityOption;
  venueDetails: string;
  guestCount: GuestCountOption;
  eventDate: string;
  selectedServiceIds: ServiceId[];
  clientName?: string;
}

export function formatDisplayDate(isoDate: string): string {
  if (!isoDate) return 'Flexible / To be decided';
  const parsed = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return parsed.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getServiceNamesByIds(ids: ServiceId[]): string[] {
  const idSet = new Set(ids);
  return ALL_SERVICES.filter((service) => idSet.has(service.id)).map((service) => service.name);
}

export function buildQuoteMessage(input: EventQuoteInput): string {
  const dateLabel = formatDisplayDate(input.eventDate);
  const serviceNames = getServiceNamesByIds(input.selectedServiceIds);
  const servicesBlock =
    serviceNames.length > 0
      ? serviceNames.map((name, idx) => `  ${idx + 1}. ${name}`).join('\n')
      : '  • Full Event Consultation';
  const locationLine = input.venueDetails.trim()
    ? `${input.city} (${input.venueDetails.trim()})`
    : input.city;
  const nameLine = input.clientName?.trim() ? `\n• Name: ${input.clientName.trim()}` : '';

  return `Hello The Grand Affair — Weddings & Events! I would like to request an event quote:${nameLine}\n• Event Type: ${input.eventType}\n• Location / City: ${locationLine}\n• Event Date: ${dateLabel}\n• Estimated Guests: ${input.guestCount}\n• Selected Services (${serviceNames.length || 'General'}):\n${servicesBlock}\n\nPlease share your package details and availability.`;
}

export function buildQuoteWhatsAppUrl(input: EventQuoteInput): string {
  return `https://wa.me/${PRIMARY_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    buildQuoteMessage(input)
  )}`;
}
