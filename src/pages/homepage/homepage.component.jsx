import React from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import Background from '../../assets/homepage.jpg';
import './homepage.styles.scss';

const HomePage = () => (
    <React.Fragment>
        <div
            className="home-page-background"
            style={{
                backgroundImage: `url(${Background})`
            }}
        ></div>
        <div className="home-page-text">
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
                <Link to="/savoir-faire">En savoir plus</Link>
                <a href="mailto:marine.heckler@icloud.com">Me contacter</a>
            </div>
        </div>
    </React.Fragment>
);

export default HomePage;
