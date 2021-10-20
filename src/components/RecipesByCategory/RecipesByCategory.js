import React from 'react';
import './RecipesByCategory.css';


const RecipesByCategory = (allData) => {

    const dataByCategory = allData.map((data) => {

        let mainImg = src of the main img 
        if ( data.category === category ) {
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