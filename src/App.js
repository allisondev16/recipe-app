import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import Recipe from './components/recipe';

function App() {

  const [searchText, setSearchText] = useState('');
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: { from: '0', size: '20', tags: 'under_30_minutes' },
    headers: {
      'x-rapidapi-host': 'tasty.p.rapidapi.com',
      'x-rapidapi-key': '639b5a8537msh53a9d6eb2b85039p180844jsn3986e4cf168e'
    }
  };

  function fetchData() {
    return new Promise((resolve, reject) => {
      axios.request(options).then(function (response) {
        resolve(response.data);
      }).catch(function (error) {
        reject(error);
      });
    });
  }

  const recipe = fetchData();
  console.log('recipe', recipe);


  return (
    <div className="App">
      <header className="navbar">
        <h1>Tasty</h1>
      </header>
      <form>
        <label>Find a Recipe <input type="text" onChange={handleChange}></input></label>

        <input type="submit"></input>
      </form>

      {/* data.results.map(recipe => {
        return <Recipe name={recipe.name}/>
      }); */}


    </div>
  );
}

export default App;
