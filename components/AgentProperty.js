"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";
import "../public/css/PropertyCard.css"; 
import "../public/css/agentPropertyCard.css"; 
import Beds from "../public/images/logo-amenities/bedrooms.png";
import Bath from "../public/images/logo-amenities/bathrooms.png";
import Area from "../public/images/logo-amenities/areafeet.png";

const IMAGE_BASE_URL = "https://techzenondev.com/apnatai/storage/app/public/";

export default function BrowseCatalog() {
  const itemsPerPage = 6;
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("default");

  // 🔥 Convert HTML → plain text
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  // 🔥 Limit words
  const limitWords = (text, limit = 25) => {
    const words = text.split(" ");
    if (words.length <= limit) return text;
    return words.slice(0, limit).join(" ") + ".....";
  };

  // 🔥 Fetch API Data
  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/properties?per_page=20&agent_id=3&status=1")
      .then((res) => res.json())
      .then((data) => {
        const array = data?.data?.data;
        if (Array.isArray(array)) {
          setProperties(array);
        } else {
          console.error("API data is not array:", data);
        }
      })
      .catch((error) => console.error("API Error:", error));
  }, []);

  const totalItems = properties.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // 🔀 Sorting Logic
  const sortItems = (items, order) => {
    const sorted = [...items];
    switch (order) {
      case "title-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "title-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "price-asc":
        return sorted.sort((a, b) => parseInt(a.min_price) - parseInt(b.min_price));
      case "price-desc":
        return sorted.sort((a, b) => parseInt(b.min_price) - parseInt(a.min_price));
      default:
        return items;
    }
  };

  const sortedItems = sortItems(properties, sortOrder);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {/* ✅ PropertyCard Design */}
      <div className="fancy-mainheading">
        <h2 style={{ fontSize: "40px", color: "#000000" }}>
          My <span>Listings</span>
        </h2>
      </div>

      <div className="property-container">
        {currentItems.map((property) => {
          const mainImagePath = property.main_image || property.featured_image || property.image || property.thumbnail || "";
          const image = mainImagePath ? `${IMAGE_BASE_URL}${mainImagePath}` : "/images/property/pro1.png";
          const title = property.title || property.name || property.property_title || "Property";
          const rawDesc = property.short_description || property.description || property.summary || "No description available.";
          const cleanDesc = limitWords(stripHtml(rawDesc), 25);
          const slug = property.slug || property.seo_slug || property.url || property.permalink || "#";
          const bedrooms = property.min_beds || "N/A";
          const bathrooms = property.min_baths || "N/A";
          const area = property.min_area_sqft || property.max_area_sqft || "N/A";
          const price = property.price || property.starting_from || property.min_price || "Price on request";

          return (
            <div className="property-card Louproperty-card" key={property.id || Math.random()}>
              <div className="image-wrapper position-relative">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="property-image"
                />
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
                    <Image src={Beds} alt="Bedrooms" width={20} height={20}/>
                    {bedrooms} Bedrooms
                  </div>
                  <div className="detail-item">
                    <Image src={Bath} alt="Bathrooms" width={20} height={20}/>
                    {bathrooms} Bathrooms 
                  </div>
                  <div className="detail-item">
                    <Image src={Area} alt="Area" width={20} height={20}/>
                    {area} sqft
                  </div>
                </div>
              </div>

              <div className="property-footer">
                <div>
                  <h5 className="forsale-heading">for sale</h5>
                  <p className="price">฿{Number(price).toLocaleString()}</p>
                </div>

                <a
                  href={`/property/${slug}`}
                  className="read-more-property"
                >
                  Read More »
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="loadmore-btn" style={{ textAlign: 'center', margin: '40px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              style={{
                padding: '10px 20px',
                border: '1px solid #ddd',
                background: currentPage === 1 ? '#f5f5f5' : '#fff',
                cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
              }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button 
                key={i + 1}
                onClick={() => paginate(i + 1)}
                style={{
                  padding: '10px 15px',
                  border: '1px solid #ddd',
                  background: currentPage === i + 1 ? '#007bff' : '#fff',
                  color: currentPage === i + 1 ? '#fff' : '#000',
                  cursor: 'pointer'
                }}
              >
                {i + 1}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              style={{
                padding: '10px 20px',
                border: '1px solid #ddd',
                background: currentPage === totalPages ? '#f5f5f5' : '#fff',
                cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
