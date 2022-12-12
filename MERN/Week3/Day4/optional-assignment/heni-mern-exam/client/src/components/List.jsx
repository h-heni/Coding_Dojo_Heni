import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import {Link,useNavigate}  from "react-router-dom";
import Logout from './Logout';


const List = () => {
    const navigate = useNavigate()

    const [list , setList]=useState([])
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/movie',  { withCredentials: true })
            .then(res=>{setList(res.data.allDaMovies);
                console.log(res.data.allDaMovies);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
            console.log(list);
    },[])
    function Create() {
        navigate("/new")
    }

  return (
    <div>
        <div className="d-flex space-between justify-content-end align-items-center">
        <button onClick={Create} type="button" class="btn btn-primary">Create a New Movie</button>
        <Logout/>
        </div>
        <h1 style={{margin:'20px'}}>Movie List</h1>
        


<table className="table table-dark table-striped-columns">
    <thead>
        <tr>
            <th>Movie Title</th>
            <th>Rating</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
    {loaded ? list.map((el,i)=>{
                return        <tr key={i}>
                    <td>{el.title}</td>
                    <td>
                        {el.interaction.reduce((v, c)=> v+c.rating, 0) / el.interaction.length }
                       </td>
                    <td><Link to={`/${el._id}`}><button>Read Review</button></Link> <Link to={`/${el._id}/review`}><button>Write Review</button></Link></td>
                    </tr>
            }): <p>...loading</p>}
    </tbody>
</table>
    </div>
  )
}

export default List