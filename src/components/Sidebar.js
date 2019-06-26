import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = props => {
  console.log(props);
  var visible = " sideBar hidden";

  if (props.show) {
    visible = "sideBar visible";
  }

  return (
    <div onClick={props.handleClick} >
      <ul className={visible}>
        <li>
          <NavLink exact to="/" className="nav_title">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/About" className="nav_title">
            About me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contacts" className="nav_title">
            Projects
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
