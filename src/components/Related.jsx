import React from "react";
import "../assets/css/RelatedStyles.css";
import HotelsAndAttractions from '../components/HotelsAndAttractions';

const products = [
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
  {name: 'Islamabad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/New_Faisal_Mosque_Islamabad.jpg/440px-New_Faisal_Mosque_Islamabad.jpg'},
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
  {name: 'Islamabad', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/New_Faisal_Mosque_Islamabad.jpg/440px-New_Faisal_Mosque_Islamabad.jpg'},
  {name: 'Karachi', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Jinnah_Mausoleum_%28cropped%29.JPG/1600px-Jinnah_Mausoleum_%28cropped%29.JPG'},
  {name: 'Lahore', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg/440px-Minar-e-Pakistan_by_ZILL_NIAZI_3.jpg'},
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
