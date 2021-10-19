import React from 'react';
import './Header.css';

const Header = ({ location, elevation, humidity}) => {
  return (
    <section className='header'>
      <div className='header-location'>
        <p className='p-location'>Your Location is </p>
        <input className='location' type='text' value={location}/>
      </div> 
      <div className='location-info'>
        <div className='location-data'>
          <p className='p-elevation'>{elevation} m<sup>2</sup></p>
          <p classname='p-humidity'>{humidity}%</p>
        </div>
        <h1 className='company-name'>LoHi</h1>
      </div> 
    </section>
  )
}

export default Header;