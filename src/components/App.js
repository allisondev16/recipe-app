import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Recipe from './Recipe';
import Header from './Header';
import RecipeDetails from './RecipeDetails';

function App() {

  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState(["Recipe"]);

  const [finalSearchText, setFinalSearchText] = useState('');

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

  function fetchData(data) {
    console.log(data.results);
    const baseURI = data.baseUri;

    const recipesArray = data.results.map(result => {
      return { id: result.id, name: result.title, image: baseURI + result.image, readyInMinutes: result.readyInMinutes }
    });
    setRecipes(recipesArray);

  }

  function handleSubmit() {
    setFinalSearchText(searchText);

    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
      params: {
        query: searchText,
        instructionsRequired: 'true',
        number: '10',
        offset: '0',
        type: 'main course'
      },
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };

    axios.request(options).then(response => {
      fetchData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }




  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header onChange={handleChange} onSubmit={handleSubmit} />}>
          <Route index element={
            <h2 id='recipeResultsFor' className='container'>Welcome!</h2>
          } />
          <Route path="results" element={<div>
            <div className='container'>
              {finalSearchText && <h2 id='recipeResultsFor'>Recipe Results for {finalSearchText}</h2>}
              <div className='results'>
                {recipes.length ? recipes.map((recipe, index) => <Link to="recipe" state={recipe} key={index}><Recipe name={recipe.name} image={recipe.image} readyInMinutes={recipe.readyInMinutes} /></Link>) : <p id='notFound'>Sorry, this recipe is not found.</p>}
              </div>
            </div>
          </div>} />
          <Route path="results/recipe" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
