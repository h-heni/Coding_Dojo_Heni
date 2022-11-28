import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';
import {useState} from 'react'


function App() {
  const [squares, setSquares] = useState([{color:'red',height:'100px',width:'100px'},{color:'green',height:'100px',width:'100px'},{color:'purple',height:'100px',width:'100px'}]);

  const onNewColor = (color,height,width)=>{

    setSquares([...squares,{color:color,height:height,width:width}])
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
