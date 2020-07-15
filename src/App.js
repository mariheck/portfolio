import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './pages/main-page/main-page.component';
import MentionsPage from './pages/mentions/mentions.component';
import Footer from './components/footer/footer.component';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/mentions" component={MentionsPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
