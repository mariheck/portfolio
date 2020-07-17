import React, { Fragment } from 'react';
import ProjectCard from '../../components/project-card/project-card.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import data from '../../data';
import './projects.styles.scss';

class ProjectsSection extends React.Component {
    state = {
        displayedProjects: [],
        projects: data.projects
    };

    componentDidMount() {
        let newDisplayedProjects = [0, 1, 2];

        if (this.state.projects.length < 3) {
            newDisplayedProjects.splice(this.state.projects.length);
        }

        this.setState({
            ...this.state,
            displayedProjects: newDisplayedProjects
        });
    }

    previousCard = () => {
        const nextCards = this.state.displayedProjects.map(card => {
            let newCard = card - 1;
            if (newCard < 0) {
                return this.state.projects.length - 1;
            }
            return newCard;
        });
        this.setState({ ...this.state, displayedProjects: nextCards });
    };

    nextCard = () => {
        const nextCards = this.state.displayedProjects.map(card => {
            let newCard = card + 1;
            if (newCard > this.state.projects.length - 1) {
                return 0;
            }
            return newCard;
        });
        this.setState({ ...this.state, displayedProjects: nextCards });
    };

    render() {
        const { projects, displayedProjects } = this.state;
        const projectsNumber = projects.length;

        return (
            <section id="projets" className="projects">
                <h3>Projets</h3>
                <p className="intro">
                    Vous trouverez ici certains de mes travaux passés. N'hésitez
                    pas à consulter mon profil{' '}
                    <a
                        href="https://github.com/mariheck"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>{' '}
                    pour consulter davantage de mes travaux.
                </p>

                <div className="container">
                    {projectsNumber <= 3 ? null : (
                        <Fragment>
                            <ArrowButton
                                buttonClass="desktop-btn"
                                direction="left"
                                onSwipe={this.previousCard}
                            />
                            <ArrowButton
                                buttonClass="mobile-btn"
                                direction="up"
                                onSwipe={this.previousCard}
                            />
                        </Fragment>
                    )}

                    {displayedProjects.map(projectIndex => (
                        <ProjectCard
                            key={projectIndex}
                            imageUrl={projects[projectIndex].imageUrl}
                            id={`00${projectIndex + 1}`}
                            totalCards={`00${projectsNumber}`}
                            title={projects[projectIndex].title}
                            tags={projects[projectIndex].tags}
                            description={projects[projectIndex].description}
                            links={projects[projectIndex].links}
                        />
                    ))}

                    {projectsNumber <= 3 ? null : (
                        <Fragment>
                            <ArrowButton
                                buttonClass="desktop-btn"
                                direction="right"
                                onSwipe={this.nextCard}
                            />
                            <ArrowButton
                                buttonClass="mobile-btn"
                                direction="down"
                                onSwipe={this.nextCard}
                            />
                        </Fragment>
                    )}
                </div>
            </section>
        );
    }
}

export default ProjectsSection;
