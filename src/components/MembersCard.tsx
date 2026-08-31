import React from 'react';

interface MembersCardProps {
  detailedMembersCount: string;
  tagline: string;
}

export const MembersCard: React.FC<MembersCardProps> = ({
  detailedMembersCount,
  tagline,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 my-2">
      <div className="w-full bg-[#17212b] border border-[#242f3d] rounded-2xl p-3.5 flex items-center justify-between shadow-lg">
        {/* Left: Stacked Avatars */}
        <div className="flex items-center space-x-3">
          <div className="flex -space-x-2 overflow-hidden items-center">
            <div className="w-7 h-7 rounded-full bg-[#2AABEE] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#17212b]">
              R
            </div>
            <div className="w-7 h-7 rounded-full bg-[#0088cc] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#17212b]">
              A
            </div>
            <div className="w-7 h-7 rounded-full bg-[#5b95ff] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#17212b]">
              S
            </div>
            <div className="w-7 h-7 rounded-full bg-[#8e52f5] text-white flex items-center justify-center font-bold text-xs ring-2 ring-[#17212b]">
              K
            </div>
            <div className="w-7 h-7 rounded-full bg-[#1b344b] text-[#54b9f8] flex items-center justify-center font-extrabold text-[11px] ring-2 ring-[#17212b]">
              +
            </div>
          </div>

          {/* Middle: Count & Tagline */}
          <div className="text-left">
            <div className="text-sm sm:text-[15px] font-extrabold text-white leading-tight">
              {detailedMembersCount}
            </div>
            <div className="text-[11px] text-[#7d97ab] font-medium leading-tight mt-0.5">
              {tagline}
            </div>
          </div>
        </div>

        {/* Right: Online Badge */}
        <div className="flex items-center space-x-1.5 bg-[#111c27] border border-[#242f3d] px-2.5 py-1 rounded-full text-xs font-semibold text-[#2AABEE]">
          <span className="w-2 h-2 rounded-full bg-[#2AABEE] animate-pulse" />
          <span className="text-[11px]">Online</span>
        </div>
      </div>
    </div>
  );
};

