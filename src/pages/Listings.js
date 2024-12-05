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

  
  const [page, setPage] = useState(1);
  const [items, setItems] = useState({
    count: 0,
    next: null,
    previous: null,
    results: [],
    loading: true,
  });
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    city: "",
    rating: "",
    placeType: "",
    amenities: "",
    subcategories: "",
    sortBy: "",
  });

  
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    setQuery(searchParams.get("query") || "");
    setFilters({
      city: searchParams.get("city") || "",
      rating: searchParams.get("rating") || "",
      placeType: searchParams.get("placetype") || "",
      amenities: searchParams.get("amenities") || "",
      subcategories: searchParams.get("subcategories") || "",
      sortBy: searchParams.get("sort_by") || "",
    });

    
    setPage(1);
    setItems({
      count: 0,
      next: null,
      previous: null,
      results: [],
      loading: true,
    });
  }, [location.search]);

  
  const handleSearch = () => {
    const searchParams = new URLSearchParams(location.search);

    searchParams.set("query", query);
    searchParams.set("city", filters.city);
    searchParams.set("rating", filters.rating);
    searchParams.set("placetype", filters.placeType);
    searchParams.set("amenities", filters.amenities);
    searchParams.set("subcategories", filters.subcategories);
    searchParams.set("sort_by", filters.sortBy);

    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState(null, "", newUrl);

    
    setPage(1);
    setItems({
      count: 0,
      next: null,
      previous: null,
      results: [],
      loading: true,
    });
  };

  useEffect(() => {
    setProgress(100);
  }, [setProgress]);

  return (
    <section className="listing-wrapper">
      <div className="listing-header">
        <h2>
          Discover {filters.placeType ? filters.placeType + "s" : "Hotels & Attractions"}
        </h2>
        <SearchBar
          query={query}
          setQuery={setQuery}
          items={items}
          handleSearch={handleSearch}
        />
      </div>
      <button className="filters secondary-btn" onClick={toggleMobileMenu}>
        <CiFilter /> All Filters
      </button>
      <div className="listing-content">
        <div className={isMobile ? "toggle-sidebar mobile" : "toggle-sidebar"}>
          <Sidebar setQuery={setQuery} filters={filters} setFilters={setFilters} />
        </div>
        <HotelsAndAttractions
          type="listing"
          heading="Top Hotels"
          subHeading="Explore the best options available in your desired category."
          query={query}
          filters={filters}
          setPage={setPage}
          setItems={setItems}
          items={items}
          page={page}
        />
      </div>
    </section>
  );
};

Listings.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Listings;
