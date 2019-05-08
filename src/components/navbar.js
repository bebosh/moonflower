import React from "react";
import { NavLink } from "react-router-dom";
import logoNavbar from "../images/flower.navbar.svg";
const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper">
        <div className="container">
          <a href="/" className="brand-logo">
            <img src={logoNavbar} className="App-logo-navbar" alt="logo" />
          </a>
          <ul className="right">
            <li>
              <NavLink exact to="/" className="nav_title">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="nav_title">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contacts" className="nav_title">
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
