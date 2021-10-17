import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <section className='header'>
      <div className='header-location'>
        <p className='p-location'>Your Location is</p>
        <input className='location' type='text' value='current Location'/>
      </div> 
      <h1 className='company-name'>LoHi</h1>
    </section>
  )
}

export default Header;