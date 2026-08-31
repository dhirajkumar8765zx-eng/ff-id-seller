import React, { useState } from 'react';
import { X, Send, Copy, Check, Sliders, Sparkles, Image } from 'lucide-react';
import { TelegramPageConfig } from '../types';
import { getAnalytics, resetAnalytics } from '../utils/analytics';

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: TelegramPageConfig;
  onSave: (newConfig: TelegramPageConfig) => void;
}

export const EditModal: React.FC<EditModalProps> = ({
  isOpen,
  onClose,
  config,
  onSave,
}) => {
  const [formData, setFormData] = useState<TelegramPageConfig>(config);
  const [copied, setCopied] = useState(false);
  const [analytics, setAnalytics] = useState(getAnalytics());

  if (!isOpen) return null;

  // Build FB Ads campaign URL
  const fbAdUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?tg=${encodeURIComponent(formData.telegramLink)}`
    : '';

  const handleCopyFbUrl = () => {
    navigator.clipboard.writeText(fbAdUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleResetStats = () => {
    if (confirm('Reset visitor and click counters?')) {
      const fresh = resetAnalytics();
      setAnalytics(fresh);
    }
  };

  const conversionRate = analytics.views > 0
    ? ((analytics.clicks / analytics.views) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#17212b] border border-[#242f3d] rounded-2xl max-w-md w-full p-5 shadow-2xl relative text-left overflow-y-auto max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#242f3d]">
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-[#1e2c3a] text-[#2AABEE]">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Telegram Link & Settings</h3>
              <p className="text-[11px] text-[#7d97ab]">Customise your landing page</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-[#7d97ab] hover:text-white hover:bg-[#1e2c3a] transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-3.5 mt-3 text-xs">
          {/* Telegram Target Link */}
          <div>
            <label className="block font-bold text-[#b5cde0] mb-1">
              Your Telegram Group / Channel Link
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#2AABEE]">
                <Send className="w-4 h-4 fill-[#2AABEE]" />
              </div>
              <input
                type="url"
                required
                value={formData.telegramLink}
                onChange={(e) =>
                  setFormData({ ...formData, telegramLink: e.target.value })
                }
                placeholder="https://t.me/your_telegram_group"
                className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-xl pl-9 pr-3 py-2.5 text-xs font-mono focus:border-[#2AABEE] focus:outline-none"
              />
            </div>
            <p className="text-[10px] text-[#7d97ab] mt-1">
              Example: <code>https://t.me/your_group_link</code>. When users click "Join Telegram Group", they will be sent here directly.
            </p>
          </div>

          {/* Facebook Ads Ready URL */}
          <div className="bg-[#0e1621] border border-[#242f3d] p-3 rounded-xl">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-bold text-[#2AABEE] flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Facebook Ads Website URL
              </span>
              <button
                type="button"
                onClick={handleCopyFbUrl}
                className="bg-[#2AABEE] hover:bg-[#229ED9] text-white font-bold px-2 py-0.5 rounded text-[10px] flex items-center gap-1 transition shadow-sm"
              >
                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <input
              type="text"
              readOnly
              value={fbAdUrl}
              className="w-full bg-[#17212b] border border-[#242f3d] text-[#8ea5b8] text-[11px] font-mono rounded px-2 py-1 select-all outline-none"
            />
          </div>

          {/* Optional Custom Logo/Photo URL */}
          <div>
            <label className="block font-bold text-[#b5cde0] mb-1">
              Custom Photo / Logo URL <span className="text-[#688295] font-normal">(Leave blank to use Real Telegram Logo)</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#7d97ab]">
                <Image className="w-4 h-4" />
              </div>
              <input
                type="url"
                value={formData.customPhotoUrl || ''}
                onChange={(e) =>
                  setFormData({ ...formData, customPhotoUrl: e.target.value })
                }
                placeholder="https://example.com/channel-photo.jpg (optional)"
                className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-xl pl-9 pr-3 py-2 text-xs font-mono focus:border-[#2AABEE] focus:outline-none"
              />
            </div>
          </div>

          {/* Community Title */}
          <div>
            <label className="block font-bold text-[#b5cde0] mb-1">
              Heading Title
            </label>
            <input
              type="text"
              value={formData.communityTitle}
              onChange={(e) =>
                setFormData({ ...formData, communityTitle: e.target.value })
              }
              className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-xl px-3 py-2 text-xs focus:border-[#2AABEE] focus:outline-none"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block font-bold text-[#b5cde0] mb-1">
              Subtitle (Hindi / English)
            </label>
            <textarea
              rows={2}
              value={formData.communitySubtitle}
              onChange={(e) =>
                setFormData({ ...formData, communitySubtitle: e.target.value })
              }
              className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-xl px-3 py-2 text-xs focus:border-[#2AABEE] focus:outline-none"
            />
          </div>

          {/* Button Text */}
          <div>
            <label className="block font-bold text-[#b5cde0] mb-1">
              Button Text
            </label>
            <input
              type="text"
              value={formData.buttonText}
              onChange={(e) =>
                setFormData({ ...formData, buttonText: e.target.value })
              }
              className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-xl px-3 py-2 text-xs focus:border-[#2AABEE] focus:outline-none"
            />
          </div>

          {/* Stats customizer */}
          <div className="grid grid-cols-3 gap-2">
            <div>
              <label className="block font-bold text-[#7d97ab] mb-1 text-[10px]">
                Members Stat
              </label>
              <input
                type="text"
                value={formData.totalMembers}
                onChange={(e) =>
                  setFormData({ ...formData, totalMembers: e.target.value })
                }
                className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-lg px-2 py-1.5 text-xs text-center font-bold"
              />
            </div>
            <div>
              <label className="block font-bold text-[#7d97ab] mb-1 text-[10px]">
                Online Stat
              </label>
              <input
                type="text"
                value={formData.onlineMembers}
                onChange={(e) =>
                  setFormData({ ...formData, onlineMembers: e.target.value })
                }
                className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-lg px-2 py-1.5 text-xs text-center font-bold"
              />
            </div>
            <div>
              <label className="block font-bold text-[#7d97ab] mb-1 text-[10px]">
                Active Stat
              </label>
              <input
                type="text"
                value={formData.activeStatus}
                onChange={(e) =>
                  setFormData({ ...formData, activeStatus: e.target.value })
                }
                className="w-full bg-[#0e1621] border border-[#293d50] text-white rounded-lg px-2 py-1.5 text-xs text-center font-bold"
              />
            </div>
          </div>

          {/* Analytics Overview */}
          <div className="pt-2 border-t border-[#242f3d] flex items-center justify-between text-[11px] text-[#7d97ab]">
            <div>
              Views: <strong className="text-white">{analytics.views}</strong> | Clicks:{' '}
              <strong className="text-[#2AABEE]">{analytics.clicks}</strong> ({conversionRate}%)
            </div>
            <button
              type="button"
              onClick={handleResetStats}
              className="text-red-400 hover:underline"
            >
              Reset
            </button>
          </div>

          {/* Action buttons */}
          <div className="pt-2 flex items-center justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3.5 py-2 rounded-xl text-[#7d97ab] hover:text-white hover:bg-[#1e2c3a] font-semibold transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#2AABEE] to-[#229ED9] hover:from-[#35b5f8] hover:to-[#24A1DE] text-white font-black tracking-wide shadow-md transition"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

