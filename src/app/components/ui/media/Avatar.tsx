import React, { JSX } from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: number;
  fallback?: string;
}

export default function Avatar({
  src,
  alt = '',
  size = 40,
  fallback = '?',
}: AvatarProps): JSX.Element {
  return (
    <div
      className="flex items-center justify-center overflow-hidden rounded-full bg-gray-300"
      style={{ width: size, height: size }}
    >
      {src ? (
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      ) : (
        <span className="font-semibold text-gray-700">{fallback}</span>
      )}
    </div>
  );
}
