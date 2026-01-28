'use client';
import "../../../app/globals.css";
import "../agent.css";
import verify from '../../../public/images/verified.png';
import Image from "next/image";
import Reply from '../../../app/property/[slug]/leavereply';
import { FaPhoneAlt, FaEnvelope,FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaTwitter, FaLinkedinIn, FaFacebookF } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import InnerBanner from '../../../components/InnerBanner';
import AgentProperty from '../../../components/AgentProperty';

const ForRental = () => {

  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://techzenondev.com/apnatai/api/agents/3")
      .then((res) => res.json())
      .then((data) => {
        setAgent(data.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch API");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>;

  return (
    <>
      <Header />
      <InnerBanner />

      <div className="agent-container agent-card-custom">
        <div className="agent-card">

          {/* IMAGE */}
          <img
            src={`https://techzenondev.com/apnatai/public/${agent.image}`}
            alt={agent.title}
            className="agent-image"
          />

          {/* DETAILS */}
          <div className="agent-details">
            <h2 style={{marginBottom:'20px'}}>{agent.title} <Image style={{width:'20px',height:'20px',marginBottom:'0px'}} src={verify}/></h2>
            {/* <p className="short-desc-listing" style={{marginBottom:'20px'}}>{agent.short_description}</p> */}
            <p className="agent-short-desc">{agent.short_description}</p>

            <div
              className="agent-description"
              dangerouslySetInnerHTML={{ __html: agent.description }}
            />

            {/* CONTACT */}
            <div className="contact-box">
              <h3>Contact Details</h3>
              <div className="contact-agent">

              <div className="contact-item"><FaPhoneAlt/> <span>{agent.mobile}</span></div>
              <div className="contact-item"><FaWhatsapp/> <span>{agent.whatsapp_number}</span></div>
              <div className="contact-item"><FaEnvelope/> <span>{agent.email}</span></div>
            </div>
            </div>
           

            
          </div>

        </div>
         <Reply/>
      </div>
      <AgentProperty/>

      <Footer />
    </>
  );
};

export default ForRental;
