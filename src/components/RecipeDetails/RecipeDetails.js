import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = () => {
  return (
    <section className='recipe-details-container'>
        <div className='recipe-details-main-img-container'>
        <img className='recipe-details-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='image'/>
        <h3 className='recipie-details-title'>Howdy</h3>
      </div>
    </section>
  )
}

export default RecipeDetails;