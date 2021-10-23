import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesByCategory.css';


const RecipesByCategory = ({ categoryType, allRecipesData }) => {

    // console.log(categoryType, allRecipesData.data[0])

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
    // it is returning the whole array not all the cards separate
    return (
        <main className='recipes-by-category'>
        <h2 className='category-title'>{ categoryType } Recipes</h2>
        { dataByCategory }
      </main> 
    )
}

export default RecipesByCategory;