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
          <img className='category-img' src='images/muffin.png' alt='Cookies category'/>
          <Link to='/Cookie'className='links'>Cookie</Link>
        </div>
      </section>
      <section className='links-container-line2'>
        <div className='categories-img-link'>
          <img className='category-img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtEVmn0gbLTs9_owYEKIiMK2ueWl9tk9lVvEsCcL46uKlkolaEA4NB_iAqfuH5cXiPrc&usqp=CAU' alt='Muffin category'/>
          <Link to='/Muffin' className='links'>Muffin</Link>
        </div>
        <div className='categories-img-link'>
          <img className='category-img' src='https://media.istockphoto.com/vectors/pancakes-with-maple-syrup-outline-illustration-vector-id1312306188' alt='Pancakes category'/>
          <Link to='/Pancakes' className='links'>Pancakes</Link>
        </div>
      </section>
    </main> 
  )
}

export default AllCategories;