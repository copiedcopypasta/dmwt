import React from 'react';

type BannerType = 'success' | 'error' | 'warning' | 'info';

interface BannerProps {
  type?: BannerType;
  message: string | undefined;
}

const bannerStyles: Record<BannerType, string> = {
  success: 'bg-green-100 border-green-400 text-green-700',
  error: 'bg-red-100 border-red-400 text-red-700',
  warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
  info: 'bg-blue-100 border-blue-400 text-blue-700',
};

export default function Banner({
  type,
  message,
}: BannerProps): React.ReactElement {
  return (
    <div className={`rounded p-3 ${bannerStyles[type || 'info']} border`}>
      {message}
    </div>
  );
}
