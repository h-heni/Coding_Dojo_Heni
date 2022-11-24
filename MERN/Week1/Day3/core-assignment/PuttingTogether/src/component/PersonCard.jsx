import React, { Component } from 'react'
class PersonCard extends Component {
    constructor(props){
        super(props)
        this.state={
            age:this.props.age
        }
        console.log(this.props.age)
    }
    increment =() =>{
        return this.setState(
            {age:this.state.age+1}
        )
    }

    render() {
        return (

    <div>
            <h1>{this.props.firstName}, {this.props.lastName}</h1>
            <p>age : {this.state.age}</p>
            <p>Hair Color : {this.props.hairColor}</p>
            <button onClick={this.increment}>add one year to {this.props.firstName}</button>

    </div>
)
}
}
export default PersonCard;
