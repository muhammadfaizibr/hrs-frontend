import React, { useState } from 'react'
import '../assets/css/HeroStyles.css';
import { PiMountainsDuotone } from "react-icons/pi";
import { LiaHotelSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";


const options_to_serach = [
    {name: "Hotels", icon: <LiaHotelSolid />},
    {name: "Attractions", icon: <PiMountainsDuotone/>}
]

const Hero = () => {
    const [search, setSearch] = useState('');
    const [selection, setSelection] = useState(options_to_serach[0].name.toLocaleLowerCase());
  return (
    <section className="hero">
        <h1 className='h1-light'>Let's Leave The Road, And Take The Travosy</h1>

        <div className="hero-action">
            <div className="selection-bar">
                {options_to_serach.map((e, i) => {
                    return <button key={e.name+i} className={`parkinsans-m-text ${e.name.toLowerCase() === selection ? 'active' : ''}`} onClick={() => {setSelection(e.name.toLowerCase())} }>{e.icon}{e.name}</button>
                })}
            </div>

            <div className="search-bar">
                <input type="text" placeholder='Search on the go...' name='search' value={search}  onChange={(e) => setSearch(e.target.value)}/>
                <button disabled={!search} className='parkinsans-m-text primary-btn'><GrSearch/>Search</button>
            </div>
        </div>
    </section>
  )
}

export default Hero