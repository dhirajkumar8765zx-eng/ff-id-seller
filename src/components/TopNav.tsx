import React from 'react';
import { Send } from 'lucide-react';

interface TopNavProps {
  onOpenSettings?: () => void;
}

export const TopNav: React.FC<TopNavProps> = () => {
  return (
    <header className="w-full max-w-md mx-auto pt-4 pb-2 px-4 flex items-center justify-between">
      {/* Left Logo / Community Badge */}
      <div className="flex items-center space-x-2.5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2AABEE] to-[#1a8bc4] p-0.5 shadow-md shadow-sky-500/20 flex items-center justify-center">
          <div className="w-full h-full bg-[#111c27] rounded-[10px] flex items-center justify-center">
            <Send className="w-4 h-4 text-[#2AABEE] fill-[#2AABEE] transform -translate-x-[1px] translate-y-[1px]" />
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs sm:text-sm font-extrabold tracking-wider text-white uppercase leading-none">
            TELEGRAM
          </span>
          <span className="text-[9px] font-semibold tracking-[0.25em] text-[#6c8599] uppercase leading-tight mt-0.5">
            C O M M U N I T Y
          </span>
        </div>
      </div>

      {/* Right Active Pill */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1.5 bg-[#17212b] border border-[#242f3d] px-3 py-1 rounded-full text-xs font-bold text-[#2AABEE] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#2AABEE] animate-pulse inline-block shadow-[0_0_8px_#2AABEE]" />
          <span className="tracking-wide text-[11px]">ACTIVE</span>
        </div>
      </div>
    </header>
  );
};

