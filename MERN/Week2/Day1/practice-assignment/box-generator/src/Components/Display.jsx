import React from 'react'
import './Display.css'
const Display = (props) => {
    return (
    <div className='display'>
        {props.squares.map((square,i)=>{
            return <div key={i} style={{height:'100px',width:'100px',backgroundColor:square.color}}></div>
            
        })}
    </div>
    )
}

export default Display