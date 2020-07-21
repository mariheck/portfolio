import React from 'react';
import { Icon } from 'semantic-ui-react';
import Card from '../card/card.component';
import CustomButton from '../custom-button/custom-button.component';
import './project-card.styles.scss';

const ProjectCard = ({ description, links, ...cardProps }) => (
    <Card cardClass="project-card" {...cardProps}>
        <p>{description}</p>
        <p className="links">
            {links.map((link, idx) => (
                <CustomButton
                    key={idx}
                    isLink
                    linkUrl={link.linkUrl}
                    info={link.info}
                >
                    <Icon name={link.icon} size="large" />
                </CustomButton>
            ))}
        </p>
    </Card>
);

export default ProjectCard;
