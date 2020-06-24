import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer>
            <p>
                {year} &copy; Marine Heckler | Siret : 880 456 595 00011 |{' '}
                <Link to="/mentions">Mentions Légales</Link>
            </p>
        </footer>
    );
};

export default Footer;
