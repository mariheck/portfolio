import React from 'react';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';

const ArrowButton = ({ direction, onSwipe, ...buttonProps }) => (
    <CustomButton onAction={onSwipe} {...buttonProps}>
        <Icon name={`chevron ${direction}`} size="large" />
    </CustomButton>
);

export default ArrowButton;
