import './App.css';
import Form from './components/Form';
import {Routes, Route , Link } from 'react-router-dom'
import List from './components/List';

function App() {

  return (
    <div className="App">
    <h1>Favorite authors</h1>
    <Routes>
      <Route path='/new' element={<Form/>}/>
      <Route path='/' element={<List/>}/>
    </Routes>
    </div>
  );
}




export default App;