import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, FileText, Layout, Send, Rocket, Terminal, BrainCircuit, Database, Cloud, Code2, ShieldCheck, TrendingUp, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experienceData } from './OtherPages';
import NeuralNetwork from '../components/NeuralNetwork';
import TechMarquee from '../components/TechMarquee';
import TechIcon from '../components/TechIcon';
import RadarChart from '../components/RadarChart';
import WorkflowInfographic from '../components/WorkflowInfographic';
import { useThemeMode } from '../theme/ThemeContext';
import {
    Card, CardContent, Chip, Stack, Box, Typography, Avatar, Button,
    useTheme, alpha, Paper, Divider, LinearProgress
} from '@mui/material';
// Stack is used in the ML skills section

const Home = () => {
    const theme = useTheme();
    const { resolved: themeMode } = useThemeMode();
    const isLight = themeMode === 'light';
    // theme-aware surface colors
    const cardBg = isLight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.04)';
    const cardBorder = isLight ? 'rgba(15,23,42,0.1)' : 'rgba(255,255,255,0.1)';
    const terminalBg = isLight ? 'rgba(248,250,252,0.95)' : 'rgba(2,6,23,0.85)';
    const terminalBorder = isLight ? 'rgba(99,102,241,0.3)' : 'rgba(129,140,248,0.25)';
    const softText = isLight ? '#334155' : '#cbd5e1';
    const monoGreen = isLight ? '#059669' : '#34d399';
    const monoAccent = isLight ? '#4f46e5' : '#818cf8';
    const monoAmber = isLight ? '#d97706' : '#fbbf24';

    const techStack = [
        { name: 'N8N', slug: 'n8n', icon: '/skills/N8n-logo-new.svg.png', desc: 'Workflow Automation' },
        { name: 'Antigravity', slug: 'antigravity', icon: '/skills/antigravity-google-ai-logo.jpg', desc: 'Agentic AI' },
        { name: 'Shopify', slug: 'shopify', icon: '/skills/Shopify-ecommerce-platform.png.webp', desc: 'E-commerce Solutions' },
        { name: 'WordPress', slug: 'wordpress', icon: '/skills/wplogoblue-stacked-rgb_zqpuyr.avif', desc: 'CMS Development' },
        { name: 'AWS', slug: 'aws', icon: '/skills/1_tFl-8wQUENETYLjX5mYWuA.png', desc: 'Cloud Infrastructure' },
        { name: 'Email Marketing', slug: 'email-marketing', icon: '/skills/Email-marketing-The-Comms-Avenue.png', desc: 'Growth Strategy' },
        { name: 'Docker', slug: 'docker', icon: 'svg:docker', desc: 'Containerization' },
        { name: 'Python', slug: 'python', icon: 'svg:python', desc: 'Backend & Data Science' },
        { name: 'Next.js', slug: 'nextjs', icon: 'svg:nextdotjs', desc: 'React Framework' },
        { name: 'PostgreSQL', slug: 'postgresql', icon: 'svg:postgresql', desc: 'Relational Database' },
        { name: 'TypeScript', slug: 'typescript', icon: 'svg:typescript', desc: 'Typed JavaScript' },
        { name: 'Kubernetes', slug: 'kubernetes', icon: 'svg:kubernetes', desc: 'Container Orchestration' },
    ];

    const stats = [
        { value: '84+', label: 'Projects Built' },
        { value: '10+', label: 'Years Experience' },
        { value: '26+', label: 'Live Client Sites' },
        { value: '6', label: 'Cloud Certifications' },
    ];

    // Business & growth perspective — what FDEs deliver to clients
    const mlSkills = [
        { label: 'Client Delivery & Deployment', value: 95, icon: <Rocket size={16} /> },
        { label: 'Business Growth Strategy', value: 90, icon: <TrendingUp size={16} /> },
        { label: 'ROI & Revenue Impact', value: 88, icon: <DollarSign size={16} /> },
        { label: 'Enterprise Integration', value: 86, icon: <ShieldCheck size={16} /> },
        { label: 'Stakeholder Communication', value: 93, icon: <Send size={16} /> },
    ];

    // FDE skill matrix — enterprise SaaS / data platform focus
    const skillGroups = [
        {
            title: 'Backend & APIs',
            priority: 'HIGH',
            icon: <Code2 size={20} />,
            gradient: 'linear-gradient(135deg, #818cf8, #22d3ee)',
            skills: [
                'Python (FastAPI/Flask)', 'TypeScript / Node.js', 'RESTful APIs', 'gRPC',
                'System Design', 'Microservices', 'OAuth2 / JWT', 'DSA (LeetCode)',
                'API Wrappers', 'Custom Connectors'
            ]
        },
        {
            title: 'Data & Databases',
            priority: 'HIGH',
            icon: <Database size={20} />,
            gradient: 'linear-gradient(135deg, #22d3ee, #34d399)',
            skills: [
                'PostgreSQL', 'SQL Optimization', 'MongoDB', 'Redis',
                'Pandas / Polars', 'Apache Spark', 'ETL Pipelines', 'Airflow',
                'Data Warehousing', 'Snowflake / BigQuery'
            ]
        },
        {
            title: 'DevOps & Cloud',
            priority: 'HIGH',
            icon: <Cloud size={20} />,
            gradient: 'linear-gradient(135deg, #f59e0b, #f472b6)',
            skills: [
                'Docker', 'Kubernetes', 'AWS / GCP', 'Nginx / Caddy',
                'CI/CD Pipelines', 'GitHub Actions', 'Terraform / IaC', 'Prometheus',
                'Datadog / Monitoring', 'VPC & Networking'
            ]
        },
        {
            title: 'Enterprise Security',
            priority: 'MEDIUM',
            icon: <ShieldCheck size={20} />,
            gradient: 'linear-gradient(135deg, #34d399, #22d3ee)',
            skills: [
                'OAuth2 / OpenID', 'SAML / SSO', 'Active Directory', 'Reverse Proxies',
                'VPN / VPC Peering', 'Secure Auth Flows', 'Secrets Management', 'RBAC',
                'API Security', 'Zero-Trust Basics'
            ]
        },
        {
            title: 'AI & Machine Learning',
            priority: 'HIGH',
            icon: <BrainCircuit size={20} />,
            gradient: 'linear-gradient(135deg, #f472b6, #818cf8)',
            skills: [
                'Scikit-learn', 'TensorFlow / Keras', 'PyTorch', 'Computer Vision',
                'NLP & Transformers', 'ML Model Deployment', 'Feature Engineering',
                'MLOps Pipelines', 'AI Agents / LangChain', 'LLM Prompt Engineering'
            ]
        },
        {
            title: 'Client-Facing & Delivery',
            priority: 'HIGH',
            icon: <Send size={20} />,
            gradient: 'linear-gradient(135deg, #f472b6, #f59e0b)',
            skills: [
                'Requirement Gathering', 'Client Communication', 'Technical Writing',
                'Architecture Diagrams', 'docker-compose Setup Guides', 'API Documentation',
                'On-site Integration', 'End-to-End Delivery', 'Stakeholder Updates', 'POC Prototyping'
            ]
        },
    ];

    return (
        <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: 'background.default', minHeight: '100vh' }}>
            {/* Neural network animated background */}
            <Box sx={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <NeuralNetwork />
            </Box>

            {/* Gradient orbs */}
            <Box sx={{
                position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%',
                background: 'radial-gradient(circle, rgba(129,140,248,0.15), transparent 70%)',
                borderRadius: '50%', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
            }} />
            <Box sx={{
                position: 'absolute', bottom: '10%', right: '-5%', width: '30%', height: '30%',
                background: 'radial-gradient(circle, rgba(244,114,182,0.12), transparent 70%)',
                borderRadius: '50%', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none'
            }} />

            {/* ===== HERO ===== */}
            <Box component="section" sx={{
                position: 'relative', zIndex: 1, minHeight: '92vh',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                pt: '96px'
            }}>
                <Box sx={{ position: 'relative', zIndex: 2, textAlign: 'center', px: 2, maxWidth: 1000, mx: 'auto' }}>
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }}>
                        {/* Avatar with AI ring */}
                        <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                            <Box sx={{
                                position: 'absolute', inset: -8, borderRadius: '50%',
                                background: 'conic-gradient(from 0deg, #818cf8, #f472b6, #22d3ee, #818cf8)',
                                animation: 'spin 6s linear infinite',
                                '@keyframes spin': { to: { transform: 'rotate(360deg)' } },
                            }} />
                            <Avatar
                                src="/mudassir-image.jpeg"
                                alt="Mudassir Shaik — AI/ML Engineer"
                                sx={{ width: 140, height: 140, border: '4px solid #0f172a', position: 'relative' }}
                            />
                            <Box sx={{
                                position: 'absolute', bottom: 6, right: 6, width: 22, height: 22,
                                borderRadius: '50%', bgcolor: '#34d399', border: '3px solid #0f172a'
                            }} />
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mb: 2 }}>
                            <Chip
                                icon={<Terminal size={14} />}
                                label="FORWARD DEPLOYED ENGINEER"
                                sx={{
                                    bgcolor: alpha(theme.palette.primary.main, 0.15),
                                    color: 'primary.main', fontWeight: 800, letterSpacing: '0.15em',
                                    fontSize: '0.7rem', border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`
                                }}
                            />
                            <Chip
                                icon={<BrainCircuit size={14} />}
                                label="AI / ML ENGINEER"
                                sx={{
                                    bgcolor: alpha(theme.palette.secondary.main, 0.15),
                                    color: 'secondary.main', fontWeight: 800, letterSpacing: '0.15em',
                                    fontSize: '0.7rem', border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`
                                }}
                            />
                            <Chip
                                icon={<Cloud size={14} />}
                                label="CLOUD / DEVOPS"
                                sx={{
                                    bgcolor: alpha('#22d3ee', 0.15),
                                    color: '#22d3ee', fontWeight: 800, letterSpacing: '0.15em',
                                    fontSize: '0.7rem', border: '1px solid rgba(34,211,238,0.3)'
                                }}
                            />
                        </Box>

                        <Typography variant="h1" sx={{
                            fontWeight: 900, fontSize: { xs: '2.8rem', md: '4.2rem' },
                            letterSpacing: '-0.02em', lineHeight: 1.15,
                            background: 'linear-gradient(135deg, #818cf8 0%, #f472b6 50%, #22d3ee 100%)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                            mb: 1
                        }}>
                            Mudassir Shaik
                        </Typography>

                        <Typography variant="h4" sx={{ fontWeight: 700, color: 'text.primary', mb: 2, fontSize: { xs: '1.3rem', md: '1.8rem' } }}>
                            Forward Deployed Engineer — Shipping Enterprise AI & Data Solutions
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 720, mx: 'auto', mb: 4, lineHeight: 1.7 }}>
                            I embed with clients to design, build and deploy production-grade systems — backend APIs, data pipelines,
                            cloud infrastructure and enterprise integrations — turning business problems into shipped, working software.
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 5 }}>
                            <Button
                                component={Link} to="/projects" variant="contained" size="large" endIcon={<ArrowRight />}
                                sx={{
                                    background: 'linear-gradient(135deg, #818cf8, #f472b6, #22d3ee)',
                                    fontWeight: 800, px: 4, py: 1.5, borderRadius: 3,
                                    color: '#0f172a', '&:hover': { transform: 'translateY(-2px)', boxShadow: '0 8px 30px rgba(129,140,248,0.4)' }
                                }}
                            >
                                Explore My Work
                            </Button>
                            <Button
                                component={Link} to="/contact" variant="outlined" size="large" startIcon={<Rocket />}
                                sx={{ fontWeight: 800, px: 4, py: 1.5, borderRadius: 3, borderColor: alpha(theme.palette.primary.main, 0.4) }}
                            >
                                Start a Conversation
                            </Button>
                        </Box>

                        {/* Terminal-style card */}
                        <Paper elevation={0} sx={{
                            maxWidth: 560, mx: 'auto', mb: 5, textAlign: 'left', overflow: 'hidden',
                            bgcolor: terminalBg, border: `1px solid ${terminalBorder}`,
                            borderRadius: 3, backdropFilter: 'blur(12px)',
                            fontFamily: 'monospace', fontSize: '0.8rem'
                        }}>
                            <Box sx={{ px: 2, py: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f87171' }} />
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#fbbf24' }} />
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#34d399' }} />
                                <Typography sx={{ ml: 1, color: '#64748b', fontSize: '0.7rem', fontFamily: 'monospace' }}>mudassir@ai-engineer ~ %</Typography>
                            </Box>
                            <Box sx={{ p: 2, color: softText, lineHeight: 1.9 }}>
                                <Box><span style={{ color: monoAccent }}>$ whoami</span></Box>
                                <Box sx={{ color: softText === '#334155' ? '#1e293b' : '#e2e8f0' }}>Forward Deployed Engineer · AI/ML · Cloud</Box>
                                <Box sx={{ mt: 1 }}><span style={{ color: monoAccent }}>$ cat deployment.txt</span></Box>
                                <Box sx={{ color: monoGreen }}>
                                    - Backend APIs & System Design (Python / Node)<br />
                                    - Data Pipelines & SQL Optimization<br />
                                    - Docker / K8s / AWS Enterprise Deploys<br />
                                    - SSO, SAML & Secure Integrations<br />
                                    - On-site Client Delivery & Docs
                                </Box>
                                <Box sx={{ mt: 1 }}><span style={{ color: monoAccent }}>$ status</span></Box>
                                <Box sx={{ color: monoAmber }}>● Deployed & available for new engagements</Box>
                            </Box>
                        </Paper>

                        {/* Stats */}
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2, maxWidth: 800, mx: 'auto' }}>
                            {stats.map((s, i) => (
                                <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.1 }}>
                                    <Card variant="outlined" sx={{
                                        borderRadius: 3, bgcolor: 'rgba(255,255,255,0.04)',
                                        borderColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(8px)',
                                        textAlign: 'center', py: 2, '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(129,140,248,0.08)' }
                                    }}>
                                        <Typography sx={{
                                            fontWeight: 900, fontSize: '1.6rem',
                                            background: 'linear-gradient(135deg, #818cf8, #f472b6)',
                                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                                        }}>
                                            {s.value}
                                        </Typography>
                                        <Typography sx={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'text.secondary', mt: 0.5 }}>
                                            {s.label}
                                        </Typography>
                                    </Card>
                                </motion.div>
                            ))}
                        </Box>
                    </motion.div>
                </Box>
            </Box>

            {/* ===== TECH MARQUEE ===== */}
            <TechMarquee />

            {/* ===== BUSINESS IMPACT RADAR ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 800, mx: 'auto', mb: 5, textAlign: 'center' }}>
                    <Typography sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                        Business Impact
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>Engineering for <Box component="span" sx={{ background: 'linear-gradient(135deg,#818cf8,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Growth & ROI</Box></Typography>
                    <Typography sx={{ color: 'text.secondary', maxWidth: 640, mx: 'auto' }}>
                        Beyond code — I measure success in deployments shipped, revenue enabled, and businesses scaled.
                    </Typography>
                </Box>
                <Card variant="outlined" sx={{
                    maxWidth: 800, mx: 'auto', borderRadius: 4,
                    bgcolor: cardBg, borderColor: cardBorder,
                    backdropFilter: 'blur(10px)', p: { xs: 2, md: 4 }
                }}>
                    <RadarChart skills={mlSkills.map(s => ({ label: s.label, value: s.value }))} size={420} />
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center', mt: 2 }}>
                        {mlSkills.map(s => (
                            <Chip key={s.label} icon={s.icon} label={`${s.value}%`} size="small" sx={{
                                fontWeight: 700, color: 'primary.main',
                                bgcolor: 'rgba(129,140,248,0.1)',
                                border: '1px solid rgba(129,140,248,0.3)'
                            }} />
                        ))}
                    </Box>
                </Card>

                {/* Business growth metric cards */}
                <Box sx={{
                    display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
                    gap: 2, maxWidth: 900, mx: 'auto', mt: 4
                }}>
                    {[
                        { value: '40+', label: 'Client Sites Shipped', icon: <Rocket size={18} />, grad: 'linear-gradient(135deg, #818cf8, #22d3ee)' },
                        { value: '24/7', label: 'Uptime SLA Delivered', icon: <ShieldCheck size={18} />, grad: 'linear-gradient(135deg, #34d399, #22d3ee)' },
                        { value: '10×', label: 'Cost Reduction via Slim Deploys', icon: <TrendingUp size={18} />, grad: 'linear-gradient(135deg, #f472b6, #818cf8)' },
                        { value: '100%', label: 'On-time Delivery Record', icon: <DollarSign size={18} />, grad: 'linear-gradient(135deg, #f59e0b, #f472b6)' },
                    ].map((m, i) => (
                        <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}>
                            <Card variant="outlined" sx={{
                                borderRadius: 3, textAlign: 'center', py: 2.5, px: 1.5, height: '100%',
                                bgcolor: cardBg, borderColor: cardBorder,
                                transition: 'all 0.3s',
                                '&:hover': { transform: 'translateY(-4px)', borderColor: 'primary.main', boxShadow: '0 10px 30px rgba(129,140,248,0.2)' }
                            }}>
                                <Box sx={{
                                    width: 38, height: 38, borderRadius: 2, mx: 'auto', mb: 1.5,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    background: m.grad, color: '#0f172a'
                                }}>
                                    {m.icon}
                                </Box>
                                <Typography sx={{ fontWeight: 900, fontSize: '1.5rem', background: m.grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                    {m.value}
                                </Typography>
                                <Typography sx={{ fontSize: '0.62rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'text.secondary', fontWeight: 700, mt: 0.5 }}>
                                    {m.label}
                                </Typography>
                            </Card>
                        </motion.div>
                    ))}
                </Box>
            </Box>

            {/* ===== WORKFLOW INFographic (n8n style) ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                            How I Work
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                            From Discovery to <Box component="span" sx={{ background: 'linear-gradient(135deg,#34d399,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Delivered Value</Box>
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', maxWidth: 620, mx: 'auto' }}>
                            A proven, repeatable delivery pipeline — the same rigor I apply to every client engagement.
                        </Typography>
                    </Box>
                    <WorkflowInfographic />
                </Box>
            </Box>

            {/* ===== SKILLS GRID ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                    <Box sx={{ textAlign: 'center', mb: 5 }}>
                        <Typography sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                            Skill Matrix
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>
                            FDE <Box component="span" sx={{ background: 'linear-gradient(135deg,#34d399,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skill Matrix</Box>
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
                            Six disciplines, sixty capabilities — from backend systems to enterprise deployments.
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {skillGroups.map((group, idx) => (
                            <motion.div key={group.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                                <Card variant="outlined" sx={{
                                    borderRadius: 4, height: '100%', p: 2.5,
                                    bgcolor: cardBg, borderColor: cardBorder,
                                    backdropFilter: 'blur(8px)', transition: 'all 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-6px)',
                                        borderColor: 'primary.main',
                                        boxShadow: '0 12px 40px rgba(129,140,248,0.2)',
                                        bgcolor: 'rgba(129,140,248,0.06)'
                                    }
                                }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                                        <Box sx={{
                                            width: 42, height: 42, borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            background: group.gradient, color: '#0f172a', flexShrink: 0
                                        }}>
                                            {group.icon}
                                        </Box>
                                        <Typography variant="h6" sx={{ fontWeight: 800, fontSize: '1.05rem', flexGrow: 1 }}>{group.title}</Typography>
                                        <Chip label={group.priority} size="small" sx={{
                                            fontSize: '0.6rem', fontWeight: 900, letterSpacing: '0.1em',
                                            color: group.priority === 'HIGH' ? '#34d399' : '#fbbf24',
                                            bgcolor: group.priority === 'HIGH' ? 'rgba(52,211,153,0.1)' : 'rgba(251,191,36,0.1)',
                                            border: `1px solid ${group.priority === 'HIGH' ? 'rgba(52,211,153,0.3)' : 'rgba(251,191,36,0.3)'}`
                                        }} />
                                    </Box>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                                        {group.skills.map((skill) => (
                                            <Chip key={skill} label={skill} size="small" sx={{
                                                fontSize: '0.68rem', fontWeight: 600,
                                                bgcolor: 'rgba(255,255,255,0.06)', color: 'text.secondary',
                                                border: '1px solid rgba(255,255,255,0.08)',
                                                '&:hover': { bgcolor: 'rgba(129,140,248,0.15)', color: 'primary.main', borderColor: 'primary.main' }
                                            }} />
                                        ))}
                                    </Box>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== TECH STACK ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                    <Box sx={{ textAlign: 'center', mb: 5 }}>
                        <Typography sx={{ color: 'secondary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                            Technical Range
                        </Typography>
                        <Typography variant="h3" sx={{ fontWeight: 800 }}>Solving Problems with <Box component="span" sx={{ background: 'linear-gradient(135deg,#f472b6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Modern Tech</Box></Typography>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {techStack.map((tech, idx) => (
                            <motion.div key={tech.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.08 }}>
                                <Link to={`/tech/${tech.slug}`} style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{
                                        borderRadius: 4, height: '100%',
                                        bgcolor: cardBg, borderColor: cardBorder,
                                        backdropFilter: 'blur(8px)', textAlign: 'center', p: 3,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            borderColor: 'primary.main',
                                            boxShadow: '0 12px 40px rgba(129,140,248,0.25)',
                                            bgcolor: 'rgba(129,140,248,0.08)'
                                        }
                                    }}>
                                        {tech.icon.startsWith('svg:') ? (
                                            <Box sx={{ width: 64, height: 64, mx: 'auto', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <TechIcon slug={tech.icon.slice(4)} size={64} />
                                            </Box>
                                        ) : (
                                            <Avatar src={tech.icon} alt={`${tech.name} — ${tech.desc}`} variant="rounded"
                                                sx={{ width: 64, height: 64, mx: 'auto', mb: 2, bgcolor: 'rgba(255,255,255,0.08)', p: 1 }} />
                                        )}
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{tech.name}</Typography>
                                        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem', mb: 1 }}>{tech.desc}</Typography>
                                        <Typography sx={{ color: 'primary.main', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0, transition: 'opacity 0.3s' }}
                                            className="card-link-hint">
                                            Learn More →
                                        </Typography>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== QUOTE ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2, textAlign: 'center' }}>
                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}>
                        <BrainCircuit size={44} style={{ color: '#818cf8', marginBottom: 16 }} />
                        <Typography variant="h4" sx={{ fontWeight: 700, fontStyle: 'italic', lineHeight: 1.4, mb: 3 }}>
                            "The best deployed software is the kind clients forget is software — it just works, on their infrastructure, at their scale."
                        </Typography>
                        <Divider sx={{ width: 100, mx: 'auto', borderColor: 'primary.main', borderWidth: 2, borderRadius: 2 }} />
                    </motion.div>
                </Box>
            </Box>

            {/* ===== EXPERIENCE PREVIEW ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, mb: 5, gap: 2 }}>
                        <Box>
                            <Typography sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                                My Journey
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 800 }}>Experience <Box component="span" sx={{ background: 'linear-gradient(135deg,#818cf8,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>& Growth</Box></Typography>
                        </Box>
                        <Button component={Link} to="/experience" variant="outlined" endIcon={<ArrowRight />} sx={{ borderRadius: 3, fontWeight: 700 }}>
                            Full Resume
                        </Button>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {experienceData.slice(0, 3).map((exp, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                <Link to={`/experience/${exp.slug}`} style={{ textDecoration: 'none' }}>
                                    <Card variant="outlined" sx={{
                                        borderRadius: 4, height: '100%', textAlign: 'center', p: 3,
                                        bgcolor: cardBg, borderColor: cardBorder,
                                        borderTop: `4px solid ${idx % 2 === 0 ? '#818cf8' : '#f472b6'}`,
                                        backdropFilter: 'blur(8px)', transition: 'all 0.3s',
                                        '&:hover': { transform: 'translateY(-6px)', borderTopColor: '#22d3ee', boxShadow: '0 12px 40px rgba(34,211,238,0.2)' }
                                    }}>
                                        <Avatar src={exp.image} alt={`${exp.company} — ${exp.role}`} variant="rounded"
                                            sx={{ width: 72, height: 72, mx: 'auto', mb: 2, bgcolor: 'rgba(255,255,255,0.08)', p: 1 }} />
                                        <Typography variant="h6" sx={{ fontWeight: 800, mb: 0.5 }}>{exp.role}</Typography>
                                        <Typography sx={{ color: 'text.secondary', fontWeight: 600, mb: 1 }}>{exp.company}</Typography>
                                        <Chip label={exp.period} size="small" sx={{ fontWeight: 700, color: 'primary.main', bgcolor: 'rgba(129,140,248,0.12)' }} />
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== FEATURED PROJECTS ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { md: 'flex-end' }, mb: 5, gap: 2 }}>
                        <Box>
                            <Typography sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                                Portfolio
                            </Typography>
                            <Typography variant="h3" sx={{ fontWeight: 800 }}>Featured <Box component="span" sx={{ background: 'linear-gradient(135deg,#22d3ee,#818cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creations</Box></Typography>
                        </Box>
                        <Button component={Link} to="/projects" variant="contained" endIcon={<ArrowRight />}
                            sx={{ background: 'linear-gradient(135deg, #22d3ee, #818cf8)', color: '#0f172a', fontWeight: 800, borderRadius: 3, px: 3 }}>
                            View All Projects
                        </Button>
                    </Box>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
                        {[
                            { name: 'Beauty and company', url: 'https://www.bandconline.com', image: '/projects/beauty_and_company.webp', platform: 'Shopify' },
                            { name: 'Shop Hershe', url: 'https://shophershe.com', image: '/projects/shop_hershe.avif', platform: 'Shopify' },
                            { name: 'Go Sticky Icky', url: 'https://gostickyicky.com', image: '/projects/Go_stickyIcky.avif', platform: 'Shopify' },
                        ].map((project, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                                <Card variant="outlined" sx={{
                                    borderRadius: 4, overflow: 'hidden', height: '100%',
                                    bgcolor: cardBg, borderColor: cardBorder,
                                    backdropFilter: 'blur(8px)', transition: 'all 0.3s',
                                    '&:hover': { transform: 'translateY(-6px)', borderColor: 'secondary.main', boxShadow: '0 12px 40px rgba(244,114,182,0.25)' }
                                }}>
                                    <CardContent sx={{ p: 0 }}>
                                        <Box sx={{ position: 'relative', height: 200, bgcolor: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', p: 3 }}>
                                            <Box component="img" src={project.image} alt={project.name}
                                                sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.6s', '&:hover': { transform: 'scale(1.08)' } }} />
                                        </Box>
                                        <Box sx={{ p: 2.5 }}>
                                            <Typography variant="h6" sx={{ fontWeight: 800 }}>{project.name}</Typography>
                                            <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                {project.platform}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* ===== CTA ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Card variant="outlined" sx={{
                    maxWidth: 900, mx: 'auto', borderRadius: 5, textAlign: 'center', p: { xs: 4, md: 7 },
                    bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(129,140,248,0.25)',
                    backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden'
                }}>
                    <Box sx={{
                        position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)',
                        width: 400, height: 200, background: 'radial-gradient(ellipse, rgba(129,140,248,0.2), transparent 70%)', pointerEvents: 'none'
                    }} />
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
                        <Send size={40} style={{ color: '#f472b6', marginBottom: 16 }} />
                        <Typography variant="h3" sx={{ fontWeight: 900, mb: 2 }}>
                            Ready to Deploy <Box component="span" sx={{ background: 'linear-gradient(135deg,#818cf8,#f472b6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Enterprise Solutions?</Box>
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}>
                            Let's collaborate on your next enterprise integration, data platform, or AI deployment — I'm just a click away.
                        </Typography>
                        <Button component={Link} to="/contact" variant="contained" size="large" endIcon={<Send />}
                            sx={{ background: 'linear-gradient(135deg, #818cf8, #f472b6, #22d3ee)', color: '#0f172a', fontWeight: 800, px: 5, py: 1.6, borderRadius: 3 }}>
                            Get In Touch
                        </Button>
                    </motion.div>
                </Card>
            </Box>
        </Box>
    );
};

export default Home;
