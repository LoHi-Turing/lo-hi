import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import './RecipesByCategory.css';


const RecipesByCategory = ({ allRecipesData, categoryType }) => {

    const dataByCategory = allRecipesData.data.filter((recipe) => {

        // let mainImg = recipe.attributes.img[0]
        if ( recipe.attributes.category === categoryType ) {
            return (
                <RecipeCard 
                    key={ recipe.id }
                    id={ recipe.id }
                    category= { recipe.attributes.category }
                    title= { recipe.attributes.title }
                    // img= { mainImg }

                />
            )
        }
    })
    return (
        <main className='recipes-by-category'>
        <h2 className='category-title'>"Category" Recipes</h2>
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