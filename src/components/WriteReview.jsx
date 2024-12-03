import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import '../assets/css/WriteReviewStyles.css';
import generateUniqueKey from "../features/uniqueKey";

const WriteReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [review, setReview] = useState("");

  const handleSubmit = () => {
    if (rating && review) {
      alert(`Thank you for your review!\nRating: ${rating}\nReview: ${review}`);
      setRating(0);
      setReview("");
    } else {
      alert("Please provide both a rating and a review.");
    }
  };

  return (
    <div className="review-container">
      <h4>Write a Review</h4>
      <div className="stars">
        {[...Array(5)].map((_, i) => {
          const starValue = i + 1;
          return (
            <FaStar
              key={generateUniqueKey("write-a-reivew-star"+i)}
              className={`star ${starValue <= (hover || rating) ? "start-active" : ""}`}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          );
        })}
      </div>

      <div className="write-review">
        
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        placeholder="Write your review here..."
        rows={1}
      />
      <button disabled={!review} className="primary-btn-sm" onClick={handleSubmit}>Submit</button>
    
      </div>
      </div>
  );
};

export default WriteReview;
