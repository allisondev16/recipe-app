import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Recipe from './Recipe';
import Header from './Header';
import RecipeDetails from './RecipeDetails';

function App() {

  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState(["Welcome"]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

  function fetchData(data) {
    console.log(data.results);
    const baseURI = data.baseUri;

    const recipesArray = data.results.map(result => {
      return { id: result.id, name: result.title, image: baseURI + result.image }
    });
    setRecipes(recipesArray);

  }

  function handleSubmit() {

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
            <div>
              {recipes.length ? recipes.map((recipe, index) => <Link to="recipe" state={recipe} key={index}><Recipe name={recipe.name} image={recipe.image} /></Link>) : <p id='notFound'>Sorry, this recipe is not found.</p>}
            </div>
          } />
          <Route path="recipe" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
