import React,{useState} from 'react'
import axios from 'axios'

const Form = () => {
    //keep track of what is being typed via useState hook
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        const newProduct={title:title,price:price,description:description}
        console.log(newProduct);
        axios.post('http://localhost:8000/api/product/new',newProduct )
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
    <form onSubmit={onSubmitHandler}>
              <div>
        {JSON.stringify(title)}
        {JSON.stringify(price)}
        {JSON.stringify(description)}
      </div>
        <label>Title</label>
        <input type="text" onChange={(e)=>{setTitle(e.target.value)} }/> <br />
        <label>Price</label>
        <input type="number" onChange={(e)=>{setPrice(e.target.value)}}/> <br />
        <label>Description</label>
        <input type="text" onChange={(e)=>{setDescription(e.target.value)}}/> <br />

        <button>CREATE</button>
    </form>
  )
}

export default Form