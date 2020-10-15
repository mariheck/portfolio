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
                buttonClass="desktop-btn"
                info="Précédent"
                onAction={() => onChangeCard(-1)}
            />
            <ArrowButton
                direction="left"
                circle
                size="huge"
                buttonClass="mobile-btn"
                info="Précédent"
                onAction={() => onChangeCard(-1)}
            />

            <ArrowButton
                direction="right"
                buttonClass="desktop-btn"
                info="Suivant"
                onAction={() => onChangeCard(1)}
            />
            <ArrowButton
                direction="right"
                circle
                size="huge"
                buttonClass="mobile-btn"
                info="Suivant"
                onAction={() => onChangeCard(1)}
            />
        </p>
    </Card>
);

export default CompetenceCard;
