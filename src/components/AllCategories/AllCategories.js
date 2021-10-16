import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <main className='categories-display'>
      <h1>Baking Categories</h1>
      <section className='links-container'>
        <Link className='links'>Cakes</Link>
        <Link className='links'>Bread</Link>
        <Link className='links'>Cookies</Link>
        <Link className='links'>Muffins</Link>
        <Link className='links'>Pancakes</Link>
      </section>
    </main> 
  )
}

export default AllCategories;