import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <main className='categories-display'>
      <h1 className='baking-categories-title'>Baking Categories</h1>
      <section className='links-container'>
        <img className='cakes-category-img' src='' alt='Cakes category'/>
        <Link className='links'>Cakes</Link>
        <img className='bread-category-img' src='' alt='Bread category'/>
        <Link className='links'>Bread</Link>
        <img className='cookies-category-img' src='' alt='Cookies category'/>
        <Link className='links'>Cookies</Link>
        <img className='muffins-category-img' src='' alt='Muffin category'/>
        <Link className='links'>Muffins</Link>
        <img className='pancakes-category-img' src='' alt='Pancakes category'/>
        <Link className='links'>Pancakes</Link>
      </section>
    </main> 
  )
}

export default AllCategories;