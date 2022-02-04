import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

function RecipeDetails() {
    const location = useLocation();
    const recipe = location.state;
    const [information, setInformation] = useState({ extendedIngredients: [{ original: "Preparing your ingredients..." }], instructions: "Cooking..." });
    const [instructions, setInstructions] = useState(["Cooking..."]);

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
            setInformation(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const instruction = information.instructions;

        const instructionsArray = instruction.split(/(?=[.?!])|(?<=[.?!])/g);

        for (let index = 1; index < instructionsArray.length; index++) {
            if (instructionsArray[index][0] !== ")") {
                // instructionsArray[index][1] = "<New Paragraph>";
            } else if (instructionsArray[index][0] !== " " && instructionsArray[index][0] !== ".") {
                instructionsArray[index] = `<New Paragraph>${instructionsArray[index]}`;
            }
        }

        const joinInstructionsArray = instructionsArray.join("");
        const instructionsArrayFinal = joinInstructionsArray.split("<New Paragraph>");
        console.log(instructionsArrayFinal);
        setInstructions(instructionsArrayFinal);
    }, [information])


    return (
        <div className='recipeDetails'>
            <div className='recipeDetails__container'>
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name}></img>
            </div>
            <div className='recipeDetails__container'>
                <h3>Ingredients:</h3>
                {information.extendedIngredients.map((ingredient, index) => <p key={index}>{ingredient.original}</p>)}
            </div>
            <div className='recipeDetails__container'>
                <h3>Instructions:</h3>
                <ol>{instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
            </div>

        </div>
    )
}

export default RecipeDetails;