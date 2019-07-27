import React from 'react';

class Child extends React.Component{
    render(){
        return (
        <div>
        <h1>{this.props.name}</h1>
        <button onClick = {this.props.changeName}>Call parent</button>
        </div>
        
        )
    }

}

export default Child;