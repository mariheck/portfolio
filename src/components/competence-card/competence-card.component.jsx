import React from 'react';
import Card from '../card/card.component';
import ArrowButton from '../arrow-button/arrow-button.component';
import './competence-card.styles.scss';

const CompetenceCard = ({
    description,
    previousCard,
    nextCard,
    ...cardProps
}) => (
    <Card cardClass="competence-card" {...cardProps}>
        <p>{description}</p>
        <p className="links">
            <ArrowButton direction="left" onSwipe={previousCard} />
            <ArrowButton direction="right" onSwipe={nextCard} />
        </p>
    </Card>
);

export default CompetenceCard;
