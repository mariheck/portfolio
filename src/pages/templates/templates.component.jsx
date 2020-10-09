import React, { Fragment, useEffect, useState } from 'react';
import Header from '../../sections/header/header.component';
import ProjectCard from '../../components/project-card/project-card.component';
import ArrowButton from '../../components/arrow-button/arrow-button.component';
import data from '../../data';
import './templates.styles.scss';

const TemplatesPage = () => {
    const [displayedTemplates, setDisplayedTemplates] = useState([]);
    const [templates] = useState(data.templates);

    useEffect(() => {
        let newDisplayedTemplates = [0, 1, 2];

        if (templates.length < 3) {
            newDisplayedTemplates.splice(templates.length);
        }

        setDisplayedTemplates(newDisplayedTemplates);
    }, [templates]);

    const changeCards = direction => {
        // direction === -1 : previous cards
        // direction === +1 : next cards
        const nextCards = displayedTemplates.map(card => {
            let newCard = card + direction;
            if (newCard < 0) {
                return templates.length - 1;
            } else if (newCard > templates.length - 1) {
                return 0;
            }
            return newCard;
        });
        setDisplayedTemplates(nextCards);
    };

    return (
        <Fragment>
            <Header simplified />
            <section className="templates">
                <h3>Modèles</h3>
                <p className="intro">
                    Ce que vous voyez ci-dessous sont des images, et ne sont
                    donc ni responsives, ni animées. Pour avoir un meilleur
                    aperçu de la mise en forme des templates sur écran
                    d'ordinateur ou de téléphone, cliquez sur les boutons
                    associés à chaque modèle.
                </p>

                <div className="container">
                    {templates.length <= 3 ? null : (
                        <Fragment>
                            <ArrowButton
                                buttonClass="desktop-btn"
                                direction="left"
                                info="Précédent"
                                onSwipe={() => changeCards(-1)}
                            />
                            <ArrowButton
                                buttonClass="mobile-btn"
                                direction="up"
                                info="Précédent"
                                onSwipe={() => changeCards(-1)}
                            />
                        </Fragment>
                    )}

                    {displayedTemplates.map(templateIndex => (
                        <ProjectCard
                            key={templates[templateIndex].id}
                            imageUrl={templates[templateIndex].imageUrl}
                            id={`00${templateIndex + 1}`}
                            totalCards={`00${templates.length}`}
                            title={templates[templateIndex].title}
                            tags={templates[templateIndex].tags}
                            description={templates[templateIndex].description}
                            links={templates[templateIndex].links}
                        />
                    ))}

                    {templates.length <= 3 ? null : (
                        <Fragment>
                            <ArrowButton
                                buttonClass="desktop-btn"
                                direction="right"
                                info="Suivant"
                                onSwipe={() => changeCards(1)}
                            />
                            <ArrowButton
                                buttonClass="mobile-btn"
                                direction="down"
                                info="Suivant"
                                onSwipe={() => changeCards(1)}
                            />
                        </Fragment>
                    )}
                </div>
            </section>
        </Fragment>
    );
};

export default TemplatesPage;
