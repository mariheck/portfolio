import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';

const Footer = () => (
    <footer>
        <p>
            {new Date().getFullYear()} © Marine Heckler |{' '}
            <Link to="/portfolio/mentions">Mentions Légales</Link>
        </p>
    </footer>
);

export default Footer;
