import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, FileText, Layout, Send, ShieldCheck, Rocket, Award } from 'lucide-react';
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

    const stats = [
        { value: '84+', label: 'Projects Built' },
        { value: '10+', label: 'Years Experience' },
        { value: '26+', label: 'Live Client Sites' },
        { value: '6', label: 'Cloud Certifications' },
    ];

    return (
        <div className="relative overflow-hidden bg-light">
            {/* Soft Gradient Background Orbs */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-[40%] left-[45%] w-[25%] h-[25%] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="relative min-h-[92vh] flex items-center justify-center pt-24">
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* Avatar */}
                        <div className="relative inline-block mb-8">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/40 shadow-glow relative">
                                <img src="/mudassir-image.jpeg" alt="Mudassir Shaik — Creative Developer" className="w-full h-full object-cover" />
                            </div>
                            <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-light"></span>
                        </div>

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-dark-light">Available for new projects</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
                            Mudassir Shaik
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            <span className="text-gradient">Creative Developer & AI Engineer</span>
                        </h2>

                        <p className="text-lg md:text-xl text-dark-light max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
                            I build scalable, automated, and intelligent solutions that bridge the gap between complex engineering and elegant design.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-12">
                            <Link to="/projects" className="btn-primary w-full sm:w-auto group inline-flex items-center justify-center gap-2">
                                Explore My Work
                                <ArrowRight className="inline-block group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link to="/contact" className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2">
                                <Rocket size={18} />
                                Start a Conversation
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                    className="glass-morphism rounded-2xl px-4 py-5"
                                >
                                    <p className="text-2xl md:text-3xl font-black text-gradient">{s.value}</p>
                                    <p className="text-xs uppercase tracking-widest text-dark-light mt-1">{s.label}</p>
                                </motion.div>
                            ))}
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
                                    <div className="glass-morphism p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500 h-full flex flex-col items-center text-center hover:border-primary/30">
                                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-500 overflow-hidden p-3">
                                            <img src={tech.icon} alt={`${tech.name} — ${tech.desc}`} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <h4 className="text-xl md:text-2xl font-bold mb-2 text-dark">{tech.name}</h4>
                                        <p className="text-dark-light font-medium mb-4">{tech.desc}</p>
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
            <section className="section-padding px-4 bg-white/[0.02]">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <ShieldCheck className="mx-auto mb-6 text-primary w-12 h-12" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-dark leading-tight italic font-serif">
                            I believe the most powerful solutions are the ones that feel invisible. My mission is to automate the mundane and engineer the exceptional.
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"></div>
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
                            <p className="text-dark-light text-lg font-medium">A diverse professional path shaped by a passion for technology and management.</p>
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
                                    <div className="glass-morphism h-full p-10 rounded-[32px] border-l-[6px] transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 flex flex-col items-center text-center"
                                        style={{ borderLeftColor: idx % 2 === 0 ? '#818cf8' : '#f472b6' }}>
                                        <div className="w-20 h-20 md:w-28 md:h-28 bg-white/10 rounded-3xl p-4 flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:shadow-glow transition-transform overflow-hidden">
                                            <img src={exp.image} alt={`${exp.company} — ${exp.role}`} className="max-w-full max-h-full object-contain" />
                                        </div>
                                        <h4 className="text-2xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">{exp.role}</h4>
                                        <p className="text-dark-light font-bold mb-6">{exp.company}</p>
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
            <section className="section-padding px-4 bg-white/[0.02] rounded-[40px] md:rounded-[80px] mx-4 mb-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[100px]" />

                <div className="max-w-7xl mx-auto relative z-10 font-outfit">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-4">Portfolio</h2>
                            <h3 className="text-4xl md:text-5xl font-bold mb-6 text-dark">Featured <span className="text-gradient">Creations</span></h3>
                        </div>
                        <Link to="/projects" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-dark rounded-2xl font-bold transition-all border border-white/10 group">
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
                            },
                            {
                                name: "Shop Hershe",
                                url: "https://shophershe.com",
                                image: "/projects/shop_hershe.avif",
                                platform: "Shopify",
                            },
                            {
                                name: "Go Sticky Icky",
                                url: "https://gostickyicky.com",
                                image: "/projects/Go_stickyIcky.avif",
                                platform: "Shopify",
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
                                    <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden h-full flex flex-col transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-glow">
                                        <div className="relative h-60 overflow-hidden bg-white/10 flex items-center justify-center p-6">
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute inset-0 bg-light/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <div className="px-6 py-2 bg-gradient-to-r from-primary via-secondary to-accent text-slate-950 font-black rounded-full text-sm">Launch Site</div>
                                            </div>
                                        </div>
                                        <div className="p-8">
                                            <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h4>
                                            <p className="text-dark-light font-bold uppercase tracking-widest text-xs">{project.platform}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links Grid */}
            <section className="section-padding px-4 pt-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featurePages.map((page, idx) => (
                        <motion.div
                            key={page.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <Link to={page.path} className="block h-full">
                                <div className="glass-morphism p-8 rounded-3xl group hover:bg-white/10 transition-all duration-500 h-full hover:border-primary/30">
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300">
                                        {page.icon}
                                    </div>
                                    <h4 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">{page.title}</h4>
                                    <p className="text-dark-light leading-relaxed">{page.desc}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Footer Connect CTA */}
            <section className="section-padding px-4 text-center pt-0">
                <div className="max-w-3xl mx-auto glass-morphism p-12 md:p-20 rounded-[48px] relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-soft-gradient pointer-events-none" />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <Award className="mx-auto mb-6 text-secondary w-12 h-12" />
                        <h2 className="text-4xl md:text-5xl font-black mb-8 text-dark">Ready to Build <br /><span className="text-gradient">Something Iconic?</span></h2>
                        <p className="text-dark-light text-lg mb-12 font-medium">Let's collaborate on your next big idea. I'm just a click away.</p>
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
