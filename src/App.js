import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';







class App extends React.Component{
  
    constructor(props){
      super(props)
      this.state = {
        

       
      }
     
    }


   
    render(){
      return(
        <Router>
             <div className="d-flex flex-column h-100">
        <Navbar/>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Footer/>

      </div>

        </Router>
   
      

      )
        
      }
 

  }

 



export default App;
