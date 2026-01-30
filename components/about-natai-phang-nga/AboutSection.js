'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../../public/css/AboutSection.css'; 

const IMAGE_BASE_URL = 'https://techzenondev.com/apnatai/storage/app/public/';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch('https://techzenondev.com/apnatai/api/about-apnatai/1');
        const result = await response.json();
        
        console.log('API Response:', result);
        setAboutData(result.data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (!aboutData) return <div>No data</div>;

  return (
    <>
      {/* ✅ SECTION 1: section1_image LEFT + section1_description RIGHT */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT: section1_image */}
          {aboutData.section1_image && (
            <div className="about-image">
              <Image 
                src={`${IMAGE_BASE_URL}${aboutData.section1_image}`} 
                alt="About Section 1" 
                width={600} 
                height={400}
                style={{objectFit: 'cover'}}
                priority
              />
            </div>
          )}
          
          {/* RIGHT: section1_description */}
          <div className="about-content">
            <div 
              dangerouslySetInnerHTML={{ __html: aboutData.section1_description }}
            />
          </div>
        </div>
      </section>

      {/* ✅ SECTION 2: Full Width section2_description */}
      <section className="about-section">
        <div className="about-content-full">
          <div 
            dangerouslySetInnerHTML={{ __html: aboutData.section2_description }}
          />
        </div>
      </section>

      {/* ✅ SECTION 3: section3_image LEFT + section3_description RIGHT */}
      {aboutData.section3_image && (
        <section className="about-section about-section-extra-custom2">
          <div className="about-container">
            {/* LEFT: section3_image */}
            <div className="about-image">
              <Image 
                src={`${IMAGE_BASE_URL}${aboutData.section3_image}`} 
                alt="Why Choose AP Natai" 
                width={600} 
                height={400}
                style={{objectFit: 'cover'}}
              />
            </div>
            
            {/* RIGHT: section3_description */}
            <div className="about-content">
              <div 
                dangerouslySetInnerHTML={{ __html: aboutData.section3_description }}
              />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default AboutSection;
