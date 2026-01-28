"use client";

import { useMemo, useState, useRef } from "react";  // ✅ useRef import kiya!

export default function PropertyGalleryClient({ title, mainImage, galleryImages }) {
  const images = useMemo(() => {
    const list = [];
    if (mainImage) list.push(mainImage);
    (galleryImages || []).forEach((img) => {
      if (img && img !== mainImage) list.push(img);
    });
    return list;
  }, [mainImage, galleryImages]);

  const [active, setActive] = useState(images[0] || "");
  const containerRef = useRef(null);  // ✅ Ab defined hai!

  if (!images.length) return null;

  // Show arrows only if more than 8 images
  const showArrows = images.length > 8;

  const scroll = (direction) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = container.clientWidth * 0.8;
      if (direction === 'left') {
        container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      {/* Main Image */}
      <img
        src={active}
        alt={title}
        style={{
          width: "100%",
          borderRadius: 12,
          maxHeight: 420,
          objectFit: "cover",
        }}
      />

      {/* Gallery with Arrows */}
      <div style={{ position: 'relative', marginTop: 12 }}>
        {/* Left Arrow */}
        {showArrows && (
          <button
            onClick={() => scroll('left')}
            style={{
              position: 'absolute',
              left: 5,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 18,
             paddingBottom: 2,
            }}
          >
            ‹
          </button>
        )}

        {/* Scrollable Gallery */}
        <div
          ref={containerRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            gap: 12,
            padding: showArrows ? '0 55px' : '0 12px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {images.map((src, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(src)}
              style={{
                flex: '0 0 120px',
                padding: 0,
                border: active === src ? "5px solid #00e2ee" : "5px solid #ddd",
                borderRadius: 10,
                overflow: 'hidden',
                cursor: 'pointer',
                background: '#fff',
              }}
            >
              <img
                src={src}
                alt={`${title} ${idx + 1}`}
                style={{
                  width: '100%',
                  height: 90,
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </button>
          ))}
        </div>

        {/* Right Arrow */}
        {showArrows && (
          <button
            onClick={() => scroll('right')}
            style={{
              position: 'absolute',
              right: 5,
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: 30,
              height: 30,
              borderRadius: '50%',
              background: 'rgba(0,0,0,0.7)',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
             paddingBottom: 2,
              fontSize: 18,
              
            }}
          >
            ›
          </button>
        )}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
        div {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
