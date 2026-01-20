import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, FileText, Layout, Send, Zap, Code2, Globe, Database, Mail, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experienceData } from './OtherPages';

const Home = () => {
    const techStack = [
        { name: 'N8N', slug: 'n8n', icon: '/skills/N8n-logo-new.svg.png', desc: 'Workflow Automation' },
        { name: 'Antigravity', slug: 'antigravity', icon: '/skills/antigravity-google-ai-logo.jpg', desc: 'Agentic AI' },
        { name: 'Shopify', slug: 'shopify', icon: '/skills/Shopify-ecommerce-platform.png.webp', desc: 'E-commerce Solutions' },
        { name: 'WordPress', slug: 'wordpress', icon: '/skills/wplogoblue-stacked-rgb_zqpuyr.avif', desc: 'CMS Development' },
        { name: 'AWS', slug: 'aws', icon: '/skills/1_tFl-8wQUENETYLjX5mYWuA.png', desc: 'Cloud Infrastructure' },
        { name: 'Email Marketing', slug: 'email-marketing', icon: '/skills/Email-marketing-The-Comms-Avenue.png', desc: 'Growth Strategy' },
    ];

    const featurePages = [
        { title: 'Education', path: '/education', icon: <BookOpen className="text-primary" />, desc: 'Degrees, certifications and academic background.' },
        { title: 'Experience', path: '/experience', icon: <Briefcase className="text-secondary" />, desc: 'Professional journey and work history.' },
        { title: 'Projects', path: '/projects', icon: <Layout className="text-primary" />, desc: 'Cool things I have built and open source work.' },
        { title: 'Publication', path: '/publication', icon: <FileText className="text-secondary" />, desc: 'Research papers, articles and blogs.' },
        { title: 'Contact', path: '/contact', icon: <Send className="text-primary" />, desc: 'Ways to reach out and collaborate.' },
    ];

    return (
        <div className="relative overflow-hidden bg-light">
            {/* Soft Gradient Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-20">
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white/20 backdrop-blur-md mb-8 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-dark/70">Available for new projects</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
                            Digital Experiences <br />
                            <span className="text-gradient">Engineered to Perfection</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-dark/60 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                            I build scalable, automated, and intelligent solutions that bridge the gap between complex engineering and elegant design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Link to="/projects" className="btn-primary w-full sm:w-auto group">
                                Explore My Work
                                <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-secondary w-full sm:w-auto">
                                Start a Conversation
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Technical Range / Tech Stack Section */}
            <section className="section-padding px-4 relative z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Technical Range</h2>
                        <h3 className="text-4xl md:text-5xl font-bold text-dark">Solving Problems with <span className="text-gradient">Modern Tech</span></h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {techStack.map((tech, idx) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link to={`/tech/${tech.slug}`} className="block h-full">
                                    <div className="glass-morphism p-8 rounded-3xl group hover:bg-white/80 transition-all duration-500 h-full flex flex-col items-center text-center">
                                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-all duration-500 overflow-hidden p-3">
                                            <img src={tech.icon} alt={tech.name} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2 text-dark">{tech.name}</h4>
                                        <p className="text-dark/50 font-medium mb-4">{tech.desc}</p>
                                        <div className="text-xs font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mt-auto">
                                            Learn More <ArrowRight size={14} />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote / Value Statement */}
            <section className="section-padding px-4 bg-white/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <span className="text-6xl text-primary/20 font-serif mb-4 block italic">"</span>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark leading-tight italic font-serif">
                            I believe the most powerful solutions are the ones that feel invisible. My mission is to automate the mundane and engineer the exceptional.
                        </h2>
                        <div className="w-12 h-1 bg-gradient-to-r from-primary to-transparent mx-auto"></div>
                    </motion.div>
                </div>
            </section>

            {/* Quick Links / Experience Preview */}
            <section className="section-padding px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-secondary mb-4">My Journey</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-dark mb-6">Experience <span className="text-gradient">& Growth</span></h3>
                            <p className="text-dark/60 text-lg font-medium">A diverse professional path shaped by a passion for technology and management.</p>
                        </div>
                        <Link to="/experience" className="btn-secondary group flex items-center gap-3">
                            Full Resume <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {experienceData.slice(0, 3).map((exp, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link to={`/experience/${exp.slug}`} className="group block h-full">
                                    <div className="glass-morphism h-full p-10 rounded-[32px] border-l-[6px] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center" style={{ borderLeftColor: idx % 2 === 0 ? '#6366f1' : '#db2777' }}>
                                        <div className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-3xl p-4 flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 transition-transform overflow-hidden">
                                            <img src={exp.image} alt={exp.company} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">{exp.role}</h4>
                                        <p className="text-dark/50 font-bold mb-6">{exp.company}</p>
                                        <div className="mt-auto inline-flex items-center text-xs font-black uppercase tracking-widest text-primary">
                                            {exp.period}
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Highlight */}
            <section className="section-padding px-4 bg-dark text-white rounded-[40px] md:rounded-[80px] mx-4 mb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10 font-outfit">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white">Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Creations</span></h3>
                        </div>
                        <Link to="/projects" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-bold transition-all border border-white/10 group">
                            View All Projects <ArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Beauty and company",
                                url: "https://www.bandconline.com",
                                image: "/projects/beauty_and_company.webp",
                                platform: "Shopify",
                                color: "primary"
                            },
                            {
                                name: "Shop Hershe",
                                url: "https://shophershe.com",
                                image: "/projects/shop_hershe.avif",
                                platform: "Shopify",
                                color: "secondary"
                            },
                            {
                                name: "Go Sticky Icky",
                                url: "https://gostickyicky.com",
                                image: "/projects/Go_stickyIcky.avif",
                                platform: "Shopify",
                                color: "accent"
                            }
                        ].map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group h-full"
                            >
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:bg-white/10 hover:-translate-y-2">
                                        <div className="relative h-60 overflow-hidden bg-white/10 flex items-center justify-center p-6">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="px-6 py-2 bg-white text-dark font-black rounded-full text-sm">Launch Site</div>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
                                            <p className="text-white/40 font-bold uppercase tracking-widest text-xs">{project.platform}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer Connect CTA */}
            <section className="section-padding px-4 text-center">
                <div className="max-w-3xl mx-auto glass-morphism p-12 md:p-20 rounded-[48px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-soft-gradient pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-dark">Ready to Build <br /><span className="text-gradient">Something Iconic?</span></h2>
                        <p className="text-dark/60 text-lg mb-12 font-medium">Let's collaborate on your next big idea. I'm just a click away.</p>
                        <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-10">
                            Get In Touch <Send size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Home;
