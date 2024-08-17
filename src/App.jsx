
import { Home } from './pages/Home';
import { AppHeader } from "./assets/cmps/AppHeader";
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

export function App() {

    return (
        <Router>
            <AppHeader />
            <main>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                </Routes>
            </main>
        </Router>
    )
}

