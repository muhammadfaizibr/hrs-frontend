import React, { useState } from 'react'
import '../assets/css/HeroStyles.css';
import { PiMountainsDuotone } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import generateUniqueKey from '../features/uniqueKey';


const options_to_serach = [
    {name: "Hotel", icon: <LiaHotelSolid />},
    {name: "Attraction", icon: <PiMountainsDuotone/>}
]

const Hero = () => {
    const navigate  = useNavigate()
    const [searchQuery, setSearchQuery] = useState('');
    const [selection, setSelection] = useState(options_to_serach[0].name.toLocaleLowerCase());
    const cities = ['Karachi', 'Islamabad', 'Lahore']
    const [city, setCity] = useState(cities[0])

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery?.trim()) {
          navigate(`/listings?query=${encodeURIComponent(searchQuery)}&place_type=${selection}&city=${city}&sort_by=recommendations`);
        }
      };
  return (
    <section className="hero">
        <h1 className='h1-light'>Let's Leave The Road, And Take The Travosy</h1>

        <div className="hero-action">
            <div className="selection-bar">
                {options_to_serach.map((e, i) => {
                    return <button key={generateUniqueKey("btn-selection"+e.name+i)} className={`parkinsans-m-text ${e.name.toLowerCase() === selection ? 'active' : ''}`} onClick={() => {setSelection(e.name.toLowerCase())} }>{e.icon}{e.name}</button>
                })}
            </div>

            <div className="search-bar">
                <input type="text" placeholder='Search on the go...' name='search' value={searchQuery}  onChange={(e) => setSearchQuery(e.target.value)}/>

                {cities.map((e, i) => {
                    return <button key={generateUniqueKey("search-btn-selection"+e+i)}  onClick={() => setCity(e)} className={`parkinsans-m-text ${e===city ? 'primary' : 'secondary'}-btn`}>{e}</button>
                })}
                <button disabled={!searchQuery} onClick={handleSearch} className='parkinsans-m-text primary-btn'><GrSearch/>Search</button>
            </div>
        </div>
    </section>
  )
}

export default Hero