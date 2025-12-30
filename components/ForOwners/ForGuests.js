import React from "react";
import "../../public/css/forguests.css";
import aboutimg from "../../public/images/images/ownermain.webp";
import aboutimg2 from "../../public/images/images/2.webp";
import aboutimg3 from "../../public/images/images/3.webp";
import aboutimg4 from "../../public/images/images/4.webp";
import aboutimg5 from "../../public/images/images/5.webp";
import aboutimg6 from "../../public/images/images/6.jpg";
import aboutimg7 from "../../public/images/images/7.webp";
import aboutimg8 from "../../public/images/images/8.jpg";
import Image from "next/image";


const ForGuests = () => {
  return (
    <>
    <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Selling</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Sell Property in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
           Selling your property in Natai, Phang-nga is an art, and AP Natai perfects it. We showcase your property’s unique features, ensuring it attracts the right buyers and commands the best price.
          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
           Natai, Phang-nga, with its pristine beaches and vibrant real estate market, is a hotbed for property sales. Selling here means tapping into a pool of discerning buyers and maximising returns.
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
            Our property selling approach is data-driven, backed by in-depth market research. AP Natai’s dedicated team ensures your property is priced right, marketed effectively, and sold swiftly.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
           With our establishment in 2005, AP Natai’s expertise in the Natai, Phang-nga property market is unmatched. Our deep-rooted connections and insights make selling a smooth and profitable venture.
          </p>
        </div>
      </div>
    </section>
{/* listing section */}
 <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Listing</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg2} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            List Rental Property in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
           Listing your rental property in Natai, Phang-nga with AP Natai ensures it gets the spotlight it deserves. We amplify its appeal, ensuring it’s a top choice for potential renters.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
        Natai, Phang-nga, renowned for its serene beaches and robust real estate market, is a sought-after rental destination. Listing here means reaching a vast audience of potential renters.
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
          Our listing strategy for rental properties is a blend of in-depth market analysis, strategic pricing, and effective marketing. AP Natai’s team ensures your property doesn’t just list but shines.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
     With our roots dating back to 2005, AP Natai has unparalleled insights into the rental market of Natai, Phang-nga. Our extensive experience ensures your property is listed optimally for maximum returns.
          </p>
        </div>
      </div>
    </section>


    {/* Service section */}

     <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Services</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg3} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Villa Services in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
          Immerse yourself in the epitome of luxury with the exquisite villa services in Natai, Phang-nga, provided by AP Natai. Your journey towards elite living, enveloped by serene landscapes and unparalleled comfort, begins here.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
       At AP Natai, we don’t just provide villa services; we craft unparalleled living experiences. Our meticulous attention to detail, profound understanding of luxury, and unwavering commitment to excellence make us the quintessential partner for your villa services in Natai, Phang-nga. 
                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Our approach towards villa services is as unique as the properties we represent. At AP Natai, we blend traditional Thai elegance with contemporary luxury, ensuring each client experiences a seamless, tailored service that is both personal and exceptional. It’s not just a service; it’s an experience, uniquely AP Natai.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
When it comes to specialised villa services in Natai, Phang-nga, AP Natai stands unrivalled as the local connoisseur of luxury living. Our intrinsic knowledge of the locale, coupled with a stellar reputation for delivering exceptional property services, positions us as the “go to” company, crafting remarkable living experiences in this paradisiacal location.
          </p>
        </div>
      </div>
    </section>

    {/* Management */}

       <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Management</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg4} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Property Management in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
         nveil a holistic approach to property management in Natai, Phang-nga with AP Natai. Our comprehensive services ensure that your property remains in immaculate condition, reflecting its true value.
                   </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
