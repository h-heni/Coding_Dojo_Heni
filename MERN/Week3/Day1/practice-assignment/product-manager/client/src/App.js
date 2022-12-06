import './App.css';
import Form from './components/Form';
import List from './components/List';
import {Routes,Route,Link}  from "react-router-dom";
import Show from './components/Show';
import Edit from './components/Edit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Link to="/form">Create</Link> &nbsp; &nbsp;
      <Link to="/all-product">Show All Product</Link>
    <Routes>
      <Route path="/form" element={<Form/>} />
      <Route path="/all-product" element={<List/>} />
      <Route path="/:id" element={<Show/>} />
      <Route path="/:id/edit" element={<Edit/>} />
    </Routes>
    </div>
  );
}

export default App;
