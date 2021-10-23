import React, {useState} from 'react';
import './Header.css';
import { Link, useParams, useLocation } from 'react-router-dom';


const Header = ({ location, elevation, humidity, updateLocation}) => {

  const [changeQuery, setChangeQuery] = useState('')
  const { category, id } = useParams()
  const pageLocation = useLocation();

  const handleKeyPress = event => {
    if(event.key === 'Enter') {
      event.preventDefault();
      updateLocation(event.target.value);
      setChangeQuery('');
    }
  }


  return (
    <section className='header'>
      <div className='header-location'>
        <p className='p-location'>Your Location is {location}</p>
        <input 
          className='location' 
          placeholder='->Change Location<-' 
          type='text'
          name='change query'
          value={changeQuery}
          onChange={e => setChangeQuery(e.target.value)}
          onKeyPress={e => handleKeyPress(e)}
          />
      </div> 
      <div className='location-info'>
        <div className='location-data'>
          <img className='elevation-icon' src='images/arrows.svg' alt='Elevation Icon'/>
          <p className='p-elevation'>{elevation} m<sup>2</sup></p>
          <img className='humidity-icon' src='images/humidity.svg' alt='Humidity Icon'/>
          <p className='p-humidity'>{humidity} %</p>
        </div>
        <h1 className='company-name'><img className='header-logo' src='images/LoHi-white.png' alt='logo'/></h1>
        <div className='nav-links'>
          {pageLocation.pathname === '/all-categories' && <Link to='/'>Home</Link>}
          {pageLocation.pathname === `/${category}` && <Link to='/all-categories'>Categories</Link>}
          {pageLocation.pathname === `/${category}/${id}` && <Link to={`/${category}`}>{category}</Link>}
        </div>
      </div> 
    </section>
  )
}

export default Header;