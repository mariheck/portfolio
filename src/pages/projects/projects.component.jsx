import React from 'react';
import './projects.styles.scss';

const ProjectsPage = () => {
    const imageUrl =
        'https://images.unsplash.com/photo-1592917907394-e016cbbb6c5b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80';
    return (
        <main>
            <h3>Projets</h3>
            <p className="intro">
                Vous trouverez ici certains de mes travaux passés, parmis ceux
                qui m'ont le plus apporté, ou tout simplement parmis mes
                favoris. N'hésitez pas à consulter mon profil GitHub pour voir
                plus de projets.
            </p>
            <div className="grid">
                <div className="card">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="content">
                        <span>0001/003</span>
                        <h4>Projet 1</h4>
                        <p>
                            texte texte texte texte texte texte texte texte
                            texte texte texte texte texte texte texte texte
                        </p>
                        <button>
                            <i className="large github icon"></i>
                        </button>
                        <button>
                            <i className="large external alternate icon"></i>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="content">
                        <span>0002/003</span>
                        <h4>Projet 2</h4>
                        <p>
                            texte texte texte texte texte texte texte texte
                            texte texte texte texte texte texte texte texte
                        </p>
                        <button>
                            <i className="large github icon"></i>
                        </button>
                        <button>
                            <i className="large external alternate icon"></i>
                        </button>
                    </div>
                </div>
                <div className="card">
                    <div
                        className="image"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />
                    <div className="content">
                        <span>0003/003</span>
                        <h4>Projet 3</h4>
                        <p>
                            texte texte texte texte texte texte texte texte
                            texte texte texte texte texte texte texte texte
                        </p>
                        <button>
                            <i className="large github icon"></i>
                        </button>
                        <button>
                            <i className="large external alternate icon"></i>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProjectsPage;
