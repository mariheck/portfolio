import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import CompetencesPage from './pages/competences/competences.component';
import ProjectsPage from './pages/projects/projects.component';
import AboutPage from './pages/about/about.component';
import MentionsPage from './pages/mentions/mentions.component';

function App() {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/savoir-faire" component={CompetencesPage} />
                <Route exact path="/projets" component={ProjectsPage} />
                <Route exact path="/a-propos" component={AboutPage} />
                <Route exact path="/mentions" component={MentionsPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
