import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  caption?: string;
  aspectClass?: string;
  className?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  caption,
  aspectClass = 'aspect-[4/3]',
  className = '',
  priority = false,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  return (
    <figure className={`flex flex-col ${className}`}>
      <div
        className={`relative overflow-hidden bg-[#ECE5D8] border border-[#121110]/10 ${aspectClass}`}
      >
        {!hasError ? (
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading={priority ? 'eager' : 'eager'}
            onError={() => setHasError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-[#ECE5D8] to-[#DDD3C2] text-[#4E4A45]">
            <svg
              className="w-8 h-8 mb-3 text-[#6B1422]/70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="16" rx="1" />
              <circle cx="8.5" cy="9.5" r="1.5" />
              <path d="M21 15l-5-5L5 20" />
            </svg>
            <p className="font-serif text-sm text-[#121110]">{alt}</p>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2.5 text-xs font-serif italic text-[#4E4A45] leading-relaxed">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
