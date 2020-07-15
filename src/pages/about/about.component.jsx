import React from 'react';
import Portrait from '../../assets/portrait.jpg';
import './about.styles.scss';

const AboutPage = () => (
    <section id="a-propos" className="about">
        <h3>A propos</h3>

        <div className="container about-container">
            <div className="content">texte</div>
            <div
                className="image"
                style={{ backgroundImage: `url(${Portrait})` }}
            />
        </div>
    </section>
);

export default AboutPage;
