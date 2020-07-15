import React, { Fragment } from 'react';
import Header from '../../components/header/header.component';
import './mentions.styles.scss';

const MentionsPage = () => (
    <Fragment>
        <Header simplified />
        <section className="mentions">
            <h3>Mentions Légales</h3>
            <div className="container">
                https://unsplash.com/@lephotographe_
            </div>
        </section>
    </Fragment>
);

export default MentionsPage;
