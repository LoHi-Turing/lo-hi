import React, { useEffect } from 'react';
import './RecipeDetails.css';
import Carousel from '../Carousel/Carousel';

const RecipeDetails = ({ currentRecipe }) => {

  useEffect(() => {
      // if(localStorage.chosenRecipe) {
      //   JSON.parse(localStorage.getItem('chosenRecipe'))      
      // } else {
        console.log(currentRecipe)
      if(currentRecipe && currentRecipe !== {}) {
        console.log(currentRecipe)
        localStorage.setItem('chosenRecipe', JSON.stringify(currentRecipe))
      }
  // }
  }, [currentRecipe])

  const ingredientNames = currentRecipe.attributes.ingredients.map(ingredient => <li>{Object.keys(ingredient)}</li>)
  const ingredientAmounts = currentRecipe.attributes.ingredients.map(ingredient => <li>{Object.values(ingredient)}</li>)
  const methodInstructions = currentRecipe.attributes.description.map(step => <li className='method-steps'>{step}</li>)
  const images = currentRecipe.attributes.images;

  return (
    <section className='recipe-details-main-container'>
        <div className='recipe-details-title-container'>
          <h3 className='recipie-details-title'>{currentRecipe.attributes.title}  </h3> 
          <p className='recipe-details-cook-time'>Est. Cook Time: {currentRecipe.attributes.cook_time}</p>  
        </div>        
        <div className='recipe-details-allinfo'>
          <div className='recipe-details-img-container'>
            <Carousel imgs={ images }/>
          </div>
          <div className='recipe-details-information'>            
            <div className='recipe-details-ingredients'>
              <h3 className='recipe-details-ingredient-title'>Ingredients</h3>   
              <div className='ingredient-information'>
                <ul className='recipe-details-ingredient-names'>{ingredientNames}</ul>
                <ul className='recipe-details-ingredient-amounts'>{ingredientAmounts}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className='recipe-details-instructions-container'>
          <h3 className='recipe-details-instructions-title'>Instructions</h3>
          <ol className='recipe-details-description'>{methodInstructions}</ol>     
        </div>      
    </section>
  )
}

export default RecipeDetails;