In the bustling real estate landscape of Natai, Phang-nga, efficient property management is not just a need, it’s an imperative. Safeguarding your investment and maintaining its allure is paramount.                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Our property management services go beyond mere maintenance. At AP Natai, we integrate cutting-edge technologies, industry insights, and hands-on expertise, ensuring that your property is not just managed, but nurtured.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Serving since 2005, AP Natai stands tall as a beacon of reliability and excellence in property management in Natai, Phang-nga. Our dedicated team, with its unparalleled local insights, is committed to exceeding your expectations.          </p>
        </div>
      </div>

      <div className="contentpart">
        <h4>Effortless Villa Management with AP-Natai in Natai, Phang-nga</h4>
        <p>At AP-Natai, professional villa management is not merely a service; it’s a pledge of unparalleled dedication. We immerse ourselves in every facet of villa management, from staffing, maintenance, and meticulous service follow-up, to the intricate workings of administration, marketing, reservations, and contract oversight. With a steadfast commitment to achieving complete customer satisfaction, we underscore the importance of swift and efficient responses to every guest request, alongside a 5-star service that orchestrates airport transfers, car rentals, hostess services, babysitting, boat trips, tour activities, and so much more.</p>
        <p>We sculpt our extensive experience to align with your unique needs, ensuring that your villa is not only maintained to the zenith of standards but also guarantees your guests an extraordinary holiday experience.</p>
        <p>To alleviate the villa owner’s burden, AP-Natai seamlessly manages all utilities, including telephone, water, power, and monthly subscriptions, crafting an effortless ownership experience.</p>
        <p>At AP-Natai, ensuring you step into a fully fitted home is paramount to us. We orchestrate the shopping to ensure your bar & wine cellar is stocked and your fridge is filled with a curated selection of local and imported groceries.</p>
        <p>Vehicle operation and maintenance, from monitoring battery charge to preventing brake pad rusting and other maintenance issues, are handled with utmost care by AP-Natai, ensuring no unpleasant surprises upon your arrival.</p>
        <p>Proactive and vigilant, AP-Natai oversees all preventive maintenance required at your property on your behalf, encompassing generators, transformers, pumps, and more, to ensure a smooth, trouble-free ownership experience.</p>
        <p>Your travel and entertainment needs, from ticketing, excursions, activities, dining bookings, guided shopping, and more, are meticulously organised by AP-Natai, ensuring your stay in Natai, Phang-nga is nothing short of spectacular.</p>
        <p>Additionally, AP-Natai extends its expertise to assist you in dealings with government entities, financial institutions, and insurance requirements, ensuring a smooth, hassle-free experience in every interaction.</p>
        <p>With AP-Natai, you’re not just owning a villa; you’re stepping into a world where every need is anticipated, every detail meticulously curated, and every moment is a step into effortless luxury living in Natai, Phang-nga.</p>
      </div>
    </section>


{/* Maintenance */}

  <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Maintenance & Concierge</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg5} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Elevate Your Property’s{" "}<br/>
            <span className="accent"> Essence</span>
          </h1>
          <p className="description-custom">
          
          Ensuring your property remains in pristine condition while offering unmatched guest services is an art. With AP Natai’s maintenance and concierge services, experience the pinnacle of property care and guest satisfaction.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
      Natai, Phang-nga is a beacon for luxury and elegance. To match this stature, properties require meticulous maintenance and top-tier concierge services, ensuring they stand out in this elite locale.
                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Our maintenance approach ensures longevity and aesthetics, while our concierge services focus on creating unforgettable guest experiences. AP Natai’s dedicated team is your partner in property excellence.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Having been a part of Natai, Phang-nga’s real estate arena since 2005, AP Natai’s deep-rooted expertise ensures that your property is always at its best and your guests always feel special.
          </p>
        </div>
      </div>
    </section>


    {/* Marketing */}

      <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Marketing</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg6} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Property Marketing Natai,{" "}<br/>
            <span className="accent">  Phang-nga</span>
          </h1>
          <p className="description-custom">
          
          In the dynamic real estate landscape, your property needs to shine brighter than the rest. With AP Natai’s innovative marketing strategies, make sure your property is always in the spotlight.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
     Effective property marketing is not just about listing; it’s about storytelling, capturing the essence of the property, and resonating with the target audience. It’s about making a lasting impression.
                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
