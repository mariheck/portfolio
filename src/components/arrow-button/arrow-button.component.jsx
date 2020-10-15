import React from 'react';
import { Icon } from 'semantic-ui-react';
import CustomButton from '../custom-button/custom-button.component';

const ArrowButton = ({
    direction,
    circle = false,
    size = 'big',
    ...buttonProps
}) => (
    <CustomButton {...buttonProps}>
        <Icon
            name={`chevron ${circle ? 'circle' : ''} ${direction}`}
            size={size}
        />
    </CustomButton>
);

export default ArrowButton;
