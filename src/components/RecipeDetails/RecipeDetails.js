import React from 'react';
import './RecipeDetails.css';

const RecipeDetails = ({ categoryType, recipeId, currentRecipe }) => {
  const ingredientList = currentRecipe.attributes.ingredients.map(ingredient => (
    <li>{ingredient}</li>
  ))
  return (
    <section className='recipe-details-container'>
        <div className='recipe-details-main-img-container'>
        <img className='recipe-details-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='baked good'/>
        <h3 className='recipie-details-title'>{currentRecipe.attributes.title}</h3>     
        <h3>Ingredients</h3>   
        <ul>{ingredientList}</ul>
        <h3>Instruction</h3>
        <p>{currentRecipe.attributes.description}</p>        
        <p>{currentRecipe.attributes.cook_time}</p>
      </div>
    </section>
  )
}

export default RecipeDetails;