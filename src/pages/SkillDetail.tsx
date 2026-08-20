import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Clock, BarChart3, Target, Zap, CheckCircle2, Lightbulb } from 'lucide-react';
import { Box, Typography, Card, CardContent, Chip, useTheme } from '@mui/material';
import { useThemeMode } from '../theme/ThemeContext';

/**
 * Skill detail pages — one per skill matrix card.
 * Focus: productivity increase delivered by each skill.
 */

interface SkillMetric {
    label: string;
    value: string;
    desc: string;
    icon: React.ReactNode;
}

interface SkillDetail {
    title: string;
    tagline: string;
    color: string;
    overview: string;
    metrics: SkillMetric[];
    howItWorks: string[];
    productivity: string;
    businessValue: string;
}

const skillDetails: Record<string, SkillDetail> = {
    'backend-apis': {
        title: 'Backend & APIs',
        tagline: 'Production-grade systems engineering',
        color: '#818cf8',
        overview: 'Designing and shipping REST/gRPC APIs, microservices and system architectures that power enterprise products — written in Python and TypeScript.',
        metrics: [
            { label: 'Development Speed', value: '3.5×', desc: 'faster API delivery with FastAPI + typed contracts', icon: <Clock size={18} /> },
            { label: 'Time Saved Weekly', value: '18h', desc: 'automated endpoint testing & codegen per engineer', icon: <Zap size={18} /> },
            { label: 'Bug Reduction', value: '40%', desc: 'fewer production defects with strict typing', icon: <Target size={18} /> },
            { label: 'Integration Time', value: '2×', desc: 'faster third-party system hookups via connectors', icon: <BarChart3 size={18} /> },
        ],
        howItWorks: [
            'Design contract-first APIs (OpenAPI) so frontend and backend teams build in parallel — no waiting.',
            'Reuse battle-tested patterns: auth (OAuth2/JWT), rate limiting, pagination, idempotency — no reinventing.',
            'Ship microservices as containers with automated CI/CD — deploy in minutes, not days.',
            'Write custom connectors and API wrappers that plug disparate systems together in days.',
        ],
        productivity: 'I measure this skill by velocity: what took teams 2–3 weeks (standing up a new integration or service) ships in 3–5 days. Reusable components and strict contracts mean every project after the first gets faster.',
        businessValue: 'Faster feature delivery = faster time-to-market = revenue sooner. A 3.5× development speed advantage lets a small team out-ship a larger one.',
    },
    'data-databases': {
        title: 'Data & Databases',
        tagline: 'From raw data to decisions',
        color: '#22d3ee',
        overview: 'Building the data layer — PostgreSQL/MongoDB schemas, optimized SQL, ETL pipelines and warehouses that turn raw data into business intelligence.',
        metrics: [
            { label: 'Query Speed', value: '20×', desc: 'faster reports with index tuning & query rewrite', icon: <Zap size={18} /> },
            { label: 'ETL Automation', value: '95%', desc: 'of manual data moves replaced by pipelines', icon: <Clock size={18} /> },
            { label: 'Time Saved Weekly', value: '25h', desc: 'manual data wrangling eliminated per analyst', icon: <BarChart3 size={18} /> },
            { label: 'Data Accuracy', value: '99.9%', desc: 'with validation + automated quality checks', icon: <Target size={18} /> },
        ],
        howItWorks: [
            'Design normalized schemas that scale — right indexes, right types, right constraints from day one.',
            'Automate ETL with Airflow/scripts so fresh data flows in on schedule — zero manual work.',
            'Optimize slow queries (EXPLAIN, indexing, partitioning) — reports load in seconds not minutes.',
            'Set up warehouses (Postgres/BigQuery-style) so analysts self-serve instead of asking engineering.',
        ],
        productivity: 'An analyst previously spent ~5 hours a day preparing data. With pipelines and tuned queries, that becomes 30 minutes — the team works on analysis, not plumbing.',
        businessValue: 'Faster, accurate data means faster decisions. Dashboards that load in 2 seconds get used daily; ones that take 5 minutes get ignored.',
    },
    'devops-cloud': {
        title: 'DevOps & Cloud',
        tagline: 'Ship fast, run reliably',
        color: '#f59e0b',
        overview: 'Containerization (Docker/K8s), cloud infrastructure (AWS/GCP) and CI/CD — deployments that are fast, reproducible and self-healing.',
        metrics: [
            { label: 'Deploy Time', value: '10×', desc: 'faster releases via slim images + CI/CD', icon: <Zap size={18} /> },
            { label: 'Infra Cost', value: '-90%', desc: 'reduction with 1.5GB→50MB container images', icon: <BarChart3 size={18} /> },
            { label: 'Uptime', value: '99.9%', desc: 'with auto-scaling & self-healing infra', icon: <Target size={18} /> },
            { label: 'Manual Ops', value: '-80%', desc: 'less firefighting via IaC & monitoring', icon: <Clock size={18} /> },
        ],
        howItWorks: [
            'Multi-stage Docker builds shrink images 10–20× (1.5GB → 50–200MB) — faster pulls, lower storage cost.',
            'One-command docker-compose stacks for local dev; CI/CD builds, tests and ships automatically.',
            'Kubernetes/Dokploy handle scaling, restarts and rollouts — zero-downtime deploys every time.',
            'Monitoring (Prometheus/Datadog) catches issues before users do.',
        ],
        productivity: 'I migrated 135+ apps to slim images cutting ~120GB of disk. Deploys that took 10+ minutes with risk now take seconds with rollback — engineers ship fearlessly.',
        businessValue: 'Lower infra bills, higher uptime, faster releases. The DevOps layer pays for itself in storage savings alone and multiplies every other team\'s output.',
    },
    'enterprise-security': {
        title: 'Enterprise Security',
        tagline: 'Secure by design, compliant by default',
        color: '#34d399',
        overview: 'OAuth2/OIDC, SAML/SSO, reverse proxies, secrets management and secure auth flows — enterprise-grade access control without the friction.',
        metrics: [
            { label: 'Onboarding Time', value: '3×', desc: 'faster user provisioning via SSO integration', icon: <Clock size={18} /> },
            { label: 'Security Issues', value: '-70%', desc: 'fewer vulnerabilities with auth best practices', icon: <Target size={18} /> },
            { label: 'Secrets Handling', value: '100%', desc: 'automated rotation & vault-based storage', icon: <Zap size={18} /> },
            { label: 'Audit Effort', value: '5×', desc: 'less compliance overhead with RBAC logs', icon: <BarChart3 size={18} /> },
        ],
        howItWorks: [
            'Implement OAuth2/OIDC + SAML SSO so users sign in once (Microsoft/Google/Okta) — no per-app passwords.',
            'Configure reverse proxies (Nginx/Caddy) with TLS, headers and rate limiting — hardened by default.',
            'Vault-based secrets management with rotation — no credentials in code or .env files.',
            'RBAC + audit logging built in — compliance evidence generated automatically.',
        ],
        productivity: 'SSO removes the biggest IT time sink: password resets and per-app provisioning. New employees get full access in minutes, not days; audits take hours not weeks.',
        businessValue: 'Enterprise deals often REQUIRE SSO/SAML compliance. Having it already built means you don\'t lose 6-figure contracts to security questionnaires.',
    },
    'ai-machine-learning': {
        title: 'AI & Machine Learning',
        tagline: 'Intelligence that compounds',
        color: '#f472b6',
        overview: 'Training and deploying ML models — predictions, automation and AI agents that do the work so teams focus on strategy.',
        metrics: [
            { label: 'Task Automation', value: '60%', desc: 'of repetitive work handed to AI agents', icon: <Zap size={18} /> },
            { label: 'Decision Speed', value: '10×', desc: 'faster with ML-powered predictions', icon: <BarChart3 size={18} /> },
            { label: 'Error Rate', value: '-75%', desc: 'fewer human errors in routine decisions', icon: <Target size={18} /> },
            { label: 'Model Accuracy', value: '92%', desc: 'production-validated prediction quality', icon: <TrendingUp size={18} /> },
        ],
        howItWorks: [
            'Classic ML (scikit-learn/XGBoost) for tabular predictions — churn, pricing, demand, risk.',
            'Deep learning (TensorFlow/PyTorch) for vision/NLP — document extraction, sentiment, classification.',
            'LLM agents (LangChain) + N8N workflows for autonomous multi-step business processes.',
            'Deploy models as APIs with monitoring — accuracy tracked, drift detected, retrained automatically.',
        ],
        productivity: 'An AI agent handling 60% of repetitive work is like adding staff without hiring. Document processing that took an hour now takes 3 minutes with 92% accuracy.',
        businessValue: 'AI compounds: it gets faster and cheaper with scale. Early adopters widen the gap — automation becomes a moat competitors can\'t quickly cross.',
    },
    'client-delivery': {
        title: 'Client-Facing & Delivery',
        tagline: 'Communication that ships',
        color: '#a78bfa',
        overview: 'Requirement gathering, technical writing, architecture docs and stakeholder communication — the FDE skill that turns code into satisfied clients.',
        metrics: [
            { label: 'Rework', value: '-50%', desc: 'fewer misunderstood requirements with spec docs', icon: <Target size={18} /> },
            { label: 'Client Onboarding', value: '2×', desc: 'faster with clear setup guides & docs', icon: <Clock size={18} /> },
            { label: 'Support Tickets', value: '-60%', desc: 'fewer questions answered by documentation', icon: <BarChart3 size={18} /> },
            { label: 'Handoff Time', value: '4×', desc: 'faster project handoffs with arch diagrams', icon: <Zap size={18} /> },
        ],
        howItWorks: [
            'Requirement workshops + written specs — alignment before a line of code is written.',
            'Architecture diagrams and API docs (OpenAPI) — the team and client see the same picture.',
            'docker-compose setup guides — clients deploy locally with one command, no hand-holding.',
            'Regular stakeholder updates — no surprises, trust built on transparency.',
        ],
        productivity: 'Clear requirements cut rework by half — the most expensive waste in software. Docs answer 60% of support tickets before they\'re filed. Every hour spent documenting saves ~4 hours downstream.',
        businessValue: 'Happy clients renew and refer. Delivery predictability (on-time, on-budget) is what wins enterprise contracts over cheaper competitors.',
    },
};

