import React from 'react';
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js';

const Contact = () => {
    return (
        <section id="contact">
            <div className="contact-title">Contact me!</div>
            <div className="contact-details">
                <p>
                If you have an opportunity to share, or would like to discuss anything, please contact me.
                </p>
                <div className="contact-icons">
                    <a href="https://github.com/LetsGo12300" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <Icon path={ mdiGithub } size={2}></Icon>
                    </a>
                    <a href="https://www.linkedin.com/in/ac-vergeldedios/" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <Icon path={ mdiLinkedin } size={2}></Icon>
                    </a>
                    <a href="mailto:name@annecatherinevergeldedios@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-icon">
                        <Icon path={ mdiEmail } size={2}></Icon>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;