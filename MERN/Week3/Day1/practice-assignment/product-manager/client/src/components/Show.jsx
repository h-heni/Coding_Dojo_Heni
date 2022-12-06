import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router'
import {Link,useNavigate}  from "react-router-dom";



const Show = (props) => {
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    const {id}=useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data.oneSingleProduct))
            .catch(err => console.error(err));
    }, [id]);

    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/product/delete/' + personId)
            .then(res => {console.log(res.data)})
            .catch(err => console.error(err));
            navigate("/all-product")
    }

    return (
    <div>
        <p>
        <label>Title: </label>
        <label>{product.title}</label>
        </p>
        <p>
        <label>Price:</label>
        <label> $ {product.price}</label>
        </p>
        <p>
        <label>Description: </label>
        <label>{product.description}</label>
        </p>
        <button><Link to={`/${product._id}/edit`}>Edit</Link></button>
        <button onClick={(e)=>{deletePerson(product._id)}}>Delete</button>
    </div>
    )
}

export default Show