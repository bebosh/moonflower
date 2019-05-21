import logo from '../images/flower.svg'
import React, { Component } from 'react'

export default class firstScreen extends Component {
  render() {
    return (
      <div className='App_first_screen'>
      <h5 className='title-first_screen' >Design & Developement</h5>
      <h3 className='title-first_screen'>Moonflower Studio</h3>
      <img src={logo} className="App-logo" alt="logo" onClick={this.props.handleClick} /> 
      <p className="title-first_screen">Click on the symbol to enter.</p>   
    </div>
    )
  }
}

        
