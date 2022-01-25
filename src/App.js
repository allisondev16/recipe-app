import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './components/recipe';

function App() {

  const [searchText, setSearchText] = useState('');
  const [recipes, setRecipes] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }


  function fetchData(data) {
    console.log(data.results);
    const recipesArray = data.results.map(result => {
      return { name: result.name, thumbnail: result.thumbnail_url }
    });
    setRecipes(recipesArray);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const options = {
      method: 'GET',
      url: 'https://tasty.p.rapidapi.com/recipes/list',
      params: { from: '0', size: '5', q: searchText },
      headers: {
        'x-rapidapi-host': 'tasty.p.rapidapi.com',
        'x-rapidapi-key': '639b5a8537msh53a9d6eb2b85039p180844jsn3986e4cf168e'
      }
    };

    axios.request(options).then(response => {
      fetchData(response.data);
    }).catch(error => {
      console.error(error);
    });
  }




  useEffect(() => {

  }, [])




  return (
    <div className="App">
      <header className="navbar">
        <h1>Tasty</h1>
      </header>
      <form>
        <label>Find a Recipe <input type="text" onChange={handleChange}></input></label>

        <input type="submit" onClick={handleSubmit}></input>
      </form>

      {recipes.map((recipe, index) => <Recipe key={index} name={recipe.name} image={recipe.thumbnail} />)}
    </div>
  );
}

export default App;
