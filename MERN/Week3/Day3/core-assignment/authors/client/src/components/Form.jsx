import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

const Form = () => {
  const [name , setName] = useState("")
  const [nameError , setNameError] = useState({})

  const GetAuthor = (e)=>{
    e.preventDefault()
    console.log({name});
    axios.post("http://localhost:8000/api/author/new", {name})
    .then ((req)=>console.log(req))
    .catch((err)=>{console.log(err.response.data.error.errors.name)
    const error =err.response.data.error.errors.name;
    setNameError(error)
    })

  }
  return (
    <div>
    <Link to={"/"}>Home</Link>
    <h4>Add a new author:</h4>
    <form onSubmit={GetAuthor}>
        <label>Name:</label><br />
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/> <br />
        <p>{nameError.message}</p>
        <input type="submit" value="Submit" />
        <button><Link to={'/'}>Cancel</Link></button>
    </form>
    </div>
    )
}

export default Form