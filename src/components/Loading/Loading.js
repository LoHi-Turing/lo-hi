import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <section className='loading-container'>
      <h1 className='loading-message' >Loading...</h1>
      <img className='loading-gif' src='images/LoHi.gif' alt='bowl stirring animation'/>
    </section>
  )
}

export default Loading;