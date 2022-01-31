import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Recipe from './Recipe';
import Header from './Header';
import RecipeDetails from './RecipeDetails';

function App() {

  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);

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

  function handleSubmit(event) {
    event.preventDefault();

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

    axios.request(options).then(function (response) {
      fetchData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }




  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={
            <div>
              <form>
                <label>Find a Recipe <input type="text" onChange={handleChange}></input></label>

                <input type="submit" onClick={handleSubmit} value="Search"></input>
              </form>

              {recipes.map((recipe, index) => <Link to="recipe" state={recipe.id} key={index}><Recipe name={recipe.name} image={recipe.image} /></Link>)}
            </div>
          } />
          <Route path="recipe" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
