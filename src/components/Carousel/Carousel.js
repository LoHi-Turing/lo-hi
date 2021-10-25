import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../../utils/carouselSampleData';

const Carousel = () => {

    const [currImg, setCurrentImg]= useState(0);

    return (
        <section className='carousel'>
            <div 
                className='carouselInner'
                style={{backgroundImage:`url(${images[currImg].url})`}}
            
            >
                <div className='left'></div>
                <div className='center'></div>
                <div className='right'></div>

            </div>
        </section>
    )
}

export default Carousel;