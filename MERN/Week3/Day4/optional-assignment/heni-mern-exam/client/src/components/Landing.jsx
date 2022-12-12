import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import './Log.css'

const Landing = (props) => {

    const [register, setRegister] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })


    const [errors, setErrors] = useState({
        register: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
    })
    // ------------------------------------

    // handle onChange for registre inputs
    const handleRegisterChange = (e) => {
        e.preventDefault();
        setRegister({
            ...register,
            [e.target.name]: e.target.value
        })
    }


    // -----------------------------------

    //=========================
    // when forms are submitted
    // ========================
    // Handle register form onSumbit 
    const registerHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", register, { withCredentials: true })
            .then(res => {
                console.log(res.data);
                setRegister({
                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })
                setErrors({
                    register: {
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                        confirmPassword: ""
                    },

                })
            })
            .catch(err => setErrors({
                ...errors,
                register: err.response.data
            }))


    }
    // Handle login form onSumbit
    



    return (
        <div className='App'>
                    {/* Register Section */}
                    <div className="register">
                        <h2>Register</h2>
                        <form onSubmit={registerHandler}>
                            <div>
                                <label>First name</label> <br />
                                <input name="firstName" onChange={handleRegisterChange} type="text"/>
                            </div>

                            <div>
                                <label>Last name</label> <br />
                                <input name="lastName" onChange={handleRegisterChange} type="text"/>
                            </div>

                            <div>
                                <label>Email address</label><br />
                                <input name="email" onChange={handleRegisterChange} type="email"/>
                            </div>

                            <div>
                                <label>Password</label> <br />
                                <input name="password" onChange={handleRegisterChange} type="password"/>
                            </div>

                            <div>
                                <label>Confirm password</label> <br />
                                <input name="confirmPassword" onChange={handleRegisterChange} type="password"/>
                            </div> <br />

                            <button type="submit" >Register</button>
                            {errors.register ? Object.entries(errors.register).map(([key, value], index) => value ? <p style={{ color: "red" }} key={index}>{value.message}</p> : null) : null}
                        </form>
                    </div>
                    {/* // empty col div for spacing */}
                    <div className="col-3"></div>
                    {/* Login Section */}
                    <div className="login-form">
                        <h2>Login</h2>
                        <Login/>
                    </div>
            </div>
    )
}

export default Landing