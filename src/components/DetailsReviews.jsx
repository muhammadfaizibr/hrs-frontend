import React from "react";
import "../assets/css/DetailsReviewsStyles.css";
import { FaStar, FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import Review from "./Review";

const DetailsReviews = () => {
    const rating_number = 2.5;
  return (

    
    <div className="details-reviews">
      <h4>Ratings & Reviews </h4>
      <div className="overall-ratings">
        <h1>4.5</h1>
        <div className="ratings">
        <div className="rating-stars">
          {[...Array(parseInt(rating_number))].map((_, i) => {
            return <FaStar key={"filled_stars" + i} />;
          })}
          {[...Array(rating_number % 1 !== 0)].map((_, i) => {
            return <FaRegStarHalfStroke key={"halffilled_stars" + i} />;
          })}

          {[...Array(parseInt(5 - Math.ceil(rating_number)))].map((_, i) => {
            return <FaRegStar key={"unfilled_stars" + i} />;
          })}
        </div>
        
        <div className="rating-annotates">

        <p className="total-ratings">Total Reviews: 45</p>
        <button className="primary-btn-sm">Write a Review</button>
        </div>
        </div>
      </div>
    
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    <Review/>
    </div>
  );
};

export default DetailsReviews;
