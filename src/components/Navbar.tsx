import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../data/menu';

const NAV_LINKS = [
  { label: 'Menu', href: '#menu' },
  { label: 'Custom Cakes', href: '#custom-orders' },
  { label: 'B2B & Hampers', href: '#b2b' },
  { label: 'Visit Us', href: '#visit-us' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement Bar (#B86F6F bg, #FBECEB text) — scrolls naturally to preserve mobile viewport space */}
      <div className="bg-[#B86F6F] text-[#FBECEB]">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs sm:text-[13px] font-medium tracking-wide leading-snug">
          5.0★ Rated in Kurla West • 100% Eggless Custom Cakes, Hampers &amp; B2B Café Supplies
        </div>
      </div>

      {/* 2. Sticky 3-Zone Navigation Header (compact 60px height, <=15% mobile sticky cap) */}
      <header className="sticky top-0 z-40 border-b border-[#EAD5D3] bg-[#FFFDFC]/95 backdrop-blur-md">
        <div className="mx-auto flex h-15 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#3D2424] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B86F6F]"
          >
            Pasio Patisseries
          </a>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#6B4747]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#3D2424] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B86F6F] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B86F6F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#B86F6F] px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#FFFDFC] transition-colors duration-150 hover:bg-[#9B5656] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3D2424]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Order Now</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[#3D2424] transition-colors duration-150 hover:bg-[#FBECEB] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B86F6F]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Touch Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-[#EAD5D3] bg-[#FFFDFC] px-4 py-3"
          >
            <div className="flex flex-col divide-y divide-[#F3E2E0]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[48px] items-center justify-between text-base font-medium text-[#3D2424] transition-colors hover:text-[#9B5656]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B86F6F] text-sm" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
