import './App.css';
import {useState} from 'react'

function App() {
  const [pokemons ,setPokemons ]=useState([])
  const pokemonGet=()=>{fetch("https://pokeapi.co/api/v2/pokemon")
.then(response => {
return response.json();
}).then(response => {
  setPokemons(response.results);
}).catch(err=>{
console.log(err);
})}
  return (
    <div className="App">
      <button onClick={pokemonGet}>Fetch Pokemon</button>
      {pokemons.map((pokemon,idx)=>{return<li key={idx}>{pokemon.name}</li>})}
    </div>
  );
}

export default App;
