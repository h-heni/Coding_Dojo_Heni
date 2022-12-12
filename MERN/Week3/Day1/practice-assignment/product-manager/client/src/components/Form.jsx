import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate}  from "react-router-dom";


const Form = () => {
    const navigate = useNavigate()
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const [error ,setError]=useState({})
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        const newProduct={title:title,price:price,description:description}
        // console.log(newProduct);
        axios.post('http://localhost:8000/api/product/new',newProduct )
            .then(res=>{console.log(res)
                navigate("/all-product")
            })
            .catch(err=>{
                const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
                const obj={}
                for (const key in errorResponse){
                    obj[key]=errorResponse[key].message
                }
                console.log(obj);
                setError(obj)
            })  

    }

    return (
        <form onSubmit={onSubmitHandler}>

        <label>Title</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)} }/> <br />
        {error.title}
        <label>Price</label>
        <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/> <br />
        <label>Description</label> 
        <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/> <br />
        <label>{error.description}</label> <br />

        <button>Create</button>
    </form>
  )
}

export default Form