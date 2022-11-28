import React from 'react'
import './Display.css'
const Display = (props) => {
    return (
    <div className='display'>
        {props.squares.map((square,i)=>{
            return <div key={i} style={{height:square.height,width:square.width,backgroundColor:square.color}}></div>
            
        })}
    </div>
    )
}

export default Display