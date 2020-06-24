import React from 'react';
import './card.styles.scss';

const Card = ({
    id,
    projectsNumber,
    title,
    imageUrl,
    description,
    websiteUrl,
    githubLink
}) => (
    <div className="card">
        <div
            className="image"
            style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="content">
            <span>
                {id}/{projectsNumber}
            </span>
            <h4>{title}</h4>
            <p>{description}</p>
            <p className="links">
                <a
                    href={websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Voir le site"
                >
                    <i className="external alternate icon"></i>
                </a>
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
        </div>
    </div>
);

export default Card;
