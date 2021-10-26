import React from 'react';
import Search from '../Search/Search';
import './Landing.css';
// import brandLogo from '../../images/LoHi.png';


const Landing = ({ updateLocation }) => {
    return (
        <section className='landing'>
            <img className='background-img'src='images/dough-kneading.jpg' alt='baking'/>
            {/* <img className='background-img'src='rolling-pin.jpg' alt='baking'/> */}
                <section className='logo-and-search'>
                    <img className='logo' src='images/LoHi-yellow.png' alt='LoHi logo'/>
                    <h1 className='catch-phrase'>Where your AlTituDe matters!</h1>
                    <Search updateLocation={updateLocation}/>
                    <h2 className='how-to-use'>How To Use LoHi</h2>
                    <p>With this website you will be able to have recipies adjusted accordently to your altitude </p>
                    <p>The ingredientes that we will adjust will be: Flower , Sugar and Yeast </p>
                </section>
        </section>
    )
}

export default Landing;