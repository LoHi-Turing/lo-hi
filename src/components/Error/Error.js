import React from 'react';
import './Error.css';

const Error = ({ errorCode }) => {

    switch(errorCode) {
        case 404:
          return (
            <section className='error-msg'>
              <img src='images/broken-egg.png'
                alt='broken egg'/>
              <h1>{errorCode}</h1>
              <h2>Page Not Found!</h2>
              <p>Don't be discouraged. Everything breaks once in a while</p>
            </section>
          )
    
        case 500:
          return (
            <section className='error-msg'>
              <img src='images/broken-egg.png'
                alt='broken egg'/>
              <h1>{errorCode}</h1>
              <h2>Experiencing Server Issues!</h2> 
              <p>Don't be discouraged. Everything breaks once in a while</p>
            </section>
          )
    
        default: 
        return (
          <section className='error-msg'>
            <img src='images/broken-egg.png'
                alt='broken egg'/>
            <h1>{errorCode}</h1>
            <h2>Experiencing Technical Diffifulties!</h2> 
            <p>Don't be discouraged. Everything breaks once in a while</p>
          </section>
        )
      }
    }

export default Error;