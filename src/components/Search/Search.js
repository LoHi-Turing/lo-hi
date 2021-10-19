import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { formatLocation } from '../../utils/utilFunctions';
import './Search.css';

const Search = ({ updateLocation }) => {

    const [location, setLocation] = useState('')

    const handleClick = () => {
        // const updatedLocation = formatLocation(location)
        updateLocation(location)
    }

    const handleKeyPress = e => {
        if(e.key === 'Enter') {
            e.preventDefault();
            updateLocation(location);
        } 
    }

    return (
        <form className='search-field'>
        {/* I've started the idea of having the onChange function, did not went to far so you we can decide together if you prefer */}
            {/* <input type='search' className='search-bar' placeholder='ZipCode or City Name' onChange={(e) => handleChange(e)}/> */}
            <input 
                type='search' 
                className='search-bar' 
                placeholder='ZipCode or City Name'
                name='location'
                value={location}
                onChange={e => setLocation(e.target.value)}
                // onKeyPress={e => handleKeyPress(e)}
                />
            <Link to='/all-categories' onKeyPress={e => handleKeyPress(e)}>            
                <img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass' onClick={() => handleClick()}
                />
            </Link>
        </form>
    )
}

export default Search;

