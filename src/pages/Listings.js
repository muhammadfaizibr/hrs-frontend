import React, { useEffect, useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelsAndAttractions from "../components/HotelsAndAttractions";
import "../assets/css/ListingStyles.css";
import Sidebar from "../components/SideBar";
import PropTypes from "prop-types";
import { ProgressContext } from "../contexts/ProgressContext";
import { CiFilter } from "react-icons/ci";
import { useLocation } from "react-router-dom";

const Listings = ({ choice }) => {
  const setProgress = useContext(ProgressContext);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("query") || "";
  const searchRating = searchParams.get("rating") || "";
  const searchCity = searchParams.get("city") || "";

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const [query, setQuery] = useState(searchQuery);
  const [filters, setFilters] = useState({
    city: searchCity,
    rating: searchRating
  });

  useEffect(() => {
    setProgress(100);
   
  }, [location.search, setProgress])
  
  return (
    <section className="listing-wrapper">
      <div className="listing-header">
        <h2>Discover {choice}.</h2>
        <SearchBar query={query} setQuery={setQuery} />
        
      </div>
      <button className="filters secondary-btn" onClick={toggleMobileMenu}>
          <CiFilter /> All Filters
        </button>
      <div className="listing-content">

        <div className={isMobile ? "toggle-sidebar mobile" : "toggle-sidebar"}>
          <Sidebar filters={filters} setFilters={setFilters} />
        </div>
        <HotelsAndAttractions
          type="listing"
          heading="Top Hotels"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo."
          query={query}
          filters={filters}
        />
      </div>     
    </section>
  );
};

Listings.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Listings;
