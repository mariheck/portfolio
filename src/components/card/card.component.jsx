import React from 'react';
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
                    <button onClick={previousCard}>
                        <i className="large chevron left icon"></i>
                    </button>
                    <button onClick={nextCard}>
                        <i className="large chevron right icon"></i>
                    </button>
                </p>
            ) : (
                <p className="links">
                    {websiteUrl && (
                        <a
                            href={websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Voir le site"
                        >
                            <i className="linkify icon"></i>
                        </a>
                    )}
                    {githubLink && (
                        <a
                            href={githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Code source"
                        >
                            <i className="github icon"></i>
                        </a>
                    )}
                </p>
            )}
        </div>
    </div>
);

export default Card;
