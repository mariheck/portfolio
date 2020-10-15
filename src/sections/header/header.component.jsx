import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../../components/custom-button/custom-button.component';
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
                            <h2>full-stack web developer</h2>
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
                            <h2>full-stack web developer</h2>
                        </div>
                    </a>
                    <nav>
                        <CustomButton
                            buttonClass="mobile-btn"
                            onAction={toggleMenu}
                            info="Menu"
                        >
                            <Icon name="bars" size="big" />
                        </CustomButton>
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
