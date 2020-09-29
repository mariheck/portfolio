import React, { Fragment } from 'react';
import './custom-button.styles.scss';

const CustomButton = ({
    buttonClass,
    isLink,
    linkUrl,
    info,
    children,
    onAction
}) => (
    <Fragment>
        {isLink ? (
            <a
                href={linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={info}
                aria-label={info}
                className={`custom-button ${buttonClass ? buttonClass : ''}`}
            >
                {children}
            </a>
        ) : (
            <button
                title={info}
                aria-label={info}
                className={`custom-button ${buttonClass ? buttonClass : ''}`}
                onClick={onAction}
            >
                {children}
            </button>
        )}
    </Fragment>
);

export default CustomButton;
