import { useState } from 'react';
import { LOGO_IMAGE_SRC } from '../data/menu';

interface BrandLogoBadgeProps {
  size?: 'md' | 'lg';
  showSideLockup?: boolean;
  inverted?: boolean;
}

export function BrandLogoBadge({
  size = 'lg',
  showSideLockup = false,
  inverted = false,
}: BrandLogoBadgeProps) {
  const [imgFailed, setImgFailed] = useState(false);

  const circleClasses =
    size === 'lg'
      ? 'h-20 w-20 sm:h-24 sm:w-24'
      : 'h-14 w-14 sm:h-16 sm:w-16';

  return (
    <div className="inline-flex items-center gap-4">
      {/* Circular Brand Badge with easy <img> slot (swap LOGO_IMAGE_SRC in src/data/menu.ts) */}
      <div
        className={`${circleClasses} relative shrink-0 overflow-hidden rounded-full bg-[#B86F6F] ring-2 ${
          inverted ? 'ring-[#FBECEB]/25' : 'ring-[#B86F6F]/25 ring-offset-2 ring-offset-[#FBECEB]'
        } shadow-sm flex items-center justify-center`}
      >
        {!imgFailed ? (
          <img
            src={LOGO_IMAGE_SRC}
            alt="Pasio Patisseries — Baking Dreams Into Reality"
            referrerPolicy="no-referrer"
            onError={() => setImgFailed(true)}
            className="h-full w-full object-cover scale-[1.18]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center px-2 text-center text-[#FBECEB]">
            <span className="font-serif text-base sm:text-lg font-semibold leading-none tracking-tight">
              Pasio
            </span>
            <span className="font-serif italic text-[9px] sm:text-[10px] leading-tight opacity-95">
              Patisseries
            </span>
            <span className="mt-1 text-[5.5px] font-medium tracking-[0.16em] uppercase opacity-90">
              Baking Dreams
            </span>
          </div>
        )}
      </div>

      {showSideLockup && (
        <div className="flex flex-col">
          <span
            className={`font-serif text-xl sm:text-2xl font-semibold tracking-tight leading-tight ${
              inverted ? 'text-[#FBECEB]' : 'text-[#3D2424]'
            }`}
          >
            Pasio Patisseries
          </span>
          <span
            className={`mt-1 text-[11px] font-semibold tracking-[0.18em] ${
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
