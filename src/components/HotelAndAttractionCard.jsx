import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/HotelAndAttractionCardStyles.css";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import generateUniqueKey from "../features/uniqueKey";

const Card = ({ imageSrc, productTitle, number_of_reviews, rating, linkTo }) => {
  return (
    <Link to={linkTo} className="card-anchor">

    <div className="card">
      <div className="featured-img">
        <img src={imageSrc} alt={productTitle} className="card-image" />
      </div>
      <div className="card-footer">
        <p className="product-title">{productTitle}</p>
        <p className="rating-reveiws"><FaStar/>{rating} <GoDotFill className="dot"/> {number_of_reviews ? number_of_reviews : 'No'} reviews</p>
      </div>
    </div>
    </Link>

  );
};

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  productTitle: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
};

export default Card;
