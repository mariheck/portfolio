import React from 'react';
import Carousel from '../../components/carousel/carousel.component';
import data from '../../data';
import './projects.styles.scss';

const ProjectsSection = () => (
    <section id="projets" className="projects">
        <h3>Projets</h3>

        <p className="intro">
            Vous trouverez ici certains de mes travaux passés. N'hésitez pas à
            consulter mon profil{' '}
            <a
                href="https://github.com/mariheck"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>{' '}
            pour consulter davantage de mes projets.
        </p>

        <Carousel cards={data.projects} />
    </section>
);

export default ProjectsSection;
