import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Routes,Route}  from "react-router-dom";
import Show from './components/Show';

function App() {
  return (
    <div className="App">
    <Routes>
      
      
      <Route path="/form" element={<Form/>} />
      <Route path="/all-product" element={<List/>} />
      <Route path="/:id" element={<Show/>} />
    </Routes>
    </div>
  );
}

export default App;
