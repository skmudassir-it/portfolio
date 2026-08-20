import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';

// Route-level code splitting — each page loads its own JS chunk
const TechDetail = lazy(() => import('./pages/TechDetail'));
const SkillDetail = lazy(() => import('./pages/SkillDetail'));
const Resume = lazy(() => import('./pages/Resume'));
const Education = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Education })));
const Experience = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Experience })));
const ExperienceDetail = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.ExperienceDetail })));
const Publication = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Publication })));
const Projects = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Projects })));
const Certifications = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Certifications })));
const Contact = lazy(() => import('./pages/OtherPages').then(m => ({ default: m.Contact })));

// Loading fallback
const PageLoader = () => (
    <div className="min-h-[60vh] flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
);

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow">
                    <Suspense fallback={<PageLoader />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/tech/:slug" element={<TechDetail />} />
                            <Route path="/skill/:slug" element={<SkillDetail />} />
                            <Route path="/education" element={<Education />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/experience/:slug" element={<ExperienceDetail />} />
                            <Route path="/publication" element={<Publication />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/certifications" element={<Certifications />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/resume" element={<Resume />} />
                        </Routes>
                    </Suspense>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
