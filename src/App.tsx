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
import { EditModal } from './components/EditModal';
import { recordView } from './utils/analytics';

const DEFAULT_CONFIG: TelegramPageConfig = {
  telegramLink: 'https://t.me/+xJu7Udo2-EQ1Y2M1',
  communityTitle: 'Join Telegram Community',
  communitySubtitle: 'जानकारी, updates और discussion के लिए हमारे group से जुड़ें',
  buttonText: 'Join Telegram Group',
  totalMembers: '8.4K+',
  onlineMembers: '351',
  activeStatus: '24/7',
  detailedMembersCount: '8,426 Members',
  tagline: 'Active community group',
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

          {/* 3-Column Metrics Stats Row (8.4K+ MEMBERS | 351 ONLINE | 24/7 ACTIVE) */}
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

          {/* Feature / Benefits List Cards */}
          <FeatureCards />

          {/* Bottom "अभी ज्वाइन करें" Telegram Card with Photo & Logo */}
          <BottomJoinCard
            telegramLink={config.telegramLink}
            photoUrl={config.customPhotoUrl}
            communityTitle={config.communityTitle}
          />
        </main>
      </div>

      {/* Edit & Telegram Link Customizer Modal */}
      <EditModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
      />

      {/* Bottom Subtle Bar */}
      <footer className="w-full max-w-md mx-auto px-4 mt-6 text-center text-xs text-[#526f85]">
      </footer>
    </div>
  );
}
