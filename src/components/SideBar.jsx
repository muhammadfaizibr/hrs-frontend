import React, { useState } from "react";
import "../assets/css/SideBarStyles.css";

const Sidebar = () => {
  const [sortOption, setSortOption] = useState("");
  // const [selectedCategory, setSelectedCategory] = useState("");
  const [ratingThreshold, setRatingThreshold] = useState(0);

  // const categories = ["Electronics", "Fashion", "Home", "Books", "All Categories"];
  const ratings = [5, 4, 3, 2, 1];

  const handleFilterChange = () => {
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
            handleFilterChange();
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
                handleFilterChange();
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
              key={rating+i}
              className={`rating-button ${
                ratingThreshold === rating ? "active" : ""
              }`}
              onClick={() => {
                setRatingThreshold(rating);
                handleFilterChange();
              }}
            >
              {rating} Stars & Up
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
