import { motion } from 'framer-motion';
import { Download, Printer, Mail, Phone, MapPin, Linkedin, Globe, ExternalLink } from 'lucide-react';
import { experienceData } from './OtherPages';

const Resume = () => {
    const handlePrint = () => {
        window.print();
    };

    const handleDownload = () => {
        // Since we don't have a static PDF, we'll trigger the print dialog which allows "Save as PDF"
        window.print();
    };

    const education = [
        {
            degree: "Masters in Information Technology Management",
            school: "Indiana Wesleyan University",
            period: "Jan 2023 - Dec 2024",
            location: "USA"
        },
        {
            degree: "MSc Datascience",
            school: "Chandigarh University",
            period: "Aug 2021 - Mar 2023",
            location: "India"
        },
        {
            degree: "BE Mechanical Engineering",
            school: "Muffakham Jah College of Engg and Tech",
            period: "May 2014 - May 2017",
            location: "India"
        }
    ];

    const skills = [
        "Python", "Java", "SQL", "JavaScript", "React", "Node.js", "AWS", "Azure DevOps", "Google Cloud",
        "Machine Learning", "Data Analytics", "CI/CD", "Docker", "Jenkins", "Shopify", "WordPress"
    ];

    return (
        <div className="min-h-screen bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8 print:pt-0 print:pb-0">
            {/* Action Buttons - Hidden when printing */}
            <div className="max-w-5xl mx-auto mb-8 flex justify-end gap-4 print:hidden">
                <button
                    onClick={handleDownload}
                    className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg"
                >
                    <Download size={20} /> Download PDF
                </button>
                <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-6 py-3 bg-dark text-white rounded-full font-bold hover:bg-dark/90 transition-all shadow-lg"
                >
                    <Printer size={20} /> Print Resume
                </button>
            </div>

            {/* Resume Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-5xl mx-auto bg-white shadow-2xl rounded-[32px] overflow-hidden border border-gray-100 print:shadow-none print:rounded-none print:border-none"
            >
                {/* Header Section */}
                <div className="bg-dark text-white p-12 print:p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h1 className="text-5xl font-black mb-2 tracking-tight">MUDASSIR <span className="text-primary italic">SHAIK</span></h1>
                            <h2 className="text-2xl font-bold text-primary/80 mb-6">Software Engineer & Data Enthusiast</h2>
                            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm opacity-80">
                                <span className="flex items-center gap-2"><Mail size={16} className="text-primary" /> skmudassir.it@gmail.com</span>
                                <span className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +1-(901)-415-0779</span>
                                <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Memphis, TN</span>
                                <span className="flex items-center gap-2"><Linkedin size={16} className="text-primary" /> linkedin.com/in/mudassirshaik</span>
                                <span className="flex items-center gap-2"><Globe size={16} className="text-primary" /> skmudassir.in</span>
                            </div>
                        </div>
                        <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden border-4 border-primary/20 shadow-xl">
                            <img src="/mudassir-image.jpeg" alt="Mudassir" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                <div className="p-12 print:p-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Left Column - Experience & Education */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Experience */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <span className="w-8 h-1.5 bg-primary rounded-full"></span>
                                PROFESSIONAL EXPERIENCE
                            </h3>
                            <div className="space-y-10">
                                {experienceData.map((exp, idx) => (
                                    <div key={idx} className="relative pl-8 border-l-2 border-primary/20">
                                        <div className="absolute -left-[11px] top-0 w-5 h-5 bg-white border-4 border-primary rounded-full" />
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="text-xl font-bold text-dark">{exp.role}</h4>
                                            <span className="text-xs font-black bg-primary/10 text-primary px-3 py-1 rounded-full">{exp.period}</span>
                                        </div>
                                        <p className="text-primary font-bold mb-4">{exp.company}</p>
                                        <ul className="space-y-2">
                                            {exp.responsibilities.slice(0, 3).map((resp, i) => (
                                                <li key={i} className="text-gray-600 text-sm leading-relaxed flex gap-2">
                                                    <span className="text-primary mt-1">•</span> {resp}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-nowrap">
                                <span className="w-8 h-1.5 bg-secondary rounded-full"></span>
                                EDUCATION
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, idx) => (
                                    <div key={idx} className="flex justify-between items-start">
                                        <div>
                                            <h4 className="text-lg font-bold text-dark">{edu.degree}</h4>
                                            <p className="text-secondary font-bold text-sm">{edu.school}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xs font-bold text-gray-500">{edu.period}</span>
                                            <p className="text-xs text-gray-400">{edu.location}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column - Skills & More */}
                    <div className="space-y-12">
                        {/* Skills */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <span className="w-8 h-1.5 bg-primary rounded-full"></span>
                                TECH STACK
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, idx) => (
                                    <span key={idx} className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-lg border border-gray-200">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {/* Certifications (Brief) */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <span className="w-8 h-1.5 bg-secondary rounded-full"></span>
                                TOP CERTIFICATIONS
                            </h3>
                            <ul className="space-y-4">
                                <li className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    AWS Certified Developer
                                </li>
                                <li className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    Azure DevOps Engineer Expert
                                </li>
                                <li className="text-sm font-bold text-gray-700 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-secondary rounded-full" />
                                    Google Python Automation
                                </li>
                            </ul>
                        </section>

                        {/* Languages */}
                        <section>
                            <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                                <span className="w-8 h-1.5 bg-primary rounded-full"></span>
                                LANGUAGES
                            </h3>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm font-bold">
                                    <span>English</span>
                                    <span className="text-primary">Professional</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '95%' }} />
                                </div>
                                <div className="flex justify-between text-sm font-bold mt-4">
                                    <span>Hindi / Urdu</span>
                                    <span className="text-primary">Native</span>
                                </div>
                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-primary" style={{ width: '100%' }} />
                                </div>
                            </div>
                        </section>

                        {/* QR Code / Portfolio Link */}
                        <div className="p-6 bg-primary/5 rounded-2xl border border-primary/10 text-center">
                            <p className="text-xs font-black text-primary uppercase tracking-widest mb-2">View Portfolio Online</p>
                            <a href="https://skmudassir.in" className="text-sm font-bold text-dark hover:text-primary transition-colors flex items-center justify-center gap-2">
                                skmudassir.in <ExternalLink size={14} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-8 text-center text-gray-400 text-[10px] border-t border-gray-50 uppercase tracking-[0.2em] print:block">
                    Generated by Mudassir's Personal Portfolio • {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
