import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {

    const [location, setLocation] = useState('')

    const handleClick = event => {
       

    }

    return (
        <form className='search-field' onClick={e => handleClick(e)}>
        {/* I've started the idea of having the onChange function, did not went to far so you we can decide together if you prefer */}
            {/* <input type='search' className='search-bar' placeholder='ZipCode or City Name' onChange={(e) => handleChange(e)}/> */}
            <input 
                type='search' 
                className='search-bar' 
                placeholder='ZipCode or City Name'
                name='location'
                value={location}
                onChange={e => setLocation(e.target.value)}/>
            <Link to='/all-categories'>            
                <img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass'/>
            </Link>
        </form>
    )
}

export default Search;

//We might need to put the mag-glass image on a button so that we can allow the user to use the "Enter" button on prevent the default page refresh. I didn't want to do it and mess up the styling :) 

