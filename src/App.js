import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Footer from './sections/footer/footer.component';
import Spinner from './components/spinner/spinner.component';

const MainPage = lazy(() => import('./pages/main-page/main-page.component'));
const MentionsPage = lazy(() => import('./pages/mentions/mentions.component'));

function App() {
    return (
        <div>
            <Switch>
                <Suspense fallback={<Spinner />}>
                    <Route exact path="/portfolio" component={MainPage} />
                    <Route
                        exact
                        path="/portfolio/mentions"
                        component={MentionsPage}
                    />
                </Suspense>
            </Switch>
            <Footer />
        </div>
    );
}

export default App;
