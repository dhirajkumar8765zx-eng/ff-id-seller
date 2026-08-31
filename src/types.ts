export interface TelegramPageConfig {
  telegramLink: string;
  communityTitle: string;
  communitySubtitle: string;
  buttonText: string;
  totalMembers: string;
  onlineMembers: string;
  activeStatus: string;
  detailedMembersCount: string;
  tagline: string;
  customPhotoUrl?: string;
}

export interface AnalyticsStats {
  views: number;
  clicks: number;
  lastClickTime: number | null;
}

export interface BenefitCard {
  id: string;
  title: string;
  description?: string;
  icon: string;
}
