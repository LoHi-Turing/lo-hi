import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = ({ errorCode, clearError }) => {

    switch(errorCode) {
        case 404:
          return (
            <section className='error-msg'>
              <img src='images/broken-egg.png'
                alt='broken egg'/>
              <h1>{errorCode}</h1>
              <h2>Page Not Found. Return to <Link to='/' onClick={() => clearError()}>Home Page</Link></h2>
              <p>Don't be discouraged. Everything breaks once in a while</p>
            </section>
          )
    
        case 500:
          return (
            <section className='error-msg'>
              <img src='images/broken-egg.png'
                alt='broken egg'/>
              <h1>{errorCode}</h1>
              <h2>Experiencing Server Issues. Return to <Link to='/' onClick={() => clearError()}>Home Page</Link></h2> 
              <p>Don't be discouraged. Everything breaks once in a while</p>
            </section>
          )
    
        default: 
        return (
          <section className='error-msg'>
            <img src='images/broken-egg.png'
                alt='broken egg'/>
            <h1>{errorCode}</h1>
            <h2>Experiencing Technical Diffifulties. Return to <Link to='/' onClick={() => clearError()}>Home Page</Link></h2> 
            <p>Don't be discouraged. Everything breaks once in a while</p>
          </section>
        )
      }
    }

export default ErrorPage;