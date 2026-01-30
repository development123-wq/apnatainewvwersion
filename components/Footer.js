"use client";

import { useState } from "react";
import Image from "next/image";
import '../public/css/Footer.css';
import logoimage from '../public/images/logo/logo1.png';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  
  const [openPopup, setOpenPopup] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    alert("Subscribed with: " + email);
    setOpenPopup(false);
  };

  return (
    <>
      {/* ===== POPUP OVERLAY ===== */}
      {openPopup && (
        <div className="popupOverlay" onClick={() => setOpenPopup(false)}>
          <div className="popupBox" onClick={(e) => e.stopPropagation()}>
            <h2>Subscribe Our Newsletter</h2>

            <input
              type="email"
              placeholder="Enter your email"
              className="popupInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="popupBtn" onClick={handleSubscribe}>Subscribe</button>

            <button className="popupClose" onClick={() => setOpenPopup(false)}>✖</button>
          </div>
        </div>
      )}

      <footer className="footer">

        {/* Newsletter Section */}
        <div className="newsletter">
          <h2>NEWSLETTER</h2>
          <p>
            Receive Our Newsletter and Discover Our <br /> Stories, Collections, and Surprises.
          </p>
          <div className="email-section">
            <button
              className="subscribeButton"
              onClick={() => setOpenPopup(true)}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-left">
            
            <Image src={logoimage} alt="AP Natai" className="logoImage footerlogoImage" width="300px" height={70}/>
            <p className="logoText">
              At AP Natai, we understand the nuances of this idyllic region and are dedicated to providing bespoke services that cater to your discerning tastes.
            </p>
            <p className="logoText" style={{marginTop:'20px'}}>
              Our in-depth knowledge of Natai’s real estate dynamics enables us to offer tailored advice, ensuring our clients make informed decisions. Whether it’s securing your dream property or managing your estate, we guarantee a service that is both comprehensive and personalised.
            </p>
          </div>

          <div className="footer-links">
            <div className="footer-links-div">
            <div className="company">
              <h3>COMPANY</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/agents">Agents</a></li>
                <li><a href="/for-rentals">For Rent</a></li>
                <li><a href="/browse-catalog">Browse Catalog</a></li>
                <li><a href="/for-real-estates">For Sale</a></li>
                <li><a href="/faqs">FAQs</a></li>
                <li><a href="/news">News</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>

            <div className="property-types">
              <h3>PROPERTY TYPES</h3>
              <ul>
                <li><a href="/search-for-real-estate?type=2&location=11&landsize=800&budget=0-5000">Apartment</a></li>
                <li><a href="/search-for-real-estate?type=3&location=11&landsize=800&budget=0-5000">Condo</a></li>
                <li><a href="/search-for-real-estate?type=4&location=11&landsize=800&budget=0-5000">House</a></li>
                <li><a href="/search-for-real-estate?type=5&location=11&landsize=800&budget=0-5000">Land Plots</a></li>
                <li><a href="/search-for-real-estate?type=9&location=11&landsize=800&budget=0-5000">Inland Villa</a></li>
                <li><a href="/search-for-real-estate?type=6&location=11&landsize=800&budget=0-5000">Townhouse</a></li>
                <li><a href="/search-for-real-estate?type=7&location=11&landsize=800&budget=0-5000">Villa</a></li>
              </ul>
            </div>
            </div>

            <div className="reach-us-div">
              <h3>REACH US</h3>
              <ul>
                <li style={{display:'flex'}}><FaPhoneAlt /><span style={{paddingLeft:'10px'}}>+66 (0) 98 021 8331</span></li>
                <li style={{display:'flex'}}><FaEnvelope /><span style={{paddingLeft:'10px'}}>sales@ap-natai.com</span></li>
                <li style={{display:'flex'}}><FaMapMarkerAlt /><span style={{paddingLeft:'10px'}}>23/3 Moo 5 T.Khokkloi A.Takuatung <br />Phang Nga 82140 Thailand</span></li>
              </ul>
              <br />
              <div className="social-icons">
                <a href="https://www.instagram.com/apnataibeach"><FaInstagram /></a>
                <a href="#"><FaTwitter /></a>
                <a href="https://www.linkedin.com/company/apnataibeach/"><FaLinkedinIn /></a>
                <a href="https://www.facebook.com/apnataibeach"><FaFacebookF /></a>
              </div><br></br>
          <ul  className="footer-bottom-mobile-view" style={{columnCount:'3',listStyleType:'none'}}> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/privacy-policy">Privacy Policy</a></li> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/cookie-policy">Cookie Policy</a></li> <li><a href="/terms-conditions">Terms & Conditions</a></li> </ul>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>Copyright© 2026 | AP Natai | All Rights Reserved. Designed & Developed by <a href="https://techzenon.com">Tech Zenon</a></p>
          <ul  className="footer-bottom-mobile-hide" style={{columnCount:'3',listStyleType:'none'}}> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/privacy-policy">Privacy Policy</a></li> <li style={{borderRight:'1px solid #dcdcdc60',textAlign:'center'}}><a href="/cookie-policy">Cookie Policy</a></li> <li><a href="/terms-conditions">Terms & Conditions</a></li> </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;