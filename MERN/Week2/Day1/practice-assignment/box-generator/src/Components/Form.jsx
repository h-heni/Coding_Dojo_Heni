import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

const handle=(e)=>{
    e.preventDefault()
    props.onNewColor( color,height,width );

}

  return (
    <form onSubmit={handle}>
        <label>Color</label>
        <input onChange={(e)=>setColor(e.target.value)}/>
        <label>height</label>
        <input onChange={(e)=>setHeight(e.target.value)}/>
        <label>width</label>
        <input onChange={(e)=>setWidth(e.target.value)}/>

    <button type='submit'>ADD</button>
    </form>
  )
}

export default Form