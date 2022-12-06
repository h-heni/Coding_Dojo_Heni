import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from 'react-router'



const Show = (props) => {
    const [product, setProduct] = useState({})
    const {id}=useParams()
    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
            .then(res => setProduct(res.data.oneSingleProduct))
            .catch(err => console.error(err));
    }, [id]);
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
        
    </div>
    )
}

export default Show