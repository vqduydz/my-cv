import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { PublicRoutes } from './routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {PublicRoutes.map((route, index) => {
                        const Page = route.comp;

                        return (
                            <Route
                                key={index}
                                exact
                                path={route.path}
                                element={
                                    <DefaultLayout>
                                        <Page />
                                    </DefaultLayout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
