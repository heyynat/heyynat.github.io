import React, { Component } from 'react';

class ProjectCard extends Component {
    render() {
        const { project } = this.props;
        const { title, storyline, imagePath } = project;
        return (
            <div>
                <img alt="Project Cover" src={ imagePath } />
                <h3>{ title }</h3>
                <p>{ storyline }</p>
            </div>
        )
    }
}

export default ProjectCard;
