import React from 'react';
import '../assets/css/FeaturedCardsSectionStyles.css'
import HotelAndAttractionCard from './HotelAndAttractionCard';
import PropTypes from "prop-types";
import { FiArrowRight } from "react-icons/fi";


const HotelsAndAttractions = ({type, heading, subHeading, products }) => {
  return (
    <section className='featured-cards'>
        {type === "listing" ? "" : <div className="content">
            <h2>{ heading }</h2>
            <p>{ subHeading }</p>
        </div>}

        <div className="cards">
        {products.map((e, i) => {
          return <HotelAndAttractionCard key={heading+i}imageSrc={e.url} productTitle={e.name} linkTo={'/details'} />
        })}
        </div>
        {type === "listing" ? "" : <button className='tertiary-btn'>View More <FiArrowRight/></button>}
    </section>
  )
}

HotelsAndAttractions.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  subHeading: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};


export default HotelsAndAttractions;