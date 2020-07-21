import React from 'react';
import './card.styles.scss';

const Card = ({ children, ...cardProps }) => (
    <div className={`card ${cardProps.cardClass}`}>
        <div
            className="image"
            style={{ backgroundImage: `url(${cardProps.imageUrl})` }}
        />

        <div className="content">
            <span>
                {cardProps.id}/{cardProps.totalCards}
            </span>
            <h4>{cardProps.title}</h4>
            <ul>
                {cardProps.tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                ))}
            </ul>
            {children}
        </div>
    </div>
);

export default Card;
