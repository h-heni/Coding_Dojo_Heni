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

      {profile.map(person => {
        return <PersonCard firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor} />
      })
      
      }

    </div>
  );
}


export default App;
