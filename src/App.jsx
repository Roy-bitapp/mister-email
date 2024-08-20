
import { Home } from './pages/Home';
import { AboutUs } from './pages/AboutUs';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { EmailIndex } from './pages/EmailIndex';
import { EmailDetails } from './assets/cmps/EmailDetails';

export function App() {

    return (
        <Router>
            <main className='main'>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path="/about-us" element={ <AboutUs/> } />
                    <Route path="/email-index/*" element={<EmailIndex />}>
                        <Route path=":emailId" element={<EmailDetails />} />
                    </Route>
                </Routes>
            </main>
        </Router>
    )
}

