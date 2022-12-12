import React, {useEffect , useState} from 'react'
import axios from 'axios' 

const List = () => {
    const [names , setNames]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/author/")
        .then((res)=>{
            setNames(res.data)
        })
        .catch((err)=>console.log(err))
    },[names])
  return (
    <table>
        <thead>
            <tr>
                <th>Author</th>
                <th>Actions Available</th>
            </tr>
        </thead>
        <tbody>
            {names.map((element)=>{
            return<tr key={element._id}>
                <td>{element.name}</td>
                <td><button>Edit</button> <button>Delete</button></td>
            </tr>

            })}
        </tbody>
    </table>
  )
}

export default List