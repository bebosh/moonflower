import React, { Component } from 'react'
import Project from "./Project"
export default class ProjectList extends Component {
  render() {
    return (
      <div>
        <h3 className="center section-title">Projects and works</h3>
        <Project/>
      </div>
    )
  }
}
