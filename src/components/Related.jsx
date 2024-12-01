import React from "react";
import "../assets/css/RelatedStyles.css";
import HotelsAndAttractions from '../components/HotelsAndAttractions';

const products = [
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},
  {name: 'Four Points by Sheraton Lahore', url: 'https://ak-d.tripcdn.com/images/0586z12000ev98nor2228_R_300_225_R5.jpg', link: '/details'},
  {name: 'Pearl Continental Hotel, Lahore', url: 'https://ak-d.tripcdn.com/images/220b13000000tsy6o384D_R_300_225_R5.jpg', link: '/details'},
  {name: 'Avari Xpress Gulberg', url: 'https://ak-d.tripcdn.com/images/0583612000chpr1t3EBD2_R_300_225_R5.jpg', link: '/details'},

]

const Related = () => {
  return (

    
    <div className="realted-products">
      <h4>You may also like</h4>
      <HotelsAndAttractions type="listing" heading="Top Hotels" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo." products={products} />

    </div>
  );
};

export default Related;
