import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function RecipeDetails() {
    const location = useLocation();
    const recipe = location.state;

    useEffect(() => {
        // get data from API
        const options = {
            method: 'GET',
            url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/information`,
            headers: {
                'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            }
        };

        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])


    return (
        <div className='recipeDetails'>
            <h2>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name}></img>

        </div>
    )
}

export default RecipeDetails;