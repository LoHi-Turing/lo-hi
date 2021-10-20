import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesByCategory.css';


const RecipesByCategory = ({ allRecipesData, category }) => {

    const dataByCategory = allRecipesData.data.filter((recipe) => {

        // let mainImg = data.img.1
        if ( recipe.attributes.category === category ) {
            return (
                recipe card 
            )
        }
    })

    // map to recipes and create/ show recipe card
    return (
        <main className='recipes-by-category'>
        <h1 className='category-title'>"Category" Recipes</h1>
        <RecipeCard />
        {/* <section className='recipe-links-container'>
          <div className='recipe-main-img-link'>
            <img className='recipe-main-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Cakes category'/>
            <Link className='links'>Amazing Chocolate Cake</Link>
          </div>
        </section> */}
      </main> 
    )
}

export default RecipesByCategory;