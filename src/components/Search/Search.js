import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <form className='search-field'>
        {/* I've started the idea of having the onChange function, did not went to far so you we can decide together if you prefer */}
            {/* <input type='search' className='search-bar' placeholder='ZipCode or City Name' onChange={(e) => handleChange(e)}/> */}
            <input type='search' className='search-bar' placeholder='ZipCode or City Name'/>
            <img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass'/>
        </form>
    )
}

export default Search;

