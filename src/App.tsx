/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TelegramPageConfig } from './types';
import { TopNav } from './components/TopNav';
import { HeroTelegram } from './components/HeroTelegram';
import { TelegramJoinButton } from './components/TelegramJoinButton';
import { StatsRow } from './components/StatsRow';
import { MembersCard } from './components/MembersCard';
import { FeatureCards } from './components/FeatureCards';
import { BottomJoinCard } from './components/BottomJoinCard';
import { LegalFooter } from './components/LegalFooter';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { EditModal } from './components/EditModal';
import { recordView } from './utils/analytics';

const DEFAULT_CONFIG: TelegramPageConfig = {
  telegramLink: 'https://t.me/+xJu7Udo2-EQ1Y2M1',
  communityTitle: 'Knowledge & Updates Community',
  communitySubtitle: 'विश्वसनीय दैनिक अपडेट्स, शैक्षिक नोट्स और महत्वपूर्ण सूचनाओं के लिए हमारे निःशुल्क ग्रुप से जुड़ें',
  buttonText: 'Join Telegram Channel',
  totalMembers: '8.4K+',
  onlineMembers: '350+',
  activeStatus: 'Daily',
  detailedMembersCount: 'सक्रिय शैक्षिक ग्रुप',
  tagline: 'विश्वसनीय एवं सक्रिय कम्युनिटी',
};

export default function App() {
  const [config, setConfig] = useState<TelegramPageConfig>(() => {
    try {
      const saved = localStorage.getItem('tg_exact_config');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.telegramLink || parsed.telegramLink === 'https://t.me/telegram') {
          parsed.telegramLink = 'https://t.me/+xJu7Udo2-EQ1Y2M1';
        }
        return { ...DEFAULT_CONFIG, ...parsed };
      }
    } catch (e) {
      // ignore
    }
    return DEFAULT_CONFIG;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);

  useEffect(() => {
    // Record view for stats
    recordView();

    // Check if telegram link is passed via URL query parameter (for FB Ads)
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const tg = params.get('tg');
      const title = params.get('title');
      if (tg) {
        setConfig((prev) => ({
          ...prev,
          telegramLink: tg,
          communityTitle: title || prev.communityTitle,
        }));
      }
    }
  }, []);

  const handleSaveConfig = (newConfig: TelegramPageConfig) => {
    setConfig(newConfig);
    try {
      localStorage.setItem('tg_exact_config', JSON.stringify(newConfig));
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="min-h-screen bg-[#0e1621] text-[#e4ecf2] flex flex-col justify-between selection:bg-[#2AABEE] selection:text-white pb-10">
      <div className="w-full">
        {/* Top Header Navbar */}
        <TopNav onOpenSettings={() => setIsSettingsOpen(true)} />

        <main className="w-full">
          {/* Main Hero with Authentic Telegram Logo/Photo, Heading & Hindi Subtitle */}
          <HeroTelegram
            communityTitle={config.communityTitle}
            communitySubtitle={config.communitySubtitle}
            photoUrl={config.customPhotoUrl}
          />

          {/* Primary High-Converting Telegram Cyan-Blue Join Button */}
          <TelegramJoinButton
            telegramLink={config.telegramLink}
            buttonText={config.buttonText}
          />

          {/* 3-Column Metrics Stats Row */}
          <StatsRow
            totalMembers={config.totalMembers}
            onlineMembers={config.onlineMembers}
            activeStatus={config.activeStatus}
          />

          {/* Members Avatars & Online Status Card */}
          <MembersCard
            detailedMembersCount={config.detailedMembersCount}
            tagline={config.tagline}
          />

          {/* Compliant Educational Features */}
          <FeatureCards />

          {/* Bottom "अभी ज्वाइन करें" Telegram Card with Photo & Logo */}
          <BottomJoinCard
            telegramLink={config.telegramLink}
            photoUrl={config.customPhotoUrl}
            communityTitle={config.communityTitle}
          />
        </main>
      </div>

      {/* Meta Ad Compliant Legal Footer with Mandatory Disclaimers & Policies */}
      <LegalFooter onOpenLegal={(type) => setActiveLegalModal(type)} />

      {/* Legal Modals (Privacy Policy, Terms of Service, Disclaimer, Contact) */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />

      {/* Edit & Telegram Link Customizer Modal */}
      <EditModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />
    </div>
  );
}
