import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Recipe from './Recipe';
import Header from './Header';
import RecipeDetails from './RecipeDetails';
import Category from './Category';

function App() {

  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);

  const [finalSearchText, setFinalSearchText] = useState('');

  const [firstCategoryRecipes, setFirstCategoryRecipes] = useState([]);
  const [secondCategoryRecipes, setSecondCategoryRecipes] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

  function fetchData(data) {
    console.log(data.results);
    const baseURI = data.baseUri;

    const recipesArray = data.results.map(result => {
      return { id: result.id, title: result.title, image: baseURI + result.image, readyInMinutes: result.readyInMinutes }
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

  function fetchDataCategory(tags, setCategoryRecipes) {
    const options = {
      method: 'GET',
      url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
      params: { tags: tags, number: '4' },
      headers: {
        'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
      }
    };

    axios.request(options).then(response => {
      console.log(tags, response.data);
      setCategoryRecipes(response.data.recipes);
    }).catch(error => {
      console.error(error);
    });
  }

  // get the recipes for each category for the home page
  useEffect(() => {
    // fetchDataCategory(tags, setCategoryRecipes)
    fetchDataCategory("", setFirstCategoryRecipes);
    fetchDataCategory("dessert", setSecondCategoryRecipes);
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header onChange={handleChange} onSubmit={handleSubmit} />}>
          <Route index element={
            <div className='container'>
              <h2 id='recipe-results-for'>Welcome!</h2>
              <Category
                name="Featured"
                data={firstCategoryRecipes}
              />
              <Category
                name="Dessert"
                data={secondCategoryRecipes}
              />
            </div>
          } />
          <Route path="results" element={<div>
            <div className='container'>
              {finalSearchText && <h2 id='recipe-results-for'>Recipe Results for {finalSearchText}</h2>}
              <div className='results'>
                {recipes.length ? recipes.map((recipe, index) =>
                  <div className='recipeItem' key={index}>
                    <Link to="recipe" state={recipe}>
                      <Recipe name={recipe.title} image={recipe.image} readyInMinutes={recipe.readyInMinutes} />
                    </Link>
                  </div>
                ) : <p id='notFound'>Sorry, this recipe is not found.</p>}
              </div>
            </div>
          </div>} />
          <Route path="results/recipe" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </Router >
  );
}

export default App;
