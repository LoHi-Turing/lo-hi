import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';


const RecipeCard = ({ id, category, title, /* img */ }) => {

    return (
        // <Link to= {`/${ category }/${ id }`} >
            <section className='recipe-card-container'>
                <div className='recipe-card-main-img-container'>
                    <img className='recipe-card-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt={ title }/>
                    <h3 className='recipie-card-title'>{ title }</h3>
                    {/* <Link className='links'>'{ props.title }'</Link> */}
                </div>
            </section>
        ///* </Link> */
    )
}

export default RecipeCard;