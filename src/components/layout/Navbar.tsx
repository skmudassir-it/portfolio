import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Education', path: '/education' },
        { name: 'Experience', path: '/experience' },
        { name: 'Projects', path: '/projects' },
        { name: 'Publication', path: '/publication' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Contact', path: '/contact' },
        { name: 'E-Resume', path: '/resume' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
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
                                className={`transition-all duration-300 ${link.name === 'E-Resume'
                                    ? 'bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 px-5 py-2 rounded-full font-bold hover:brightness-110 hover:-translate-y-0.5 transition-all shadow-glow'
                                    : location.pathname === link.path ? 'text-primary font-semibold' : 'text-dark-light hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-dark hover:text-primary"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden mt-4 space-y-3 pb-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-xl transition-all ${link.name === 'E-Resume'
                                    ? 'bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 font-bold text-center'
                                    : 'glass-morphism text-dark hover:text-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
