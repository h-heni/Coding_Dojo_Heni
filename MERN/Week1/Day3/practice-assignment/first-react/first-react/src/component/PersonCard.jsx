import React, { Component } from 'react'
class PersonCard extends Component {
    render() {
        return (

    <div>
        {this.props.profile.map((element,i)=>{
            return <div>
                
            <h1 key={i}>{element.firstName}, {element.lastName}</h1>
            <p key={i}>age : {element.age}</p>
            <p key={i}>Hair Color : {element.hairColor}</p>
            </div>
            
            
        })}
    </div>
)
}
}
export default PersonCard;
