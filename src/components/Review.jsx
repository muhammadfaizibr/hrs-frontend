import React from 'react'
import '../assets/css/ReviewStyles.css';
import { FaStar } from "react-icons/fa6";
import generateUniqueKey from '../features/uniqueKey';

const Review = () => {
    const rating_number = 4.5;
  return (
    <div className="review">
        <div className="name-logo">
            AI
        </div>

        <div className="review-content">
            <p className="reviewer-name">Muhammad Ahmed</p>
            <p className="reviewer-ratings">{rating_number}<span>{[...Array(parseInt(rating_number))].map((_, i) => {
            return <FaStar key={generateUniqueKey("reviewer-rating-filled_stars" + i)} />;
          })} </span></p>
            <p className="review-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque assumenda incidunt facilis, facere, fugit vel inventore dignissimos, sapiente cum blanditiis nostrum voluptas? Sint quasi quisquam repellat harum odio distinctio voluptatum excepturi, aliquam, dolorem cum sed, facere sequi vel doloremque.</p>
        </div>
    </div>
  )
}

export default Review