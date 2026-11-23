import { useState } from 'react';
import { LOGO_IMAGE_SRC } from '../data/menu';

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
      {/* Circular Logo Slot — swap LOGO_IMAGE_SRC in src/data/menu.ts to replace the logo file */}
      <div
        className={`${circleSizeClass} relative shrink-0 overflow-hidden rounded-full bg-[#B86F6F] ring-2 ${
          inverted ? 'ring-[#FBECEB]/30' : 'ring-[#B86F6F]/25'
        } shadow-sm flex items-center justify-center`}
      >
        {!imgError ? (
          <img
            src={LOGO_IMAGE_SRC}
            alt="Pasio Patisseries — Baking Dreams Into Reality logo"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover scale-[1.2] select-none"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-center px-1.5 text-[#FBECEB]">
            <span className="font-serif text-base sm:text-lg font-semibold leading-none tracking-tight">
              Pasio
            </span>
            <span className="text-[7px] uppercase tracking-[0.16em] mt-0.5 opacity-90">
              Patisseries
            </span>
          </div>
        )}
      </div>

      {showLockupText && (
        <div className="flex flex-col text-left">
          <span
            className={`font-serif text-lg sm:text-xl font-semibold tracking-tight leading-tight ${
              inverted ? 'text-[#FBECEB]' : 'text-[#3D2424]'
            }`}
          >
            Pasio Patisseries
          </span>
          <span
            className={`mt-0.5 text-[11px] font-semibold tracking-[0.18em] ${
              inverted ? 'text-[#FBECEB]/80' : 'text-[#9B5656]'
            }`}
          >
            BAKING DREAMS INTO REALITY
          </span>
        </div>
      )}
    </div>
  );
}
