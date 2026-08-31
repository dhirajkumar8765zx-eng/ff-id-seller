import React from 'react';
import { Newspaper, Zap, ShieldCheck, MessageSquare, Check } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'f1',
      title: 'Daily Updates',
      subtitle: 'Important news, notifications & daily alerts',
      icon: <Newspaper className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f2',
      title: 'Instant Alerts & Fast Tips',
      subtitle: 'Direct notifications without delay',
      icon: <Zap className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f3',
      title: '100% Free VIP Access',
      subtitle: 'No hidden fee, completely free lifetime',
      icon: <ShieldCheck className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f4',
      title: 'Active Community Discussion',
      subtitle: 'Ask questions & connect with members',
      icon: <MessageSquare className="w-5 h-5 text-[#2AABEE]" />,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto px-4 my-3 space-y-2.5">
      {features.map((item) => (
        <div
          key={item.id}
          className="w-full bg-[#17212b] border border-[#242f3d] hover:border-[#2f4459] rounded-2xl p-3.5 flex items-center justify-between transition-colors shadow-md"
        >
          {/* Left Icon + Title */}
          <div className="flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#1e2c3a] border border-[#293d50] flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <div className="text-left">
              <h3 className="text-sm sm:text-[15px] font-bold text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-[11px] text-[#7d97ab] mt-0.5 leading-tight">
                {item.subtitle}
              </p>
            </div>
          </div>

          {/* Right Verified Checkmark Circle */}
          <div className="w-6 h-6 rounded-full bg-[#1e2c3a] border border-[#293d50] flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5 text-[#2AABEE] stroke-[3]" />
          </div>
        </div>
      ))}
    </div>
  );
};