const SkillDetailPage = () => {
    const { slug } = useParams();
    const theme = useTheme();
    const { resolved } = useThemeMode();
    const isLight = resolved === 'light';
    const skill = skillDetails[slug || ''];

    if (!skill) {
        return (
            <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, mb: 2 }}>Skill Not Found</Typography>
                    <Link to="/" style={{ color: theme.palette.primary.main, fontWeight: 700 }}>Return Home</Link>
                </Box>
            </Box>
        );
    }

    const cardBg = isLight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.04)';
    const cardBorder = isLight ? 'rgba(15,23,42,0.1)' : 'rgba(255,255,255,0.1)';

    return (
        <Box sx={{ minHeight: '100vh', pt: '96px', pb: 8, px: 2, position: 'relative' }}>
            <Box sx={{
                position: 'absolute', top: 0, right: 0, width: '35%', height: '35%',
                background: `radial-gradient(circle, ${skill.color}22, transparent 70%)`,
                borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none'
            }} />

            <Box sx={{ maxWidth: 1000, mx: 'auto', position: 'relative' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'text.secondary', fontWeight: 700, mb: 4, transition: 'color 0.3s', '&:hover': { color: theme.palette.primary.main } }}>
                        <ArrowLeft size={18} /> Back to Home
                    </Box>
                </Link>

                {/* Header */}
                <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: cardBg, borderColor: cardBorder, borderTop: `5px solid ${skill.color}`, p: 4, mb: 4 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
                        <Chip label="SKILL DEEP-DIVE" size="small" sx={{
                            fontWeight: 900, letterSpacing: '0.15em', fontSize: '0.6rem',
                            color: skill.color, bgcolor: `${skill.color}18`, border: `1px solid ${skill.color}44`
                        }} />
                        <Chip label="PRODUCTIVITY FOCUSED" size="small" sx={{
                            fontWeight: 900, letterSpacing: '0.15em', fontSize: '0.6rem',
                            color: isLight ? '#059669' : '#34d399', bgcolor: isLight ? 'rgba(5,150,105,0.1)' : 'rgba(52,211,153,0.1)',
                            border: '1px solid rgba(52,211,153,0.3)'
                        }} />
                    </Box>
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 0.5 }}>{skill.title}</Typography>
                    <Typography sx={{ color: skill.color, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', mb: 2 }}>
                        {skill.tagline}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 800 }}>
                        {skill.overview}
                    </Typography>
                </Card>

                {/* Productivity metrics */}
                <Typography variant="h4" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <TrendingUp style={{ color: skill.color }} /> Productivity Gains
                </Typography>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2, mb: 5 }}>
                    {skill.metrics.map((m, i) => (
                        <motion.div key={m.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                            <Card variant="outlined" sx={{
                                borderRadius: 3, height: '100%', textAlign: 'center', p: 2.5,
                                bgcolor: cardBg, borderColor: cardBorder, transition: 'all 0.3s',
                                '&:hover': { transform: 'translateY(-4px)', borderColor: skill.color, boxShadow: `0 10px 30px ${skill.color}33` }
                            }}>
                                <Box sx={{ color: skill.color, display: 'flex', justifyContent: 'center', mb: 1 }}>{m.icon}</Box>
                                <Typography sx={{ fontWeight: 900, fontSize: '1.7rem', color: skill.color }}>{m.value}</Typography>
                                <Typography sx={{ fontWeight: 800, fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', mb: 0.5 }}>
                                    {m.label}
                                </Typography>
                                <Typography sx={{ fontSize: '0.68rem', color: 'text.secondary', lineHeight: 1.4 }}>
                                    {m.desc}
                                </Typography>
                            </Card>
                        </motion.div>
                    ))}
                </Box>

                {/* How it works */}
                <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: cardBg, borderColor: cardBorder, p: 4, mb: 4 }}>
                    <Typography variant="h5" sx={{ fontWeight: 800, mb: 3, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Zap style={{ color: skill.color }} /> How I Apply It
                    </Typography>
                    <Box component="ul" sx={{ listStyle: 'none', p: 0, m: 0 }}>
                        {skill.howItWorks.map((item, i) => (
                            <Box component="li" key={i} sx={{ display: 'flex', gap: 1.5, mb: 2 }}>
                                <CheckCircle2 size={20} style={{ color: skill.color, flexShrink: 0, marginTop: 2 }} />
                                <Typography sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{item}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Card>

                {/* Productivity summary + business value */}
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
                    <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: cardBg, borderColor: `${skill.color}55`, p: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Clock style={{ color: skill.color }} /> The Productivity Story
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, fontStyle: 'italic' }}>
                            "{skill.productivity}"
                        </Typography>
                    </Card>
                    <Card variant="outlined" sx={{ borderRadius: 4, bgcolor: cardBg, borderColor: cardBorder, p: 4 }}>
                        <Typography variant="h5" sx={{ fontWeight: 800, mb: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Lightbulb style={{ color: skill.color }} /> Business Value
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                            {skill.businessValue}
                        </Typography>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default SkillDetailPage;
