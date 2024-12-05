import React, { useEffect, useContext, useState } from 'react'
import Hero from '../components/Hero'
import FeaturedCities from '../components/FeaturedCities'
import HotelsAndAttractions from '../components/HotelsAndAttractions'
import { ProgressContext } from '../contexts/ProgressContext'
import '../assets/css/HomeStyles.css'

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

const Home = () => {
  const setProgress = useContext(ProgressContext);

  useEffect(() => {
   setProgress(100); 
  }, [setProgress]);
  
  return (
    <React.Fragment>
      <Hero/>
      <section className='home-content-wrapper'>

        <FeaturedCities />
        <HotelsAndAttractions type="featured" heading="Top Hotels" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo." products={products} />
        <HotelsAndAttractions type="featured" heading="Top Attractions" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo." products={products} />
      </section>
    </React.Fragment>
  )
}

export default Home;