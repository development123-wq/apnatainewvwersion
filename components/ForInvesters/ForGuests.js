import React from "react";
import "../../public/css/forguests.css";
import aboutimg from "../../public/images/images/ownermain.webp";
import aboutimg2 from "../../public/images/images/banner-1-jpg-1536x866.webp";
import aboutimg3 from "../../public/images/images/banner-4-jpg-1536x704.webp";
import aboutimg4 from "../../public/images/images/PILAI_PIER_photos_v2_x4_colored-transformed-scaled-1-2048x532.webp";
import aboutimg5 from "../../public/images/images/set-sj-5_dEmKVmXvE-unsplash-scaled-1-2048x1366.webp";
import aboutimg6 from "../../public/images/images/Viva-Sunset-jpeg.webp";
import aboutimg7 from "../../public/images/images/aaq.webp";
import aboutimg8 from "../../public/images/images/8.jpg";
import Image from "next/image";


const ForGuests = () => {
  return (
    <>
    <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Buying</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Buy Property in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
           Experience luxury at its finest as you explore properties for sale in Natai, Phang-nga. Every estate presented by AP Natai is a testament to elegance, luxury, and architectural prowess.
          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
            When you’re on a quest to buy property in Natai, Phang-nga, AP Natai emerges as the premier choice. With our curated list of luxury estates, each property is a perfect blend of modern comforts and the authentic charm of Natai.
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
           With AP Natai, property buying is not just a transaction; it’s a journey. Our tailored approach ensures that every property you view resonates with your vision of a dream home, making the buying process a joyous experience.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
           Established in 2005, AP Natai has been the bedrock of luxury property sales in Natai, Phang-nga. Our legacy and in-depth local knowledge ensure that we bring to you properties that are nothing short of masterpieces.
          </p>
        </div>
      </div>
    </section>
{/* listing section */}
 <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Building</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg2} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Build Property in Natai,{" "}<br/>
            <span className="accent"> Phang-nga</span>
          </h1>
          <p className="description-custom">
          Constructing your dream property in Natai, Phang-nga is an art, and AP Natai is the master artist. We translate your vision into bricks and mortar, crafting spaces that resonate with your aspirations.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
       Natai, Phang-nga is more than a location; it’s a dream destination. The blend of serene beaches and the promise of a burgeoning real estate horizon makes it a prime spot for property construction.
          </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
          Our approach to building properties is underpinned by meticulous planning, cutting-edge designs, and unrelenting commitment to quality. With AP Natai, you’re not just building a property; you’re building a masterpiece.
          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
     Established in 2005, AP Natai brings over a decade of experience in constructing iconic properties in Natai, Phang-nga. Our legacy is built on trust, expertise, and an unwavering commitment to excellence.
          </p>
        </div>
      </div>
    </section>


    {/* Service section */}

     <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Development</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg3} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Developing Dreams into {" "}<br/>
            <span className="accent"> Reality</span>
          </h1>
          <p className="description-custom">
          Transform barren lands into architectural marvels with AP Natai. We champion property development that encapsulates your vision, ensuring every project stands as a testament to quality, luxury, and elegance.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
      Strategic property development not only reshapes the skyline but also brings economic prosperity, creates jobs, and elevates the community’s living standards. At Natai, Phang-nga, where luxury is the norm, property development plays a pivotal role in setting benchmarks for refined living.                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Every piece of land tells a story, and at AP Natai, we ensure it’s a story worth telling. Our team meticulously plans every phase, from procurement to design to construction, ensuring the end result resonates with the locale’s culture and luxury standards.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
AP Natai’s commitment to excellence since 2005 has resulted in landmark developments that redefine Natai’s skyline. Our legacy is built on trust, innovation, and a relentless pursuit of perfection.
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
            Managing Projects,{" "}<br/>
            <span className="accent"> Building Dreams</span>
          </h1>
          <p className="description-custom">
        Turn your property visions into reality with precision and efficiency. At AP Natai, we streamline every phase of your property project, ensuring timely completion and impeccable results.                   </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
