import React, {useState} from 'react'

const Form = (props) => {

    const [color, setColor] = useState("");

const handle=(e)=>{
    e.preventDefault()
    props.onNewColor( color );

}

  return (
    <form onSubmit={handle}>
        <label>Color</label>
        <input onChange={(e)=>setColor(e.target.value)}/>

    <button type='submit'> ADD</button>
    </form>
  )
}

export default Form