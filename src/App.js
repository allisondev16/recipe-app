import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Recipe from './components/recipe';

function App() {

  const [searchText, setSearchText] = useState('');
  //const [array, setArray] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

  function fetchData(data) {
    console.log(data.results);
    const newArray = data.results.map(result => {
      return { name: result.name, thumbnail: result.thumbnail_url }
    });
    console.log(newArray);
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


  useEffect(() => {
    axios.request(options).then(function (response) {
      fetchData(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [])








  return (
    <div className="App">
      <header className="navbar">
        <h1>Tasty</h1>
      </header>
      <form>
        <label>Find a Recipe <input type="text" onChange={handleChange}></input></label>

        <input type="submit"></input>
      </form>

    </div>
  );
}

export default App;
