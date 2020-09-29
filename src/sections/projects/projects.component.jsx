import React, { Fragment, useEffect, useState } from 'react';
import ProjectCard from '../../components/project-card/project-card.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import data from '../../data';
import './projects.styles.scss';

const ProjectsSection = () => {
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [projects] = useState(data.projects);

    useEffect(() => {
        let newDisplayedProjects = [0, 1, 2];

        if (projects.length < 3) {
            newDisplayedProjects.splice(projects.length);
        }

        setDisplayedProjects(newDisplayedProjects);
    }, [projects]);

    const changeCards = direction => {
        // direction === -1 : previous cards
        // direction === +1 : next cards
        const nextCards = displayedProjects.map(card => {
            let newCard = card + direction;
            if (newCard < 0) {
                return projects.length - 1;
            } else if (newCard > projects.length - 1) {
                return 0;
            }
            return newCard;
        });
        setDisplayedProjects(nextCards);
    };

    return (
        <section id="projets" className="projects">
            <h3>Projets</h3>

            <p className="intro">
                Vous trouverez ici certains de mes travaux passés. N'hésitez pas
                à consulter mon profil{' '}
                <a
                    href="https://github.com/mariheck"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>{' '}
                pour consulter davantage de mes projets.
            </p>

            <div className="container">
                {projects.length <= 3 ? null : (
                    <Fragment>
                        <ArrowButton
                            buttonClass="desktop-btn"
                            direction="left"
                            info="Précédent"
                            onSwipe={() => changeCards(-1)}
                        />
                        <ArrowButton
                            buttonClass="mobile-btn"
                            direction="up"
                            info="Précédent"
                            onSwipe={() => changeCards(-1)}
                        />
                    </Fragment>
                )}

                {displayedProjects.map(projectIndex => (
                    <ProjectCard
                        key={projectIndex}
                        imageUrl={projects[projectIndex].imageUrl}
                        id={`00${projectIndex + 1}`}
                        totalCards={`00${projects.length}`}
                        title={projects[projectIndex].title}
                        tags={projects[projectIndex].tags}
                        description={projects[projectIndex].description}
                        links={projects[projectIndex].links}
                    />
                ))}

                {projects.length <= 3 ? null : (
                    <Fragment>
                        <ArrowButton
                            buttonClass="desktop-btn"
                            direction="right"
                            info="Suivant"
                            onSwipe={() => changeCards(1)}
                        />
                        <ArrowButton
                            buttonClass="mobile-btn"
                            direction="down"
                            info="Suivant"
                            onSwipe={() => changeCards(1)}
                        />
                    </Fragment>
                )}
            </div>
        </section>
    );
};

export default ProjectsSection;
