import './App.css';
import {useState} from 'react'
import axios from 'axios';

function App() {
  const [pokemons ,setPokemons ]=useState([])
  const pokemonGet=()=>{axios.get('https://pokeapi.co/api/v2/pokemon')
.then(response => {
  setPokemons(response.data.results);
}).catch(err=>{
console.log(err) 
})}
  return (
    <div className="App">
      <button onClick={pokemonGet}>Fetch Pokemon</button>
      {pokemons.map((pokemon,idx)=>{return<li key={idx}>{pokemon.name}</li>})}
    </div>
  );
}

export default App;
