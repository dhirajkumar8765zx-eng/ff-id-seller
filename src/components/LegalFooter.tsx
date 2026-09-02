import React from 'react';
import { LegalModalType } from './LegalModals';
import { ShieldCheck, Lock, FileText, AlertCircle, Mail } from 'lucide-react';

interface LegalFooterProps {
  onOpenLegal: (type: LegalModalType) => void;
}

export const LegalFooter: React.FC<LegalFooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="w-full max-w-md mx-auto px-4 mt-6 text-center space-y-3.5">
      {/* Policy Links */}
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs text-[#7d97ab] font-medium pt-2">
        <button
          type="button"
          onClick={() => onOpenLegal('privacy')}
          className="hover:text-[#2AABEE] transition cursor-pointer underline underline-offset-2"
        >
          Privacy Policy
        </button>
        <span className="text-[#324557]">•</span>
        <button
          type="button"
          onClick={() => onOpenLegal('terms')}
          className="hover:text-[#2AABEE] transition cursor-pointer underline underline-offset-2"
        >
          Terms of Service
        </button>
        <span className="text-[#324557]">•</span>
        <button
          type="button"
          onClick={() => onOpenLegal('disclaimer')}
          className="hover:text-[#2AABEE] transition cursor-pointer underline underline-offset-2"
        >
          Disclaimer
        </button>
        <span className="text-[#324557]">•</span>
        <button
          type="button"
          onClick={() => onOpenLegal('contact')}
          className="hover:text-[#2AABEE] transition cursor-pointer underline underline-offset-2"
        >
          Contact Support
        </button>
      </div>

      {/* Official Business Contact & Transparency */}
      <div className="bg-[#111c27] border border-[#1e2f42] rounded-xl p-3 text-left space-y-1 text-[11px] text-[#8fa8be]">
        <p>
          <strong className="text-white">सहायता व संपर्क:</strong> किसी भी प्रश्न या सहायता के लिए बेझिझक{' '}
          <a
            href="mailto:dhirajkumar8765zx@gmail.com"
            className="text-[#2AABEE] font-semibold underline"
          >
            dhirajkumar8765zx@gmail.com
          </a>{' '}
          पर ईमेल करें। हम उपयोगकर्ता की गोपनीयता का सम्मान करते हैं।
        </p>
      </div>

      {/* Meta Ad Platform & Platform Disclaimers */}
      <div className="bg-[#0b121a] border border-[#1b2b3b] rounded-xl p-3 text-[10px] text-[#5b758b] leading-relaxed text-left space-y-1.5">
        <p>
          <strong className="text-[#8ca6bc]">Meta™ Disclaimer:</strong> This website is not a part of the Facebook™ website or Meta Platforms, Inc. Additionally, this site is NOT endorsed by Meta Platforms, Inc. in any way. FACEBOOK™ is a registered trademark of META PLATFORMS, INC.
        </p>
        <p>
          <strong className="text-[#8ca6bc]">Telegram™ Notice:</strong> This community is an independently operated educational group and is not affiliated with, sponsored by, or endorsed by Telegram FZ-LLC.
        </p>
        <p>
          <strong className="text-[#8ca6bc]">अस्वीकरण:</strong> यह समूह केवल शैक्षिक और ज्ञानवर्धक चर्चाओं के लिए है। हम कोई वित्तीय गारंटी, सट्टेबाजी या निवेश सलाह प्रदान नहीं करते।
        </p>
      </div>

      {/* Copyright */}
      <div className="text-[10px] text-[#445b70] pb-2">
        © {new Date().getFullYear()} Educational Community Forum. All rights reserved.
      </div>
    </footer>
  );
};
