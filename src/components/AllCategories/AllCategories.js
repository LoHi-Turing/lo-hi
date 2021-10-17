import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <main className='categories-display'>
      <h1 className='baking-categories-title'>Baking Categories</h1>
      <section className='links-container'>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Cakes category'/>
          <Link className='links'>Cakes</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Bread category'/>
          <Link className='links'>Bread</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Cookies category'/>
          <Link className='links'>Cookies</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Muffin category'/>
          <Link className='links'>Muffins</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://cdn.shopify.com/s/files/1/0258/8531/products/Lemon_Bundt_Cake_grande.jpg?v=1564603405' alt='Pancakes category'/>
          <Link className='links'>Pancakes</Link>
        </div>
      </section>
    </main> 
  )
}

export default AllCategories;