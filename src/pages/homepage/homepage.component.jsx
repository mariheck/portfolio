import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.styles.scss';

const HomePage = () => (
    <React.Fragment>
        <div
            className="home-page-background"
            style={{
                backgroundImage:
                    'url(https://images.unsplash.com/photo-1590157678696-a5151f512cbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80)'
            }}
        ></div>
        <div className="home-page-text">
            <h5>Marine Heckler</h5>
            <h3>Développement de Sites Web</h3>
            <div className="links-wrapper">
                <Link to="/services">En savoir plus</Link>
                <a href="mailto:marine.heckler@icloud.com">Me contacter</a>
            </div>
        </div>
    </React.Fragment>
);

export default HomePage;
