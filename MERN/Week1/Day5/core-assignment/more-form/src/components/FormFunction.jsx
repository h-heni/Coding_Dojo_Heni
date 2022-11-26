import React, {useState} from 'react'

const FormFunction = (props) => {
    
const [first , setFirst]=useState ("");
const [firstError, setFirstError] = useState("");
const [last , setLast]=useState ("");
const [lastError, setLastError] = useState("");
const [email , setEmail]=useState ("");
const [emailError, setEmailError] = useState("");
const [password , setPassword]=useState ("");
const [passwordError, setpasswordError] = useState("");
const [confpassword , setConfpassword]=useState ("");
const [confpasswordError, setConfpasswordError] = useState("");

const user = (e)=>{
    e.preventDefault()
    const user ={first,last,email,password,confpassword}
    console.log(user);
    checkfirst(user)
    checklast(user)
    checkemail(user)
    checkpassword(user)
    checkconfirm(user)
}
const checkfirst=(user)=>{
    user.first.length <=2 ? setFirstError('first name must be more than 2') : setFirstError('')}
const checklast=(user)=>{
    user.last.length <=2 ? setLastError('last name must be more than 2') : setLastError('')}
const checkemail=(user)=>{
    user.email.length <=2 ? setEmailError('email must be more than 2') : setEmailError('')}
const checkpassword=(user)=>{
    user.password.length <=8 ? setpasswordError('password must be more than 8') : setpasswordError('')}
const checkconfirm=(user)=>{
    user.confpassword.value === user.password.value ? setConfpasswordError('password does not match') : setConfpasswordError('')}
    return (
    <form onSubmit={user}>
        <label>First Name: </label>
        <input onChange={(e)=>{setFirst(e.target.value)}}/> <br />
        {firstError} <br />
        <label>Last Name: </label>
        <input onChange={(e)=>{setLast(e.target.value)}}/> <br />
        {lastError} <br />
        <label>email: </label>
        <input onChange={(e)=>{setEmail(e.target.value)}}/> <br />
        {emailError} <br />
        <label>Password: </label>
        <input type="password" onChange={(e)=>{setPassword(e.target.value)}}/> <br />
        {passwordError} <br />
        <label>Confirm Password: </label>
        <input type="password" onChange={(e)=>{setConfpassword(e.target.value)}}/> <br />
        {confpasswordError} <br />
        <input type="submit" value="user" />

    </form>
    )
}

export default FormFunction