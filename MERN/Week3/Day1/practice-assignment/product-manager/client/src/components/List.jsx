import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link}  from "react-router-dom";
const List = () => {
    const [list , setList]=useState([])
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/product')
            .then(res=>{setList(res.data.allDaProducts);
                console.log(res.data.allDaProducts);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
            console.log(list);
    },[])
  return (
    <div>
        {loaded ? list.map((el,i)=>{
            return        <p key={i}><Link to={`/${el._id}`}>{el.title}</Link></p>
        }): <p>...loading</p>}


    </div>
  )
}

export default List