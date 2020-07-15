import React, { Fragment } from 'react';
import Header from '../../components/header/header.component';
import HomePage from '../homepage/homepage.component';
import CompetencesPage from '../competences/competences.component';
import ProjectsPage from '../projects/projects.component';
import AboutPage from '../about/about.component';

const MainPage = () => (
    <Fragment>
        <HomePage />
        <Header />
        <CompetencesPage />
        <ProjectsPage />
        <AboutPage />
    </Fragment>
);

export default MainPage;
