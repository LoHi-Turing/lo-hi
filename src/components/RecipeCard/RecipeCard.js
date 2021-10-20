import React from 'react';
import './RecipeCard.css';


const RecipeCard = (props) => {

    return (
        <Link to= { `/${ props.category }/${ props.id }`}>
            <section className='recipe-card-container'>
                <div className='recipe-card-main-img-container'>
                    <img className='recipe-card-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='{ props.title }'/>
                    {/* <Link className='links'>'{ props.title }'</Link> */}
                </div>
            </section>
        </Link>
    )
}

export default RecipeCard;