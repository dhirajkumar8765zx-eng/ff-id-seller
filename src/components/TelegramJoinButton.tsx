import React, { useState } from 'react';
import { Send, ExternalLink, Lock } from 'lucide-react';
import { motion } from 'motion/react';
import { recordClick } from '../utils/analytics';

interface TelegramJoinButtonProps {
  telegramLink: string;
  buttonText: string;
}

export const TelegramJoinButton: React.FC<TelegramJoinButtonProps> = ({
  telegramLink,
  buttonText,
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
    <div className="w-full max-w-md mx-auto px-4 my-3 text-center flex flex-col items-center">
      {/* Giant Telegram Cyan-Blue Join Button */}
      <motion.a
        id="main-telegram-join-btn"
        href={formattedLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.96 }}
        className="w-full relative overflow-hidden rounded-2xl py-4 px-6 bg-gradient-to-r from-[#2AABEE] via-[#24A1DE] to-[#1a8bc4] text-white font-black text-lg sm:text-[19px] tracking-wide flex items-center justify-center space-x-3 glow-telegram-btn transition-all select-none border border-[#7ed8ff]/40 shadow-xl cursor-pointer"
      >
        {/* Shimmer light bar across button */}
        <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/35 to-transparent transform -skew-x-12 shimmer-effect pointer-events-none" />

        {/* Telegram icon bubble */}
        <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-xs">
          <Send className="w-4 h-4 text-white fill-white transform -translate-x-[1px] translate-y-[1px]" />
        </div>

        {/* Button label */}
        <span className="font-extrabold drop-shadow-sm">
          {isOpening ? 'Opening Telegram...' : buttonText}
        </span>

        {/* External link icon */}
        <ExternalLink className="w-5 h-5 text-white/90 stroke-[2.5]" />
      </motion.a>

      {/* Security & Free Guarantee subtext */}
      <div className="mt-2.5 flex items-center justify-center space-x-1.5 text-xs text-[#708a9f] font-medium">
        <Lock className="w-3.5 h-3.5 text-[#526f85]" />
        <span>Free · No payment · Leave anytime</span>
      </div>
    </div>
  );
};

