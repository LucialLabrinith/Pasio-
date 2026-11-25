import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { buildGeneralWhatsAppUrl } from '../data/events';

const NAV_LINKS = [
  { label: 'Gallery', href: '#gallery' },
  { label: '12 Services', href: '#services' },
  { label: 'Quote Builder', href: '#quote-builder' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* 1. Top Announcement Bar (#242B22 bg, #FAF5EE text) */}
      <div className="bg-[#242B22] text-[#FAF5EE] border-b border-[#B87D56]/25">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center text-xs sm:text-[13px] font-medium tracking-wide leading-snug">
          💍 Luxury Wedding &amp; Event Planner • Dharmapuri | Salem | Krishnagiri • Open to Travel
          Across Tamil Nadu ✈️
        </div>
      </div>

      {/* 2. Sticky 3-Zone Navigation Header (compact 60px height) */}
      <header className="sticky top-0 z-40 border-b border-[#E8DDD0] bg-[#FFFFFF]/95 backdrop-blur-md">
        <div className="mx-auto flex h-15 max-w-6xl items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#top"
            className="font-serif text-xl sm:text-[22px] font-semibold tracking-tight text-[#242B22] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B87D56]"
          >
            The Grand Affair
          </a>

          {/* Zone 2: 4 Concise Single-Line Navigation Links */}
          <nav
            aria-label="Primary navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-[#525C4F]"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#242B22] after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#B87D56] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B87D56]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Single Primary WhatsApp CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={buildGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#B87D56] px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-[#FFFFFF] transition-colors duration-150 hover:bg-[#9B6542] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242B22]"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="inline-flex md:hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-[#242B22] transition-colors duration-150 hover:bg-[#FAF5EE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B87D56]"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Touch Drawer */}
        {mobileMenuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="md:hidden border-t border-[#E8DDD0] bg-[#FFFFFF] px-4 py-3"
          >
            <div className="flex flex-col divide-y divide-[#F2EAE0]">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex min-h-[48px] items-center justify-between text-base font-medium text-[#242B22] transition-colors hover:text-[#9B6542]"
                >
                  <span>{link.label}</span>
                  <span className="text-[#B87D56] text-sm" aria-hidden="true">
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
