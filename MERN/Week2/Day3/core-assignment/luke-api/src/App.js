import React, {useState , useEffect} from 'react'
import axios from 'axios';

import './App.css';

function App() {
  const [form , setForm]=useState(null)
  const [planets , setPlanets]=useState(['people','starships','planets'])

    useEffect(()=>{
        axios.get('https://swapi.dev/api/')
            .then(response=>{setForm(response.data)}).catch()
    }, []); 
    

  const handle=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="App">
      <form onSubmit={handle}>
      <label>Search for:</label>
      <select value={setPlanets} onChange={e => setPlanets(e.target.value)}>
                {planets.map( (planet, idx) => 
                    <option key={idx} value={planet}>{planet}</option>
                )}
            </select>
      </form>
    </div>
  );
}

export default App;
