import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './components/recipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
      return { name: result.title, image: baseURI + result.image }
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
        'x-rapidapi-key': '639somethinge'
      }
    };

    axios.request(options).then(function (response) {
      fetchData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }




  useEffect(() => {

  }, [])




  return (
    <Router>
      <Routes>
        <Route path="/" element={<header className="navbar">
          <h1>Tasty</h1>
        </header>}>
          <Route index element={
            <div>
              <form>
                <label>Find a Recipe <input type="text" onChange={handleChange}></input></label>

                <input type="submit" onClick={handleSubmit}></input>
              </form>

              {recipes.map((recipe, index) => <Recipe key={index} name={recipe.name} image={recipe.image} />)}
            </div>
          } />
          <Route path="recipe" element={<h1>Hello</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
