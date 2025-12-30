'use client';
import React, { useEffect, useState } from 'react';
import '../public/css/AboutSection.css';
import aboutimg from '../public/images/about.png';
import Image from 'next/image';
import axios from 'axios';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);

  // HTML strip function
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]+>/g, "");
  };

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await axios.get('https://techzenondev.com/apnatai/api/about-us');
        if (response.data.status && response.data.data) {
          setAboutData(response.data.data);
        }
      } catch (error) {
        console.error('Error fetching About Us data:', error);
      }
    };
    fetchAboutData();
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left: Image */}
        <div className="about-image">
          <Image
            src={
              aboutData?.image
                ? `https://techzenondev.com/apnatai/public/${aboutData.image}`
                : aboutimg
            }
            alt="Luxury Villa"
            width={600}
            height={400}
          />
        </div>

        {/* Right: Content */}
        <div className="about-content">
          <h4 className="about-subtitle">
            {aboutData?.title || 'About Company'}
          </h4>

          <h2 className="about-title" style={{ textTransform: 'capitalize' }}>
            {aboutData?.short_description
              ? aboutData.short_description
              : 'Where The Beach Meets Timeless Luxury'}
          </h2>

          {/* Description without HTML tags */}
          <p className="about-description">
            {aboutData?.description
              ? stripHtml(aboutData.description)
              : `Welcome To AP Natai, Your Premier Partner In Luxury Real Estate Within The Serene Locale Of Natai, Phang-Nga. Our Presence In The Market Is Not Just About Property Transactions; It’s About Crafting A Lifestyle That Resonates With Tranquility And Sophistication.`}
          </p>

          {aboutData?.button_link ? (
            <a href={aboutData.button_link} target="_blank" rel="noopener noreferrer">
              <button className="about-button">
                {aboutData?.button_titlex || 'Learn More'} ❯❯
              </button>
            </a>
          ) : (
            <button className="about-button">Learn More ❯❯</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;