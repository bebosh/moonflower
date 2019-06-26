import React from "react";
import logo from "../images/flower.navbar.svg";
import Skills from "./skills/SkillsContainer";
import ProjectList from "./Projects/ProjectList";
export default function Home() {
  return (
    /* ------------------- main image & title ---------------*/
    <div>
      <div className="title-container centered">
        <h1 className="fantasy">
          Moonflower <span className="title_span">studio</span>
        </h1>
        <div className="text-container">
          <img src={logo} className="page-logo" alt="logo" />
          <h6 className="fantasy">
            Hi! My name is Paolo Floreano. <br /> I live in Trieste (Italy) and
            I work as freelance Web Developer for web agencies and privates.
          </h6>
        </div>
        <i className="material-icons arrow-scroll ">keyboard_arrow_down</i>
      </div>
    <Skills/>
  
      
    <div className="container divider"></div>
   

    <ProjectList />
    </div>
  );
}
