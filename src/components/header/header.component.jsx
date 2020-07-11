import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <header>
        <div className="logo-container">
            <Link to="/">
                <div className="title-container">
                    <h1>Marine Heckler</h1>
                    <h2>full-stack web developer</h2>
                </div>
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <Link to="/">Accueil</Link>
                </li>
                <li>
                    <Link to="/savoir-faire">Savoir-Faire</Link>
                </li>
                <li>
                    <Link to="/projets">Projets</Link>
                </li>
                <li>
                    <Link to="/a-propos">A propos</Link>
                </li>
                <li>
                    <a href="mailto:marine.heckler@icloud.com">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
