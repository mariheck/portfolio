import React from 'react';
import Card from '../../components/card/card.component';
import './projects.styles.scss';

class ProjectsPage extends React.Component {
    state = {
        displayedProjects: [0, 1, 2],
        projects: [
            {
                id: 1,
                title: 'Projet 1',
                imageUrl:
                    'https://images.unsplash.com/photo-1593011951062-fbeb9c4a484e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com',
                githubLink: 'https://github.com/mariheck'
            },
            {
                id: 2,
                title: 'Projet 2',
                imageUrl:
                    'https://images.unsplash.com/photo-1593087989983-e887d642a19c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=658&q=80',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com'
            },
            {
                id: 3,
                title: 'Projet 3',
                imageUrl:
                    'https://images.unsplash.com/photo-1593051292423-a86d80624f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com',
                githubLink: 'https://github.com/mariheck'
            },
            {
                id: 4,
                title: 'Projet 4',
                imageUrl:
                    'https://images.unsplash.com/photo-1592967833769-60d8693bbf91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com',
                githubLink: 'https://github.com/mariheck'
            }
        ]
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
                    Vous trouverez ici certains de mes travaux passés, parmis
                    ceux qui m'ont le plus apporté, ou tout simplement parmis
                    mes favoris. N'hésitez pas à consulter mon profil{' '}
                    <a
                        href="https://github.com/mariheck"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>{' '}
                    pour voir plus de projets.
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
