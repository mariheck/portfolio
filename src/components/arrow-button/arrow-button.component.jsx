import React from 'react';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';
import './arrow-button.styles.scss';

const ArrowButton = ({ direction, onSwipe, ...buttonProps }) => (
    <CustomButton onAction={onSwipe} {...buttonProps}>
        <Icon
            className="mobile-icon"
            name={`chevron circle ${direction}`}
            size="huge"
            inverted
        />
        <Icon
            className="desktop-icon"
            name={`chevron ${direction}`}
            size="big"
        />
    </CustomButton>
);

export default ArrowButton;
