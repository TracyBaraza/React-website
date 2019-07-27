import React from 'react';

class List extends React.Component{
    render(){
        const ListItems =  this.props.fruits.map((item,index) =>{
            return <li key={index} onClick={(e) => alert(index)}>{item}</li>

        })
        return <ol>{ListItems}</ol>
     

        }
    }

export default List;