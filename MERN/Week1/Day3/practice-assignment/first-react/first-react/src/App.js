import './App.css';
import PersonCard from './component/PersonCard';

const profile=[
  {'firstName':'Doe','lastName':'Jane','age':45,'hairColor':'Black'},
  {'firstName':'Smith','lastName':'John','age':88,'hairColor':'Brown'},
  {'firstName':'Fillmore','lastName':'Millard','age':50,'hairColor':'Brown'},
  {'firstName':'Smith','lastName':'Maria','age':62,'hairColor':'Brown'}
]
function App() {
  return (
    <div className="App">
      <PersonCard profile={profile}/>
    </div>
  );
}


export default App;
