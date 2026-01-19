const Footer = () => {
    return (
        <footer className="bg-light-dark py-12 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain rounded-lg" />
                            <h3 className="text-2xl font-bold text-gradient">MUDASSIR</h3>
                        </div>
                        <p className="text-gray-600">
                            Creative developer focused on building immersive digital experiences that combine design and technology.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
                            <li><a href="/projects" className="text-gray-600 hover:text-primary transition-colors">Projects</a></li>
                            <li><a href="/certifications" className="text-gray-600 hover:text-primary transition-colors">Certifications</a></li>
                            <li><a href="/experience" className="text-gray-600 hover:text-primary transition-colors">Experience</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-dark">Socials</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/20 transition-all">GH</a>
                            <a href="https://www.linkedin.com/in/mudassirshaik/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/20 transition-all">LI</a>
                            <a href="#" className="w-10 h-10 rounded-full glass-morphism flex items-center justify-center hover:bg-primary/20 transition-all">TW</a>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Mudassir. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
