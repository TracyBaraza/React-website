import React,{Component} from 'react';
import { Link} from 'react-router-dom';

class Navbar extends Component{
    render(){
        return (
            <header>
  
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a className="navbar-brand" href="#">Tracy Baraza</a>
    
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" href="#">Home </Link>
        
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
      
      </ul>
      
    </div>
  </nav>
</header>
        )
    }
}

export default Navbar;