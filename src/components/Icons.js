import React from 'react';
import Icon from '@mdi/react';
import { mdiOpenInNew, mdiGithub } from '@mdi/js';

const Icons = (props) => {
    const { repoLink, demoLink } = props;
    return(
        <div className="project-icons">
            <a href={repoLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                <Icon path={ mdiGithub } size={1.2}></Icon>
            </a>
            <a href={demoLink} target="_blank" rel="noopener noreferrer" className="icon-link">
                <Icon path={ mdiOpenInNew } size={1.2}></Icon>
            </a>
        </div>
    );
};

export default Icons;