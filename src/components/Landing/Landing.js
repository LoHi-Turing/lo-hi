import React from 'react';
import Search from '../Search/Search';
import './Landing.css';

const Landing = ({ updateLocation }) => {
    return (
        <section className='landing'>
            <img className='background-img'src='images/dough-kneading.jpg' alt='baking'/>
                <section className='logo-and-search'>
                    <img className='logo' src='images/LoHi-yellow.png' alt='LoHi logo'/>
                    <h1 className='catch-phrase'>Where your AlTituDe matters!</h1>
                    <Search updateLocation={updateLocation}/>
                    <h2 className='how-to-use'>How To Use LoHi:</h2>
                    <p>We adjust recipies based on your altitude!</p>
                    <p>Our pre-loaded recipies will automatically adjust the most common ingredients changed with altitude: sugar, flour, baking powder and soda. We also provide your local humidity to take into account for possible adjustments in liquids. Other adjustments to consider for high altitude: increased oven temperature and shorter cook time.</p>
                </section>
        </section>
    )
}

export default Landing;