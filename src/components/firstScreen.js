import logo from '../flower.svg'
import React, { Component } from 'react'

export default class firstScreen extends Component {
  render() {
    return (
      <div className='App_first_screen'>
      <h3 className="home-title">Moonflower Studio</h3>
      <img src={logo} className="App-logo" alt="logo" onClick={this.props.handleClick} /> 
      <p className="home-text">Click on the symbol to enter.</p>   
    </div>
    )
  }
}

        
