import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesByCategory.css';


const RecipesByCategory = ({ categoryType, allRecipesData }) => {

    console.log(categoryType, allRecipesData.data[0])

    const dataByCategory = allRecipesData.data.filter((recipe) => recipe.attributes.category === categoryType).map(recipe =>
      (
        <RecipeCard 
            key={ recipe.id }
            id={ recipe.id }
            category= { recipe.attributes.category }
            title= { recipe.attributes.title }
            // img= { mainImg }
  
        />
    ))

        // let mainImg = recipe.attributes.img[0]     
                   


    console.log(dataByCategory)
    // it is returning the whole array not all the cards separate
    return (
        <main className='recipes-by-category'>
        <h2 className='category-title'>{ categoryType } Recipes</h2>
        {/* <RecipeCard /> */}
        { dataByCategory }
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