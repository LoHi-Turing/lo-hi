import React, {useState} from 'react';
import './Header.css';

const Header = ({ location, elevation, humidity, updateLocation}) => {

  const [changeQuery, setChangeQuery] = useState('')

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
          <p className='p-elevation'>{elevation} m<sup>2</sup></p>
          <p classname='p-humidity'>{humidity}%</p>
        </div>
        <h1 className='company-name'>LoHi</h1>
      </div> 
    </section>
  )
}

export default Header;