import { useState, useEffect } from 'react';
import Recipe from './Recipe';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Category(props) {

    const [categoryRecipes, setCategoryRecipes] = useState([]);

    // get random recipes of the category
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
            params: { tags: props.tags, number: '4' },
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then(response => {
            console.log('breakfast', response.data);
            setCategoryRecipes(response.data.recipes);
        }).catch(error => {
            console.error(error);
        });
    }, [])

    return (
        <div>
            <h2 id='home-category'>{props.name}</h2>
            <div className='results'>
                {categoryRecipes.map((recipe, index) =>
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