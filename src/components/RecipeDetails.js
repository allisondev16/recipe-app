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
            console.log('Recipe info', response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    useEffect(() => {
        const instruction = information.instructions;
        console.log('original', instruction);

        /*** Format the instruction into paragraphs ***/

        const instructionsArray = instruction.split(/(?=[.])|(?<=[.])/g);
        console.log('splitted', instructionsArray);

        for (let index = 1; index < instructionsArray.length; index++) {
            if (instructionsArray[index][0] === ")") {
                if (instructionsArray[index][1] !== " ") {
                    instructionsArray[index] = instructionsArray[index].replace(")", ")<New Paragraph>");
                }
            } else if (instructionsArray[index][0] !== " " && instructionsArray[index][0] !== ".") {
                instructionsArray[index] = `<New Paragraph>${instructionsArray[index]}`;
            }
        }

        const joinInstructionsArray = instructionsArray.join("");
        const instructionsArrayFinal = joinInstructionsArray.split("<New Paragraph>");
        console.log('final', instructionsArrayFinal);
        setInstructions(instructionsArrayFinal);

        /*********************************************/

    }, [information])


    return (
        <div className='recipeDetails'>
            <div className='recipeDetails__title'>
                <h2>{recipe.name}</h2>
                <img src={recipe.image} alt={recipe.name}></img>
            </div>
            <div className='recipeDetails__time'>
                <span>
                    <span>Prep Time</span>
                    <span>{information.cookingMinutes}</span>
                </span>
                <span>
                    <span>Cook Time</span>
                    <span>10</span>
                </span>
                <span>
                    <span>Total Time</span>
                    <span>20</span>
                </span>
            </div>
            <div className='recipeDetails__ingredients'>
                <h3>Ingredients:</h3>
                {information.extendedIngredients.map((ingredient, index) => <p key={index}>{ingredient.original}</p>)}
            </div>
            <div className='recipeDetails__instructions'>
                <h3>Instructions:</h3>
                <ol>{instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
            </div>

        </div>
    )
}

export default RecipeDetails;