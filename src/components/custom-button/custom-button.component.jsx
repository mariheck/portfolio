import React, { Fragment } from 'react';
import './custom-button.styles.scss';

// Custom circle button, from regular buttons or links

const CustomButton = ({
    buttonClass,
    link,
    linkUrl,
    info,
    children,
    onAction
}) => {
    return (
        <Fragment>
            {link ? (
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={info}
                    className={`custom-button ${
                        buttonClass ? buttonClass : ''
                    }`}
                >
                    {children}
                </a>
            ) : (
                <button
                    title={info}
                    className={`custom-button ${
                        buttonClass ? buttonClass : ''
                    }`}
                    onClick={onAction}
                >
                    {children}
                </button>
            )}
        </Fragment>
    );
};

export default CustomButton;