From virtual tours, targeted digital campaigns to immersive storytelling, AP Natai’s marketing techniques ensure your property reaches its potential buyers in the most compelling way.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
With roots in the real estate market since 2005, AP Natai combines traditional methods with modern innovations, ensuring your property gets the best of both worlds in marketing.
          </p>
        </div>
      </div>
        <div className="contentpart">
          <h4>AP-Natai: Meticulously Crafting a Luxurious Experience for Villa Owners and Guests in Natai, Phang-nga</h4>
          <p>At the heart of our operations, AP-Natai is dedicated to achieving the core objectives of the property owner, which typically encompass maximising revenue and enhancing the property value by driving occupancy and rental yield, while honouring the villa as the owner’s holiday home. Our services are carefully divided into three pivotal stages: constructing the villa brand and its marketing collateral, disseminating information about the villa on a global scale, and proficiently managing all aspects of reservations on behalf of the owner.</p>
          <p>In a market experiencing a surge in villa numbers and escalating competition for guests, it is imperative for a villa to showcase itself professionally to both prospective renters and guests during their stay. Our website immaculately showcases each villa through splendid photography, professional editorial content, detailed floor plans, and maps. Our mission is to make the properties we market distinctly stand out from the crowd, thereby elevating occupancies and yields.</p>
          <p>We manage all day-to-day reservation processes with professionalism and timeliness, utilising our exclusive myNatai software system, both via telephone and internet. This encompasses managing financial transactions related to rental payments, with regular reporting and remittance to owners. We offer strategic price positioning advice, real-time availability calendars, and airport transfers, among other services, to our client villas.</p>
          <p>Furthermore, we provide professional guest relations officers to welcome and acquaint guests with their chosen villa and its staff, manage pre-arrival arrangements and special requests, solicit feedback, liaise with villa staff, and ensure they are cared for during their stay.</p>
          <p>At AP-Natai, every detail is meticulously crafted, not just preserving but enhancing the luxurious experience for both villa owners and guests, ensuring a seamless, exquisite Natai experience.</p>
       
        </div>
    </section>



    {/* Staffing */}

        <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Staff Sourcing & Service</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg7} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Staff Sourcing & Service in Natai,{" "}<br/>
            <span className="accent">  Phang-nga</span>
          </h1>
          <p className="description-custom">
          
         The heart of every property is its staff. At AP Natai, we understand the importance of sourcing the right talent, ensuring your property operates seamlessly and your guests experience unparalleled service.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
   In the luxury real estate market of Natai, Phang-nga, every detail matters. Having dedicated and skilled staff not only elevates the guest experience but also ensures the property’s upkeep and reputation.
                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
From property managers, concierge staff to maintenance teams, AP Natai’s rigorous screening processes and training programmes ensure you get the best talent tailored for your property’s needs.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Our commitment to excellence in the Natai real estate market since 2005 has given us insights into the best staffing solutions, ensuring consistency and quality in service delivery.
          </p>
        </div>
      </div>
        <div className="contentpart">
          <h4>Preserving Villa Excellence with AP-Natai in Natai, Phang-nga</h4>
        <p>In light of the notable growth of private villa development in Natai, particularly over the last 5 years, AP-Natai was established to cater to the specific needs of maintaining private villas on behalf of villa owners residing offshore. AP-Natai has successfully brought joy to its clients by ensuring their villas are maintained meticulously while they are away.</p>  
        <p>Our villa management service is designed to circumvent the common challenges and difficulties associated with managing a property in Natai, all while safeguarding the value of your asset. We manage every facet of your villa’s operations, from hiring and training staff to handling bill payments and ensuring cleanliness.</p>  
        <p>Located in Natai, AP-Natai is strategically positioned to serve and assist Natai properties, providing reliable, insured services both short and long term to owners who deeply care about their properties but cannot maintain an extended stay to oversee or maintain their projects. AP-Natai also conducts technical surveys to ensure investors’ assets are preserved in prime condition.</p>  
        <p>For clients who prefer not to have permanent employees for specific tasks, such as A/C maintenance, gardening, or repairs, AP-Natai delivers comprehensive maintenance and renovation work services tailored to specific needs. This includes carpentry, masonry, piping, and waterproofing work, among others. We provide a global service for renovations or “issues to be resolved,” ensuring our clients are assisted in the best possible way.</p>  
        <p>With AP-Natai, your villa is not just a property; it’s a cherished asset, protected and maintained to the highest standards, ensuring that every return to Natai is a homecoming to a well-preserved, luxurious environment.</p>  
      
        </div>
    </section>


    {/* Renovations */}

      <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Renovations</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg8} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Renovate, Reimagine, {" "}<br/>
            <span className="accent"> Rejoice</span>
          </h1>
          <p className="description-custom">
          
          Unleash the hidden potential of your property with AP Natai’s expert renovation services. We bring your visions to life, enhancing both the aesthetic and functional aspects of your property.
                    </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
A well-executed renovation can redefine the aura of your property, elevate its market value, and enhance the living experience for occupants. AP Natai understands the nuances of the Natai, Phang-nga property market, ensuring your renovations resonate with the locale’s luxury standards.
                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Each property has a unique story. Our renovation experts collaborate closely with property owners, understanding the property’s essence and ensuring the renovations amplify its innate character.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Our commitment to the Natai real estate market since 2005 reflects in our renovation projects. Every project, big or small, is executed with precision, quality, and a touch of Natai elegance.          </p>
        </div>
      </div>
    </section>

</>



  );
};

export default ForGuests;
