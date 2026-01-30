'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import '../../public/css/Banner.css';

const Banner = () => {
  const router = useRouter();

  const staticBanner = {
    image: '/images/banner/conatctbanner.jpg',
    titleSmall: '',
    titleLarge: 'For Sale Property',
    buttonText: 'Learn More',
    buttonLink: '/contact',
  };

  // For Sale states
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [locations, setLocations] = useState([]);
  const [landSizes, setLandSizes] = useState([]);
  const [saleBudgets, setSaleBudgets] = useState([]);
  
  const [type, setType] = useState('');
  const [locationId, setLocationId] = useState('');
  const [landSize, setLandSize] = useState('');
  const [budget, setBudget] = useState('');

  // FETCH PROPERTY TYPES
  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const res = await axios.get('https://techzenondev.com/apnatai/api/property-types?page=1');
        const types = res?.data?.data?.data;

        if (Array.isArray(types)) {
          setPropertyTypes(types);
          if (types.length > 0) {
            setType(types[0].id.toString());
          }
        }
      } catch (err) {
        console.error('Error fetching property types:', err);
      }
    };
    fetchTypes();
  }, []);

  // FETCH LOCATIONS
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const res = await axios.get('https://techzenondev.com/apnatai/api/locations?page=1');
        const locs = res?.data?.data?.data;

        if (Array.isArray(locs)) {
          setLocations(locs);
          if (locs.length > 0) setLocationId(locs[0].id.toString());
        }
      } catch (err) {
        console.error('Error fetching locations:', err);
      }
    };
    fetchLocations();
  }, []);

  // FETCH LAND SIZES
  useEffect(() => {
    const fetchLandSizes = async () => {
      try {
        const res = await axios.get('https://techzenondev.com/apnatai/api/land-size/1/edit');
        const sizesArr = res?.data?.data?.sizes;

        if (Array.isArray(sizesArr)) {
          setLandSizes(sizesArr);
          if (sizesArr.length > 0) setLandSize(String(sizesArr[0]));
        } else {
          setLandSizes([]);
          setLandSize('');
        }
      } catch (err) {
        console.error('Error fetching land sizes:', err);
        setLandSizes([]);
        setLandSize('');
      }
    };
    fetchLandSizes();
  }, []);

  // FETCH SALE BUDGETS
  useEffect(() => {
    const fetchSaleBudgets = async () => {
      try {
        const res = await axios.get('https://techzenondev.com/apnatai/api/for-sale-budget/1/edit');
        const budgetsArr = res?.data?.data?.budgets;

        if (Array.isArray(budgetsArr)) {
          setSaleBudgets(budgetsArr);
          if (budgetsArr.length > 0) {
            setBudget(`${budgetsArr[0].min}-${budgetsArr[0].max}`);
          }
        } else {
          setSaleBudgets([]);
          setBudget('');
        }
      } catch (err) {
        console.error('Error fetching sale budgets:', err);
        setSaleBudgets([]);
        setBudget('');
      }
    };
    fetchSaleBudgets();
  }, []);

  // HANDLE FOR SALE SEARCH
  const handleRealEstateSearch = (e) => {
    e.preventDefault();

    router.push(
      `/search-for-real-estate?type=${encodeURIComponent(type)}` +
      `&location=${encodeURIComponent(locationId)}` +
      `&landsize=${encodeURIComponent(landSize)}` +
      `&budget=${encodeURIComponent(budget)}`
    );
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${staticBanner.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 1s ease-in-out',
        height: '83vh',
      }}
    >
      <div className="overlay"></div>

      <div className="banner-content">
        {/* LEFT: TEXT */}
        <div className="center-text banner-center-text fade-in" style={{textAlign:'left'}}>
          <h2>{staticBanner.titleSmall}</h2>
          <h1 className="titlelarge-custom">{staticBanner.titleLarge}</h1>
          {staticBanner.buttonLink && (
            <a href={staticBanner.buttonLink} target="_blank" rel="noopener noreferrer">
              <button className="learn-more">{staticBanner.buttonText}</button>
            </a>
          )}
        </div>

        {/* RIGHT: FOR SALE FORM */}
        <div className="form-box">
          <div className="form-title form-title-two">
            <p className="rent-label">For Sale</p>
          </div>

          <form onSubmit={handleRealEstateSearch} className="formbannercustom">
            <label>Property Type</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              {propertyTypes.length > 0 ? (
                propertyTypes.map((pt) => (
                  <option key={pt.id} value={pt.id}>
                    {pt.name}
                  </option>
                ))
              ) : (
                <option value="">Loading...</option>
              )}
            </select>

            <label>Location</label>
            <select value={locationId} onChange={(e) => setLocationId(e.target.value)}>
              {locations.length > 0 ? (
                locations.map((loc) => (
                  <option key={loc.id} value={loc.id}>
                    {loc.name}
                  </option>
                ))
              ) : (
                <option value="">Loading...</option>
              )}
            </select>

            <label>Land Size</label>
            <select value={landSize} onChange={(e) => setLandSize(e.target.value)}>
              {landSizes.length > 0 ? (
                landSizes.map((s, idx) => (
                  <option key={idx} value={String(s)}>
                    {s} M² Area
                  </option>
                ))
              ) : (
                <option value="">Loading...</option>
              )}
            </select>

            <label>Budget</label>
            <select value={budget} onChange={(e) => setBudget(e.target.value)}>
              {saleBudgets.length > 0 ? (
                saleBudgets.map((b, idx) => {
                  const val = `${b.min}-${b.max}`;
                  const minLabel = Number.isFinite(Number(b.min))
                    ? Number(b.min).toLocaleString()
                    : b.min;
                  const maxLabel = Number.isFinite(Number(b.max))
                    ? Number(b.max).toLocaleString()
                    : b.max;

                  return (
                    <option key={idx} value={val}>
                      ฿{minLabel} - ฿{maxLabel}
                    </option>
                  );
                })
              ) : (
                <option value="">Loading...</option>
              )}
            </select>

            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
