import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = ({ updateLocation }) => {

    const [userInput, setUserInput] = useState('')

    const handleClick = () => {
        updateLocation(userInput)
    }

    return (
        <form className='search-field'>
            <input 
                type='search' 
                className='search-bar' 
                placeholder='ZipCode or City Name'
                name='userInput'
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                />
            {userInput && <Link to='/all-categories'>            
                <button className='search-btn' type='submit' onClick={() => handleClick()}><img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass'               
                /></button>
            </Link>}
        </form>
    )
}

export default Search;

