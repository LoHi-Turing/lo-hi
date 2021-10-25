import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <secion className='loading-container'>
      <h1 className='loading-message' >Loading...</h1>
      <img className='loading-gif' src='images/LoHi.gif' alt='bowl stirring animation'/>
    </secion>
  )
}

export default Loading;