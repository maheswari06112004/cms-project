import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Cms from './layout/cms';

function App() {
    return (
        <Router>
            <nav>
                <Link to="/cms">Dashboard CMS</Link>
            </nav>
            <Routes>
                <Route path="/cms" element={<Cms />} />
            </Routes>
        </Router>
    );
}

export default App;