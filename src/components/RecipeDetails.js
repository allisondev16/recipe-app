import { useLocation } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AvTimerIcon from "@mui/icons-material/AvTimer";

function RecipeDetails() {
  const location = useLocation();
  const recipe = location.state;
  const [information, setInformation] = useState({
    extendedIngredients: [{ original: "Preparing your ingredients..." }],
    instructions: "Cooking...",
  });
  const [instructions, setInstructions] = useState(["Cooking..."]);

  useEffect(() => {
    // get data from API
    const options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipe.id}/information`,
      headers: {
        "x-rapidapi-host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setInformation(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const instruction = information.instructions;

    /*** Format the instruction into paragraphs ***/

    const instructionsArray = instruction.split(/(?=[.])|(?<=[.])/g);

    for (let index = 1; index < instructionsArray.length; index++) {
      if (instructionsArray[index][0] === ")") {
        if (instructionsArray[index][1] !== " ") {
          instructionsArray[index] = instructionsArray[index].replace(
            ")",
            ")<New Paragraph>"
          );
        }
      } else if (
        instructionsArray[index][0] !== " " &&
        instructionsArray[index][0] !== "."
      ) {
        instructionsArray[index] = `<New Paragraph>${instructionsArray[index]}`;
      }
    }

    const joinInstructionsArray = instructionsArray.join("");
    const instructionsArrayFinal =
      joinInstructionsArray.split("<New Paragraph>");
    setInstructions(instructionsArrayFinal);

    /*********************************************/
  }, [information]);

  function prepCookTime(time) {
    if (time === false || time === -1) {
      return "--";
    } else if (!time) {
      return ".......";
    } else {
      return `${time} mins`;
    }
  }

  return (
    <div className="recipe-details container">
      <div className="recipe-details__title">
        <h2>{recipe.title}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: information.summary }}
          className="summary"
        />
      </div>
      <div className="recipe-details__img-time">
        <img src={recipe.image} alt={recipe.name}></img>

        <div className="recipe-details__time">
          <AvTimerIcon
            fontSize="large"
            sx={{
              color: "#FFB72B",
              backgroundColor: "#F0F9F9",
              position: "absolute",
              right: "-2px",
              top: "-2px",
            }}
          />

          <span>
            <b>Prep Time: </b>
            {prepCookTime(information.preparationMinutes)}
          </span>
          <span>
            <b>Cook Time: </b>
            {prepCookTime(information.cookingMinutes)}
          </span>
          <span>
            <b>Total Time: </b>
            {information.readyInMinutes
              ? information.readyInMinutes + " mins"
              : "......."}
          </span>
          <span>
            <b>Servings:</b>{" "}
            {information.servings ? information.servings : "......."}
          </span>
        </div>
      </div>

      <div className="recipe-details__ingredients">
        <h3>Ingredients:</h3>
        {information.extendedIngredients.map((ingredient, index) => (
          <p key={index}>{ingredient.original}</p>
        ))}
      </div>
      <div className="recipe-details__instructions">
        <h3>Instructions:</h3>
        <ol>
          {instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetails;
