import React, { useState } from 'react';
import './Carousel.css';
import { images } from '../../utils/carouselSampleData';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Carousel = () => {

    const [currImg, setCurrImg]= useState(0);

    return (
        <section className='carousel'>
            <div 
                className='carouselInner'
                style={{backgroundImage:`url(${images[currImg].url})`}}
            
            >
                <div 
                    className='left'
                    onClick={() => {
                        currImg > 0 && setCurrImg(currImg - 1);
                    }}
                    >
                    <ArrowBackIosIcon style={{ fontSize: 30 }}/>
                </div>
                <div className='center'>
                    <p className='carousel-p'>Photo by {images[currImg].author}</p>
                </div>
                <div 
                    className='right'
                    onClick={() => {
                        currImg < images.length - 1 && setCurrImg(currImg + 1);
                    }}
                >
                    <ArrowForwardIosIcon style={{ fontSize: 30 }}/>
                </div>

            </div>
        </section>
    )
}

export default Carousel;