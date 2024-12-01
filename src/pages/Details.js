import React from 'react'
import DetailsHeader from '../components/DetailsHeader';
import DetailsReviews from '../components/DetailsReviews';

const Details = () => {
  return (

    <section className='details'>
        <DetailsHeader   productTitle='Crowne Plaza Times Square Manhattan, an IHG Hotel' imageSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'/>
        <DetailsReviews/>
    </section>
  )
}

export default Details