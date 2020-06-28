import React from 'react';
import Card from '../../components/card/card.component';
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
                    <button onClick={() => this.previousCard()}>
                        <i className="large chevron left icon"></i>
                    </button>

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
                    <button onClick={() => this.nextCard()}>
                        <i className="large chevron right icon"></i>
                    </button>
                </div>
            </main>
        );
    }
}

export default ProjectsPage;
