import projects from '../projects/files';
import React from 'react';
import Icons from './Icons';

const Projects = () => {
    return (
        <section id="projects">
            <div className="my-projects-title">My Projects</div>
            <div className="project-container">
                {projects.map((project) => {
                    return (
                        <div key={project.id} className="card-container">
                            <div className="img-container"> 
                                <picture>
                                    <source srcSet={project.large} media="(min-width: 1200px)" />
                                    <img src={project.small} alt={project.name} className="project-img"/>
                                </picture>
                            </div>
                            <div className="card-details">
                                <div className="card-title">
                                    <h3>{project.name}</h3>
                                    <Icons repoLink={project.repoLink} demoLink={project.demoLink}/>
                                </div>
                                <div className="card-description">{project.description}</div>
                            </div>
                        </div>
                )})}
            </div>
        </section>
    );
};

export default Projects;