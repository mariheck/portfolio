import React from 'react';
import Typed from 'react-typed';
import { Icon } from 'semantic-ui-react';
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
                <Typed
                    strings={[
                        "I'm Marine Heckler",
                        "I'm a Web Developer",
                        "I'm a React enthousiast",
                        "I'm a Node.js dev"
                    ]}
                    typeSpeed={100}
                    backSpeed={50}
                    loop
                />
            </h3>

            <div className="links-wrapper">
                <a href="#competences">En savoir plus</a>
                <a href="mailto:marine.heckler@icloud.com">Me contacter</a>
            </div>

            <a href="#competences">
                <Icon name="chevron circle down" size="huge" inverted />
            </a>
        </div>
    </React.Fragment>
);

export default HomeSection;
