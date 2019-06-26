import React, { Component } from "react";

import Tabs from './Tabs'

export default class Skills extends Component {
  state = { visibility: "front" };

  handleToggle = tag => {
    this.setState({ visibility: tag });
  };

  renderWhat = () => {
    return (
      <div className="col s12 l4">
        <h4 className="teal-text text-darken-2">My Skills...</h4>
        <p className="fantasy-dark">
          I'm experienced in Wordpress platform sites,for little companies and for larger projects.
        </p>
        <p className="fantasy-dark">
        I also develop full responsive web apps from desktop to mobile, for a complete native experiecne on every device.
        </p>
        <div className="download-button-container">
        <a className="download-button fantasy" href='curriculum.pdf' download >Download my CV</a>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="row container">
        {this.renderWhat()}
        <div className="col s12 l6 offset-l2">
         
          <Tabs />
        </div>
      </div>
    );
  }
}

// <SkillTabs handleToggle={this.handleToggle} visibility={this.state.visibility} />
 //         <SkillList visibility={this.state.visibility} />