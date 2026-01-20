import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import TechDetail from './pages/TechDetail';
import { Education, Experience, Publication, Projects, Contact, Certifications, ExperienceDetail } from './pages/OtherPages';

function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/tech/:slug" element={<TechDetail />} />
                        <Route path="/education" element={<Education />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/experience/:slug" element={<ExperienceDetail />} />
                        <Route path="/publication" element={<Publication />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/certifications" element={<Certifications />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
