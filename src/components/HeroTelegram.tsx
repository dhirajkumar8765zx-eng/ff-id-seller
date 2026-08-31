import React from 'react';
import { Check } from 'lucide-react';
import { TelegramLogo } from './TelegramLogo';

interface HeroTelegramProps {
  communityTitle: string;
  communitySubtitle: string;
  photoUrl?: string;
}

export const HeroTelegram: React.FC<HeroTelegramProps> = ({
  communityTitle,
  communitySubtitle,
  photoUrl,
}) => {
  return (
    <div className="w-full max-w-md mx-auto pt-6 pb-4 px-4 text-center flex flex-col items-center relative">
      {/* Background ambient Telegram blue neon glow */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#24A1DE]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Large Center Telegram Icon with Authentic Circular / Squircle Design */}
      <div className="relative mb-5 animate-pulse-glow">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[#38bcfc] via-[#24A1DE] to-[#1c88bd] p-1 shadow-2xl flex items-center justify-center glow-avatar-telegram relative">
          {/* Inner Logo container */}
          <div className="w-full h-full rounded-full flex items-center justify-center overflow-hidden bg-[#24A1DE] shadow-inner">
            <TelegramLogo size={108} photoUrl={photoUrl} className="w-full h-full object-cover" />
          </div>

          {/* Bottom-right verified checkmark circle */}
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-[#0e1621] border-2 border-[#24A1DE] flex items-center justify-center shadow-lg">
            <div className="w-5 h-5 rounded-full bg-[#24A1DE] flex items-center justify-center">
              <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
            </div>
          </div>
        </div>

        {/* Ambient subtle blue sparkle dots */}
        <span className="absolute -top-1 -left-2 w-1.5 h-1.5 rounded-full bg-[#2AABEE]/80 blur-[0.5px]" />
        <span className="absolute -bottom-1 -left-3 w-1 h-1 rounded-full bg-[#24A1DE]/60 blur-[0.5px]" />
        <span className="absolute top-1 -right-2 w-1.5 h-1.5 rounded-full bg-[#54b9f8]/90 blur-[0.5px]" />
      </div>

      {/* Main Headline */}
      <h1 className="text-2xl sm:text-[32px] font-black text-white tracking-tight leading-tight mb-2.5">
        {communityTitle}
      </h1>

      {/* Subheadline (Hindi/English) in Telegram secondary muted tone */}
      <p className="text-sm sm:text-[15px] text-[#8ea5b8] font-normal leading-relaxed max-w-sm">
        {communitySubtitle}
      </p>
    </div>
  );
};

