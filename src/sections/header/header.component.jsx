import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import './header.styles.scss';

class Header extends React.Component {
    state = {
        isMenuHidden: true
    };

    toggleMenu = () => {
        const newMenuState = !this.state.isMenuHidden;
        this.setState({ ...this.state, isMenuHidden: newMenuState });
    };

    render() {
        const { simplified } = this.props;
        const { isMenuHidden } = this.state;

        return (
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

                {simplified ? (
                    <nav className="simplified">
                        <ul>
                            <li>
                                <Link to="/">
                                    <Icon name="chevron left" size="small" />
                                    Retour
                                </Link>
                            </li>
                        </ul>
                    </nav>
                ) : (
                    <Fragment>
                        <Icon onClick={this.toggleMenu} name="bars" />
                        <nav className={`full ${isMenuHidden ? 'hidden' : ''}`}>
                            <ul>
                                <li>
                                    <a
                                        href="#accueil"
                                        onClick={this.toggleMenu}
                                    >
                                        Accueil
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#competences"
                                        onClick={this.toggleMenu}
                                    >
                                        Compétences
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#projets"
                                        onClick={this.toggleMenu}
                                    >
                                        Projets
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#a-propos"
                                        onClick={this.toggleMenu}
                                    >
                                        A propos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="mailto:marine.heckler@icloud.com"
                                        onClick={this.toggleMenu}
                                    >
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Fragment>
                )}
            </header>
        );
    }
}
export default Header;
