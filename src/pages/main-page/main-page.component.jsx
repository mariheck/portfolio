import React, { Fragment } from 'react';
import Header from '../../sections/header/header.component';
import HomeSection from '../../sections/home/home.component';
import CompetencesSection from '../../sections/competences/competences.component';
import ProjectsSection from '../../sections/projects/projects.component';
import AboutSection from '../../sections/about/about.component';

const MainPage = () => (
    <Fragment>
        <HomeSection />
        <Header />
        <CompetencesSection />
        <ProjectsSection />
        <AboutSection />
    </Fragment>
);

export default MainPage;
