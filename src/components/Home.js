import React from 'react';
import colors from '../projects/images/colors.png';

const Home = () => {
    return (
        <section id="home">
            <div className="home-img-container">
                <img className="home-img" src={colors} alt=""/>
            </div>
            <div className="home-text">
                <div className="home-greeting">
                    Hello!
                </div>
                <div className="home-intro">
                    I am Anne Catherine Vergel de Dios, a web developer based in The Philippines.
                </div>
            </div>
        </section>
    );
};

export default Home;