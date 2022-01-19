import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [searchText, setSearchText] = useState('');
  const [array, setArray] = useState([]);

  function handleChange(event) {
    const searchText = event.target.value;
    setSearchText(searchText);
  }

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
