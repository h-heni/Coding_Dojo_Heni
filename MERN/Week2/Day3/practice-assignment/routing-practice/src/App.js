import './App.css';
import {
  Routes,
  Route} from "react-router-dom";
import Number from './Components/Number';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<h1>Welcome</h1>} />
        <Route path='/:number' element={<Number/>} />
        <Route path='/:number/:color1/:color2' element={<Number/>} />
      </Routes>
    </div>
  );
}

export default App;
