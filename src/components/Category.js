import { useState, useEffect } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Category(props) {

    return (
        <div>
            <h2 id='home-category'>{props.name}</h2>
            <div className='results'>
                {props.data.map((recipe, index) =>
                    <div className='recipeItem' key={index}>
                        <Link to="results/recipe" state={recipe}>
                            <Recipe name={recipe.title} image={recipe.image} readyInMinutes={recipe.readyInMinutes} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Category;