import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { HamburgerCollapseReverse } from 'react-animated-burgers';
import './header.styles.scss';

const Header = ({ simplified }) => {
    const [isMenuHidden, setMenuHidden] = useState(true);

    const toggleMenu = () => {
        setMenuHidden(prevMenuState => !prevMenuState);
    };

    return (
        <Fragment>
            {simplified ? (
                <header>
                    <Link to="/portfolio">
                        <div className="title-container">
                            <h1>Marine Heckler</h1>
                            <h2>front-end developer</h2>
                        </div>
                    </Link>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/portfolio">
                                    <Icon name="chevron left" size="small" />
                                    Retour
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            ) : (
                <header>
                    <a href="#accueil">
                        <div className="title-container">
                            <h1>Marine Heckler</h1>
                            <h2>front-end developer</h2>
                        </div>
                    </a>
                    <nav>
                        <HamburgerCollapseReverse
                            isActive={!isMenuHidden}
                            toggleButton={toggleMenu}
                            barColor="#9d9d9d"
                            className="custom-button mobile-btn"
                            title="Menu"
                            aria-label="Menu"
                        />
                        <ul
                            className={`${
                                isMenuHidden ? 'hidden' : 'dropdown-menu'
                            }`}
                        >
                            <li>
                                <a href="#accueil" onClick={toggleMenu}>
                                    Accueil
                                </a>
                            </li>
                            <li>
                                <a href="#competences" onClick={toggleMenu}>
                                    Compétences
                                </a>
                            </li>
                            <li>
                                <a href="#projets" onClick={toggleMenu}>
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a href="#a-propos" onClick={toggleMenu}>
                                    A propos
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:marine.heckler@icloud.com"
                                    onClick={toggleMenu}
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </header>
            )}
        </Fragment>
    );
};

export default Header;
