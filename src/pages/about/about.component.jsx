import React from 'react';
import './about.styles.scss';

const AboutPage = () => (
    <main>
        <h3>A propos</h3>

        <div className="container about-container">
            <div className="content">texte</div>
            <div
                className="image"
                style={{ backgroundImage: 'url(./images/portrait.jpg)' }}
            />
        </div>
    </main>
);

export default AboutPage;
