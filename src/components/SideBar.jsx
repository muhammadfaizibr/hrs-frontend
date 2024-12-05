import React, { useEffect, useState } from "react";
import "../assets/css/SideBarStyles.css";
import generateUniqueKey from "../features/uniqueKey";

const Sidebar = ({ setFilters, filters, setQuery }) => {
  const cities = ["Karachi", "Lahore", "Islamabad"];
  const place_type = ["hotel", "attraction"];
  const amenities = ["wifi", "wheelchair", "tv"];
  const hotelSubCategories = [
    "Hotel",
    "Bed and Breakfast",
    "Specialty Lodging",
  ];

  const attractionSubCategories = [
    "Museums",
    "Tours",
    "Nature & Parks",
    "Sights & Landmarks",
    "Food & Drink",
    "Water & Amusement Parks",
    "Spas & Wellness",
    "Shopping",
    "Fun & Games",
  ];
  const [subcategories, setSubcategories] = useState(
    filters?.placeType === "hotel" ? hotelSubCategories : attractionSubCategories
  );;

  const [sortByTypes, setSortByTypes] = useState(["reviews", "recommendations"])


  const ratings = [5, 4, 3, 2, 1];

  const handleRatingChange = (rating) => {
    if (filters.rating === rating){
      setSortByTypes(["reviews", "recommendations"])
      setFilters({  ...filters,rating: '', sortBy: 'recommendations', });
    }
    else{
      setSortByTypes(["rating", "reviews", "recommendations"])
      setFilters({  rating: rating, sortBy: 'rating' });
      
    }

  };

  const handleCityChange = (city) => {
    setFilters({ ...filters, city: city });
  };

  const handleSubcategoryChange = (subcategories) => {
    setFilters({ ...filters, subcategories: subcategories });
  };

  const handlePlaceType = (place_type) => {
    setFilters({ ...filters, placeType: place_type });
  };
  const handleSortOptionChange = (item) => {
    setFilters({ ...filters, sortBy: item, rating: filters.sortBy ? 'recommendations' === '' : filters?.rating  });
    setSortByTypes(item === "rating" ?  ["reviews", "recommendations", "rating"]: ["reviews", "recommendations"])

  };

  const handleAmenitiesChange = (item) => {
    const currentAmenities = [...(filters?.amenities || [])];

    const index = currentAmenities.findIndex((amenity) => amenity === item);

    if (index !== -1) {
      currentAmenities.splice(index, 1);
    } else {
      currentAmenities.push(item);
    }

    setFilters({ ...filters, amenities: currentAmenities });
  };

  useEffect(() => {
    setSubcategories(
      filters?.placeType === "hotel" ? hotelSubCategories : attractionSubCategories
    );
  }, [filters]);
  return (
    <div className="sidebar">
      <h3>Filters</h3>

      {/* Sorting Options */}
      <div className="filter-group">
        <h4>Sort By</h4>
        <select
          value={filters?.sortBy}
          onChange={(item) => handleSortOptionChange(item.target.value)}
        >
          {sortByTypes.map((e, i) => (
            <option
              value={e}
              key={generateUniqueKey(`side-bar-filter-sort-by-${e}-${i}`)}
            >
              {e}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-group">
        <h4>Rating Threshold</h4>
        <div className="rating-buttons">
          {ratings.map((rating, i) => (
            <button
              key={generateUniqueKey("side-bar-filter-rating" + rating + i)}
              className={`rating-button ${
                rating === parseInt(filters?.rating) ? "active" : ""
              }`}
              onClick={() => {
                handleRatingChange(rating)
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
              key={generateUniqueKey("side-bar-filter-city" + c + i)}
              className={`rating-button ${c === filters?.city ? "active" : ""}`}
              onClick={() => {
                setFilters({ ...filters, city: c });
                handleCityChange(c);
              }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <h4>Category</h4>
        <div className="rating-buttons">
          {place_type.map((item, i) => (
            <button
              key={generateUniqueKey("side-bar-filter-place-type" + item + i)}
              className={`rating-button ${
                item === filters.placeType ? "active" : ""
              }`}
              onClick={() => {
                handlePlaceType(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      {/* <div className="filter-group">
        <h4>Amenities</h4>
        <div className="rating-buttons">
          {amenities.map((item, i) => (
            <button
              key={generateUniqueKey("side-bar-filter-amenities" + item + i)}
              className={`rating-button ${
                filters?.amenities?.includes(item) ? "active" : ""
              }`}
              onClick={() => {
                handleAmenitiesChange(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div> */}
      <div className="filter-group">
        <h4>Subcategoies</h4>
        <div className="rating-buttons">
          {subcategories.map((item, i) => (
            <button
              key={generateUniqueKey("side-bar-subcategories" + item + i)}
              className={`rating-button ${
                filters?.subcategories?.includes(item) ? "active" : ""
              }`}
              onClick={() => {
                handleSubcategoryChange(item);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
