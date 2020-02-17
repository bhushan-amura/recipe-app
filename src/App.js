import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {
  const APP_ID = '11cbe344';
  const APP_KEY = '797e46b298abfd26de41839921b778f1';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('paneer');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {    
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    console.log(search);
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <form onSubmit={getSearch} className='search-form'>
        <input type="text" className='search-bar' value={search} onChange={updateSearch} />
        <button className='search-btn' type='submit'>Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.title} title={recipe.recipe.label} calories={recipe.recipe.calories} />
      ))}
    </div>
  );
}

export default App;
