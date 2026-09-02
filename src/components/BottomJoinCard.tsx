import React, { useState } from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { TelegramLogo } from './TelegramLogo';
import { recordClick } from '../utils/analytics';

interface BottomJoinCardProps {
  telegramLink: string;
  photoUrl?: string;
  communityTitle: string;
}

export const BottomJoinCard: React.FC<BottomJoinCardProps> = ({
  telegramLink,
  photoUrl,
  communityTitle,
}) => {
  const [isOpening, setIsOpening] = useState(false);

  const formattedLink =
    telegramLink.startsWith('http://') ||
    telegramLink.startsWith('https://') ||
    telegramLink.startsWith('tg://')
      ? telegramLink
      : `https://${telegramLink}`;

  const handleClick = () => {
    recordClick();
    setIsOpening(true);

    try {
      if (typeof window !== 'undefined' && 'vibrate' in navigator) {
        navigator.vibrate([30, 40, 50]);
      }
    } catch (err) {
      // ignore
    }

    setTimeout(() => {
      setIsOpening(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 mt-2.5 mb-2">
      {/* Seamless tight container with Telegram styling */}
      <div className="w-full bg-gradient-to-b from-[#17212b] via-[#141e28] to-[#101822] border border-[#243447] rounded-2xl p-4 shadow-xl relative overflow-hidden text-center">
        {/* Ambient glow */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-36 h-36 bg-[#24A1DE]/25 rounded-full blur-2xl pointer-events-none" />

        {/* Telegram Photo & Channel details (Compact & Connected) */}
        <div className="flex items-center justify-between gap-3 relative z-10 mb-3 text-left bg-[#0e1621]/80 border border-[#203040] p-2.5 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="relative shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#38bcfc] to-[#1a8bc4] p-0.5 shadow-md flex items-center justify-center glow-avatar-telegram">
                <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-[#24A1DE]">
                  <TelegramLogo size={46} photoUrl={photoUrl} className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Online pulse green/blue dot */}
              <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2AABEE] opacity-75" />
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#2AABEE] border-2 border-[#17212b]" />
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1 text-[10px] font-bold text-[#49c2ff] uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-[#2AABEE]" />
                <span>COMMUNITY CHANNEL</span>
              </div>
              <h3 className="text-sm font-extrabold text-white leading-tight">
                {communityTitle}
              </h3>
              <p className="text-[11px] text-[#7d97ab] leading-tight mt-0.5">
                दैनिक अपडेट्स व ज्ञानवर्धक चर्चाएं
              </p>
            </div>
          </div>

          <div className="px-2 py-1 rounded-full bg-[#1b2c3d] border border-[#274059] text-[10px] font-bold text-[#54b9f8] whitespace-nowrap">
            FREE ACCESS
          </div>
        </div>

        {/* "अभी ज्वाइन करें" Main Compact Button */}
        <motion.a
          id="bottom-telegram-join-btn"
          href={formattedLink}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.97 }}
          className="w-full relative overflow-hidden rounded-xl py-3.5 px-4 bg-gradient-to-r from-[#2AABEE] via-[#24A1DE] to-[#1c88bd] text-white font-black text-base sm:text-[17px] tracking-wide flex items-center justify-center space-x-2.5 glow-telegram-btn transition-all select-none border border-[#7ed8ff]/40 shadow-lg"
        >
          {/* Shimmer bar */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 shimmer-effect pointer-events-none" />

          {/* Telegram circular icon */}
          <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0">
            <TelegramLogo size={20} className="w-4 h-4" />
          </div>

          {/* Clean bold text */}
          <span className="font-extrabold drop-shadow-sm">
            {isOpening ? 'Opening Telegram...' : 'अभी ज्वाइन करें'}
          </span>

          <ExternalLink className="w-4 h-4 text-white stroke-[2.5]" />
        </motion.a>
      </div>
    </div>
  );
};
