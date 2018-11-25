import React, { Component } from 'react'
import '../src/index.css' 
import FirstScreen from './components/firstScreen'
import Navbar from './components/navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visited: false
    }
  }

  componentWillMount(){
   var store = localStorage.getItem('local-visited');
   console.log(store);
  }

  handleClick = () => {
    console.log ('click');
  }
  render() { 
    
    this.handleClick = () => {
      localStorage.setItem('visited', 1);
      this.setState({
        visited: true 
      });
    }

    return (
      <div>
      { this.state.visited &&
        <BrowserRouter>
        <div className="App">
        <Navbar />
         <Route exact path='/' component={Home} />
         <Route path='/About' component={About} />
         <Route path='/Contacts' component={Contacts} />
        </div>
      </BrowserRouter>
      }

      {!this.state.visited &&
        <div >
        <FirstScreen handleClick={this.handleClick}/>
        </div>
        }
      </div>
    );
  }
}

export default App;
