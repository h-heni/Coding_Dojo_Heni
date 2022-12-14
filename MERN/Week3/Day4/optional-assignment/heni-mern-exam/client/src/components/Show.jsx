import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router'
import {useNavigate}  from "react-router-dom";
import Logout from './Logout';



const Show = (props) => {
    const navigate = useNavigate()
    const [movie, setmovie] = useState({})
    const [loaded, setLoaded] = useState(false);
    const {id}=useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/movie/' +id ,{ withCredentials: true })
            .then(res => {setmovie(res.data.oneSinglemovie)
                setLoaded(true);
                console.log(res.data.oneSinglemovie);
            })
            .catch(err => console.error(err));
    }, [id]);

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/movie/delete/' + personId)
            .then(res => {console.log(res.data)
                navigate("/movies")
            })
            .catch(err => console.error(err));
    }

    return (
        <div>
            <Logout/>
            {loaded ? <div> 
                <h4>Review for {movie.title}</h4>
    <table className="table table-dark table-striped-columns">
        <thead>
            <tr>
                <th>Reviwer</th>
                <th>Rating</th>
                <th>Reviw</th>
            </tr>
        </thead>
        <tbody>
                    {movie.interaction.map((m , i)=>{
                return<tr key={i}>

                    <td>{m.name}</td>
                    <td>{m.rating}</td>
                    <td>{m.review}</td>
                </tr>
                    })}
        </tbody>
    </table>
    <button onClick={(e)=>{deletePerson(movie._id)}} type="button" class="btn btn-danger">Delete</button>

         
         </div>:<p>..loading</p>}
            
            </div>
    
    )
}

export default Show