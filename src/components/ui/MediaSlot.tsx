
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { assetPath } from "@/asset-path";

type MediaSlotProps = {
  src: string;
  alt: string;
  label: string;
  className?: string;
};

export function MediaSlot({
  src,
  alt,
  label,
  className = "",
}: MediaSlotProps) {
  const [hasMedia, setHasMedia] = useState(true);
  const [isEnlarged, setIsEnlarged] = useState(false);

  return (
    <>
      <div
        className={`media-slot ${
          hasMedia ? "media-slot--ready" : ""
        } ${className}`}
      >
        {hasMedia && (
          <div className="media-slot-viewport">
            <img
              className="media-slot-image"
              src={assetPath(src)}
              alt={alt}
              onLoad={() => setHasMedia(true)}
              onError={() => setHasMedia(false)}
              onClick={() => setIsEnlarged(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsEnlarged(true);
                }
              }}
              aria-label={`Enlarge image: ${alt}`}
            />
          </div>
        )}

        {!hasMedia && (
          <div className="media-slot-placeholder" aria-hidden="true">
            <span>{label}</span>
            <b>+</b>
            <i>ADD IMAGE</i>
          </div>
        )}
      </div>

      {isEnlarged && hasMedia && (
        <div
          className="media-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged image: ${alt}`}
          onClick={() => setIsEnlarged(false)}
        >
          <button
            className="media-lightbox-close"
            type="button"
            aria-label="Close enlarged image"
            onClick={() => setIsEnlarged(false)}
          >
            ×
          </button>

          <div
            className="media-lightbox-content"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={assetPath(src)} alt={alt} />
          </div>
        </div>
      )}
    </>
  );
}