A successful property project isn’t just about the final outcome but the journey to get there. Effective project management ensures budget adherence, timeline efficiency, and the desired quality, bringing your property vision to life seamlessly.                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
With a keen eye for detail and a systematic approach, AP Natai’s project managers ensure every property project is executed to perfection, respecting your time and investment.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Our presence in the Natai real estate market since 2005 stands testament to our excellence in property project management. Our legacy is built on trust, reliability, and consistent delivery of outstanding results.          </p>
        </div>
      </div>

      <div className="contentpart">

        
							<h3>AP-Natai: A Decade of Unrivalled Project Management Excellence in Natai, Phang-nga</h3>
              <p>Boasting over a decade of project management experience, spanning international marinas, individual homes, luxurious villas, apartments, and condominiums, AP-Natai has burgeoned into the most reliable neighbouring partner for project management in Natai and its vicinity.</p>
              <p>Offering comprehensive solutions in construction and environmental awareness, AP-Natai customises its services to suit the owners’ preferences, developing their assets to their utmost potential and interest. The optimal result and luxury of the villas are our paramount priority, ensuring each project not only reflects but also elevates our name and reputation.</p><p>Whether a project is in its embryonic stages or development has already been set into motion, AP-Natai possesses the resources, expertise, and unwavering commitment to steer every project to its successful completion. Through daily, weekly, and monthly planning activities, we ensure that each project is executed with a high standard of professionalism, integrity, and privacy. Recognising the critical role of supervision in achieving efficient and commendable results, we have established a proficient management team to guarantee quality performance.</p>
              <p>With a wealth of experience in project management and financial cost control of development projects, AP-Natai is wholly dedicated to ensuring our customers’ assets are managed with trustworthy and responsible professional services. We uphold only the highest standards of professional service, and achieving customer satisfaction remains the propelling force behind all our operations.</p><p>With AP-Natai at the helm, your project will be navigated to its optimal potential, ensuring your investment realises its true value.</p>						
              </div>
    </section>


{/* Maintenance */}

  <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Investment Opportunities
</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg5} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Investment Opportunities in{" "}<br/>
            <span className="accent"> Natai, Phang-nga</span>
          </h1>
          <p className="description-custom">
          
         Welcome to a world where every investment is a step towards a prosperous future. In Natai, Phang-nga, real estate investment opportunities curated by AP Natai promise not just returns, but a legacy.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
     Natai, Phang-nga isn’t just a location; it’s a lifestyle. With its pristine beaches, burgeoning real estate market, and increasing global attention, Natai stands out as an investment destination par excellence.                </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
At AP Natai, we don’t just present opportunities; we create them. Our in-depth market analyses combined with our hands-on approach ensure that every investment you make is backed by thorough research and unparalleled expertise.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Trusted since 2005, AP Natai has been the cornerstone of real estate investment in Natai, Phang-nga. Our enduring legacy is built on our commitment to bringing the best investment opportunities to our clients.          </p>
        </div>
      </div>
    </section>


    {/* Marketing */}

      <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Research</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg6} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Property Research Natai,{" "}<br/>
            <span className="accent">  Phang-nga</span>
          </h1>
          <p className="description-custom">
          
         The Natai, Phang-nga real estate market is both diverse and dynamic. With AP Natai’s property research, you’re equipped with the insights needed to navigate this landscape with confidence.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
     Property research is the foundation of informed investment decisions. It provides a snapshot of market trends, property values, and potential growth areas, ensuring you invest with clarity and purpose.           </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
