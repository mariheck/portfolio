import React from 'react';
import Card from '../card/card.component';
import ArrowButton from '../arrow-button/arrow-button.component';
import './competence-card.styles.scss';

const CompetenceCard = ({ description, onChangeCard, ...cardProps }) => (
    <Card cardClass="competence-card" {...cardProps}>
        <p>{description}</p>
        <p className="links">
            <ArrowButton
                direction="left"
                info="Précédent"
                onSwipe={() => onChangeCard(-1)}
            />
            <ArrowButton
                direction="right"
                info="Suivant"
                onSwipe={() => onChangeCard(1)}
            />
        </p>
    </Card>
);

export default CompetenceCard;
