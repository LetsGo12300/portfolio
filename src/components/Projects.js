import RestaurantSmall from '../images/Restaurant-small.PNG';
import RestaurantLarge from '../images/Restaurant-large.PNG';
import Library from '../images/Library.PNG';
import React from 'react';
import Icons from './Icons';

const Projects = () => {
    const projects = [
        {id: 1, name: "Restaurant Page", small: RestaurantSmall, large: RestaurantLarge, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", repoLink: "https://github.com/LetsGo12300/restaurant-page", demoLink: "https://letsgo12300.github.io/restaurant-page/"},
        {id: 2, name: "Restaurant Page", small: RestaurantSmall, large: RestaurantLarge, description:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.", repoLink: "https://github.com/LetsGo12300/restaurant-page", demoLink: "https://letsgo12300.github.io/restaurant-page/"},
        {id: 3, name: "Restaurant Page", small: RestaurantSmall, large: RestaurantLarge, description: "A restaurant page project I designed using JavaScript, built with Webpack. Featuring Asian-inspired dishes", repoLink: "https://github.com/LetsGo12300/restaurant-page", demoLink: "https://letsgo12300.github.io/restaurant-page/"},
        {id: 4, name: "Restaurant Page", small: RestaurantSmall, large: RestaurantLarge, description: "A restaurant page project I designed using JavaScript, built with Webpack. Featuring Asian-inspired dishes", repoLink: "https://github.com/LetsGo12300/restaurant-page", demoLink: "https://letsgo12300.github.io/restaurant-page/"}
    ];

    return (
        <section id="projects">
            <div className="my-projects-title">My Projects</div>
            <div className="project-container">
                {projects.map((project) => {
                    return (
                        <div key={project.id} className="card-container">
                            <div className="img-container"> 
                                <picture>
                                    <source srcset={project.large} media="(min-width: 1200px)" />
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