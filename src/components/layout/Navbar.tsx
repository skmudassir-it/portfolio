import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Monitor, Home, GraduationCap, Briefcase, FolderGit2, FileText, Award, Mail, FileDown, ArrowRight } from 'lucide-react';
import { useThemeMode } from '../../theme/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { mode, cycleMode } = useThemeMode();

    const navLinks = [
        { name: 'Home', path: '/', icon: <Home size={18} /> },
        { name: 'Education', path: '/education', icon: <GraduationCap size={18} /> },
        { name: 'Experience', path: '/experience', icon: <Briefcase size={18} /> },
        { name: 'Projects', path: '/projects', icon: <FolderGit2 size={18} /> },
        { name: 'Publication', path: '/publication', icon: <FileText size={18} /> },
        { name: 'Certifications', path: '/certifications', icon: <Award size={18} /> },
        { name: 'Contact', path: '/contact', icon: <Mail size={18} /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // lock body scroll when drawer open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    // close drawer on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const ThemeIcon = mode === 'dark' ? Moon : mode === 'light' ? Sun : Monitor;

    return (
        <>
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-morphism py-3' : 'bg-transparent py-6'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="flex items-center gap-2">
                            <img src="/logo.png" alt="Mudassir Shaik logo" className="w-10 h-10 object-contain rounded-lg" />
                            <span className="text-2xl font-bold text-gradient hidden sm:block">MUDASSIR</span>
                        </Link>

                        {/* Desktop Links */}
                        <div className="hidden md:flex items-center space-x-7">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`transition-all duration-300 ${location.pathname === link.path ? 'text-primary font-semibold' : 'text-dark-light hover:text-primary'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                to="/resume"
                                className="bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 px-5 py-2 rounded-full font-bold hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-glow"
                            >
                                E-Resume
                            </Link>

                            {/* Theme Toggle */}
                            <button
                                onClick={cycleMode}
                                aria-label={`Theme: ${mode} — click to change`}
                                title={`Theme: ${mode} — click to switch`}
                                className="p-2 rounded-full glass-morphism hover:scale-110 transition-all duration-300"
                            >
                                <ThemeIcon size={18} className="text-dark-light" />
                            </button>
                        </div>

                        {/* Mobile: hamburger */}
                        <div className="md:hidden flex items-center gap-3">
                            <button
                                onClick={cycleMode}
                                aria-label={`Theme: ${mode}`}
                                title={`Theme: ${mode} — click to switch`}
                                className="p-2 rounded-full glass-morphism hover:scale-110 transition-all duration-300"
                            >
                                <ThemeIcon size={18} className="text-dark-light" />
                            </button>
                            <button
                                onClick={() => setIsOpen(true)}
                                aria-label="Open menu"
                                className="p-2 rounded-full glass-morphism hover:scale-110 transition-all duration-300"
                            >
                                <Menu size={22} className="text-dark-light" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* ===== MOBILE DRAWER — slides in from LEFT ===== */}
            {/* Overlay */}
            <div
                className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
                aria-hidden="true"
            />

            {/* Drawer */}
            <aside
                className={`fixed top-0 left-0 h-full w-[300px] max-w-[85vw] z-[70] md:hidden glass-morphism flex flex-col transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ borderRight: '1px solid rgba(255,255,255,0.1)', borderRadius: 0 }}
                aria-label="Mobile navigation"
            >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                        <img src="/logo.png" alt="Mudassir Shaik logo" className="w-9 h-9 object-contain rounded-lg" />
                        <span className="text-lg font-bold text-gradient">MUDASSIR</span>
                    </div>
                    <button
                        onClick={() => setIsOpen(false)}
                        aria-label="Close menu"
                        className="p-2 rounded-full hover:bg-white/10 transition-all"
                    >
                        <X size={22} className="text-dark-light" />
                    </button>
                </div>

                {/* Drawer links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3">
                    <ul className="space-y-1">
                        {navLinks.map((link) => {
                            const active = location.pathname === link.path;
                            return (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active
                                            ? 'bg-primary/15 text-primary font-bold'
                                            : 'text-dark-light hover:bg-white/10 hover:text-primary'
                                            }`}
                                    >
                                        <span className={active ? 'text-primary' : 'text-dark-light/70'}>{link.icon}</span>
                                        <span className="text-sm font-semibold">{link.name}</span>
                                        {active && <ArrowRight size={14} className="ml-auto text-primary" />}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Drawer footer — E-Resume */}
                <div className="px-5 py-5 border-t border-white/10">
                    <Link
                        to="/resume"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-2 bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 px-5 py-3 rounded-xl font-bold hover:brightness-110 transition-all"
                    >
                        <FileDown size={18} /> E-Resume
                    </Link>
                    <p className="text-center text-xs text-dark-light/60 mt-3 font-medium">
                        Forward Deployed Engineer · AI/ML · Cloud
                    </p>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
