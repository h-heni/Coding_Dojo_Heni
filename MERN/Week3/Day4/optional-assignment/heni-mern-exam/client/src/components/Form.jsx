import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate , Link}  from "react-router-dom";
import Logout from './Logout';


const Form = () => {
    const navigate = useNavigate()
    function Return() {
        navigate("/movies")
    }
    const rates = [0,1,2,3,4,5,6,7,8,9,10]

    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [name, setName] = useState(""); 
    const [rating, setRating] = useState(rates[0]);
    const [review, setReview] = useState("");
    const [error ,setError]=useState({})
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        const newMovie={title,interaction:[{name:name,rating:rating,review:review}]}
        console.log(newMovie);
        axios.post('http://localhost:8000/api/movie/new',newMovie ,{ withCredentials: true } )
            .then(res=>{console.log(res)
                navigate("/movies")
            })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const obj={}
                for (const key in errorResponse){
                    obj[key]=errorResponse[key].message
                }
                console.log(obj);
                setError(obj)
                console.log(newMovie);

            })  


    }

    return (
        <form onSubmit={onSubmitHandler}>
        <Logout/>
        <h4>Submit a Movie and a Review</h4> <br />
        <label >Movie Title</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)} }/> <br />
        <label>Your Name</label>
        <input type="text" onChange={(e)=>{setName(e.target.value)} }/> <br />
        {error.name} <br />
        <label>Your Rating</label>
        <select value={rating} onChange={e => setRating(e.target.value)}>
                {rates.map((number)=>{

                    return <option key={number} value={number}>{number}</option>
                })
                }
            </select>  <br /> <br />
        <label>Your Review</label>
        <form class="form-floating">
        <input onChange={(e)=>{setReview(e.target.value)}} class="form-control" id="floatingInputValue" placeholder="Add Your Review Here" value={review}/>
        <label for="floatingInputValue">Input with value</label>
        </form>
        <label>{error.review}</label> <br />

        <button style={{marginLeft:"70px" , marginRight:"20px"}} type='submit'>Submit</button>
        <button onClick={Return}>Cancel</button>
    </form>
  )
}

export default Form