import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {

 
  return (
    <main className='categories-display'>
      <h2 className='baking-categories-title'>Baking Categories</h2>
      <section className='links-container-line1'>
        <div className='categories-img-link'>
          <img className='category-img' src='images/Cake.svg' alt='Cakes category'/>
          <Link to='/Cake' className='links'>Cake</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='images/Bread.svg' alt='Bread category'/>
          <Link to='/Bread' className='links'>Bread</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='images/Cookie.svg' alt='Cookies category'/>
          <Link to='/Cookies'className='links'>Cookies</Link>
        </div>
      </section>
      <section className='links-container-line2'>
        <div className='categories-img-link'>
          <img className='category-img' src='images/Muffin Tin.svg' alt='Muffin category'/>
          <Link to='/Muffin' className='links'>Muffin</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='images/Pancakes.svg' alt='Pancakes category'/>
          <Link to='/Pancakes' className='links'>Pancakes</Link>
        </div>
      </section>
    </main> 
  )
}

export default AllCategories;