import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
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
            {large ? (
                <p className="links">
                    <CustomButton onClick={previousCard}>
                        <i className="large chevron left icon"></i>
                    </CustomButton>
                    <CustomButton onClick={nextCard}>
                        <i className="large chevron right icon"></i>
                    </CustomButton>
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
                            <i className="linkify icon"></i>
                        </CustomButton>
                    )}
                    {githubLink && (
                        <CustomButton
                            small
                            link
                            linkUrl={githubLink}
                            info="Code source"
                        >
                            <i className="github icon"></i>
                        </CustomButton>
                    )}
                </p>
            )}
        </div>
    </div>
);

export default Card;
