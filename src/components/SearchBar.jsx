import React, { useState } from 'react';
import '../assets/css/SearchBarStyles.css'
import { GrSearch } from 'react-icons/gr';
const SearchBar = ({query, setQuery, handleSearch, items }) => {
  return (
            <div className="search-bar listing-search-bar">
                <input type="text" placeholder='Search on the go...' name='search' value={query}  onChange={(e) => setQuery(e.target.value)}/>
                <button onClick={handleSearch} disabled={!query || items.loading} className='parkinsans-m-text primary-btn'><GrSearch/>{items.loading ? "loading..." : "Search"}</button>
                </div>  
            )
}

export default SearchBar