import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

const ArrowButton = ({ direction, onSwipe, ...buttonProps }) => (
    <CustomButton onAction={onSwipe} {...buttonProps}>
        {direction === 'left' ? (
            <i className="large chevron left icon"></i>
        ) : direction === 'right' ? (
            <i className="large chevron right icon"></i>
        ) : (
            ''
        )}
    </CustomButton>
);

export default ArrowButton;
