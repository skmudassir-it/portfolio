import { motion } from 'framer-motion';

const PageHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="relative pt-32 pb-20 px-4 bg-light overflow-hidden">
        {/* Decorative Orbs */}
        <div className="absolute top-0 right-[-10%] w-[30%] h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-[-10%] w-[30%] h-full bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight">
                    <span className="text-gradient">{title}</span>
                </h1>
                <p className="text-xl md:text-2xl text-dark/60 max-w-3xl mx-auto font-medium leading-relaxed">
                    {subtitle}
                </p>
                <div className="mt-10 flex justify-center">
                    <div className="w-20 h-1.5 bg-gradient-to-r from-primary via-secondary to-transparent rounded-full opacity-30" />
                </div>
            </motion.div>
        </div>
    </div>
);

export const Education = () => (
    <div className="min-h-screen bg-light">
        <PageHeader title="Education" subtitle="My academic background and specialized certifications that shaped my technical foundation." />
        <section className="py-24 px-4 relative">
            <div className="max-w-5xl mx-auto space-y-12">
                {[
                    {
                        degree: "Masters in Information Technology Management",
                        school: "Indiana Wesleyan University",
                        period: "Jan 2023 - Dec 2024",
                        color: "border-primary",
                        image: "/education/Indiana-Wesleyan-University.webp"
                    },
                    {
                        degree: "MSc Datascience",
                        school: "Chandigarh University",
                        period: "Aug 2021 - Apr 2023",
                        color: "border-secondary",
                        image: "/education/chandigarh_university.png"
                    },
                    {
                        degree: "BE Mechanical Engineering",
                        school: "Muffakham Jah College of Engg and Tech",
                        period: "May 2014 - May 2017",
                        color: "border-primary",
                        image: "/education/mjcet.jpg"
                    },
                    {
                        degree: "Diploma in Automobile Engineering",
                        school: "Govt Polytechnic Masabtank",
                        period: "May 2009 - Apr 2012",
                        color: "border-secondary",
                        image: "/education/diploma.jpg"
                    }
                ].map((edu, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className={`glass-morphism p-10 rounded-[32px] border-l-[6px] ${edu.color} hover:bg-white/80 transition-all duration-500 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left`}
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-white rounded-3xl p-4 flex items-center justify-center shadow-sm border border-black/5 overflow-hidden">
                            <img src={edu.image} alt={edu.school} className="max-w-full max-h-full object-contain hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-grow w-full">
                            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-dark mb-3">{edu.degree}</h3>
                                    <p className="text-primary font-bold text-xl mb-4">{edu.school}</p>
                                </div>
                                <span className={`px-6 py-2 rounded-full ${idx % 2 === 0 ? 'bg-primary/10 text-primary' : 'bg-secondary/10 text-secondary'} font-black text-sm whitespace-nowrap shadow-sm`}>
                                    {edu.period}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    </div>
);

export const experienceData = [
    {
        slug: 'bsw-outlet',
        role: 'IT Engineer & Business Analyst',
        company: 'BSW Outlet',
        period: 'January 2026 - Present',
        domain: 'Warehouse Management & Business Operations',
        color: 'border-primary',
        image: '/experience/bsw-outlet.png',
        tech: ['IT Infrastructure', 'Inventory Systems', 'Social Media Marketing', 'Team Management', 'Payroll', 'Business Development'],
        shortDesc: 'Leading IT operations and business strategy for a retail warehouse outlet, bridging technology with day-to-day business management.',
        responsibilities: [
            'Manage end-to-end IT infrastructure and warehouse operations for retail outlet',
            'Lead social media marketing strategy and business development initiatives driving brand growth',
            'Oversee team management, payroll processing, and workforce scheduling across departments',
            'Implement inventory tracking systems providing real-time stock visibility and order fulfillment',
            'Bridge technology and business operations to drive efficiency, reduce costs, and improve workflows'
        ],
        recommendations: []
    },
    {
        slug: 'beauty-and-company',
        role: 'Web Developer',
        company: 'Beauty and Company',
        period: 'March 2023 - December 2025',
        domain: 'E-Commerce & Digital Presence',
        color: 'border-secondary',
        image: '/projects/beauty_and_company.webp',
        tech: ['Shopify', 'AI Tools', 'Mobile Apps', 'Marketing Design', 'React', 'Branding'],
        shortDesc: 'Built and maintained the complete digital ecosystem — Shopify store, company website, and mobile apps for a beauty e-commerce brand.',
        responsibilities: [
            'Built and maintained Shopify e-commerce platform driving sustained online sales growth',
            'Leveraged AI tools for marketing design, content creation, and customer engagement automation',
            'Developed responsive company website and cross-platform mobile app for Android & iOS',
            'Created marketing collateral, branding materials, and digital design assets for campaigns',
            'Managed end-to-end digital presence from development and deployment to analytics and optimization'
        ],
        recommendations: []
    },
    {
        slug: 'attra',
        role: 'Software Engineer',
        company: 'Attra, a Synechron Company',
        period: 'July 2021 - December 2022',
        domain: 'Financial Domain',
        color: 'border-primary',
        image: '/experience/attra.jpg',
        tech: ['Python', 'Java', 'Selenium', 'Jenkins', 'Git', 'AWS'],
        shortDesc: 'Developed robust backend solutions and automated testing frameworks in the financial sector.',
        responsibilities: [
            'Architected and implemented scalable backend services using Python and Java for high-volume financial transaction processing.',
            'Developed comprehensive automated testing suites utilizing Selenium, reducing manual testing overhead by 40%.',
            'Orchestrated CI/CD pipelines with Jenkins and Git, streamlining the development-to-deployment lifecycle.',
            'Collaborated with global teams to maintain and scale cloud infrastructure on AWS, ensuring 99.9% system availability.',
            'Ensured compliance with strict financial security standards and regulatory requirements across all software modules.'
        ],
        recommendations: [
            {
                author: "Tina Huges",
                relation: "Client",
                text: "Mudassir has continuously provided the highest level of service in the testing of our applications. He demonstrates strong technical knowledge and attention to detail, allowing the team to release without defects. He brings a positive attitude to every meeting, building relationships while also delivering on his commitments."
            },
            {
                author: "Shefali",
                relation: "Senior Colleague",
                text: "Muddasir is a hard working guy. He has a deep knowledge on Test automation and exposure to various automation tools. He is a seasoned quality analyst and always willing to learn new things."
            }
        ]
    },
    {
        slug: 'aditi',
        role: 'Software Engineer',
        company: 'Aditi Digital Solutions',
        period: 'February 2020 - May 2021',
        domain: 'Marketing & Media Domain',
        color: 'border-secondary',
        image: '/experience/Aditi Digital Solutions.png',
        tech: ['Python', 'Machine Learning', 'AWS'],
        shortDesc: 'Architected data-driven solutions for the marketing and media industry using ML and cloud services.',
        responsibilities: [
            'Engineered data analytics platforms to process and analyze large-scale media consumption data.',
            'Integrated Machine Learning models to provide predictive insights for targeted marketing campaigns.',
            'Designed and deployed serverless architecture on AWS, significantly reducing operational costs and improving scalability.',
            'Worked closely with marketing stakeholders to transform raw data into interactive dashboards and actionable business intelligence.',
            'Optimized data ingestion pipelines, improving real-time processing capabilities for streaming media metrics.'
        ],
        recommendations: [
            {
                author: "Aamir",
                relation: "Client",
                text: "I have had the opportunity to work with Mudassir for the last two years, Mudassir has consistently shown his grasp and mastery at his occupation and the art of thinking outside the box. Any team would be lucky to have him in their team."
            },
            {
                author: "Aditi Digital Team",
                relation: "Colleague",
                text: "Mudassir is a technology enthusiast and he has valuable potential in the streams of Data Science, Machine Learning, Deep Learning, Python Programming, and Neural Networks."
            }
        ]
    },
    {
        slug: 'aurangabad-electricals',
        role: 'R&D Engineer',
        company: 'Aurangabad Electricals',
        period: 'October 2017 - November 2019',
        domain: 'Manufacturing Domain',
        color: 'border-primary',
        image: '/experience/aurangabad_electricals_logo.png',
        tech: ['Flow Simulation', 'IT Systems', 'Analytical Problem-Solving'],
        shortDesc: 'Spearheaded research and development initiatives within the manufacturing domain focusing on process optimization.',
        responsibilities: [
            'Led research initiatives for optimizing aluminum die casting processes through advanced flow simulation modeling.',
            'Implemented IT systems to monitor and analyze production line data, identifying bottlenecks and areas for efficiency gain.',
            'Reduced scrap rates by 15% through meticulous analytical problem-solving and process redesign.',
            'Collaborated with the manufacturing team to integrate computer-aided engineering (CAE) tools into the standard design workflow.',
            'Authored technical reports and documentation for new manufacturing methodologies and quality control standards.'
        ],
        recommendations: [
            {
                author: "Sushmitha",
                relation: "Colleague",
                text: "Mudassir has very good technical knowledge and it is very much comfortable to work with him. Mudassir has an ability to tackle challenges easily."
            }
        ]
    }
];

export const generalRecommendations = [
    {
        author: "Dr. Daniel Nguyen",
        title: "Professor at IWU | Academic Mentor",
        text: "Mudassir happened to be one of my top students and research mentees at Indiana Wesleyan University (IWU). I rated him as one of the top 5% in the Information Systems Management Programs at IWU. He was very prompt in submitting his work as well as paying attention in detail to addressing assignments requirements."
    }
];

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Quote, Phone, Globe } from 'lucide-react';

const TestimonialCard = ({ quote, author, relation, title }: { quote: string, author: string, relation?: string, title?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-morphism p-8 rounded-3xl relative h-full flex flex-col"
    >
        <Quote className="text-primary/20 absolute top-6 right-8" size={40} />
        <p className="text-gray-600 italic leading-relaxed mb-6 text-lg">"{quote}"</p>
        <div className="mt-auto">
            <h4 className="font-bold text-lg text-dark">{author}</h4>
            <p className="text-sm text-primary font-bold uppercase tracking-wider mt-1">
                {relation || title}
            </p>
        </div>
    </motion.div>
);

export const Experience = () => (
    <div className="min-h-screen bg-light">
        <PageHeader title="Experience" subtitle="A professional journey driven by innovation, problem-solving, and a commitment to excellence in engineering." />
        <section className="py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {experienceData.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <Link to={`/experience/${exp.slug}`} className="group block h-full">
                                <div className={`glass-morphism p-10 rounded-[40px] border-l-[6px] ${exp.color} hover:bg-white/80 transition-all duration-500 h-full flex flex-col items-center text-center shadow-sm`}>
                                    <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-3xl p-5 flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                        <img src={exp.image} alt={exp.company} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-black mb-3 text-dark group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <p className="text-dark/60 font-bold text-lg mb-2">{exp.company}</p>
                                    <p className="text-xs text-primary font-black uppercase tracking-[0.2em] mb-8">{exp.domain}</p>

                                    <div className="mt-auto pt-6 border-t border-black/5 w-full flex flex-col items-center">
                                        <span className="px-6 py-2 rounded-full bg-black/5 text-xs font-black uppercase tracking-widest text-dark/70 mb-4">
                                            {exp.period}
                                        </span>
                                        <div className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            Case Study <span className="text-lg">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Academic/General Recommendations */}
                <div className="max-w-4xl mx-auto pt-20 border-t border-gray-100">
                    <h2 className="text-4xl font-black text-center mb-16">Voices of <span className="text-gradient">Mentors & Clients</span></h2>
                    <div className="grid grid-cols-1 gap-8">
                        {generalRecommendations.map((rec, i) => (
                            <TestimonialCard key={i} quote={rec.text} author={rec.author} title={rec.title} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export const ExperienceDetail = () => {
    const { slug } = useParams();
    const exp = experienceData.find(e => e.slug === slug);

    if (!exp) return <div className="pt-32 text-center text-2xl font-black">Experience not found</div>;

    return (
        <div className="min-h-screen bg-light">
            <div className="relative pt-32 pb-20 px-4 overflow-hidden">
                {/* Decor */}
                <div className="absolute top-0 right-0 w-[40%] h-full bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto">
                    <Link to="/experience" className="inline-flex items-center gap-3 text-dark/60 font-black mb-12 hover:text-primary transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Journey
                    </Link>

                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-[40px] p-8 flex items-center justify-center shadow-xl border border-black/5"
                        >
                            <img src={exp.image} alt={exp.company} className="max-w-full max-h-full object-contain" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-center md:text-left flex-grow"
                        >
                            <h1 className="text-4xl md:text-7xl font-black mb-6 text-dark tracking-tight leading-tight">{exp.role}</h1>
                            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">{exp.company}</h2>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
                                <span className="px-6 py-2 rounded-full bg-white shadow-sm text-sm font-black uppercase tracking-widest text-dark/70">{exp.period}</span>
                                <span className="text-secondary font-black uppercase tracking-[0.2em] text-xs">{exp.domain}</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-primary rounded-full"></span>
                                Roles & Responsibilities
                            </h3>
                            <div className="space-y-6">
                                {exp.responsibilities.map((resp, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-4"
                                    >
                                        <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                                        <p className="text-gray-600 text-lg leading-relaxed">{resp}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-8 h-1 bg-secondary rounded-full"></span>
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-3 text-nowrap">
                                {exp.tech.map((t, idx) => (
                                    <span key={idx} className="px-4 py-2 glass-morphism text-gray-600 text-sm font-bold rounded-xl border border-gray-100 italic transition-all hover:border-primary/50 hover:bg-white">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Role Specific Recommendations */}
                    {exp.recommendations && (
                        <div className="mt-20 pt-20 border-t border-gray-100">
                            <h3 className="text-3xl font-bold mb-12">Colleague Recommendations</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {exp.recommendations.map((rec, i) => (
                                    <TestimonialCard key={i} quote={rec.text} author={rec.author} relation={rec.relation} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export const Publication = () => {
    const publications = [
        {
            title: "Design and Analysis of Disc Brake and Caliper of four wheeler",
            url: "https://ijste.org/Article.php?manuscript=IJSTEV3I8065",
            description: "International Journal of Science Technology & Engineering article (volume 3, issue 8, ISSN 2349-784X). Peer-reviewed, monthly online journal publishing original research in engineering and technology fields such as civil, mechanical, computer science, and electronics.",
            publishedIn: "Bachelor's",
            image: "/Publication/ijste.png",
            color: "border-primary"
        },
        {
            title: "Impact of Artificial Intelligence on Corporate Leadership",
            url: "https://www.scirp.org/journal/paperinformation?paperid=132403",
            description: "Scientific Research Publishing (SCIRP) journal paper. Open-access research article in a multidisciplinary science journal.",
            publishedIn: "Master's",
            image: "/Publication/SRP_logo.svg",
            color: "border-secondary"
        }
    ];

    return (
        <div className="min-h-screen bg-light">
            <PageHeader title="Publications" subtitle="Contributing to the global knowledge base through technical research and engineering analysis." />
            <section className="py-24 px-4">
                <div className="max-w-5xl mx-auto space-y-12">
                    {publications.map((pub, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`glass-morphism p-10 rounded-[40px] border-l-[6px] ${pub.color} hover:bg-white/80 transition-all duration-500 group flex flex-col md:flex-row gap-10 items-center md:items-start text-center md:text-left`}
                        >
                            <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0 bg-white rounded-3xl p-6 flex items-center justify-center shadow-md border border-black/5 overflow-hidden">
                                <img src={pub.image} alt="Journal Logo" className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                            </div>
                            <div className="flex-grow">
                                <span className="inline-block px-4 py-1 bg-black/5 text-primary text-xs font-black uppercase tracking-widest rounded-lg mb-4">{pub.publishedIn}</span>
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-dark group-hover:text-primary transition-colors leading-tight">{pub.title}</h3>
                                <p className="text-dark/60 mb-8 leading-relaxed font-medium text-lg">{pub.description}</p>
                                <a href={pub.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm">
                                    Explore Research <ArrowLeft size={18} className="rotate-180" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export const Projects = () => {
    const projects = [
        // ─── CLIENT PROJECTS ────────────────────────────────
        {
            name: "BSW Outlet",
            url: "https://github.com/skmudassir-it/bsw_Watnot",
            platform: "IT Management & Business Operations",
            image: "",
            apps: "Warehouse, Inventory, Payroll, Social Media, Team Mgmt",
            color: "from-indigo-600/10 to-transparent",
            tags: ["IT Operations", "Warehouse", "Business", "Retail"]
        },
        {
            name: "Beauty and company",
            url: "https://www.bandconline.com",
            platform: "Shopify (e-commerce)",
            image: "/projects/beauty_and_company.webp",
            apps: "Android & iOS Apps available",
            color: "from-primary/10 to-transparent",
            tags: ["Shopify", "E-commerce", "Mobile Apps"]
        },
        {
            name: "Shop Hershe",
            url: "https://shophershe.com",
            platform: "Shopify (e-commerce)",
            image: "/projects/shop_hershe.avif",
            apps: "Android & iOS Apps available",
            color: "from-secondary/10 to-transparent",
            tags: ["Shopify", "E-commerce", "Retail"]
        },
        {
            name: "Go Sticky Icky",
            url: "https://gostickyicky.com",
            platform: "Shopify (e-commerce)",
            image: "/projects/Go_stickyIcky.avif",
            apps: "Android & iOS Apps available",
            color: "from-accent/10 to-transparent",
            tags: ["Shopify", "E-commerce", "Lifestyle"]
        },
        {
            name: "Sweet Cheeks Diaper Ministry",
            url: "https://www.sweetcheeksdiaperministry.org",
            platform: "WordPress (non-profit)",
            image: "/projects/sweetcheeks.png",
            apps: "No app listed",
            color: "from-blue-500/10 to-transparent",
            tags: ["WordPress", "Non-Profit", "Community"]
        },
        {
            name: "Q107.5",
            url: "https://q1075.com",
            platform: "Custom CMS / Radio",
            image: "/projects/q1075.png",
            apps: "No app listed",
            color: "from-orange-500/10 to-transparent",
            tags: ["Custom CMS", "Radio", "Streaming"]
        },
        {
            name: "Hot 107.1",
            url: "https://hot1071.com",
            platform: "Custom CMS / Radio",
            image: "/projects/hot1071.webp",
            apps: "No app listed",
            color: "from-red-500/10 to-transparent",
            tags: ["Custom CMS", "Radio", "Entertainment"]
        },
        {
            name: "Sunny 1210",
            url: "https://sunny1210.com",
            platform: "Custom CMS / Radio",
            image: "/projects/sunnt1201.png",
            apps: "No app listed",
            color: "from-amber-500/10 to-transparent",
            tags: ["Custom CMS", "Radio", "AM Station"]
        },
        {
            name: "AMSIT Services",
            url: "https://www.amsitservices.com",
            platform: "WordPress (B2B)",
            image: "/projects/AMS.png",
            apps: "No app listed",
            color: "from-slate-500/10 to-transparent",
            tags: ["WordPress", "B2B", "Professional Services"]
        },
        {
            name: "American Metal and Saw",
            url: "https://www.americanmetalandsaw.com",
            platform: "Shopify (e-commerce)",
            image: "/projects/Americanmetalandsaw.png",
            apps: "No app listed",
            color: "from-gray-600/10 to-transparent",
            tags: ["Shopify", "E-commerce", "Industrial"]
        },

        // ─── FULL-STACK SAAS & DASHBOARDS ───────────────────
        {
            name: "IntelliSyncs — AI Warehouse Automation",
            url: "https://intellisyncs-web.vercel.app",
            platform: "Next.js 16 + Tailwind v4 + shadcn/ui",
            image: "",
            apps: "6-page marketing site, case studies",
            color: "from-cyan-500/10 to-transparent",
            tags: ["Next.js", "AI", "Automation", "B2B"]
        },
        {
            name: "Blackbox CRM",
            url: "https://github.com/skmudassir-it/blackbox-crm",
            platform: "Next.js 16 + Tailwind + shadcn/ui",
            image: "",
            apps: "Contacts, Email Gen (DeepSeek), Gmail OAuth, Kanban",
            color: "from-violet-500/10 to-transparent",
            tags: ["Next.js", "CRM", "AI", "Full-Stack"]
        },
        {
            name: "InsureEase — Insurance Platform",
            url: "https://github.com/skmudassir-it/insurease-landing",
            platform: "Next.js 16 + Tailwind v4 + shadcn/ui",
            image: "",
            apps: "Landing page + Auth + Dashboard",
            color: "from-emerald-500/10 to-transparent",
            tags: ["Next.js", "InsurTech", "SaaS", "Auth"]
        },
        {
            name: "Zooder — Social Feed App",
            url: "https://github.com/skmudassir-it/zooder",
            platform: "Next.js + TypeScript + Tailwind",
            image: "",
            apps: "Real-time social feed with post creation",
            color: "from-rose-500/10 to-transparent",
            tags: ["Next.js", "Social", "Real-time", "TypeScript"]
        },
        {
            name: "AMS Client Portal",
            url: "https://ams-client-portal.vercel.app",
            platform: "Next.js + Tailwind + shadcn/ui",
            image: "",
            apps: "Client dashboard with project tracking",
            color: "from-indigo-500/10 to-transparent",
            tags: ["Next.js", "Client Portal", "Dashboard"]
        },

        // ─── BUSINESS & LANDING PAGES ───────────────────────
        {
            name: "ALT 8 IT Solutions",
            url: "https://alt8-web.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "Modern business website",
            color: "from-sky-500/10 to-transparent",
            tags: ["Next.js", "Business", "IT Services"]
        },
        {
            name: "Dr. Daniel Nguyen — Professional Site",
            url: "https://drprofnguyen-site.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "Multi-page federal IT executive portfolio",
            color: "from-teal-500/10 to-transparent",
            tags: ["Next.js", "Portfolio", "Professional"]
        },
        {
            name: "Newly Weds Foods",
            url: "https://newly-weds-foods.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "44-route corporate food manufacturing site",
            color: "from-amber-500/10 to-transparent",
            tags: ["Next.js", "Corporate", "Food Industry"]
        },
        {
            name: "Building Coolers LLC",
            url: "https://building-coolers.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "HVAC / modular cooling solutions",
            color: "from-blue-700/10 to-transparent",
            tags: ["Next.js", "HVAC", "Industrial", "Business"]
        },
        {
            name: "Memphis Indian Restaurant",
            url: "https://memphis-indian-restaurant.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "Animated menu with category transitions",
            color: "from-orange-600/10 to-transparent",
            tags: ["Next.js", "Restaurant", "Food", "Local"]
        },
        {
            name: "Mufasa Jeweler",
            url: "https://mufasa-jeweler.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "Premium gold jewelry storefront",
            color: "from-yellow-500/10 to-transparent",
            tags: ["Next.js", "E-commerce", "Jewelry", "Luxury"]
        },
        {
            name: "Mem Food Truck",
            url: "https://mem-food-truck.vercel.app",
            platform: "Next.js + Tailwind + shadcn/ui",
            image: "",
            apps: "Cinematic street food brand website",
            color: "from-red-600/10 to-transparent",
            tags: ["Next.js", "Food Truck", "Branding"]
        },
        {
            name: "Luxury Hotel Landing",
            url: "https://hotel-frontend-next.vercel.app",
            platform: "Next.js + Tailwind CSS",
            image: "",
            apps: "Room cards, amenities, booking flow",
            color: "from-stone-500/10 to-transparent",
            tags: ["Next.js", "Hospitality", "Landing Page"]
        },
        {
            name: "AMS Frontend — Headless WP",
            url: "https://ams-frontend-eosin.vercel.app",
            platform: "Next.js + WordPress REST API",
            image: "",
            apps: "Decoupled frontend for American Metal and Saw",
            color: "from-zinc-500/10 to-transparent",
            tags: ["Next.js", "Headless", "WordPress", "API"]
        },
        {
            name: "AMS IT Services Dashboard",
            url: "https://mind-map-henna.vercel.app",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Interactive services dashboard",
            color: "from-purple-500/10 to-transparent",
            tags: ["Next.js", "Dashboard", "Analytics"]
        },
        {
            name: "Single-Page Web App",
            url: "https://social.amsitservices.com",
            platform: "React + JavaScript",
            image: "",
            apps: "Multi-section social page with terms & privacy",
            color: "from-pink-500/10 to-transparent",
            tags: ["React", "SPA", "Social", "Web App"]
        },

        // ─── TOOLS & APPS ───────────────────────────────────
        {
            name: "Baby Feeding Tracker",
            url: "https://baby-feeder-rho.vercel.app",
            platform: "Next.js + Flask + SQLite",
            image: "",
            apps: "Track milk/food, charts, full-stack",
            color: "from-pink-400/10 to-transparent",
            tags: ["Next.js", "Flask", "Full-Stack", "Health"]
        },
        {
            name: "Watermark App",
            url: "https://watermark-app-next.vercel.app",
            platform: "Next.js + Canvas API",
            image: "",
            apps: "Client-side image watermarking, no server",
            color: "from-slate-400/10 to-transparent",
            tags: ["Next.js", "Canvas", "Image Tool", "Client-Side"]
        },
        {
            name: "Meme Generator",
            url: "https://meme-generator-next-nine.vercel.app",
            platform: "Next.js + Reddit API",
            image: "",
            apps: "Browse Reddit memes, gallery, modal, share",
            color: "from-green-500/10 to-transparent",
            tags: ["Next.js", "Reddit API", "Gallery", "Fun"]
        },
        {
            name: "BMI Calculator",
            url: "https://bmi-calculator-next-eta.vercel.app",
            platform: "Next.js 16 + Framer Motion",
            image: "",
            apps: "Animated gauge, history, metric/imperial",
            color: "from-lime-500/10 to-transparent",
            tags: ["Next.js", "Health", "Calculator", "Animation"]
        },
        {
            name: "Power Plant Energy Predictor",
            url: "https://power-plant-frontend-ten.vercel.app",
            platform: "Next.js + ML (Decision Tree)",
            image: "",
            apps: "Embedded sklearn model, real-time predictions",
            color: "from-yellow-600/10 to-transparent",
            tags: ["Next.js", "ML", "Energy", "Data Science"]
        },
        {
            name: "Birthday Celebration Page",
            url: "https://birthday-celebration-gamma.vercel.app",
            platform: "Next.js + Framer Motion",
            image: "",
            apps: "Balloons, fireworks, pop animations",
            color: "from-fuchsia-500/10 to-transparent",
            tags: ["Next.js", "Animation", "Interactive", "Fun"]
        },
        {
            name: "Property Listings",
            url: "https://property.amsitservices.com",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Real estate property showcase",
            color: "from-neutral-500/10 to-transparent",
            tags: ["Next.js", "Real Estate", "Listings"]
        },
        {
            name: "Kanban Board",
            url: "https://github.com/skmudassir-it/kanban-board",
            platform: "Next.js + TypeScript + Tailwind + shadcn/ui",
            image: "",
            apps: "Responsive drag-and-drop board",
            color: "from-blue-400/10 to-transparent",
            tags: ["Next.js", "Kanban", "Productivity", "shadcn"]
        },

        // ─── ADDITIONAL WEB APPS ────────────────────────────
        {
            name: "InsureEase Auth",
            url: "https://github.com/skmudassir-it/insurease-auth",
            platform: "Next.js 16 + Tailwind + shadcn/ui",
            image: "",
            apps: "Login, Registration & Dashboard for insurance agents",
            color: "from-emerald-400/10 to-transparent",
            tags: ["Next.js", "Auth", "InsurTech", "Dashboard"]
        },
        {
            name: "AMS India",
            url: "https://github.com/skmudassir-it/AMS_India",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Regional AMS India landing & services page",
            color: "from-orange-500/10 to-transparent",
            tags: ["Next.js", "Business", "India", "Landing"]
        },
        {
            name: "Mineral Wells Church",
            url: "https://github.com/skmudassir-it/Mineral-Wells-Church-",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Church website with events & community features",
            color: "from-sky-400/10 to-transparent",
            tags: ["Next.js", "Church", "Community", "Non-Profit"]
        },
        {
            name: "Quran App",
            url: "https://github.com/skmudassir-it/quran",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Islamic scripture reading & study app",
            color: "from-emerald-600/10 to-transparent",
            tags: ["Next.js", "Religion", "Reading", "Education"]
        },
        {
            name: "AI Image Generator",
            url: "https://github.com/skmudassir-it/Ai-Image-generator",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Generate AI images from text prompts",
            color: "from-purple-600/10 to-transparent",
            tags: ["Next.js", "AI", "Image Gen", "Creative"]
        },
        {
            name: "Mana Urban Bowl",
            url: "https://github.com/skmudassir-it/mana-urban-bowl",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Restaurant website — urban bowl concept",
            color: "from-green-500/10 to-transparent",
            tags: ["Next.js", "Restaurant", "Food", "Brand"]
        },
        {
            name: "BSW Scheduler",
            url: "https://github.com/skmudassir-it/BSW_schuduller",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Scheduling & booking tool",
            color: "from-cyan-600/10 to-transparent",
            tags: ["Next.js", "Scheduling", "Booking", "Tool"]
        },
        {
            name: "BSW Whatnot",
            url: "https://github.com/skmudassir-it/bsw_Watnot",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Whatnot marketplace integration tool",
            color: "from-pink-600/10 to-transparent",
            tags: ["Next.js", "Marketplace", "Whatnot", "Tool"]
        },
        {
            name: "Blog App",
            url: "https://github.com/skmudassir-it/blog-App",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Full-featured blogging platform",
            color: "from-indigo-400/10 to-transparent",
            tags: ["Next.js", "Blog", "CMS", "Content"]
        },
        {
            name: "Dating App",
            url: "https://github.com/skmudassir-it/Dating_App",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Modern dating platform",
            color: "from-rose-500/10 to-transparent",
            tags: ["Next.js", "Dating", "Social", "App"]
        },
        {
            name: "E-Commerce Web",
            url: "https://github.com/skmudassir-it/ecommerce-web",
            platform: "Next.js + TypeScript",
            image: "",
            apps: "Full e-commerce storefront",
            color: "from-amber-400/10 to-transparent",
            tags: ["Next.js", "E-commerce", "Storefront", "Shop"]
        },

        // ─── JAVASCRIPT PROJECTS ─────────────────────────────
        {
            name: "YouTube Automation",
            url: "https://github.com/skmudassir-it/youtube_automation",
            platform: "JavaScript + Node.js",
            image: "",
            apps: "Automated YouTube content management",
            color: "from-red-500/10 to-transparent",
            tags: ["JavaScript", "YouTube", "Automation", "Node.js"]
        },
        {
            name: "Food Delivery App",
            url: "https://github.com/skmudassir-it/food_Delevery",
            platform: "JavaScript",
            image: "",
            apps: "Online food ordering & delivery platform",
            color: "from-orange-400/10 to-transparent",
            tags: ["JavaScript", "Food", "Delivery", "E-commerce"]
        },
        {
            name: "Blogging Platform",
            url: "https://github.com/skmudassir-it/blogging_app",
            platform: "JavaScript",
            image: "",
            apps: "Full-stack blogging application",
            color: "from-teal-500/10 to-transparent",
            tags: ["JavaScript", "Blog", "Full-Stack", "CMS"]
        },
        {
            name: "Nataki Tax",
            url: "https://github.com/skmudassir-it/nataki_tax",
            platform: "JavaScript",
            image: "",
            apps: "Tax preparation & calculation tool",
            color: "from-blue-600/10 to-transparent",
            tags: ["JavaScript", "Tax", "Finance", "Tool"]
        },
        {
            name: "AP Resume Builder",
            url: "https://github.com/skmudassir-it/ap_resume",
            platform: "JavaScript",
            image: "",
            apps: "Professional resume builder app",
            color: "from-slate-500/10 to-transparent",
            tags: ["JavaScript", "Resume", "Career", "Tool"]
        },
        {
            name: "A-Auto",
            url: "https://github.com/skmudassir-it/a-auto",
            platform: "JavaScript",
            image: "",
            apps: "Automotive dealership website",
            color: "from-gray-600/10 to-transparent",
            tags: ["JavaScript", "Automotive", "Dealership", "Business"]
        },
        {
            name: "Web MERN Stack",
            url: "https://github.com/skmudassir-it/webMERN",
            platform: "MongoDB + Express + React + Node.js",
            image: "",
            apps: "Full-stack MERN application",
            color: "from-green-600/10 to-transparent",
            tags: ["MongoDB", "Express", "React", "Node.js"]
        },
        {
            name: "React Web App",
            url: "https://github.com/skmudassir-it/react_web",
            platform: "React + JavaScript",
            image: "",
            apps: "Modern React SPA with routing",
            color: "from-cyan-400/10 to-transparent",
            tags: ["React", "JavaScript", "SPA", "Frontend"]
        },
        {
            name: "AI ChatGPT Clone",
            url: "https://github.com/skmudassir-it/AiChatGPT",
            platform: "JavaScript + OpenAI API",
            image: "",
            apps: "ChatGPT-like conversational AI interface",
            color: "from-violet-400/10 to-transparent",
            tags: ["JavaScript", "OpenAI", "ChatGPT", "AI"]
        },
        {
            name: "Social Media App",
            url: "https://github.com/skmudassir-it/social-media",
            platform: "JavaScript",
            image: "",
            apps: "Social networking platform",
            color: "from-pink-500/10 to-transparent",
            tags: ["JavaScript", "Social", "Networking", "Full-Stack"]
        },
        {
            name: "HolaChat",
            url: "https://github.com/skmudassir-it/holachat",
            platform: "JavaScript + WebSockets",
            image: "",
            apps: "Real-time chat application",
            color: "from-blue-500/10 to-transparent",
            tags: ["JavaScript", "Chat", "WebSockets", "Real-time"]
        },

        // ─── PYTHON & BACKEND ────────────────────────────────
        {
            name: "InsureEase Backend",
            url: "https://github.com/skmudassir-it/insureease",
            platform: "Python + FastAPI",
            image: "",
            apps: "Insurance CRM backend API platform",
            color: "from-green-700/10 to-transparent",
            tags: ["Python", "FastAPI", "Backend", "CRM"]
        },
        {
            name: "Invoice AI",
            url: "https://github.com/skmudassir-it/InvoiceAI",
            platform: "Python",
            image: "",
            apps: "AI-powered invoice generation & processing",
            color: "from-amber-600/10 to-transparent",
            tags: ["Python", "AI", "Invoice", "Finance"]
        },
        {
            name: "ChatGPT Python",
            url: "https://github.com/skmudassir-it/chatGpt",
            platform: "Python + OpenAI API",
            image: "",
            apps: "Python wrapper for ChatGPT interactions",
            color: "from-purple-500/10 to-transparent",
            tags: ["Python", "OpenAI", "ChatGPT", "API"]
        },

        // ─── MACHINE LEARNING & DATA SCIENCE ─────────────────
        {
            name: "Power Plant Energy — Notebook",
            url: "https://github.com/skmudassir-it/power-plant-energy-output",
            platform: "Jupyter Notebook + sklearn",
            image: "",
            apps: "ML model training & analysis for energy prediction",
            color: "from-yellow-500/10 to-transparent",
            tags: ["Jupyter", "ML", "Energy", "sklearn"]
        },
        {
            name: "Machine Learning Projects",
            url: "https://github.com/skmudassir-it/Machine-Learning",
            platform: "Jupyter Notebook",
            image: "",
            apps: "Collection of ML algorithms & experiments",
            color: "from-indigo-500/10 to-transparent",
            tags: ["Jupyter", "ML", "Collection", "Data Science"]
        },
        {
            name: "Dog Breed Predictor",
            url: "https://github.com/skmudassir-it/dog-breed-prediction",
            platform: "Jupyter Notebook + Deep Learning",
            image: "",
            apps: "CNN-based dog breed image classification",
            color: "from-brown-500/10 to-transparent",
            tags: ["Jupyter", "Deep Learning", "CNN", "Classification"]
        },
        {
            name: "PAN Card Prediction",
            url: "https://github.com/skmudassir-it/Pan-card-prediction",
            platform: "Jupyter Notebook",
            image: "",
            apps: "OCR & ML for PAN card data extraction",
            color: "from-blue-700/10 to-transparent",
            tags: ["Jupyter", "OCR", "ML", "Document AI"]
        },
        {
            name: "Breast Cancer Prediction",
            url: "https://github.com/skmudassir-it/Brest-Cancer-Prediction",
            platform: "Jupyter Notebook + SVC",
            image: "",
            apps: "Cancer classification using sklearn SVC model",
            color: "from-pink-400/10 to-transparent",
            tags: ["Jupyter", "Healthcare", "SVM", "Classification"]
        },
        {
            name: "NLP — Natural Language Processing",
            url: "https://github.com/skmudassir-it/Natural-Langauge-Processing",
            platform: "Jupyter Notebook",
            image: "",
            apps: "Text processing, sentiment & NLP techniques",
            color: "from-teal-600/10 to-transparent",
            tags: ["Jupyter", "NLP", "Text", "Sentiment"]
        },
        {
            name: "Tomato Leaf Disease Detection",
            url: "https://github.com/skmudassir-it/tomato-leaf-diesease",
            platform: "Jupyter Notebook + CNN",
            image: "",
            apps: "Agricultural disease detection from leaf images",
            color: "from-red-600/10 to-transparent",
            tags: ["Jupyter", "Agriculture", "CNN", "Computer Vision"]
        },
        {
            name: "Chest X-Ray Pneumonia",
            url: "https://github.com/skmudassir-it/Chest_X-ray_pneumonia",
            platform: "Jupyter Notebook + Deep Learning",
            image: "",
            apps: "Medical image classification for pneumonia detection",
            color: "from-blue-800/10 to-transparent",
            tags: ["Jupyter", "Healthcare", "CNN", "Medical AI"]
        },
        {
            name: "Car Price Predictor",
            url: "https://github.com/skmudassir-it/CarPricePrediction",
            platform: "Jupyter Notebook",
            image: "",
            apps: "Regression model for vehicle price estimation",
            color: "from-orange-700/10 to-transparent",
            tags: ["Jupyter", "Regression", "Auto", "Price Prediction"]
        },
        {
            name: "Heart Failure Predictor",
            url: "https://github.com/skmudassir-it/Heart-Failure-Prediction",
            platform: "CSS / ML Pipeline",
            image: "",
            apps: "Predictive model for heart failure risk",
            color: "from-red-700/10 to-transparent",
            tags: ["ML", "Healthcare", "Prediction", "Classification"]
        },
        {
            name: "House Price Predictor",
            url: "https://github.com/skmudassir-it/House_price_prediction",
            platform: "CSS / ML Pipeline",
            image: "",
            apps: "Real estate price prediction model",
            color: "from-green-700/10 to-transparent",
            tags: ["ML", "Real Estate", "Regression", "Prediction"]
        },
        {
            name: "Bank Prediction",
            url: "https://github.com/skmudassir-it/bankPrediction",
            platform: "CSS / ML Pipeline",
            image: "",
            apps: "Bank customer churn prediction model",
            color: "from-purple-700/10 to-transparent",
            tags: ["ML", "Banking", "Churn", "Classification"]
        },

        // ─── OTHER PROJECTS ──────────────────────────────────
        {
            name: "Watermark App (HTML)",
            url: "https://github.com/skmudassir-it/watermarkApp",
            platform: "HTML + Canvas + JavaScript",
            image: "",
            apps: "Original vanilla JS watermark tool",
            color: "from-slate-400/10 to-transparent",
            tags: ["HTML", "Canvas", "Tool", "Vanilla JS"]
        },
        {
            name: "3D View",
            url: "https://github.com/skmudassir-it/3dview",
            platform: "HTML + Three.js",
            image: "",
            apps: "3D model viewer with interactive controls",
            color: "from-gray-500/10 to-transparent",
            tags: ["HTML", "Three.js", "3D", "Interactive"]
        },
        {
            name: "Django E-Commerce",
            url: "https://github.com/skmudassir-it/django_ecommerce",
            platform: "HTML + Django",
            image: "",
            apps: "E-commerce platform with Django backend",
            color: "from-emerald-600/10 to-transparent",
            tags: ["Django", "Python", "E-commerce", "Full-Stack"]
        },
        {
            name: "Beauty App Build",
            url: "https://github.com/skmudassir-it/beautyApp_Build",
            platform: "Mobile App (Uber Eats clone concept)",
            image: "",
            apps: "Beauty product delivery app — Uber Eats for beauty",
            color: "from-pink-300/10 to-transparent",
            tags: ["Mobile", "Beauty", "Delivery", "App"]
        },
        {
            name: "AWS WordPress Deployment",
            url: "https://github.com/skmudassir-it/AWS_WordPress",
            platform: "AWS EC2 + WordPress",
            image: "",
            apps: "WordPress installation & hosting on AWS EC2",
            color: "from-orange-400/10 to-transparent",
            tags: ["AWS", "WordPress", "DevOps", "Cloud"]
        },
        {
            name: "ML Deployment",
            url: "https://github.com/skmudassir-it/machine-learning-Deployment",
            platform: "Python + Flask + Docker",
            image: "",
            apps: "End-to-end ML model deployment pipeline",
            color: "from-indigo-600/10 to-transparent",
            tags: ["ML", "Flask", "Docker", "DevOps"]
        },
        {
            name: "Voice News App",
            url: "https://github.com/skmudassir-it/voice-news-app",
            platform: "JavaScript + Speech API",
            image: "",
            apps: "Voice-controlled news reader application",
            color: "from-cyan-500/10 to-transparent",
            tags: ["JavaScript", "Voice", "News", "Speech API"]
        },
        {
            name: "Java Projects",
            url: "https://github.com/skmudassir-it/java",
            platform: "Java",
            image: "",
            apps: "Collection of Java programming projects",
            color: "from-red-500/10 to-transparent",
            tags: ["Java", "OOP", "Collection", "Programming"]
        },
        {
            name: "Spring Framework",
            url: "https://github.com/skmudassir-it/spring",
            platform: "Java + Spring Boot",
            image: "",
            apps: "Spring Boot backend application",
            color: "from-green-600/10 to-transparent",
            tags: ["Java", "Spring Boot", "Backend", "API"]
        },
        {
            name: "Kafka Messaging",
            url: "https://github.com/skmudassir-it/kafka",
            platform: "Apache Kafka",
            image: "",
            apps: "Distributed messaging & event streaming",
            color: "from-stone-600/10 to-transparent",
            tags: ["Kafka", "Messaging", "Streaming", "Distributed"]
        },
        {
            name: "Email Stack",
            url: "https://github.com/skmudassir-it/email_stack",
            platform: "Email Infrastructure",
            image: "",
            apps: "Email server & delivery infrastructure setup",
            color: "from-blue-400/10 to-transparent",
            tags: ["Email", "Infrastructure", "DevOps", "SMTP"]
        },
        {
            name: "Reinforcement Learning Project",
            url: "https://github.com/skmudassir-it/renforncementLearning-project",
            platform: "Python + RL",
            image: "",
            apps: "Reinforcement learning algorithms & experiments",
            color: "from-violet-500/10 to-transparent",
            tags: ["Python", "RL", "AI", "Agents"]
        },
        {
            name: "Chatbot",
            url: "https://github.com/skmudassir-it/chatbot",
            platform: "Python / NLP",
            image: "",
            apps: "Custom conversational AI chatbot",
            color: "from-teal-400/10 to-transparent",
            tags: ["Python", "Chatbot", "NLP", "Conversational AI"]
        },
    ];

    return (
        <div className="min-h-screen bg-light">
            <PageHeader title="Projects" subtitle="Engineering digital excellence across diverse platforms, from global e-commerce to custom CMS and non-profit portals." />
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="glass-morphism overflow-hidden rounded-[40px] group flex flex-col h-full hover:bg-white/80 transition-all duration-500 shadow-sm border border-black/5"
                        >
                            <div className={`h-64 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden p-10`}>
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700 filter drop-shadow-lg"
                                    />
                                )}
                                <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-3 rounded-full flex items-center gap-2">Visit Website <span className="text-lg">→</span></a>
                                </div>
                            </div>
                            <div className="p-10 flex-grow flex flex-col text-center items-center">
                                <h3 className="text-2xl md:text-3xl font-black mb-4 text-dark group-hover:text-primary transition-colors">{project.name}</h3>
                                <div className="flex flex-wrap justify-center gap-2 mb-8">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="px-4 py-1.5 bg-black/5 text-dark/60 text-[10px] font-black rounded-full uppercase tracking-widest">{tag}</span>
                                    ))}
                                </div>
                                <div className="space-y-4 mt-auto w-full pt-8 border-t border-black/5">
                                    <div className="flex items-center justify-center gap-3 text-sm font-bold text-primary">
                                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                        {project.platform}
                                    </div>
                                    <div className="text-xs font-black uppercase tracking-widest text-dark/40">
                                        {project.apps}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

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
                    <div className="space-y-6">
                        <div className="flex flex-col items-center md:items-start gap-6">
                            <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/50">
                                <img src="/mudassir-image.jpeg" alt="Mudassir" className="w-full h-full object-cover" />
                            </div>
                            <div className="space-y-4 w-full">
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center text-primary italic">@</div>
                                    <span className="font-medium">skmudassir.it@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center text-primary"><Phone size={20} /></div>
                                    <span className="font-medium">+1-(901)-415-0779</span>
                                </div>
                                <div className="flex items-center gap-4 text-gray-600">
                                    <div className="w-12 h-12 rounded-xl glass-morphism flex items-center justify-center text-primary"><Globe size={20} /></div>
                                    <a href="https://skmudassir.in" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">skmudassir.in</a>
                                </div>
                            </div>
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
    <div className="min-h-screen bg-light">
        <PageHeader title="Certifications" subtitle="A testament to rigorous learning and specialized expertise in cloud architecture, AI, and enterprise engineering." />
        <section className="py-24 px-4 overflow-hidden">
            <div className="max-w-7xl mx-auto space-y-24">
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
                        <div key={idx} className="relative">
                            <h2 className="text-3xl md:text-5xl font-black mb-12 flex items-center gap-4 text-dark tracking-tight">
                                <span className="w-12 h-2 bg-gradient-to-r from-primary to-transparent rounded-full shadow-sm"></span>
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
                                            <div className="glass-morphism p-8 rounded-[32px] h-full transition-all duration-500 hover:bg-white flex flex-col items-center text-center shadow-sm border border-black/5">
                                                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-8 rounded-[32px] overflow-hidden bg-white shadow-md flex items-center justify-center p-6 border border-black/5">
                                                    {cert.image ? (
                                                        <img
                                                            src={cert.image}
                                                            alt={cert.title}
                                                            className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-primary/5 flex items-center justify-center text-primary font-black uppercase tracking-widest text-xs">
                                                            {cert.issuer || "Certificate"}
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <span className="px-6 py-2 bg-white text-primary font-black rounded-full text-xs shadow-xl uppercase tracking-widest">Verify Credential</span>
                                                    </div>
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight">{cert.title}</h3>
                                                <div className="flex flex-col items-center gap-3 mt-auto w-full pt-6 border-t border-black/5">
                                                    {cert.type && (
                                                        <span className="px-5 py-1.5 bg-primary/10 text-primary text-[10px] font-black rounded-full uppercase tracking-[0.2em]">
                                                            {cert.type}
                                                        </span>
                                                    )}
                                                    {cert.date && (
                                                        <span className="text-[10px] text-dark/40 font-black uppercase tracking-widest">{cert.date}</span>
                                                    )}
                                                    {cert.issuer && (
                                                        <span className="text-xs text-secondary font-black uppercase tracking-[0.2em]">{cert.issuer}</span>
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