AP Natai’s team of research analysts delve deep into the intricacies of the Natai property market, offering data-driven insights that are both actionable and reliable.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Our understanding of the Natai real estate market, cultivated since 2005, informs our research methodology. We combine historical data with current market trends to offer a comprehensive view of the property landscape.

          </p>
        </div>
      </div>
        <div className="contentpart">
        
							<h3><strong>AP-Natai: Crafting Exquisite Living Spaces and Enchanting Landscapes in Natai, Phang-nga</strong></h3>
              <p>In the serene and captivating locales of Natai, AP-Natai stands tall as a beacon of exceptional craftsmanship in constructing not just structures but crafting lifestyle dreams into reality. Our expertise encompasses the construction of houses, villas, shops, and even pioneering in the creation of exquisite floating structures, each piece architected to blend seamlessly with Natai’s enchanting surroundings while encapsulating a haven of luxury and comfort for its inhabitants.</p><h4><strong>Your Dream Structures Realised</strong></h4><p>Every building, from houses and villas to shops and unique floating structures, is not merely constructed but meticulously crafted by AP-Natai. Our professional and reliable building contractors, selected through a stringent process, are dedicated to bringing your envisioned project to life. Whether it’s an opulent villa overlooking the tranquil seas or a bespoke shop that mirrors the vibrant local culture, we mould every brick and beam with precision, ensuring it’s not just a structure but a testament to superior construction and your unique taste.</p><h4><strong>Enchanting Landscapes Tailored to Your Vision</strong></h4><p>Venture into a realm where your garden is not just a patch of green but a carefully curated landscape that mirrors the lushness of Natai itself. Our landscaping services, infused with knowledgeable advice on local plants and tailored care strategies, transform your outdoor spaces into personal retreats. From choosing the right flora that thrives in the local climate to ensuring they are cared for meticulously, your garden becomes a lush, serene escape right outside your doorstep.</p><h4><strong>Seamless Landscaping Organisation</strong></h4><p>Your journey with us navigates through a complete landscaping organization, from the initial purchasing and delivery to the delicate process of planting and ongoing maintenance of your garden. Every petal and leaf is handled with utmost care, ensuring that your garden remains a perennial retreat, blooming through the seasons with undeterred vigour and beauty.</p><h4><strong>Dedicated Project Management</strong></h4><p>With efficient follow-ups and detailed reports of each job by the project manager, your project stays on the right path, adhering to timelines and maintaining the high-quality standards AP-Natai is renowned for. Every stage of the construction and landscaping process is communicated transparently, ensuring you’re not just a spectator but an integral part of the journey.</p><h4><strong>Transparent Financial Dealings</strong></h4><p>Honesty forms the foundation of our dealings at AP-Natai. Financial transactions between the owner and the project manager are conducted with utmost transparency and integrity, ensuring every penny is accounted for and utilised judiciously. Your investment is not just respected but safeguarded, ensuring the fruition of your dream project in the most ethical manner.</p><p>With AP-Natai, your dreams are not just constructed; they are carefully crafted, ensuring that every brick laid and every plant sown echoes the premium lifestyle and lush beauty that is quintessentially Natai.</p>						
              </div>
    </section>



    {/* Staffing */}

        <section className="business-section">
      <h2 className="titleheadingowners" style={{width:'100%',textAlign:'center',fontSize:'35px',paddingTop:'30px'}}>Scouting</h2>
      <div className="business-top">
        {/* Left Image */}
        <div className="business-image">
          <Image src={aboutimg7} alt="Business meeting" width={700} height={500} />
        </div>

        {/* Right Text */}
        <div className="business-content">
          <h1>
            Unearth Natai’s Hidden {" "}<br/>
            <span className="accent">Property  Gems</span>
          </h1>
          <p className="description-custom">
          
         Natai, Phang-nga is a treasure trove of luxurious properties waiting to be discovered. With AP Natai’s property scouting service, you’re sure to find the perfect property that meets all your requirements.          </p>
          <a className="learn-btn" href="/contact">Let's Talk</a>
        </div>
      </div>

      {/* Bottom 3 angled boxes */}
      <div className="business-bottom">
        <div className="bottom-card">
          <h3>WHY?</h3>
          <p>
   Scouting is the first step to a successful property investment. It ensures you find properties that not only meet your requirements but also offer the best value for your investment.             </p>
        </div>

        <div className="bottom-card">
          <h3>UNIQUE</h3>
          <p>
Our property scouts are not just experts in real estate but also have a deep understanding of Natai’s unique property landscape. They use this knowledge to find properties that are a perfect match for your requirements.          </p>
        </div>

        <div className="bottom-card">
          <h3>EXPERTISE</h3>
          <p>
Having been in the Natai real estate sector since 2005, AP Natai’s scouting service benefits from our deep-rooted understanding of the local property market, ensuring you get the best deals.          </p>
        </div>
      </div>
        {/* <div className="contentpart">
          <h4>Preserving Villa Excellence with AP-Natai in Natai, Phang-nga</h4>
        <p>In light of the notable growth of private villa development in Natai, particularly over the last 5 years, AP-Natai was established to cater to the specific needs of maintaining private villas on behalf of villa owners residing offshore. AP-Natai has successfully brought joy to its clients by ensuring their villas are maintained meticulously while they are away.</p>  
        <p>Our villa management service is designed to circumvent the common challenges and difficulties associated with managing a property in Natai, all while safeguarding the value of your asset. We manage every facet of your villa’s operations, from hiring and training staff to handling bill payments and ensuring cleanliness.</p>  
        <p>Located in Natai, AP-Natai is strategically positioned to serve and assist Natai properties, providing reliable, insured services both short and long term to owners who deeply care about their properties but cannot maintain an extended stay to oversee or maintain their projects. AP-Natai also conducts technical surveys to ensure investors’ assets are preserved in prime condition.</p>  
        <p>For clients who prefer not to have permanent employees for specific tasks, such as A/C maintenance, gardening, or repairs, AP-Natai delivers comprehensive maintenance and renovation work services tailored to specific needs. This includes carpentry, masonry, piping, and waterproofing work, among others. We provide a global service for renovations or “issues to be resolved,” ensuring our clients are assisted in the best possible way.</p>  
        <p>With AP-Natai, your villa is not just a property; it’s a cherished asset, protected and maintained to the highest standards, ensuring that every return to Natai is a homecoming to a well-preserved, luxurious environment.</p>  
      
        </div> */}
    </section>


    {/* Renovations */}


</>



  );
};

export default ForGuests;
