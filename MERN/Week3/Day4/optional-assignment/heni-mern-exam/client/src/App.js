import Form from './components/Form';
import List from './components/List';
import { Route, Routes} from 'react-router-dom';
import Landing from './components/Landing';
import Show from './components/Show';
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/new" element={<Form/>} />
        <Route path="/movies" element={<List/>} />
        <Route path="/:id" element={<Show/>} />
        <Route path="/:id/review" element={<Edit/>} />
      </Routes>
    </div>
  );
}

export default App;
