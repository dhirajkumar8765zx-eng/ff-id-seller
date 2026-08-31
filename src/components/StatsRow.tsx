import React from 'react';

interface StatsRowProps {
  totalMembers: string;
  onlineMembers: string;
  activeStatus: string;
}

export const StatsRow: React.FC<StatsRowProps> = ({
  totalMembers,
  onlineMembers,
  activeStatus,
}) => {
  return (
    <div className="w-full max-w-md mx-auto px-4 my-4">
      <div className="grid grid-cols-3 divide-x divide-[#242f3d] bg-transparent py-2">
        {/* Metric 1 */}
        <div className="text-center px-2">
          <div className="text-xl sm:text-2xl font-black text-[#2AABEE] tracking-tight">
            {totalMembers}
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold text-[#718d9f] tracking-wider uppercase mt-0.5">
            MEMBERS
          </div>
        </div>

        {/* Metric 2 */}
        <div className="text-center px-2">
          <div className="text-xl sm:text-2xl font-black text-[#2AABEE] tracking-tight">
            {onlineMembers}
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold text-[#718d9f] tracking-wider uppercase mt-0.5">
            ONLINE
          </div>
        </div>

        {/* Metric 3 */}
        <div className="text-center px-2">
          <div className="text-xl sm:text-2xl font-black text-[#2AABEE] tracking-tight">
            {activeStatus}
          </div>
          <div className="text-[10px] sm:text-[11px] font-bold text-[#718d9f] tracking-wider uppercase mt-0.5">
            ACTIVE
          </div>
        </div>
      </div>
    </div>
  );
};

