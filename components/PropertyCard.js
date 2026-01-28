'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "../public/css/PropertyCard.css";
import { FaCamera } from 'react-icons/fa';

import Beds from "../public/images/logo-amenities/bedrooms.png";
import Bath from "../public/images/logo-amenities/bathrooms.png";
import Area from "../public/images/logo-amenities/areafeet.png";

const IMAGE_BASE_URL = "https://techzenondev.com/apnatai/storage/app/public/";

const PropertyCard = () => {
  const [properties, setProperties] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null); // ✅ Main zoomed image
  const [currentIndex, setCurrentIndex] = useState(0); // ✅ Current image index

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch("https://techzenondev.com/apnatai/api/property-for-sale-home");
        const data = await res.json();
        setProperties(data?.data?.data || []);
      } catch (error) {
        console.error("API Error:", error);
      }
    };

    fetchProperties();
  }, []);

  const parseGalleryImages = (galleryString) => {
    if (!galleryString) return [];
    try {
      const images = JSON.parse(galleryString);
      return Array.isArray(images) ? images : [];
    } catch {
      return [];
    }
  };

  const openGallery = (galleryImages, initialIndex = 0) => {
    const images = parseGalleryImages(galleryImages);
    setSelectedGallery(images);
    setCurrentIndex(initialIndex);
    setZoomedImage(images[initialIndex]);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setSelectedGallery(null);
    setZoomedImage(null);
    setCurrentIndex(0);
  };

  const stripHtml = (html = "") => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  const limitWords = (text, limit = 25) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + ".....";
  };

  return (
    <>
      <div className="fancy-mainheading">
        <h2>
          For Sale In <span>Natai Beach</span>
        </h2>
      </div>

      <div className="property-container">
        {properties.map((property) => {
          const mainImagePath = property.main_image || property.featured_image || property.image || property.thumbnail || "";
          const image = mainImagePath ? `${IMAGE_BASE_URL}${mainImagePath}` : "/images/property/pro1.png";
          const rawTitle = property.title || property.name || property.property_title || "";
          const title = rawTitle && rawTitle.trim().length > 0 ? rawTitle : "Natai Beach property image";
          const rawDesc = property.short_description || property.description || property.summary || "No description available.";
          const cleanDesc = limitWords(stripHtml(rawDesc), 25);
          const slug = property.slug || property.seo_slug || property.url || property.permalink || "#";
          const bedrooms = property.min_beds || "N/A";
          const bathrooms = property.min_baths || "N/A";
          const area = property.max_area_sqft || property.max_area_sqft || "N/A";
          const price = property.price || property.starting_from || property.min_price || "Price on request";
          const galleryImages = parseGalleryImages(property.gallery_images);

          return (
            <div className="property-card" key={property.id}>
              <div className="image-wrapper position-relative">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="property-image"
                />
                
                {galleryImages.length > 0 && (
                  <button 
                    className="gallery-trigger"
                    onClick={() => openGallery(property.gallery_images, 0)}
                    title="View Gallery"
                  >
                    <FaCamera/>
                  </button>
                )}
              </div>

              <div className="property-content">
                <h3 className="property-title">
                  <a href={`/property/${slug}`} className="propertytitle">{title}</a>
                </h3>

                <p style={{ color: "#000", lineHeight: "20px" }} className="property-description">
                  {cleanDesc}
                </p>

                <div className="property-details">
                  <div className="detail-item"> 
                    <Image src={Beds} alt="amenities" width={20} height={20}/>
                    {bedrooms} Bedrooms
                  </div>
                  <div className="detail-item">
                    <Image src={Bath} alt="amenities" width={20} height={20}/>
                    {bathrooms} Bathrooms 
                  </div>
                  <div className="detail-item">
                    <Image src={Area} alt="amenities" width={20} height={20}/>
                    {area} m²
                  </div>
                </div>
              </div>

              <div className="property-footer">
                <div>
                  <h5 className="forsale-heading">for sale</h5>
                  <p className="price">฿{Number(price).toLocaleString()}</p>
                </div>

                <button
                  className="read-more-property"
                  onClick={() => (window.location.href = `/property/${slug}`)}
                >
                  Read More »
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="loadmore-btn">
        <a className="about-button" href="./for-real-estates">
          Load More ❯❯
        </a>
      </div>

      {/* ✅ ZOOMED GALLERY POPUP */}
      {isGalleryOpen && selectedGallery && selectedGallery.length > 0 && (
        <div className="gallery-modal-overlay" onClick={closeGallery}>
          <div className="gallery-modal" onClick={(e) => e.stopPropagation()}>
            <div className="gallery-header">
              <div className="gallery-nav">
                <button 
                  className="nav-btn" 
                  onClick={() => {
                    const prevIndex = currentIndex === 0 ? selectedGallery.length - 1 : currentIndex - 1;
                    setCurrentIndex(prevIndex);
                    setZoomedImage(selectedGallery[prevIndex]);
                  }}
                >
                  ‹
                </button>
                <span className="image-counter">
                  {currentIndex + 1} / {selectedGallery.length}
                </span>
                <button 
                  className="nav-btn" 
                  onClick={() => {
                    const nextIndex = currentIndex === selectedGallery.length - 1 ? 0 : currentIndex + 1;
                    setCurrentIndex(nextIndex);
                    setZoomedImage(selectedGallery[nextIndex]);
                  }}
                >
                  ›
                </button>
              </div>
              <button className="gallery-close" onClick={closeGallery}>✕</button>
            </div>

            {/* ✅ MAIN ZOOMED IMAGE (TOP) */}
            <div className="main-zoomed-image">
              <Image
                src={zoomedImage ? `${IMAGE_BASE_URL}${zoomedImage}` : ''}
                alt="Zoomed property image"
                fill
                className="zoomed-main-image"
                style={{ objectFit: 'contain' }}
              />
            </div>

            {/* ✅ REMAINING GALLERY IMAGES (BOTTOM) */}
            <div className="gallery-thumbnails">
              {selectedGallery.map((imgPath, index) => (
                <div 
                  key={index} 
                  className={`thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentIndex(index);
                    setZoomedImage(imgPath);
                  }}
                >
                  <Image
                    src={`${IMAGE_BASE_URL}${imgPath}`}
                    alt={`Thumbnail ${index + 1}`}
                    width={120}
                    height={90}
                    className="thumbnail-image"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PropertyCard;
