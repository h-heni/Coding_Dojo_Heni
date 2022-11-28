import './App.css';
import {useState} from 'react'

function App() {
  const [todo , setTodo]=useState("")
  const [list , setList]=useState([])
  const [check , setCheck]=useState(false)
  const handleform=(e)=>{
    e.preventDefault()
    setList([...list,todo])
  }
  const del= (index)=>{
    const copylist=[...list]
    copylist.splice(index,1)
    setList(copylist)
  }
  return (
    <div className="App">
      <form onSubmit={handleform}>
        <input onChange={(e)=>setTodo(e.target.value)}/>
        <button type="submit">ADD</button>
      </form>

      <div>{list.map((el,i)=>{            
        return  <p>
          <label>
                <input type="checkbox" checked={check} onChange={e => setCheck(e.target.checked)}/>
            </label>
            <label>{el}</label>
            <button onClick={()=>{del(i)}}>Delete</button>
            </p>
          
          } )}</div>


    </div>
  );
}

export default App;
