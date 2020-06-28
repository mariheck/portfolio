import React from 'react';
import { Link } from 'react-router-dom';
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
            <h5>Marine Heckler</h5>
            <h3>Développeur Web Full-Stack</h3>
            <div className="links-wrapper">
                <Link to="/savoir-faire">En savoir plus</Link>
                <a href="mailto:marine.heckler@icloud.com">Me contacter</a>
            </div>
        </div>
    </React.Fragment>
);

export default HomePage;
