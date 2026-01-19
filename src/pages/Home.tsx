import Hero3D from '../components/home/Hero3D';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, FileText, Layout, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const featurePages = [
        { title: 'Education', path: '/education', icon: <BookOpen className="text-primary" />, desc: 'Degrees, certifications and academic background.' },
        { title: 'Experience', path: '/experience', icon: <Briefcase className="text-secondary" />, desc: 'Professional journey and work history.' },
        { title: 'Projects', path: '/projects', icon: <Layout className="text-primary" />, desc: 'Cool things I have built and open source work.' },
        { title: 'Publication', path: '/publication', icon: <FileText className="text-secondary" />, desc: 'Research papers, articles and blogs.' },
        { title: 'Contact', path: '/contact', icon: <Send className="text-primary" />, desc: 'Ways to reach out and collaborate.' },
    ];

    return (
        <div className="relative">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <Hero3D />
                <div className="relative z-10 text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-black mb-6">
                            Building the <span className="text-gradient">Future</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto mb-10">
                            Creative Developer specializing in immersive 3D web experiences and modern digital solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/projects" className="btn-primary flex items-center justify-center gap-2">
                                View My Work <ArrowRight size={20} />
                            </Link>
                            <Link to="/contact" className="btn-secondary">
                                Get In Touch
                            </Link>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-dark/20 rounded-full flex justify-center pt-2">
                        <div className="w-1 h-2 bg-dark/60 rounded-full"></div>
                    </div>
                </div>
            </section>

            {/* Feature Text Section */}
            <section className="py-24 px-4 bg-light">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8">
                            Bridging <span className="text-primary">Design</span> & <span className="text-secondary">Technology</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed italic">
                            "I believe that the web can be more than just flat pages. It can be a space for storytelling, interaction, and wonder. My mission is to push the boundaries of what's possible in the browser."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Feature Cards Section */}
            <section className="py-24 px-4 bg-light-dark">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Explore My <span className="text-gradient">World</span></h2>
                        <p className="text-gray-600">Everything you need to know about my professional life.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featurePages.map((page, index) => (
                            <motion.div
                                key={page.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link to={page.path} className="group block h-full">
                                    <div className="glass-morphism p-8 h-full rounded-2xl hover:bg-black/5 transition-all duration-300 transform hover:-translate-y-2">
                                        <div className="w-14 h-14 rounded-xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                            {page.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{page.title}</h3>
                                        <p className="text-gray-600 mb-6">{page.desc}</p>
                                        <div className="flex items-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                            Learn More <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
