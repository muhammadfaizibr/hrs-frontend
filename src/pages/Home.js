import React, { useEffect, useContext } from 'react'
import Hero from '../components/Hero'
import FeaturedCities from '../components/FeaturedCities'
import HotelsAndAttractions from '../components/HotelsAndAttractions'
import { ProgressContext } from '../contexts/ProgressContext'

const products = [
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
  {name: 'Islamabad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/New_Faisal_Mosque_Islamabad.jpg/440px-New_Faisal_Mosque_Islamabad.jpg'},
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
  {name: 'Islamabad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/New_Faisal_Mosque_Islamabad.jpg/440px-New_Faisal_Mosque_Islamabad.jpg'},
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
  {name: 'Islamabad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/New_Faisal_Mosque_Islamabad.jpg/440px-New_Faisal_Mosque_Islamabad.jpg'},
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
]

const Home = () => {
  const setProgress = useContext(ProgressContext);

  useEffect(() => {
   setProgress(100); 
  }, [setProgress]);
  return (
    <React.Fragment>
      <Hero/>
      <section className='home-content-wrapper' style={{display: 'flex', flexDirection: 'column', gap: '80px', margin: '180px 0'}}>

        <FeaturedCities />
        <HotelsAndAttractions heading="Top Hotels" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo." products={products} />
        <HotelsAndAttractions heading="Top Attractions" subHeading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatum? Ducimus nostrum beatae placeat illo." products={products} />
      </section>
    </React.Fragment>
  )
}

export default Home;