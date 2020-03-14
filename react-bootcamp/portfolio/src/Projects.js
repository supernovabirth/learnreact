import React, {Component} from 'react';
import PROJECTS from './data/projects';

class Projects extends Component {

    render(){
        return (
            <div>
                <h2>Projects List</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <div key={PROJECT.id}>{PROJECT.title}</div>
                            );
                        })
                    }
                <p>Disclaimer: The {PROJECTS[2].title} was part of a school project.</p>
                </div>
            </div>
        )
    }
}

export default Projects;