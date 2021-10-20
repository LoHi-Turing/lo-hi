import React from 'react';
import './RecipeCard.css';


const RecipeCard = () => {

    return (
        <Link to= { `/${ category }/${ recipie.id }`}>
            <section className='recipe-links-container'>
                <div className='recipe-main-img-link'>
                    <img className='recipe-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='{ Recipe.title }'/>
                    {/* <Link className='links'>'{ Recipe.title }'</Link> */}
                </div>
            </section>
        </Link>
    )
}

export default RecipeCard;