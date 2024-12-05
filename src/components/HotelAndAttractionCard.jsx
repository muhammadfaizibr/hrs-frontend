import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/HotelAndAttractionCardStyles.css";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Card = ({
  imageSrc,
  productTitle,
  number_of_reviews,
  rating,
  linkTo,
  subcategories,
  placeType,
  ranking,
}) => {
  const imgSrc =
    imageSrc?.includes("developers.elementor.com") || !imageSrc
      ? "/dummy.png"
      : imageSrc;
  return (
    <Link to={linkTo} className="card-anchor">
      <div className="card">
        <div className="featured-img">
          <div className="card-image">
            <LazyLoadImage
              src={imgSrc}
              alt={productTitle}
              className="card-image"
              effect="blur"
              wrapperProps={{ style: { transitionDelay: "1s" } }}
            />
          </div>
        </div>
        <div className="card-footer">
          <p className="product-title">{productTitle}</p>
          <p className="rating-reveiws">
            <FaStar />
            {rating} <GoDotFill className="dot" />{" "}
            {number_of_reviews === 0 && rating !== 0 ? 1 : number_of_reviews == 0 ? 'no' : number_of_reviews} reviews{" "}
            <GoDotFill className="dot" /> {subcategories}{" "}
            <GoDotFill className="dot" /> {placeType} {ranking}
          </p>
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
