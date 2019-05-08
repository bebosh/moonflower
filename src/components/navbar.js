import React, { Component } from "react";
import logoNavbar from "../images/flower.navbar.svg";
import Sidebar from "./Sidebar";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  onClickToggle = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div className="container">
            <a href="/" className="brand-logo">
              <img src={logoNavbar} className="App-logo-navbar" alt="logo" />
            </a>
            <span class="right grey-text text-darken-1">
              <i class="material-icons sidenav-trigger" data-target="side-menu" onClick={this.onClickToggle}>
                menu
              </i>
            </span>
            { this.state.show ? <Sidebar /> : null }
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
