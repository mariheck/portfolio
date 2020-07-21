import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.component';
import MentionsPage from './pages/mentions/mentions.component';
import Footer from './sections/footer/footer.component';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/portfolio" component={MainPage} />
                <Route
                    exact
                    path="/portfolio/mentions"
                    component={MentionsPage}
                />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
