import React, { JSX } from 'react';
import { GalleryProps } from '../media/Gallery';

interface Header {
  title: string | undefined;
  link?: string | undefined;
  thumbnailUrl?: string | undefined;
}

interface Content {
  imageUrl: string | undefined;
  imageAltText?: string | undefined;
  imageGallery?: GalleryProps | undefined;
}

interface Body {
  description: string | undefined;
  content?: Content | undefined;
}

interface Footer {
  text: string | undefined;
  link?: string | undefined;
  iconUrl?: string | undefined;
}

interface CardProps {
  header: Header | undefined;
  body: Body | undefined;
  footer?: Footer | undefined;
  color?: string | undefined;
  foreintColor?: string | undefined;
  backgroundColor?: string | undefined;
}

export default function Card({
  header,
  body,
  footer,
  color,
  foreintColor,
  backgroundColor,
}: CardProps): JSX.Element {
  const borderLeftColor = color !== undefined ? `4px solid ${color}` : '';

  return (
    <>
      <div
        className="flex max-w-[500px] flex-col overflow-hidden rounded-md border border-[#2b2d31] shadow-sm"
        style={{
          borderLeft: borderLeftColor,
          backgroundColor: backgroundColor,
        }}
      >
        {/* Header */}
        {header && (
          <div className="flex items-center gap-2 p-3">
            {header.thumbnailUrl && (
              <img
                src={header.thumbnailUrl}
                alt="thumbnail"
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            {header.title && (
              <h4 className="text-sm font-semibold text-white">
                {header.link ? (
                  <a
                    href={header.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {header.title}
                  </a>
                ) : (
                  header.title
                )}
              </h4>
            )}
          </div>
        )}

        {/* Body */}
        {body && (
          <div className="flex flex-col gap-2 px-3 pb-3 text-sm text-[#dbdee1]">
            {body.description && (
              <p className="whitespace-pre-line">{body.description}</p>
            )}

            {body.content?.imageUrl && (
              <img
                src={body.content.imageUrl}
                alt={body.content.imageAltText || 'content image'}
                className="mt-1 max-h-64 rounded-md object-cover"
              />
            )}

            {/* Wenn du später eine Gallery-Komponente hast */}
            {/* {body.content?.imageGallery && <Gallery {...body.content.imageGallery} />} */}
          </div>
        )}

        {/* Footer */}
        {footer && (
          <div className="flex items-center gap-2 border-t border-[#2b2d31] px-3 py-2 text-xs text-[#b5bac1]">
            {footer.iconUrl && (
              <img
                src={footer.iconUrl}
                alt="footer icon"
                className="h-4 w-4 rounded-full"
              />
            )}
            {footer.link ? (
              <a
                href={footer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {footer.text}
              </a>
            ) : (
              <span>{footer.text}</span>
            )}
          </div>
        )}
      </div>
    </>
  );

  // First version
  <div
    className="flex h-[40px] max-w-[600px] min-w-[380px] rounded-md border-[0.5px] border-solid border-[#44454c] bg-[#141414] shadow-md"
    style={{
      borderLeft: borderLeftColor,
    }}
  >
    {/* Header Section */}
    <div>
      <h4>{header?.title}</h4>
    </div>
    {/* Body Section */}
    <div></div>
    {/* Footer Section */}
    <div></div>
  </div>;
}
