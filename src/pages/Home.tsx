import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Briefcase, FileText, Layout, Send, Rocket, Terminal, BrainCircuit, Database, Cloud, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experienceData } from './OtherPages';
import NeuralNetwork from '../components/NeuralNetwork';
import {
    Card, CardContent, Chip, Stack, Box, Typography, Avatar, Button,
    useTheme, alpha, Paper, Divider, LinearProgress
} from '@mui/material';
// Stack is used in the ML skills section

const Home = () => {
    const theme = useTheme();

    const techStack = [
        { name: 'N8N', slug: 'n8n', icon: '/skills/N8n-logo-new.svg.png', desc: 'Workflow Automation' },
        { name: 'Antigravity', slug: 'antigravity', icon: '/skills/antigravity-google-ai-logo.jpg', desc: 'Agentic AI' },
        { name: 'Shopify', slug: 'shopify', icon: '/skills/Shopify-ecommerce-platform.png.webp', desc: 'E-commerce Solutions' },
        { name: 'WordPress', slug: 'wordpress', icon: '/skills/wplogoblue-stacked-rgb_zqpuyr.avif', desc: 'CMS Development' },
        { name: 'AWS', slug: 'aws', icon: '/skills/1_tFl-8wQUENETYLjX5mYWuA.png', desc: 'Cloud Infrastructure' },
        { name: 'Email Marketing', slug: 'email-marketing', icon: '/skills/Email-marketing-The-Comms-Avenue.png', desc: 'Growth Strategy' },
    ];

    const stats = [
        { value: '84+', label: 'Projects Built' },
        { value: '10+', label: 'Years Experience' },
        { value: '26+', label: 'Live Client Sites' },
        { value: '6', label: 'Cloud Certifications' },
    ];

    const mlSkills = [
        { label: 'Machine Learning', value: 92, icon: <BrainCircuit size={16} /> },
        { label: 'Deep Learning / NLP', value: 85, icon: <Database size={16} /> },
        { label: 'Cloud / MLOps (AWS)', value: 90, icon: <Cloud size={16} /> },
        { label: 'Python / Data Science', value: 95, icon: <Code2 size={16} /> },
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
                                label="AI / ML ENGINEER"
                                sx={{
                                    bgcolor: alpha(theme.palette.primary.main, 0.15),
                                    color: 'primary.main', fontWeight: 800, letterSpacing: '0.15em',
                                    fontSize: '0.7rem', border: `1px solid ${alpha(theme.palette.primary.main, 0.3)}`
                                }}
                            />
                            <Chip
                                label="FULL-STACK DEVELOPER"
                                sx={{
                                    bgcolor: alpha(theme.palette.secondary.main, 0.15),
                                    color: 'secondary.main', fontWeight: 800, letterSpacing: '0.15em',
                                    fontSize: '0.7rem', border: `1px solid ${alpha(theme.palette.secondary.main, 0.3)}`
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
                            Building Intelligent Systems & Scalable AI Solutions
                        </Typography>

                        <Typography sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: 680, mx: 'auto', mb: 4, lineHeight: 1.7 }}>
                            I engineer production-ready machine learning pipelines, agentic AI workflows,
                            and cloud-native applications — turning complex problems into elegant, automated solutions.
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
                            bgcolor: 'rgba(2,6,23,0.85)', border: '1px solid rgba(129,140,248,0.25)',
                            borderRadius: 3, backdropFilter: 'blur(12px)',
                            fontFamily: 'monospace', fontSize: '0.8rem'
                        }}>
                            <Box sx={{ px: 2, py: 1, borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f87171' }} />
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#fbbf24' }} />
                                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#34d399' }} />
                                <Typography sx={{ ml: 1, color: '#64748b', fontSize: '0.7rem', fontFamily: 'monospace' }}>mudassir@ai-engineer ~ %</Typography>
                            </Box>
                            <Box sx={{ p: 2, color: '#cbd5e1', lineHeight: 1.9 }}>
                                <Box><span style={{ color: '#818cf8' }}>$ whoami</span></Box>
                                <Box sx={{ color: '#e2e8f0' }}>AI/ML Engineer · Full-Stack Developer · Cloud Architect</Box>
                                <Box sx={{ mt: 1 }}><span style={{ color: '#818cf8' }}>$ cat specialties.txt</span></Box>
                                <Box sx={{ color: '#34d399' }}>
                                    - Machine Learning & Deep Learning<br />
                                    - Agentic AI & Automation (N8N)<br />
                                    - AWS Cloud & MLOps<br />
                                    - Production Deployments
                                </Box>
                                <Box sx={{ mt: 1 }}><span style={{ color: '#818cf8' }}>$ status</span></Box>
                                <Box sx={{ color: '#fbbf24' }}>● Available for new projects</Box>
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

            {/* ===== ML SKILLS ===== */}
            <Box component="section" sx={{ position: 'relative', zIndex: 1, py: 8, px: 2 }}>
                <Box sx={{ maxWidth: 800, mx: 'auto', mb: 5, textAlign: 'center' }}>
                    <Typography sx={{ color: 'primary.main', fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.75rem', mb: 1 }}>
                        Core Expertise
                    </Typography>
                    <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }}>AI / ML Engineering <Box component="span" sx={{ background: 'linear-gradient(135deg,#818cf8,#f472b6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Skills</Box></Typography>
                </Box>
                <Card variant="outlined" sx={{
                    maxWidth: 800, mx: 'auto', borderRadius: 4,
                    bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(129,140,248,0.2)',
                    backdropFilter: 'blur(10px)', p: { xs: 2, md: 4 }
                }}>
                    <Stack spacing={3}>
                        {mlSkills.map((s, i) => (
                            <Box key={s.label}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
                                        {s.icon} {s.label}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 800, color: 'primary.main' }}>{s.value}%</Typography>
                                </Box>
                                <LinearProgress
                                    variant="determinate" value={s.value}
                                    sx={{
                                        height: 8, borderRadius: 4,
                                        bgcolor: 'rgba(255,255,255,0.08)',
                                        '& .MuiLinearProgress-bar': {
                                            borderRadius: 4,
                                            background: i % 2 === 0
                                                ? 'linear-gradient(90deg, #818cf8, #22d3ee)'
                                                : 'linear-gradient(90deg, #f472b6, #818cf8)'
                                        }
                                    }}
                                />
                            </Box>
                        ))}
                    </Stack>
                </Card>
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
                                        bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(8px)', textAlign: 'center', p: 3,
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            borderColor: 'primary.main',
                                            boxShadow: '0 12px 40px rgba(129,140,248,0.25)',
                                            bgcolor: 'rgba(129,140,248,0.08)'
                                        }
                                    }}>
                                        <Avatar src={tech.icon} alt={`${tech.name} — ${tech.desc}`} variant="rounded"
                                            sx={{ width: 64, height: 64, mx: 'auto', mb: 2, bgcolor: 'rgba(255,255,255,0.08)', p: 1 }} />
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
                            "The best AI is invisible — it quietly automates the mundane and amplifies human potential."
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
                                        bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)',
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
                                    bgcolor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.1)',
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
                            Ready to Build <Box component="span" sx={{ background: 'linear-gradient(135deg,#818cf8,#f472b6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Intelligent Systems?</Box>
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 4, fontSize: '1.05rem' }}>
                            Let's collaborate on your next AI, automation, or web project — I'm just a click away.
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
