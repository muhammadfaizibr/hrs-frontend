import React from 'react'
import '../assets/css/DetailsHeaderStyles.css'
import { FaStar } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMail,IoMdCall } from "react-icons/io";

const DetailsHeader = ({ productTitle, imageSrc}) => {
  return (
    <section className="details-header">
      <div className="header-details">
        <h2 className="product-title">{productTitle}</h2>
        <p className="rating-reveiws"><FaStar/>4.1 <GoDotFill className="dot"/> 67 reviews <GoDotFill className="dot"/>  <HiLocationMarker/>1605 Broadway, New York City, NY 10019</p>
        <p className="rating-reveiws"><IoIosMail/> contact@domain.com <GoDotFill className="dot"/> <IoMdCall/>91 242 (995)</p>

        <p className="product-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate voluptate autem illum ipsum unde, atque omnis amet modi. Quidem in quaerat sapiente, autem cumque dolores provident sequi et omnis fugiat amet rerum placeat iusto. Numquam provident odio, ab quae aliquam sunt, repellat culpa ex sapiente neque a dolore deserunt nesciunt saepe. Odit vel sequi, deleniti possimus nulla dolorem error commodi culpa est quam accusantium esse reprehenderit obcaecati deserunt, iure atque eligendi doloribus ipsa modi aspernatur aperiam recusandae repellendus. Fugiat officia architecto nobis nam, error voluptatem inventore repudiandae esse dicta distinctio. Eveniet nobis at perspiciatis ipsum, est sint blanditiis officia?</p>

        <div className="product-amenities">
            <h3>Amenities</h3>
            <ul>
                <li className="amenities">Free Wifi</li>
                <li className="amenities">Cleaing Service</li>
                <li className="amenities">Food</li>
                <li className="amenities">Wheel Chair</li>
            </ul>
        </div>
      
      </div>
      <div className="featured-img">
        <img src={imageSrc} alt={productTitle} className="card-image" />
      </div>
    </section>
  )
}

export default DetailsHeader