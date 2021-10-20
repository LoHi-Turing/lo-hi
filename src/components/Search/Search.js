import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = ({ updateLocation }) => {

    const [location, setLocation] = useState('')

    const handleClick = () => {
        updateLocation(location)
    }

    const handleKeyPress = e => {
        console.log('yup')
        if(e.key === 'Enter') {
            e.preventDefault();
            updateLocation(location);            
        } 
    }

    return (
        <form className='search-field'>
            <input 
                type='search' 
                className='search-bar' 
                placeholder='ZipCode or City Name'
                name='location'
                value={location}
                onChange={e => setLocation(e.target.value)}
                // onKeyPress={e => handleKeyPress(e)}
                />
            <Link to='/all-categories'>            
                <button className='search-btn' onClick={() => handleClick()}><img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass'               
                /></button>
            </Link>
        </form>
    )
}

export default Search;

