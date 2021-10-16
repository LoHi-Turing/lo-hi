import React from 'react';
import './AllCategories.css';
import { Link } from 'react-router-dom';

const AllCategories = () => {
  return (
    <section>
      <h1>Baking Categories</h1>
      <Link>Cakes</Link>
      <Link>Bread</Link>
      <Link>Cookies</Link>
      <Link>Muffins</Link>
      <Link>Pancakes</Link>
    </section> 
  )
}

export default AllCategories;