import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router'
import {useNavigate}  from "react-router-dom";


const Edit = () => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({title:"",price:0,description:""})
    const {id}=useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data.oneSingleProduct))
            .catch(err => console.error(err));
    }, [id]);
    const Edit = (e) =>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/product/update/' +id ,product)
        .then(res => console.log(res))
        .catch(err => console.error(err));
        navigate("/all-product")
    }
    return (
    <form onSubmit={Edit}>

    <label>Title</label>
    <input type="text" value={product.title} onChange={(e)=>{setProduct({...product,title:e.target.value})} }/> <br />
    <label>Price</label>
    <input type="number" value={product.price} onChange={(e)=>{setProduct({...product,price:e.target.value})}}/> <br />
    <label>Description</label>
    <input type="text" value={product.description} onChange={(e)=>{setProduct({...product,description:e.target.value})}}/> <br />

    <button>Update</button>
</form>  )
}

export default Edit