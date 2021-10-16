import React from "react";
import Search from '../Search/Search';
import './Landing.css';


const Landing = () => {
    return (
        <section className='landing'>
            <img className='background-img'src='https://thumbs.dreamstime.com/b/ocher-apron-various-baking-ingredients-eggs-sugar-cinnamon-sticks-kitchen-utensils-white-background-top-view-copy-175923956.jpg' alt='baking'/>
                <div>
                    <img className='logo'src="" alt="LoHi logo"/>
                    <h1>Where your AlTituDe matters!</h1>
                    <Search/>
                    <h2>How To Use LoHi</h2>
                    <p>With this website you will be able to have recipies adjusted accordently to your altitude </p>
                    <p>The ingredientes that we will adjust will be: Flower , Sugar and Yeast </p>
                </div>
        </section>
    )
}

export default Landing;