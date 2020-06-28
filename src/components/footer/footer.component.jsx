import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                {year} <span>&copy;</span> Marine Heckler |{' '}
                <Link to="/mentions">Mentions Légales</Link>
            </p>
        </footer>
    );
};

export default Footer;
