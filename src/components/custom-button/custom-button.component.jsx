import React, { Fragment } from 'react';
import './custom-button.styles.scss';

// Custom circle button, from regular buttons or links

const CustomButton = ({ link, linkUrl, info, children, onAction }) => {
    return (
        <Fragment>
            {link ? (
                <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={info}
                    className="custom-button"
                >
                    {children}
                </a>
            ) : (
                <button
                    title={info}
                    className="custom-button"
                    onClick={onAction}
                >
                    {children}
                </button>
            )}
        </Fragment>
    );
};

export default CustomButton;
