import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-light-dark/50 py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Mudassir Shaik logo" className="w-8 h-8 object-contain rounded-lg" />
                            <h3 className="text-2xl font-bold text-gradient">MUDASSIR</h3>
                        </div>
                        <p className="text-dark-light">
                            Creative developer focused on building immersive digital experiences that combine design and technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-dark-light hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/projects" className="text-dark-light hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="/certifications" className="text-dark-light hover:text-primary transition-colors">Certifications</a></li>
                            <li><a href="/experience" className="text-dark-light hover:text-primary transition-colors">Experience</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark">Socials</h4>
                        <div className="flex flex-col space-y-4">
                            <div className="flex space-x-4">
                                <a href="https://github.com/skmudassir-it" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all">
                                    <Github size={18} />
                                </a>
                                <a href="https://www.linkedin.com/in/mudassirshaik/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-accent/20 hover:text-accent transition-all">
                                    <Twitter size={18} />
                                </a>
                            </div>
                            <a href="/resume" className="inline-block bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 px-6 py-2 rounded-full font-bold hover:brightness-110 transition-all shadow-glow text-center max-w-[150px]">
                                E-Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-white/10 text-center text-dark-light text-sm">
                    &copy; {new Date().getFullYear()} Mudassir Shaik. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
