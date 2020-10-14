import React, { Fragment } from 'react';
import Header from '../../sections/header/header.component';
import Carousel from '../../components/carousel/carousel.component';
import data from '../../data';
import './templates.styles.scss';

const TemplatesPage = () => (
    <Fragment>
        <Header simplified />
        <section className="templates">
            <h3>Modèles</h3>
            <p className="intro">
                Ce que vous voyez ci-dessous sont des images, et ne sont donc ni
                responsives, ni animées. Pour avoir un meilleur aperçu de la
                mise en forme des templates sur écran d'ordinateur ou de
                téléphone, cliquez sur les boutons associés à chaque modèle.
            </p>

            <Carousel cards={data.templates} />
        </section>
    </Fragment>
);

export default TemplatesPage;
