import { Instagram, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  BASE_ADDRESS,
  CONTACT_EMAIL,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  PRIMARY_PHONE_DISPLAY,
  SECONDARY_PHONE_DISPLAY,
  SECONDARY_PHONE_TEL,
  buildGeneralWhatsAppUrl,
} from '../data/events';
import { BrandBadge } from './BrandBadge';

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-16 bg-[#242B22] text-[#FAF5EE]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Location Column */}
          <div className="md:col-span-5">
            <BrandBadge size="md" showLockupText inverted />
            <p className="mt-4 font-serif text-lg text-[#FAF5EE]">
              The Grand Affair — Weddings &amp; Events • {BASE_ADDRESS}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#FAF5EE]/75">
              Crafting Timeless Celebrations — turning your special moments into unforgettable
              memories across Dharmapuri, Salem, Krishnagiri &amp; Tamil Nadu.
            </p>
          </div>

          {/* Direct Phone & Address Column */}
          <div className="md:col-span-4">
            <h2 className="font-serif text-lg font-semibold text-[#FAF5EE]">
              Office &amp; Direct Lines
            </h2>
            <div className="mt-3.5 space-y-2.5 text-sm leading-relaxed text-[#FAF5EE]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D7A987]" aria-hidden="true" />
                <address className="not-italic">{BASE_ADDRESS}</address>
              </div>

              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1">
                <a
                  href={buildGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2 font-medium text-[#FAF5EE] transition-colors hover:text-[#D7A987]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0 text-[#D7A987]" aria-hidden="true" />
                  <span className="tabular-nums">{PRIMARY_PHONE_DISPLAY}</span>
                </a>
                <span aria-hidden="true" className="text-[#FAF5EE]/35">
                  |
                </span>
                <a
                  href={`tel:${SECONDARY_PHONE_TEL}`}
                  className="inline-flex min-h-[44px] items-center gap-2 font-medium text-[#FAF5EE] transition-colors hover:text-[#D7A987]"
                >
                  <Phone className="h-4 w-4 shrink-0 text-[#D7A987]" aria-hidden="true" />
                  <span className="tabular-nums">{SECONDARY_PHONE_DISPLAY}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Email & Instagram Column */}
          <div className="md:col-span-3">
            <h2 className="font-serif text-lg font-semibold text-[#FAF5EE]">Connect Online</h2>
            <div className="mt-3.5 flex flex-col gap-1.5">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex min-h-[44px] items-center gap-2.5 text-sm font-medium text-[#FAF5EE] transition-colors hover:text-[#D7A987] break-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF5EE]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#D7A987]" aria-hidden="true" />
                <span>{CONTACT_EMAIL}</span>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2.5 text-sm font-medium text-[#FAF5EE] transition-colors hover:text-[#D7A987] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FAF5EE]"
              >
                <Instagram className="h-4 w-4 shrink-0 text-[#D7A987]" aria-hidden="true" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Quiet Legal & Studio Badge */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-[#FAF5EE]/15 pt-7 text-xs text-[#FAF5EE]/70">
          <p>
            © {new Date().getFullYear()} The Grand Affair — Weddings &amp; Events. All rights
            reserved.
          </p>
          <span className="inline-flex w-fit items-center rounded-full border border-[#FAF5EE]/20 bg-[#FAF5EE]/8 px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-[#FAF5EE]/85">
            Interactive Preview crafted by ArkAja Studio
          </span>
        </div>
      </div>
    </footer>
  );
}
