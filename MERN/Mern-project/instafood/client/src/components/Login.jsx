import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './login.css'
    const Login = (props) => {
        const navigate = useNavigate()
        const turn =() =>{
            navigate('/register')
        }
        const [errors, setErrors] = useState({})
        const [login, setLogin] = useState({
            email: "",
            password: ""
        })

     // handle onChange for login inputs
     const handleLoginChange = (e) => {
        e.preventDefault();
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }

const loginHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/login", login, { withCredentials: true })
        .then(res => {
            console.log("Cookie be like", document.cookie);
            console.log("Data be like", res.data);
            navigate('/movies');
        })
        .catch(err => {console.log("lkjhlh",err.response.data);
        setErrors(
            
            err.response.data
        )
    
    });

}
    return (
        <div className="auth-form-container">
            <h1>Sign in</h1>
            <p className="text-white-50 mb-5">Please enter your Email and Password!</p>
            <form className="login-form" onSubmit={loginHandler}>
                <label htmlFor="email">Email</label>
                <input value={login.email} onChange={handleLoginChange}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={login.password} onChange={handleLoginChange} type="password" placeholder="********" id="password" name="password" />
                <br />
                <div>
                <button type="submit">Log In</button>
                </div>
                <p style={{ color: "red" }}>{errors.msg}</p>

            </form>
            <button className="link-btn" onClick={turn}>Don't have an account? Register here.</button>
        </div>
    )
}

export default Login