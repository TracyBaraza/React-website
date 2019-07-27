import React,{Component} from 'react';

class Profile extends Component{
    render(){
        return (
        <div className="card" style={{width: "18rem"}}>
            <img src="https://i.pinimg.com/736x/82/ae/ff/82aeffcdfc5260d152e5c4a214c32dbd.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">Tracy Maggie</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              
            </div>
          </div>
        )
    }
}

export default Profile;