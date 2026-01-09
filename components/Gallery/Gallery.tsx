"use client";

import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { LuArrowLeft, LuArrowRight, LuX } from "react-icons/lu";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, A11y, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { serviceGallery } from "@/types/services";

export default function Gallery() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{
    image: string;
    name: string;
  } | null>(null);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setCurrentImage(null);

    // Force clearing all styles
    setTimeout(() => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";

      // If the URL contains #gallery, trigger scroll to the section
      if (window.location.hash === "#gallery") {
        const gallerySection = document.getElementById("gallery");
        if (gallerySection) {
          gallerySection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }, 100);
  }, []);

  const openLightbox = (item: { image: string; name: string }) => {
    setCurrentImage(item);
    setLightboxOpen(true);
  };

  useEffect(() => {
    if (lightboxOpen) {
      // Block scroll
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          closeLightbox();
        }
      };

      // Block touchmove for mobile devices
      const preventScroll = (e: TouchEvent) => {
        if (!(e.target as HTMLElement).closest(".lightbox-content")) {
          e.preventDefault();
        }
      };

      window.addEventListener("keydown", handleEscape);
      document.addEventListener("touchmove", preventScroll, { passive: false });

      return () => {
        // Unblock scroll
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";
        window.removeEventListener("keydown", handleEscape);
        document.removeEventListener("touchmove", preventScroll);
      };
    }
  }, [lightboxOpen, closeLightbox]);

  return (
    <section
      className="py-12 bg-linear-to-t from-(--color-bg-card) to-(--color-bg-soft)"
      id="gallery"
    >
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="relative mb-16 flex justify-center">
          {/* Background stripe */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-0.5 bg-linear-to-r from-transparent via-(--color-accent) to-transparent opacity-60" />

          {/* Title */}
          <h2 className="relative z-10 px-8 py-2 text-4xl font-heading bg-(--color-bg-soft) rounded-full">
            Gallery
          </h2>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-16">
        {/* Slider Container */}
        <div className="relative pb-16">
          <Swiper
            modules={[Navigation, Keyboard, A11y, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            keyboard={{ enabled: true }}
            pagination={{
              clickable: true,
              el: ".gallery-pagination",
              type: "bullets",
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            spaceBetween={16}
            slidesPerView={1}
            slidesPerGroup={1}
            breakpoints={{
              375: {
                slidesPerView: 1,
                slidesPerGroup: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 24,
              },
              1440: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 32,
              },
            }}
            observer={true}
            observeParents={true}
            className="w-full"
            a11y={{ enabled: true }}
          >
            {serviceGallery.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div
                  className="relative aspect-4/3 w-full cursor-pointer group overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(item)}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Desktop Navigation Buttons - centered vertically on slides */}
          <div className="hidden md:block">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="nav-button absolute left-0 top-[calc(50%-2.5rem)] z-10 rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ transform: "translate(-1.5rem, -50%)" }}
              aria-label="Previous slide"
            >
              <LuArrowLeft size={24} className="nav-icon" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="nav-button absolute right-0 top-[calc(50%-2.5rem)] z-10 rounded-full p-3 shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ transform: "translate(1.5rem, -50%)" }}
              aria-label="Next slide"
            >
              <LuArrowRight size={24} className="nav-icon" />
            </button>
          </div>

          {/* Pagination - centered */}
          <div className="gallery-pagination mt-4"></div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="nav-button rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Previous slide"
            >
              <LuArrowLeft size={24} className="nav-icon" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="nav-button rounded-full p-3 shadow-lg transition-all duration-300"
              aria-label="Next slide"
            >
              <LuArrowRight size={24} className="nav-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && currentImage && (
        <div
          className="fixed inset-0 z-60 backdrop-blur-sm flex items-center justify-center p-4 overflow-hidden"
          style={{
            backgroundColor: "rgba(128, 128, 105, 0.6)",
            overscrollBehavior: "contain",
          }}
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-50 bg-white rounded-full p-3 shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Close lightbox"
          >
            <LuX size={24} style={{ color: "var(--color-accent-dark)" }} />
          </button>

          <div
            className="lightbox-content relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage.image}
              alt={currentImage.name}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        .gallery-pagination {
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          width: 100% !important;
          text-align: center !important;
          gap: 0.25rem;
          margin-left: auto !important;
          margin-right: auto !important;
        }

        .gallery-pagination .swiper-pagination-bullet {
          background: var(--color-accent-dark);
          opacity: 0.5;
          margin: 0 !important;
        }

        .gallery-pagination .swiper-pagination-bullet-active {
          opacity: 1;
        }

        .swiper-pagination-bullets.gallery-pagination {
          position: static !important;
          bottom: auto !important;
          left: 0 !important;
          right: 0 !important;
          transform: none !important;
        }

        .nav-button {
          background-color: var(--color-accent-soft);
          transform-origin: center center;
        }

        .nav-button:hover {
          transform: scale(1.15) !important;
        }

        .nav-button.absolute.left-0:hover {
          transform: translate(-1.5rem, -50%) scale(1.15) !important;
        }

        .nav-button.absolute.right-0:hover {
          transform: translate(1.5rem, -50%) scale(1.15) !important;
        }

        .nav-icon {
          color: var(--color-accent-dark);
        }
      `}</style>
    </section>
  );
}
