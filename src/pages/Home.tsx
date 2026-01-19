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

            {/* Education Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Academic <span className="text-gradient">Background</span></h2>
                            <p className="text-gray-600 max-w-xl text-lg">My educational journey and qualifications.</p>
                        </div>
                        <Link to="/education" className="btn-secondary flex items-center gap-2 group whitespace-nowrap">
                            View Full Education <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                degree: "Masters in Information Technology Management",
                                school: "Indiana Wesleyan University",
                                period: "2023 - 2024",
                                image: "/education/Indiana-Wesleyan-University.webp",
                                color: "border-primary"
                            },
                            {
                                degree: "MSc Datascience",
                                school: "Chandigarh University",
                                period: "2021 - 2023",
                                image: "/education/chandigarh_university.png",
                                color: "border-secondary"
                            },
                            {
                                degree: "BE Mechanical Engineering",
                                school: "Muffakham Jah College of Engg and Tech",
                                period: "2014 - 2017",
                                image: "/education/mjcet.jpg",
                                color: "border-primary"
                            },
                            {
                                degree: "Diploma in Automobile Engineering",
                                school: "Govt Polytechnic Masabtank",
                                period: "2009 - 2012",
                                image: "/education/diploma.jpg",
                                color: "border-secondary"
                            }
                        ].map((edu, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-morphism p-6 rounded-2xl border-l-4 ${edu.color} flex items-center gap-6 hover:bg-black/5 transition-all`}
                            >
                                <div className="w-20 h-20 flex-shrink-0 bg-white rounded-xl p-2 flex items-center justify-center border border-gray-100">
                                    <img src={edu.image} alt={edu.school} className="max-w-full max-h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-1">{edu.degree}</h3>
                                    <p className="text-sm text-gray-600 mb-2">{edu.school}</p>
                                    <span className="px-3 py-1 bg-black/5 text-gray-500 text-xs font-bold rounded-full">{edu.period}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Certifications Section */}
            <section className="py-24 px-4 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Professional <span className="text-gradient">Certifications</span></h2>
                            <p className="text-gray-600 max-w-xl text-lg">Independently verified skills from industry leaders like AWS, Microsoft, and Harvard.</p>
                        </div>
                        <Link to="/certifications" className="btn-secondary flex items-center gap-2 group whitespace-nowrap">
                            View All Certifications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "AWS Developer Associate", issuer: "Amazon Web Services", image: "/certificates/AWS Developer.png" },
                            { title: "Azure DevOps Expert", issuer: "Microsoft", image: "/certificates/AZ-400.png" },
                            { title: "Data Science: ML", issuer: "HarvardX", image: "/certificates/PH125.8x.jpg" },
                            { title: "AWS ML Engineer", issuer: "AWS", image: "/certificates/AWS_MLE.png" },
                            { title: "AWS Cloud Practitioner", issuer: "AWS", image: "/certificates/AWS_CP.png" },
                            { title: "Data Science Foundations", issuer: "IBM / CC", image: "/certificates/IBM_CC.png" },
                            { title: "Crash Course on Python", issuer: "Google", image: "/certificates/udmy_python.jpg" },
                            { title: "AWS AI Practitioner", issuer: "AWS", image: "/certificates/AWS_AIP.png" }
                        ].map((cert, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-morphism p-6 rounded-2xl flex flex-col items-center text-center group hover:border-primary/50 transition-colors"
                            >
                                <div className="h-32 mb-4 bg-gray-50 w-full rounded-xl flex items-center justify-center p-3">
                                    <img src={cert.image} alt={cert.title} className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{cert.title}</h3>
                                <p className="text-xs text-gray-500 font-bold uppercase mt-1 tracking-widest">{cert.issuer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Projects Section */}
            <section className="py-24 px-4 bg-light">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                            <p className="text-gray-600 max-w-xl text-lg">A selection of my recent professional work and digital solutions.</p>
                        </div>
                        <Link to="/projects" className="btn-secondary flex items-center gap-2 group whitespace-nowrap">
                            View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Beauty and company",
                                url: "https://www.bandconline.com",
                                image: "/projects/beauty_and_company.webp",
                                platform: "Shopify (e-commerce)",
                                color: "from-blue-500/20 to-indigo-500/20"
                            },
                            {
                                name: "Shop Hershe",
                                url: "https://shophershe.com",
                                image: "/projects/shop_hershe.avif",
                                platform: "Shopify (e-commerce)",
                                color: "from-pink-500/20 to-rose-500/20"
                            },
                            {
                                name: "Go Sticky Icky",
                                url: "https://gostickyicky.com",
                                image: "/projects/Go_stickyIcky.avif",
                                platform: "Shopify (e-commerce)",
                                color: "from-green-500/20 to-emerald-500/20"
                            }
                        ].map((project, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-full"
                            >
                                <a href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                                    <div className="glass-morphism overflow-hidden rounded-3xl h-full flex flex-col transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-xl">
                                        <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                                            <img
                                                src={project.image}
                                                alt={project.name}
                                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                            />
                                            <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                <span className="px-5 py-2 bg-white text-dark font-bold rounded-full text-sm">Visit Site</span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.name}</h3>
                                            <p className="text-sm text-gray-500 font-semibold">{project.platform}</p>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recent Publications Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Recent <span className="text-gradient">Publications</span></h2>
                            <p className="text-gray-600 max-w-xl text-lg">My latest research contributions in engineering and technology.</p>
                        </div>
                        <Link to="/publication" className="btn-secondary flex items-center gap-2 group whitespace-nowrap">
                            All Publications <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Design and Analysis of Disc Brake and Caliper of four wheeler",
                                image: "/Publication/ijste.png",
                                publishedIn: "Bachelor's",
                                link: "https://ijste.org/Article.php?manuscript=IJSTEV3I8065"
                            },
                            {
                                title: "Impact of Artificial Intelligence on Corporate Leadership",
                                image: "/Publication/SRP_logo.svg",
                                publishedIn: "Master's",
                                link: "https://www.scirp.org/journal/paperinformation?paperid=132403"
                            }
                        ].map((pub, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-morphism p-6 rounded-2xl flex items-center gap-6 group hover:bg-black/5 transition-colors cursor-pointer"
                                onClick={() => window.open(pub.link, '_blank')}
                            >
                                <div className="w-24 h-24 flex-shrink-0 bg-white rounded-xl p-2 flex items-center justify-center border border-gray-100">
                                    <img src={pub.image} alt="Journal Logo" className="max-w-full max-h-full object-contain" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{pub.title}</h3>
                                    <span className="px-3 py-1 bg-black/5 text-gray-600 text-xs font-bold rounded-lg uppercase tracking-wider">{pub.publishedIn}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
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
