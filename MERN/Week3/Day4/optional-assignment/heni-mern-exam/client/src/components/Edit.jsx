import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router'
import {useNavigate}  from "react-router-dom";
import Logout from './Logout';



const Edit = () => {
    function Return() {
        navigate("/movies")
    }
    const rates = [0,1,2,3,4,5,6,7,8,9,10]

    const navigate = useNavigate()
    const [movie, setMovie] = useState({title:""})
    const [name, setName] = useState(""); 
    const [rating, setRating] = useState(rates[0]);
    const [review, setReview] = useState("");
    const [error ,setError]=useState({name:"",review:""})
    const {id}=useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/movie/' +id)
            .then(res => setMovie(res.data.oneSinglemovie))
            .catch(err => console.error(err));
    }, [id]);
    const Edit = (e) =>{
        e.preventDefault()
        const newInt={name:name,rating:rating,review:review}
        console.log(newInt);
        axios.put('http://localhost:8000/api/movies/review/' +id ,newInt , { withCredentials: true })
        .then(res =>{ console.log(res);
        
            // navigate("/movies")
        })
        .catch(err=>{
            const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
            const obj={}
            for (const key in errorResponse){
                obj[key]=errorResponse[key].message
            }
            setError(obj)
            console.log(movie);
        })  
    }
    return (
    <form onSubmit={Edit}>
        <Logout/>
    <h4 style={{margin:"50px"}}>Add a Review for {movie.title}</h4>
    <label>Your Name</label>
    <input onChange={(e)=>{setName(e.target.value)}}/> <br />
    <label>{error.name}</label> <br />

    <label>Your Rating</label>
    <select onChange={e => setRating(e.target.value)}>
                {rates.map((number)=>{

                    return <option key={number} value={number}>{number}</option>
                })
                }
            </select>  <br /> <br />
    <label>Your Review</label>
    <form class="form-floating">
  <input onChange={(e)=>{setReview(e.target.value)}} class="form-control" id="floatingInputValue" placeholder="Add Your Review Here"/>
  <label for="floatingInputValue">Input with value</label>
</form>
    <label>{error.review}</label> <br />


        <button style={{marginLeft:"70px" , marginRight:"20px"}} type='submit'>Submit</button>
        <button onClick={Return}>Cancel</button>
        </form> 
    )


}

export default Edit