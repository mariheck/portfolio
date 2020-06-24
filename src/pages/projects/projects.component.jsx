import React from 'react';
import Card from '../../components/card/card.component';
import './projects.styles.scss';

class ProjectsPage extends React.Component {
    state = {
        projects: [
            {
                id: 1,
                title: 'Saving',
                imageUrl: './images/saving.jpg',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com',
                githubLink: 'https://github.com/mariheck'
            },
            {
                id: 2,
                title: 'Saving',
                imageUrl: './images/saving.jpg',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com'
            },
            {
                id: 3,
                title: 'Saving',
                imageUrl: './images/saving.jpg',
                tags: ['html', 'sass', 'react', 'node.js'],
                description:
                    'texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte texte',
                websiteUrl: 'https://github.com',
                githubLink: 'https://github.com/mariheck'
            }
        ]
    };

    render() {
        const { projects } = this.state;
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
                    {projects.map(project => (
                        <Card
                            key={project.id}
                            id={`00${project.id}`}
                            projectsNumber={`00${projectsTotal}`}
                            title={project.title}
                            imageUrl={project.imageUrl}
                            tags={project.tags}
                            description={project.description}
                            websiteUrl={project.websiteUrl}
                            githubLink={project.githubLink}
                        />
                    ))}
                </div>
            </main>
        );
    }
}

export default ProjectsPage;
