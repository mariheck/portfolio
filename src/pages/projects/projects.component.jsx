import React from 'react';
import Card from '../../components/card/card.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import data from '../../data';
import './projects.styles.scss';

class ProjectsPage extends React.Component {
    state = {
        displayedProjects: [0, 1, 2],
        projects: data.projects
    };

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
        const projectsTotal = projects.length;

        return (
            <main>
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
                    <ArrowButton direction="left" onSwipe={this.previousCard} />
                    {displayedProjects.map(projectIndex => (
                        <Card
                            key={projectIndex}
                            id={`00${projectIndex + 1}`}
                            projectsNumber={`00${projectsTotal}`}
                            title={projects[projectIndex].title}
                            imageUrl={projects[projectIndex].imageUrl}
                            tags={projects[projectIndex].tags}
                            description={projects[projectIndex].description}
                            websiteUrl={projects[projectIndex].websiteUrl}
                            githubLink={projects[projectIndex].githubLink}
                        />
                    ))}
                    <ArrowButton direction="right" onSwipe={this.nextCard} />
                </div>
            </main>
        );
    }
}

export default ProjectsPage;
