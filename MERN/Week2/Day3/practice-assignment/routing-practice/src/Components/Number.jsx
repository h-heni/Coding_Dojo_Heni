import React from 'react'
import '../App.css';
import {useParams} from 'react-router'


const Number = (props) => {
    const {number}=useParams();
    const {color1}= useParams();
    const {color2}= useParams();
  return (
    <div className="App">
    <div style={{color:color1,backgroundColor:color2, border:'2px solid black'}}>{isNaN (+ number) ? "The word is: " + number : "The number is: "+ number}</div>
    </div>
  )
}

export default Number