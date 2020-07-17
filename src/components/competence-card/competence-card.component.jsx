import React from 'react';
import Card from '../card/card.component';
import ArrowButton from '../arrow-button/arrow-button.component';
import './competence-card.styles.scss';

const CompetenceCard = ({ description, changeCard, ...cardProps }) => (
    <Card cardClass="competence-card" {...cardProps}>
        <p>{description}</p>
        <p className="links">
            <ArrowButton
                direction="left"
                onSwipe={() => changeCard('previous')}
            />
            <ArrowButton direction="right" onSwipe={() => changeCard('next')} />
        </p>
    </Card>
);

export default CompetenceCard;
