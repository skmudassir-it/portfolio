import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Rocket, TrendingUp, Lightbulb } from 'lucide-react';

const techDetails = {
    'n8n': {
        name: 'N8N',
        logo: '/skills/N8n-logo-new.svg.png',
        desc: 'Advanced Workflow Automation & Pipeline Engineering',
        howIUse: 'I leverage n8n to build complex, self-hosted automation workflows that connect diverse APIs without the recurring costs of platforms like Zapier. I specialize in webhooks, data transformation, and conditional logic to create seamless business processes.',
        projects: [
            'Automated Lead Qualification System',
            'Cross-platform Data Synchronization Pipeline',
            'Custom AI-Agent Workflow Integration'
        ],
        businessValue: 'Reduces manual effort by up to 80%, eliminates human error in data entry, and allows businesses to scale operations without increasing headcount.'
    },
    'antigravity': {
        name: 'Antigravity',
        logo: '/skills/antigravity-google-ai-logo.jpg',
        desc: 'AI-Driven Development & Agentic Workflows',
        howIUse: 'Using Antigravity (Advanced Agentic AI), I build intelligent assistants and autonomous agents that can reason through multi-step tasks. I integrate these agents into developer workflows and business operations to enhance productivity.',
        projects: [
            'Autonomous Code Documentation Agent',
            'Intelligent Customer Support Orchestrator',
            'AI-Powered Predictive Analytics Dashboard'
        ],
        businessValue: 'Enables "Agentic" efficiency—where AI doesn\'t just suggest but executes. Saves hundreds of developer hours and provides 24/7 intelligent operational support.'
    },
    'shopify': {
        name: 'Shopify',
        logo: '/skills/Shopify-ecommerce-platform.png.webp',
        desc: 'Scalable E-commerce Solutions & Liquid Customization',
        howIUse: 'I develop custom Shopify themes and private apps tailored to unique brand identities. I focus on performance optimization, SEO-friendly architecture, and seamless third-party integrations (ERP, CRM).',
        projects: [
            'Beauty and Company (Global E-commerce)',
            'Shop Hershe (Boutique Fashion Store)',
            'Go Sticky Icky (High-Traffic Specialty Shop)'
        ],
        businessValue: 'Creates a high-converting, premium shopping experience that builds brand trust and directly increases average order value (AOV) and customer retention.'
    },
    'wordpress': {
        name: 'WordPress',
        logo: '/skills/wplogoblue-stacked-rgb_zqpuyr.avif',
        desc: 'Enterprise CMS Development & Custom Plugins',
        howIUse: 'I specialize in headless WordPress setups and custom theme development using modern PHP and JavaScript. I ensure sites are modular, easy for marketers to manage, and blazing fast.',
        projects: [
            'Corporate Branding & Publication Site',
            'Custom Gutenberg Block Library',
            'Scalable Multi-site Network Management'
        ],
        businessValue: 'Provides business owners with absolute control over their content while ensuring the site remains secure, fast, and SEO-optimized—essential for organic growth.'
    },
    'aws': {
        name: 'AWS',
        logo: '/skills/1_tFl-8wQUENETYLjX5mYWuA.png',
        desc: 'Cloud Infrastructure & Serverless Architecture',
        howIUse: 'I architect robust, scalable infrastructures using AWS services like Lambda, S3, and CloudFront. I focus on high availability, disaster recovery, and cost-optimized cloud strategy.',
        projects: [
            'Serverless Image Processing Microservice',
            'Auto-scaling Web Application Cluster',
            'Secure Cloud Storage & IAM Implementation'
        ],
        businessValue: 'Ensures 99.9% uptime and scales automatically with your business growth, ensuring you only pay for what you use while maintaining world-class security.'
    },
    'email-marketing': {
        name: 'Email Marketing',
        logo: '/skills/Email-marketing-The-Comms-Avenue.png',
        desc: 'Data-Driven Growth & Retention Strategy',
        howIUse: 'I combine technical automation with marketing psychology. I set up advanced segmentation and behavioral triggers (abandoned cart, post-purchase flows) that run on autopilot.',
        projects: [
            'Drip Campaign for E-commerce Growth',
            'Automated Newsletter Personalization Engine',
            'Re-engagement Strategy for Dormant Leads'
        ],
        businessValue: 'Turns the highest-ROI marketing channel into a predictable revenue engine. Most business owners see a 20-30% revenue lift from optimized automated flows.'
    }
};

const TechDetail = () => {
    const { slug } = useParams();
    const tech = techDetails[slug as keyof typeof techDetails];

    if (!tech) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Tech Not Found</h1>
                    <Link to="/" className="text-primary font-bold hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 px-4 bg-light min-h-screen">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 text-dark/60 hover:text-primary font-bold mb-12 transition-colors group">
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Dashboard
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Header Sidebar */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="glass-morphism p-8 rounded-[32px] text-center mb-8"
                        >
                            <div className="w-24 h-24 bg-white/5 rounded-3xl p-4 flex items-center justify-center shadow-sm mx-auto mb-6">
                                <img src={tech.logo} alt={tech.name} className="max-w-full max-h-full object-contain" />
                            </div>
                            <h1 className="text-3xl font-black text-dark mb-2">{tech.name}</h1>
                            <p className="text-primary font-bold text-sm tracking-widest uppercase">{tech.desc}</p>
                        </motion.div>

                        <div className="glass-morphism p-8 rounded-[32px] bg-primary/5 border-primary/10">
                            <h3 className="flex items-center gap-2 font-black text-dark mb-4 uppercase tracking-tighter">
                                <TrendingUp size={18} className="text-primary" /> Business Impact
                            </h3>
                            <p className="text-dark/70 font-medium leading-relaxed italic">
                                "{tech.businessValue}"
                            </p>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:col-span-2">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-12"
                        >
                            <section>
                                <h2 className="flex items-center gap-3 text-2xl font-black text-dark mb-6">
                                    <Lightbulb className="text-primary" /> How I Use It
                                </h2>
                                <p className="text-lg text-dark/70 font-medium leading-relaxed">
                                    {tech.howIUse}
                                </p>
                            </section>

                            <section>
                                <h2 className="flex items-center gap-3 text-2xl font-black text-dark mb-6">
                                    <Rocket className="text-secondary" /> Notable Projects
                                </h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {tech.projects.map((project, i) => (
                                        <div key={i} className="flex items-center gap-4 glass-morphism p-6 rounded-2xl group hover:border-primary/50 transition-colors">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-black shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="text-lg font-bold text-dark group-hover:text-primary transition-colors">{project}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <div className="pt-8">
                                <Link to="/contact" className="btn-primary inline-flex items-center justify-center gap-3 w-full sm:w-auto">
                                    Build with {tech.name} <ArrowLeft size={20} className="rotate-180" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechDetail;
