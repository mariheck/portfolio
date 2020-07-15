import React from 'react';
import Typical from 'react-typical';
import Background from '../../assets/homepage.jpg';
import './home.styles.scss';

const HomeSection = () => (
    <React.Fragment>
        <div
            className="home-background"
            style={{
                backgroundImage: `url(${Background})`
            }}
        ></div>
        <div id="accueil" className="home-text">
            <h3>Hi,</h3>
            <h3>
                <Typical
                    steps={[
                        1000,
                        "I'm Marine Heckler",
                        2000,
                        "I'm a Web Developer",
                        2000,
                        "I'm a React enthousiast",
                        2000,
                        "I'm a Node.js dev",
                        1000
                    ]}
                    loop={Infinity}
                    wrapper="span"
                />
            </h3>

            <div className="links-wrapper">
                <a href="#competences">En savoir plus</a>
                <a href="mailto:marine.heckler@icloud.com">Me contacter</a>
            </div>
        </div>
    </React.Fragment>
);

export default HomeSection;
