import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

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
    <form className='login' onSubmit={loginHandler}>
    <div>
        <label>Email address</label> <br />
        <input name="email" onChange={handleLoginChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    </div>
    <div>
        <label>Password</label> <br />
        <input name="password" onChange={handleLoginChange} type="password" className="form-control" id="exampleInputPassword1" />
    </div> <br />

    <button type="submit">Login</button>
    <p style={{ color: "red" }}>{errors.msg}</p>
</form>
  )
}

export default Login