import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Logout = (props) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    const handleLogout = (e) => {
        axios.post("http://localhost:8000/api/logout", {user}, { withCredentials: true })
            .then((res) => {
                setUser(res.data)
                console.log("response data: ", res.data);
            })
            .catch(err => console.log(err))
        navigate("/");
    }
    return (
        <div>
            
            <button onClick={handleLogout} style={{float: "right", margin:'20px'}} type="button" class="btn btn-dark">Logout</button>

        </div>
    )
}

export default Logout