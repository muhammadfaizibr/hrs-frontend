import React, { useEffect, useContext, useState } from "react";
import SearchBar from "../components/SearchBar";
import HotelsAndAttractions from "../components/HotelsAndAttractions";
import "../assets/css/ListingStyles.css";
import Sidebar from "../components/SideBar";
import PropTypes from "prop-types";
import { ProgressContext } from "../contexts/ProgressContext";
import { CiFilter } from "react-icons/ci";

const products = [
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},

];

const Listings = ({ choice }) => {
  const setProgress = useContext(ProgressContext);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };



  useEffect(() => {
    setProgress(100);
  }, [setProgress]);
  return (
    <section className="listing-wrapper">
      <div className="listing-header">
        <h2>Discover {choice}.</h2>
        <SearchBar />
        
      </div>
      <button className="filters secondary-btn" onClick={toggleMobileMenu}>
          <CiFilter /> All Filters
        </button>
      <div className="listing-content">

        <div className={isMobile ? "toggle-sidebar mobile" : "toggle-sidebar"}>
          <Sidebar />
        </div>
        <HotelsAndAttractions
          type="listing"
          heading="Top Hotels"
          subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo."
          products={products}
        />
      </div>
    </section>
  );
};

Listings.propTypes = {
  choice: PropTypes.string.isRequired,
};

export default Listings;
