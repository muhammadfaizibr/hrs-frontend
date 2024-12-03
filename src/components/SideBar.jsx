import React, { useState } from "react";
import "../assets/css/SideBarStyles.css";
import generateUniqueKey from "../features/uniqueKey";

const Sidebar = ({setFilters, filters}) => {
  const [sortOption, setSortOption] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  // const [rating, setRating] = useState(0);
  // const [city, setCity] = useState("");

  const cities = ["Karachi", "Lahore", "Islamabad"];
  const ratings = [5, 4, 3, 2, 1];

  const handleRatingChange = (rating) => {
    setFilters({...filters, rating: rating})
  };

  const handleCityChange = (city) => {
    setFilters({...filters, city: city})
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>

      {/* Sorting Options */}
      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={sortOption}
          onChange={(e) => {
            setSortOption(e.target.value);
            handleRatingChange();
          }}
        >
          <option value="">Select</option>
          <option value="priceLowToHigh">Price: Low to High</option>
          <option value="priceHighToLow">Price: High to Low</option>
          <option value="ratingHighToLow">Rating: High to Low</option>
        </select>
      </div>

      {/* Categories as Buttons */}
      {/* <div className="filter-group">
        <h4>Category</h4>
        <div className="category-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${
                selectedCategory === category ? "active" : ""
              }`}
              onClick={() => {
                setSelectedCategory(category === "All Categories" ? "" : category);
                handleRatingChange();
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div> */}

      {/* Rating Threshold as Buttons */}
      <div className="filter-group">
        <h4>Rating Threshold</h4>
        <div className="rating-buttons">
          {ratings.map((rating, i) => (
            <button
              key={generateUniqueKey("side-bar-filter-rating"+rating+i)}
              className={`rating-button ${
                rating === parseInt(filters?.rating) ? "active" : ""
              }`}

              
              onClick={() => {
                setFilters({...filters, rating:rating});
                handleRatingChange(rating);
              }}
            >
              {rating} Stars & Up
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h4>Cities</h4>
        <div className="rating-buttons">
          {cities.map((c, i) => (
            <button
              key={generateUniqueKey("side-bar-filter-city"+c+i)}
              className={`rating-button ${
                c === filters?.city ? "active" : ""
              }`}
              onClick={() => {
                setFilters({...filters, city: c});
                handleCityChange(c);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
