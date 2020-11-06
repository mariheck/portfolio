import React, { Fragment } from 'react';
import Typed from 'react-typed';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import Background from '../../assets/homepage.jpg';
import './home.styles.scss';

const HomeSection = () => (
    <Fragment>
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
                        "I'm a JavaScript dev"
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

            <ArrowButton
                direction="down"
                circle
                size="huge"
                buttonClass="mobile-btn"
                info="En savoir plus"
                linkUrl="#competences"
                isLink
                noBlankTarget
            />
        </div>
    </Fragment>
);

export default HomeSection;
