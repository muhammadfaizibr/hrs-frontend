import React, { useState } from 'react';
import '../assets/css/SearchBarStyles.css'
const SearchBar = () => {
    const [search, setSearch] = useState();
  return (
            <div className="search-bar listing-search-bar">
                <input type="text" placeholder='Search on the go...' name='search' value={search}  onChange={(e) => setSearch(e.target.value)}/>
                <button disabled={!search} className='parkinsans-m-text primary-btn'>Search</button>
                </div>  
            )
}

export default SearchBar