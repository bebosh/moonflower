import React, { Component } from "react";
import Sidebar from "./Sidebar";


class Navbar extends Component {

  render() {
    return (
      <div className="navbar-fixed">
        <nav className="nav-wrapper">
          <div>
            <span className="right grey-text text-darken-1">
              <i className="material-icons sidenav-trigger" data-target="side-menu-burger" onClick={this.props.handleClick}>
                menu
              </i>
            </span>
            <Sidebar show={this.props.show} handleClick={this.props.handleClick}/>
            
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
