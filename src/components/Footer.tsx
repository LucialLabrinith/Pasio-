import { Instagram, MapPin, MessageCircle } from 'lucide-react';
import {
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from '../data/menu';
import { BrandBadge } from './BrandBadge';

export function Footer() {
  return (
    <footer
      id="visit-us"
      className="scroll-mt-16 bg-[#3D2424] text-[#FBECEB]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <BrandBadge size="md" showLockupText inverted />
            <p className="mt-4 font-serif text-lg text-[#FBECEB]">
              Pasio Patisseries • Baking Dreams Into Reality
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#FBECEB]/75">
              100% Eggless artisanal celebration cakes, signature hand-piped bento boxes, luxury
              gifting hampers, and fresh B2B café supplies.
            </p>
          </div>

          {/* Visit Us / Address Column */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-lg font-semibold text-[#FBECEB]">Visit Our Kitchen</h2>
            <div className="mt-3.5 flex items-start gap-2.5 text-sm leading-relaxed text-[#FBECEB]/85">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#E3A6A6]" aria-hidden="true" />
              <address className="not-italic">
                Sunder Baug Ln, Kamani, Behind Phoenix Marketcity Mall, Kurla West, Mumbai 400070
              </address>
            </div>
          </div>

          {/* Connect Column */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-lg font-semibold text-[#FBECEB]">Order &amp; Connect</h2>
            <div className="mt-3.5 flex flex-col gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 text-sm font-medium text-[#FBECEB] transition-colors hover:text-[#E3A6A6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBECEB]"
              >
                <MessageCircle className="h-4 w-4 shrink-0 text-[#E3A6A6]" aria-hidden="true" />
                <span className="tabular-nums">{WHATSAPP_DISPLAY}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 text-sm font-medium text-[#FBECEB] transition-colors hover:text-[#E3A6A6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBECEB]"
              >
                <Instagram className="h-4 w-4 shrink-0 text-[#E3A6A6]" aria-hidden="true" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quiet Legal & Subtle Preview Badge */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#FBECEB]/15 pt-7 text-xs text-[#FBECEB]/70">
          <p>
            © {new Date().getFullYear()} Pasio Patisseries, Kurla West, Mumbai. All rights
            reserved.
          </p>
          <span className="inline-flex w-fit items-center rounded-full border border-[#FBECEB]/20 bg-[#FBECEB]/8 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#FBECEB]/85">
            Interactive Preview by ArkAja Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
