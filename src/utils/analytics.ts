import { AnalyticsStats } from '../types';

const STORAGE_KEY = 'tg_landing_analytics';

export function getAnalytics(): AnalyticsStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    console.error('Failed to read analytics', e);
  }
  return { views: 1, clicks: 0, lastClickTime: null };
}

export function recordView(): AnalyticsStats {
  try {
    const current = getAnalytics();
    const updated: AnalyticsStats = {
      ...current,
      views: (current.views || 0) + 1,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return { views: 1, clicks: 0, lastClickTime: null };
  }
}

export function recordClick(): AnalyticsStats {
  try {
    // Trigger Meta Pixel conversion event if available
    if (typeof window !== 'undefined' && (window as any).fbq) {
      try {
        (window as any).fbq('track', 'Lead', {
          content_name: 'Telegram Group Join',
          content_category: 'Community',
        });
      } catch (err) {
        // ignore
      }
    }

    const current = getAnalytics();
    const updated: AnalyticsStats = {
      ...current,
      clicks: (current.clicks || 0) + 1,
      lastClickTime: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    return { views: 1, clicks: 1, lastClickTime: Date.now() };
  }
}

export function resetAnalytics(): AnalyticsStats {
  const initial: AnalyticsStats = { views: 1, clicks: 0, lastClickTime: null };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  } catch (e) {
    console.error('Failed to reset analytics', e);
  }
  return initial;
}
