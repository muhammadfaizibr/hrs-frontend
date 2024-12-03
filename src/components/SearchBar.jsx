import React, { useState } from 'react';
import '../assets/css/SearchBarStyles.css'
import { GrSearch } from 'react-icons/gr';
const SearchBar = ({query, setQuery}) => {
  return (
            <div className="search-bar listing-search-bar">
                <input type="text" placeholder='Search on the go...' name='search' value={query}  onChange={(e) => setQuery(e.target.value)}/>
                <button disabled={!query} className='parkinsans-m-text primary-btn'><GrSearch/>Search</button>
                </div>  
            )
}

export default SearchBar