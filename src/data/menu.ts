export type MenuCategory =
  | 'All'
  | 'Custom & Bento Cakes'
  | 'Pastries & Truffle'
  | 'Gift Hampers & B2B';

export type WeightOption = '0.5 kg' | '1 kg' | '2 kg';

export interface MenuItem {
  id: string;
  name: string;
  category: Exclude<MenuCategory, 'All'>;
  description: string;
  image: string;
  imageAlt: string;
  prices: Record<WeightOption, number>;
}

/**
 * Easy Logo Image Slot:
 * Replace this path with any updated Pasio Patisseries logo file in /public
 * to swap the circular brand badge across the Hero and Footer automatically.
 */
export const LOGO_IMAGE_SRC = '/assets/aistudio/Screenshot_2026-11-23_114628_31d23616.png';

export const HERO_SHOWCASE_IMAGE = '/src/assets/images/hero_patisserie_showcase_1795415658276.jpg';

export const WHATSAPP_NUMBER = '919167106029';
export const WHATSAPP_DISPLAY = '+91 91671 06029';
export const INSTAGRAM_HANDLE = '@pasio.patisseries';
export const INSTAGRAM_URL = 'https://instagram.com/pasio.patisseries';

export const CATEGORIES: MenuCategory[] = [
  'All',
  'Custom & Bento Cakes',
  'Pastries & Truffle',
  'Gift Hampers & B2B',
];

export const WEIGHT_OPTIONS: WeightOption[] = ['0.5 kg', '1 kg', '2 kg'];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'rich-chocolate-truffle',
    name: 'Rich Chocolate Truffle Cake (Eggless)',
    category: 'Pastries & Truffle',
    description:
      'Velvety dark Belgian ganache layered over moist cocoa sponge, finished with hand-curled chocolate shavings.',
    image: '/src/assets/images/cake_chocolate_truffle_1795415656906.jpg',
    imageAlt: 'Rich Belgian dark chocolate truffle eggless cake on an ivory ceramic stand',
    prices: {
      '0.5 kg': 499,
      '1 kg': 949,
      '2 kg': 1849,
    },
  },
  {
    id: 'fresh-strawberry-cream',
    name: 'Fresh Strawberry Cream Cake (Eggless)',
    category: 'Pastries & Truffle',
    description:
      'Cloud-soft vanilla sponge folded with fresh Mahabaleshwar strawberries and whipped Madagascar chantilly cream.',
    image: '/src/assets/images/cake_strawberry_cream_1795415667733.jpg',
    imageAlt: 'Fresh strawberry cream eggless cake crowned with sliced ruby strawberries and rose petals',
    prices: {
      '0.5 kg': 549,
      '1 kg': 1049,
      '2 kg': 2049,
    },
  },
  {
    id: 'custom-celebration-tier',
    name: 'Custom Baby Shower / Celebration Tier Cake',
    category: 'Custom & Bento Cakes',
    description:
      'Bespoke floral buttercream artistry tailored to your milestone palette, flavor pairing, and custom message.',
    image: '/src/assets/images/cake_celebration_tier_1795415658414.jpg',
    imageAlt: 'Two-tier dusty-rose and ivory buttercream celebration cake with hand-piped florals',
    prices: {
      '0.5 kg': 999,
      '1 kg': 1899,
      '2 kg': 3699,
    },
  },
  {
    id: 'signature-bento-cake',
    name: 'Signature Hand-Piped Bento Cake',
    category: 'Custom & Bento Cakes',
    description:
      'Intimate vintage-piped celebration cake packed in a minimalist keepsake box — ideal for spontaneous gifting.',
    image: '/src/assets/images/cake_bento_piped_1795415669340.jpg',
    imageAlt: 'Signature hand-piped blush and ivory mini bento cake in an open ivory eco box',
    prices: {
      '0.5 kg': 349,
      '1 kg': 649,
      '2 kg': 1249,
    },
  },
  {
    id: 'luxury-pastry-brownie-hamper',
    name: 'Luxury Assorted Pastry & Brownie Hamper',
    category: 'Gift Hampers & B2B',
    description:
      'Curated keepsake ribbon box of fudgy walnut brownies, truffle bites, rose pistachio cakes, and blush macarons.',
    image: '/src/assets/images/hamper_pastry_brownie_1795415669767.jpg',
    imageAlt: 'Luxury patisserie hamper box with walnut brownies, chocolate truffles, and blush macarons',
    prices: {
      '0.5 kg': 649,
      '1 kg': 1249,
      '2 kg': 2399,
    },
  },
  {
    id: 'b2b-cafe-dessert-box',
    name: 'B2B Café Dessert Box (Bulk Inquiry)',
    category: 'Gift Hampers & B2B',
    description:
      'Daily wholesale assortment of truffle cake slices, berry cheesecakes, ganache tarts, and brownies for Mumbai cafés.',
    image: '/src/assets/images/b2b_cafe_dessert_box_1795415668170.jpg',
    imageAlt: 'B2B cafe wholesale dessert tasting tray with chocolate slices, tarts, and brownies',
    prices: {
      '0.5 kg': 1199,
      '1 kg': 2299,
      '2 kg': 4399,
    },
  },
];

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString('en-IN')}`;
}

export function buildWhatsAppOrderUrl(itemName: string, weight: WeightOption, price: number): string {
  const formattedPrice = formatINR(price);
  const message = `Hello Pasio Patisseries! I would like to order:\n• Item: ${itemName}\n• Weight: ${weight}\n• Price: ${formattedPrice}\n\nPlease share availability and delivery/pickup details in Kurla West.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildGeneralWhatsAppUrl(customMessage?: string): string {
  const message =
    customMessage ??
    'Hello Pasio Patisseries! I would like to enquire about your 100% eggless custom cakes, hampers, or B2B café supplies.';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
