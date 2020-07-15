import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './header.styles.scss';

const Header = ({ simplified }) => (
    <header>
        <div className="logo-container">
            {simplified ? (
                <Link to="/">
                    <div className="title-container">
                        <h1>Marine Heckler</h1>
                        <h2>full-stack web developer</h2>
                    </div>
                </Link>
            ) : (
                <a href="#accueil">
                    <div className="title-container">
                        <h1>Marine Heckler</h1>
                        <h2>full-stack web developer</h2>
                    </div>
                </a>
            )}
        </div>

        <nav>
            {simplified ? (
                <ul>
                    <li>
                        <Link to="/">
                            <Icon name="chevron left" size="small" />
                            Retour
                        </Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#accueil">Accueil</a>
                    </li>
                    <li>
                        <a href="#competences">Compétences</a>
                    </li>
                    <li>
                        <a href="#projets">Projets</a>
                    </li>
                    <li>
                        <a href="#a-propos">A propos</a>
                    </li>
                    <li>
                        <a href="mailto:marine.heckler@icloud.com">Contact</a>
                    </li>
                </ul>
            )}
        </nav>
    </header>
);

export default Header;
