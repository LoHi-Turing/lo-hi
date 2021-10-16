import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <main className='categories-display'>
      <h1>Baking Categories</h1>
      <Link>Cakes</Link>
      <Link>Bread</Link>
      <Link>Cookies</Link>
      <Link>Muffins</Link>
      <Link>Pancakes</Link>
    </main> 
  )
}

export default AllCategories;