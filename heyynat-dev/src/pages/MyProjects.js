import React, { Component } from 'react';
import ProjectCard from  '../components/ProjectCard';
import projects from  '../services/projectData'

class MyProjects extends Component {
  render() {
    return (
    projects.map((project) => (
      <ProjectCard key={ project.title } project={ project } />
    ))
    )
  }
}

export default MyProjects;
