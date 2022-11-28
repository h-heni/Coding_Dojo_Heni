import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';
import {useState} from 'react'


function App() {
  const [squares, setSquares] = useState([{color:'red'},{color:'green'},{color:'purple'}]);

  const onNewColor = (color)=>{

    setSquares([...squares,{color:color}])
    console.log(squares);
  }

  return (
    <div className="App">
      <Form onNewColor={onNewColor} />
      <div className='square'>
    
      <Display squares={squares} />
      </div>
    </div>
  
  );
}

export default App;
