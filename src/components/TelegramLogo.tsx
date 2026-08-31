import React from 'react';

interface TelegramLogoProps {
  size?: number;
  className?: string;
  photoUrl?: string;
}

export const TelegramLogo: React.FC<TelegramLogoProps> = ({
  size = 88,
  className = '',
  photoUrl,
}) => {
  if (photoUrl && photoUrl.trim().length > 0) {
    return (
      <img
        src={photoUrl}
        alt="Telegram Group"
        referrerPolicy="no-referrer"
        className={`rounded-full object-cover shadow-2xl ${className}`}
        style={{ width: size, height: size }}
        onError={(e) => {
          // If image fails, revert to SVG
          (e.target as HTMLElement).style.display = 'none';
        }}
      />
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`drop-shadow-xl ${className}`}
    >
      <defs>
        <linearGradient id="tgRealGradient" x1="120" y1="0" x2="120" y2="240" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2AABEE" />
          <stop offset="1" stopColor="#229ED9" />
        </linearGradient>
        <linearGradient id="tgPlaneShade" x1="100.5" y1="139" x2="157" y2="192.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#D2E5F2" />
          <stop offset="1" stopColor="#B5D6EC" />
        </linearGradient>
        <filter id="tgGlow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#1a7cae" floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Telegram Circle Background */}
      <circle cx="120" cy="120" r="120" fill="url(#tgRealGradient)" />

      {/* Authentic Telegram Paper Airplane Path */}
      <g filter="url(#tgGlow)">
        {/* Main Body */}
        <path
          d="M183.5 70.2C181.8 65.5 176.8 63.8 171.2 66.2L48.6 113.8C42.2 116.3 42.1 120.2 47.4 121.9L78.6 131.6L151.2 85.8C154.6 83.6 157.7 84.8 155.2 87L96.3 140.2L94.1 174C97.4 174 98.8 172.5 100.7 170.7L116.7 155.1L150 179.7C156.1 183.1 160.6 181.3 162.1 174L183.9 71.4C184.2 69.8 184.2 68.8 183.5 70.2Z"
          fill="white"
        />
        {/* Bottom Fold Shadow for authentic 3D Telegram look */}
        <path
          d="M96.3 140.2L94.1 174C97.4 174 98.8 172.5 100.7 170.7L116.7 155.1L96.3 140.2Z"
          fill="url(#tgPlaneShade)"
          opacity="0.85"
        />
      </g>
    </svg>
  );
};
