import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="pt-32 pb-16 px-4 bg-light">
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
                className="text-xl text-gray-600 max-w-2xl mx-auto"
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
                    <p className="text-gray-600 mt-2">University Name • GPA: 3.9/4.0</p>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Focused on software engineering, computer graphics, and distributed systems. Recipient of several academic excellence awards.
                    </p>
                </div>
                <div className="glass-morphism p-8 rounded-2xl border-l-4 border-secondary">
                    <span className="text-secondary font-bold">2022</span>
                    <h3 className="text-2xl font-bold mt-2">Advanced Web Development Certification</h3>
                    <p className="text-gray-600 mt-2">Online Platform / Institute</p>
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
                                <p className="text-gray-600 mt-1">{exp.company}</p>
                            </div>
                            <span className="px-4 py-1 rounded-full bg-black/5 text-sm font-semibold">{exp.period}</span>
                        </div>
                        <p className="text-gray-600 mt-6 leading-relaxed">{exp.desc}</p>
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
                <div className="glass-morphism p-8 rounded-2xl hover:bg-black/5 transition-all cursor-pointer">
                    <h3 className="text-2xl font-bold mb-3">Exploring the Frontiers of WebGL and Three.js</h3>
                    <p className="text-gray-600 mb-4">Published in Tech Insights Journal • 2024</p>
                    <p className="text-gray-600">An in-depth look at how 3D graphics are changing user behavior and engagement on the web.</p>
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
                                <button className="px-6 py-2 bg-dark text-white font-bold rounded-full hover:bg-primary transition-all">Demo</button>
                                <button className="px-6 py-2 border border-dark text-dark font-bold rounded-full hover:bg-dark hover:text-white transition-all">Code</button>
                            </div>
                        </div>
                        <div className="p-8">
                            <h3 className="text-2xl font-bold mb-3">Amazing Project Title</h3>
                            <div className="flex gap-2 mb-4">
                                <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">React</span>
                                <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-lg uppercase tracking-wider">Three.js</span>
                            </div>
                            <p className="text-gray-600">A detailed description of the project, the technologies used, and the problems it solves.</p>
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
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-600">
                            <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center text-primary italic">@</div>
                            <span>hello@yourdomain.com</span>
                        </div>
                    </div>
                </div>
                <div className="glass-morphism p-8 rounded-3xl">
                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Name</label>
                            <input type="text" className="w-full bg-black/5 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Your Name" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Email</label>
                            <input type="email" className="w-full bg-black/5 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="your@email.com" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-gray-600">Message</label>
                            <textarea rows={4} className="w-full bg-black/5 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="How can I help you?"></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    </div>
);
export const Certifications = () => (
    <div className="min-h-screen">
        <PageHeader title="Certifications" subtitle="Professional certifications and specialized training." />
        <section className="py-20 px-4">
            <div className="max-w-7xl mx-auto space-y-16">
                {[
                    {
                        category: "Amazon Web Services (AWS)",
                        certs: [
                            {
                                title: "AWS Certified Developer – Associate",
                                type: "Associate",
                                image: "/certificates/AWS Developer.png",
                                link: "https://www.credly.com/badges/30bd878d-9d39-497b-9f30-ab4adb19a843/linked_in?t=sry2ws"
                            },
                            {
                                title: "AWS Certified Machine Learning Engineer – Associate",
                                type: "Associate",
                                image: "/certificates/AWS_MLE.png",
                                link: "https://www.credly.com/org/amazon-web-services/badge/aws-certified-machine-learning-engineer-associate"
                            },
                            {
                                title: "AWS Certified Cloud Practitioner",
                                type: "Foundational",
                                image: "/certificates/AWS_CP.png",
                                link: "https://www.credly.com/badges/3ceb3869-0074-4029-970d-704391c3c4b0"
                            },
                            {
                                title: "AWS Certified AI Practitioner",
                                type: "Foundational",
                                image: "/certificates/AWS_AIP.png",
                                link: "https://www.credly.com/badges/0b88cdc0-494a-4003-bf5f-8a691de38ac7"
                            }
                        ]
                    },
                    {
                        category: "Microsoft & HarvardX",
                        certs: [
                            {
                                title: "Azure DevOps Engineer Expert (AZ-400)",
                                type: "Expert",
                                image: "/certificates/AZ-400.png",
                                link: "https://www.credly.com/badges/a6caa3d8-8460-463c-a1f9-f4b5125480dc/public_url"
                            },
                            {
                                title: "Data Science: Machine Learning",
                                issuer: "HarvardX",
                                image: "/certificates/PH125.8x.jpg",
                                link: "https://www.credly.com/badges/e6b3d236-f5aa-40ab-83e1-1dca29057613/linked_in_profile"
                            },
                            {
                                title: "Crash Course on Python",
                                issuer: "Google",
                                image: "/certificates/udmy_python.jpg",
                                link: "https://www.coursera.org/verify/6J2LBSDD4PKN"
                            }
                        ]
                    },
                    {
                        category: "IBM / Cognitive Class",
                        certs: [
                            {
                                title: "Data Science Foundations",
                                issuer: "IBM / CC",
                                image: "/certificates/IBM_CC.png",
                                link: "https://cognitiveclass.ai/courses/data-science-101"
                            },
                            {
                                title: "Data Science Methodologies",
                                issuer: "IBM / CC",
                                image: "/certificates/IBM_DS_Methodoligies.png",
                                link: "https://cognitiveclass.ai/courses/data-science-methodology"
                            },
                            {
                                title: "Data Science Tools",
                                issuer: "IBM / CC",
                                image: "/certificates/IBM_DS_tools.png",
                                link: "https://cognitiveclass.ai/courses/data-science-tools"
                            },
                            {
                                title: "Python for Data Science",
                                issuer: "IBM / CC",
                                image: "/certificates/IBM_PythonDS.png",
                                link: "https://cognitiveclass.ai/courses/python-for-data-science"
                            }
                        ]
                    },
                    {
                        category: "Udemy Specializations",
                        certs: [
                            {
                                title: "Linux for Data Engineers (Hands On)",
                                date: "Jan 2025",
                                image: "/certificates/udemy_linux.png",
                                link: "https://www.ude.my/UC-cb404715-3a5b-4526-beb0-55408addd0ef/"
                            },
                            {
                                title: "Python REST APIs with Flask & Docker",
                                date: "Oct 2022",
                                image: "/certificates/udemy REST.jpg",
                                link: "http://ude.my/UC-2398dacc-bd0d-4968-b96d-c0ef9a1d4597"
                            },
                            {
                                title: "Master Discrete Mathematics",
                                date: "Oct 2022",
                                image: "/certificates/udemy_master.jpg",
                                link: "http://ude.my/UC-a448148b-304d-4c17-9663-e4045b0084fe"
                            },
                            {
                                title: "Complete PySpark & Colab Primer",
                                date: "Oct 2022",
                                image: "/certificates/udemy_pyspark.jpg",
                                link: "https://ude.my/UC-0a724f2f-a0f0-4a38-a9fd-a9375f8dbaa0"
                            },
                            {
                                title: "Deploy ML Models on GCP + AWS",
                                date: "Aug 2022",
                                image: "/certificates/udemy_ml.jpg",
                                link: "https://www.ude.my/UC-c403efb4-db48-4c81-ba1b-7395de0695b7/"
                            },
                            {
                                title: "Natural Language Processing (NLP)",
                                date: "Aug 2022",
                                image: "/certificates/udemyNLP.jpg",
                                link: "https://www.ude.my/UC-cb404715-3a5b-4526-beb0-55408addd0ef/"
                            },
                            {
                                title: "Machine Learning Specialization",
                                type: "Advanced",
                                image: "/certificates/MLE_Early.png",
                                link: "https://sites.google.com/view/skmudassir/certificates"
                            }
                        ]
                    }
                ]
                    .map((group, idx) => (
                        <div key={idx}>
                            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                {group.category}
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {(group.certs as { title: string, type?: string, date?: string, image?: string, link?: string, issuer?: string }[]).map((cert, cidx) => (
                                    <motion.div
                                        key={cidx}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: cidx * 0.1 }}
                                        className="group relative"
                                    >
                                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                                            <div className="glass-morphism p-6 rounded-2xl h-full transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary/10 overflow-hidden">
                                                <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                                                    {cert.image ? (
                                                        <img
                                                            src={cert.image}
                                                            alt={cert.title}
                                                            className="max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary font-bold">
                                                            {cert.issuer || "Certificate"}
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="px-4 py-2 bg-white text-primary font-bold rounded-full text-sm translate-y-4 group-hover:translate-y-0 transition-transform">View Certificate</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">{cert.title}</h3>
                                                <div className="flex items-center gap-2 mt-auto">
                                                    {cert.type && (
                                                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-lg uppercase tracking-wider">
                                                            {cert.type}
                                                        </span>
                                                    )}
                                                    {cert.date && (
                                                        <span className="text-xs text-gray-400 font-semibold">{cert.date}</span>
                                                    )}
                                                    {cert.issuer && (
                                                        <span className="text-xs text-gray-500 font-bold uppercase">{cert.issuer}</span>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
            </div>
        </section>
    </div>
);
