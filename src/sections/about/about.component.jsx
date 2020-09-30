import React from 'react';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../../components/custom-button/custom-button.component';
import Portrait from '../../assets/portrait.jpg';
import './about.styles.scss';

const AboutSection = () => (
    <section id="a-propos">
        <h3>A propos</h3>

        <div className="container about-container">
            <div className="content">
                <p>
                    Depuis toujours attirée par la logique et l'algorithmique,
                    c'est tout naturellement que je me suis orientée vers des
                    études en <strong>informatique industrielle</strong>,
                    travaillant alors majoritairement en C++. Désirant me
                    spécialiser dans un métier de pointe, j'ai ensuite poursuivi
                    dans les domaines{' '}
                    <strong>
                        de la robotique et de l'intelligence artificielle
                    </strong>
                    , dans lesquels j'ai débuté ma carrière professionnelle.
                </p>
                <p>
                    J'ai souhaité l'année dernière changer de voie et me
                    réorienter vers le développement web. Je me suis alors
                    concentrée majoritairement sur l'apprentissage du{' '}
                    <strong>JavaScript</strong>, autant pour des applications
                    frontend (<strong>React</strong>) que backend (
                    <strong>node.js</strong>), afin de pouvoir travailler sur
                    tous les aspects d'une application web.
                </p>
                <p>
                    Autodidacte et très curieuse, j'aime me lancer de nouveaux
                    défis et apprendre en continu. C'est pourquoi je fais tout
                    mon possible pour <strong>me former quotidiennement</strong>{' '}
                    à des technologies récentes et performantes.
                </p>
                <p className="links">
                    <CustomButton
                        isLink
                        linkUrl="https://www.linkedin.com/in/marine-heckler/"
                        info="LinkedIn"
                    >
                        <Icon name="linkedin" size="large" />
                    </CustomButton>
                    <CustomButton
                        isLink
                        linkUrl="https://github.com/mariheck"
                        info="Github"
                    >
                        <Icon name="github alternate" size="large" />
                    </CustomButton>
                    <CustomButton
                        isLink
                        linkUrl="mailto:marine.heckler@icloud.com"
                        info="Contacter"
                    >
                        <Icon name="envelope outline" size="large" />
                    </CustomButton>
                </p>
                <h4>Mes études : </h4>
                <ul>
                    <li>
                        <strong>
                            Université Paul Sabatier - Toulouse (2015) :
                        </strong>{' '}
                        Master en Informatique, Spécialité Intelligence
                        Artificielle, Robotique, Reconnaissance des Formes.
                    </li>
                    <li>
                        <strong>ENSEEIHT - Toulouse (2014) :</strong> Diplôme
                        d'ingénieur. Département Génie Electrique et
                        Automatique, option Informatique Industrielle.
                    </li>
                </ul>
            </div>

            <div
                className="image"
                style={{ backgroundImage: `url(${Portrait})` }}
            />
        </div>
    </section>
);

export default AboutSection;
