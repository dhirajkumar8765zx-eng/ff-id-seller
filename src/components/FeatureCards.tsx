import React from 'react';
import { Newspaper, BookOpen, ShieldCheck, MessageSquare, Check } from 'lucide-react';

export const FeatureCards: React.FC = () => {
  const features = [
    {
      id: 'f1',
      title: 'Daily Curated Updates',
      subtitle: 'विश्वसनीय दैनिक अपडेट्स, महत्वपूर्ण सूचनाएं और सारांश',
      icon: <Newspaper className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f2',
      title: 'Educational Discussions',
      subtitle: 'ज्ञानवर्धक चर्चाएं, सवाल-जवाब और विषयवार विश्लेषण',
      icon: <BookOpen className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f3',
      title: 'Strict Anti-Spam Moderation',
      subtitle: 'सख्त नियम और सक्रिय एडमिन्स — कोई स्पैम या फर्जीवाड़ा नहीं',
      icon: <ShieldCheck className="w-5 h-5 text-[#2AABEE]" />,
    },
    {
      id: 'f4',
      title: 'Open Community Network',
      subtitle: '100% पारदर्शी और सुरक्षित मंच — कभी भी जुड़ें या छोड़ें',
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


