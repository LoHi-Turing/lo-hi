import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <main className='categories-display'>
      <h2 className='baking-categories-title'>Baking Categories</h2>
      <section className='links-container'>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Cakes category'/>
          <Link to='/cake' className='links'>Cake</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Bread category'/>
          <Link to='/bread' className='links'>Bread</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Cookies category'/>
          <Link to='/cookie'className='links'>Cookie</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Muffin category'/>
          <Link to='/muffin' className='links'>Muffin</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Pancakes category'/>
          <Link to='/pancakes' className='links'>Pancakes</Link>
        </div>
      </section>
    </main> 
  )
}

export default AllCategories;