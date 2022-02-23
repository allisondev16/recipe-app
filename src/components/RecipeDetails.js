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
        <div className='recipeDetails container'>
            <div className='recipeDetails__title'>
                <h2>{recipe.name}</h2>
                <div dangerouslySetInnerHTML={{ __html: information.summary }} className="summary" />

            </div>
            <div className='flex'>
                <img src={recipe.image} alt={recipe.name} className='margin-left'></img>
                <div className='recipeDetails__time margin-left'>
                    <span>
                        <span>Prep Time</span>
                        <span>{information.preparationMinutes ? information.preparationMinutes + " mins" : "--"}</span>
                    </span>
                    <span>
                        <span>Cook Time</span>
                        <span>{information.cookingMinutes ? information.cookingMinutes + " mins" : "--"}</span>
                    </span>
                    <span>
                        <span>Total Time</span>
                        <span>{information.preparationMinutes + information.cookingMinutes ? information.preparationMinutes + information.cookingMinutes + " mins" : "--"}</span>
                    </span>
                    <span>
                        <span>Servings</span>
                        <span>{information.servings}</span>
                    </span>
                </div>
            </div>

            <div className='recipeDetails__ingredients margin-left'>
                <h3>Ingredients:</h3>
                {information.extendedIngredients.map((ingredient, index) => <p key={index}>{ingredient.original}</p>)}
            </div>
            <div className='recipeDetails__instructions margin-left'>
                <h3>Instructions:</h3>
                <ol>{instructions.map((instruction, index) => <li key={index}>{instruction}</li>)}</ol>
            </div>

        </div>
    )
}

export default RecipeDetails;