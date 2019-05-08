import React from "react";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
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
  );
};
export default Sidebar;
