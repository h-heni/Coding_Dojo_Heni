import React, {useState} from 'react'

const FormFunction = (props) => {
    
const [first , setFirst]=useState ("");
const [last , setLast]=useState ("");
const [email , setEmail]=useState ("");
const [password , setPassword]=useState ("");
const [confpassword , setConfpassword]=useState ("");
const user = (e)=>{
    e.preventDefault()
    const user ={first,last,email,password,confpassword}
}

  return (
    <form onSubmit={user}>
        <label>First Name: </label>
        <input onChange={(e)=>{setFirst(e.target.value)}}/> <br />
        <label>Last Name: </label>
        <input onChange={(e)=>{setLast(e.target.value)}}/> <br />
        <label>email: </label>
        <input onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        <label>Password: </label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        <label>Confirm Password: </label>
        <input type="password" onChange={(e)=>{setConfpassword(e.target.value)}}/> <br />
        <input type="submit" value="user" />
        <p><label>First Name: </label>{first}</p>
        <label>Last Name: </label><p>{last}</p>
        <label>email: </label><p>{email}</p>
        <label>Password: </label><p>{password}</p>
        <label>Confirm Password: </label><p>{confpassword}</p>
    </form>
    )
}

export default FormFunction