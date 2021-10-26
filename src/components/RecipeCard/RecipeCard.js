import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeCard.css';


const RecipeCard = ({ id, category, title, elevation,  img , findSelectedRecipe }) => {

    return (
        <Link className='link-to-recipe-details' to= {`/${ category }/${ elevation }/${ id }`} onClick={() => {findSelectedRecipe(id)}}>
            <section className='recipe-card-container'>
                <div className='recipe-card-main-img-container'>
                    <img className='recipe-card-main-img' src={ img } alt={ title }/>
                    <h3 className='recipe-card-title'>{ title }</h3>
                </div>
            </section>
        </Link> 
    )
}

export default RecipeCard;