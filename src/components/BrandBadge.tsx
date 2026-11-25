import { useState } from 'react';
import { LOGO_IMAGE_SRC } from '../data/events';

interface BrandBadgeProps {
  size?: 'sm' | 'md' | 'lg';
  showLockupText?: boolean;
  inverted?: boolean;
}

export function BrandBadge({
  size = 'md',
  showLockupText = true,
  inverted = false,
}: BrandBadgeProps) {
  const [imgError, setImgError] = useState(false);

  const circleSizeClass =
    size === 'lg'
      ? 'h-20 w-20 sm:h-24 sm:w-24'
      : size === 'sm'
        ? 'h-12 w-12'
        : 'h-16 w-16 sm:h-[72px] sm:w-[72px]';

  return (
    <div className="inline-flex items-center gap-3.5 sm:gap-4">
      {/* Circular Crest Logo Slot — swap LOGO_IMAGE_SRC in src/data/events.ts */}
      <div
        className={`${circleSizeClass} relative shrink-0 overflow-hidden rounded-full bg-[#FAF5EE] ring-2 ${
          inverted ? 'ring-[#B87D56]/60' : 'ring-[#B87D56]/40'
        } shadow-sm flex items-center justify-center`}
      >
        {!imgError ? (
          <img
            src={LOGO_IMAGE_SRC}
            alt="The Grand Affair — Weddings & Events royal monogram logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover object-[50%_58%] scale-[1.2] select-none"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center px-1.5 text-[#242B22]">
            <span className="font-serif text-base sm:text-lg font-semibold leading-none tracking-tight text-[#B87D56]">
              TGA
            </span>
            <span className="text-[7px] uppercase tracking-[0.14em] mt-0.5 text-[#5C6B50]">
              Events
            </span>
          </div>
        )}
      </div>

      {showLockupText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif text-lg sm:text-xl font-semibold tracking-tight leading-tight ${
              inverted ? 'text-[#FAF5EE]' : 'text-[#242B22]'
            }`}
          >
            The Grand Affair
          </span>
          <span
            className={`mt-0.5 text-[11px] font-semibold tracking-[0.18em] ${
              inverted ? 'text-[#D7A987]' : 'text-[#5C6B50]'
            }`}
          >
            WEDDINGS &amp; EVENTS
          </span>
        </div>
      )}
    </div>
  );
}
