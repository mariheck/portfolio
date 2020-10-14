import React from 'react';
import { Icon } from 'semantic-ui-react';
import Card from '../card/card.component';
import CustomButton from '../custom-button/custom-button.component';
import './small-card.styles.scss';

const SmallCard = ({ description, links, ...cardProps }) => (
    <Card cardClass="small-card" {...cardProps}>
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

export default SmallCard;
