import React, { Fragment } from 'react';
import { Icon } from 'semantic-ui-react';
import Header from '../../sections/header/header.component';
import './mentions.styles.scss';

const MentionsPage = () => (
    <Fragment>
        <Header simplified />
        <section className="mentions">
            <h3>Mentions Légales</h3>
            <div className="container">
                <h4>Présentation du site</h4>
                <h5>Propriétaire et créateur</h5>
                <p>Marine Heckler, Développeur web - Toulouse, France</p>
                <h5>Hébergeur</h5>
                <p>
                    GitHub - 88 Colin P Kelly Jr St, San Francisco, CA 94107,
                    USA
                </p>
                <h4>Propriété intellectuelle</h4>
                <p>
                    Ce site a été conçu dans le but de présenter les compétences
                    et travaux de Marine Heckler. Le code source est disponible
                    sur GitHub et libre de droit. Le contenu (textes et
                    photographies) est quant à lui soumis aux droits d'auteur.
                </p>
                <h5>Photographies sections accueil et compétences</h5>
                <ul>
                    <li>
                        <a
                            href="https://unsplash.com/@hayleykimdesign"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hayley Kim Design{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                </ul>
                <h5>Photographies section projets (par ordre d'apparition)</h5>
                <ul>
                    <li>
                        <a href="/" target="_blank" rel="noopener noreferrer">
                            Saving - Anthony P.{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://unsplash.com/@hayleykimdesign"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Hayley Kim Design{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://unsplash.com/@michaeldam"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Michael Dam{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.facebook.com/zen.to.go.anastasia/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Zen to go - Anastasia{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                </ul>
                <h5>Photographie section à propos</h5>
                <ul>
                    <li>
                        <a href="/">
                            Marine Heckler{' '}
                            <Icon name="external alternate" size="small" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </Fragment>
);

export default MentionsPage;
