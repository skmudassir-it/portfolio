import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="pt-32 pb-16 px-4 bg-dark">
        <div className="max-w-7xl mx-auto text-center">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-black mb-6 text-gradient"
            >
                {title}
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
                {subtitle}
            </motion.p>
        </div>
    </div>
);

export const Education = () => (
    <div className="min-h-screen">
        <PageHeader title="Education" subtitle="My academic background and certifications." />
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-8">
                <div className="glass-morphism p-8 rounded-2xl border-l-4 border-primary">
                    <span className="text-primary font-bold">2018 - 2022</span>
                    <h3 className="text-2xl font-bold mt-2">Bachelor of Computer Science</h3>
                    <p className="text-gray-300 mt-2">University Name • GPA: 3.9/4.0</p>
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        Focused on software engineering, computer graphics, and distributed systems. Recipient of several academic excellence awards.
                    </p>
                </div>
                <div className="glass-morphism p-8 rounded-2xl border-l-4 border-secondary">
                    <span className="text-secondary font-bold">2022</span>
                    <h3 className="text-2xl font-bold mt-2">Advanced Web Development Certification</h3>
                    <p className="text-gray-300 mt-2">Online Platform / Institute</p>
                </div>
            </div>
        </section>
    </div>
);

export const Experience = () => (
    <div className="min-h-screen">
        <PageHeader title="Experience" subtitle="My professional journey and career highlights." />
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto space-y-12">
                {[
                    {
                        role: 'Full Stack Developer',
                        company: 'Tech Solutions Inc.',
                        period: '2023 - Present',
                        color: 'border-primary',
                        desc: 'Leading the frontend team in developing high-performance web applications using React and Next.js.'
                    },
                    {
                        role: 'Software Engineer Intern',
                        company: 'InnoWorks',
                        period: '2022 - 2023',
                        color: 'border-secondary',
                        desc: 'Collaborated on developing microservices and optimizing database queries for high-traffic platforms.'
                    }
                ].map((exp, i) => (
                    <div key={i} className={`glass-morphism p-8 rounded-2xl border-l-4 ${exp.color}`}>
                        <div className="flex justify-between items-start flex-wrap gap-2">
                            <div>
                                <h3 className="text-2xl font-bold">{exp.role}</h3>
                                <p className="text-gray-300 mt-1">{exp.company}</p>
                            </div>
                            <span className="px-4 py-1 rounded-full bg-white/5 text-sm font-semibold">{exp.period}</span>
                        </div>
                        <p className="text-gray-400 mt-6 leading-relaxed">{exp.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export const Publication = () => (
    <div className="min-h-screen">
        <PageHeader title="Publications" subtitle="My research papers, articles, and shared knowledge." />
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6">
                <div className="glass-morphism p-8 rounded-2xl hover:bg-white/10 transition-all cursor-pointer">
                    <h3 className="text-2xl font-bold mb-3">Exploring the Frontiers of WebGL and Three.js</h3>
                    <p className="text-gray-300 mb-4">Published in Tech Insights Journal • 2024</p>
                    <p className="text-gray-400">An in-depth look at how 3D graphics are changing user behavior and engagement on the web.</p>
                    <button className="mt-6 text-primary font-bold hover:underline">Read Article -&gt;</button>
                </div>
            </div>
        </section>
    </div>
);

export const Projects = () => (
    <div className="min-h-screen">
        <PageHeader title="Projects" subtitle="A selection of my recent work and personal projects." />
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="glass-morphism overflow-hidden rounded-3xl group">
                        <div className="h-64 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                            <div className="text-6xl font-black opacity-10 group-hover:scale-125 transition-transform duration-500">PROJECT {i}</div>
                            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <button className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-primary hover:text-white transition-all">Demo</button>
                                <button className="px-6 py-2 border border-white text-white font-bold rounded-full hover:bg-white hover:text-black transition-all">Code</button>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3">Amazing Project Title</h3>
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">React</span>
                                <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-lg uppercase tracking-wider">Three.js</span>
                            </div>
                            <p className="text-gray-400">A detailed description of the project, the technologies used, and the problems it solves.</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export const Contact = () => (
    <div className="min-h-screen">
        <PageHeader title="Contact" subtitle="Let's build something amazing together." />
        <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center text-primary italic">@</div>
                            <span>hello@yourdomain.com</span>
                        </div>
                    </div>
                </div>
                <div className="glass-morphism p-8 rounded-3xl">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-400">Name</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-400">Email</label>
                            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-400">Message</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
);
