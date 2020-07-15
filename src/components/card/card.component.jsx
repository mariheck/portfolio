import React from 'react';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';
import ArrowButton from '../arrow-button/arrow-button.component';
import './card.styles.scss';

const Card = ({
    id,
    projectsNumber,
    title,
    imageUrl,
    tags,
    description,
    websiteUrl,
    githubLink,
    large,
    swipable,
    previousCard,
    nextCard
}) => (
    <div className={`card ${large ? 'large' : ''}`}>
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <span>
                {id}/{projectsNumber}
            </span>
            <h4>{title}</h4>
            <ul>
                {tags.map((tag, idx) => (
                    <li key={idx}>{tag}</li>
                ))}
            </ul>
            <p>{description}</p>
            {swipable ? (
                <p className="links">
                    <ArrowButton direction="left" onSwipe={previousCard} />
                    <ArrowButton direction="right" onSwipe={nextCard} />
                </p>
            ) : (
                <p className="links">
                    {websiteUrl && (
                        <CustomButton
                            small
                            link
                            linkUrl={websiteUrl}
                            info="Voir le site"
                        >
                            <Icon name="linkify" />
                        </CustomButton>
                    )}
                    {githubLink && (
                        <CustomButton
                            small
                            link
                            linkUrl={githubLink}
                            info="Code source"
                        >
                            <Icon name="github" />
                        </CustomButton>
                    )}
                </p>
            )}
        </div>
    </div>
);

export default Card;
