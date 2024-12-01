import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/HotelAndAttractionCardStyles.css";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


const Card = ({ imageSrc, productTitle, linkTo }) => {
  return (
    <Link to={linkTo} className="card-anchor">

    <div className="card">
      <div className="featured-img">
        <img src={imageSrc} alt={productTitle} className="card-image" />
      </div>
      <div className="card-footer">
        <p className="product-title">{productTitle}</p>
        <p className="rating-reveiws"><FaStar/>4.1 <GoDotFill className="dot"/> 67 reviews</p>
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
