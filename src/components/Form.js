import React from 'react';


class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
           firstName:'',
           lastName:'',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]:value})

    }

    handleSubmit(e){
        alert(this.state.firstName + '' + this.state.lastName);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <div className = "form-group">
                    <label>First name:</label>
                    <input type="text" name="firstname" onChange={this.handleChange} value={this.state.firstName}></input>
                </div>

                
                <div className = "form-group">
                    <label>Last name:</label>
                    <input type="text" name="lastname" onChange={this.handleChange} value={this.state.lastName}></input>
                </div>

                
                
                <input type="submit" class="btn btn-primary" value="Submit"></input>
            </form>
        )
    }
}
export default Form;