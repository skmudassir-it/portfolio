import { Box, Typography } from '@mui/material';
import {
    Inbox, Search, Wrench, Camera, Code2, GitBranch, Rocket, Trophy
} from 'lucide-react';
import { useThemeMode } from '../theme/ThemeContext';

/**
 * n8n-style workflow infographic — CSS grid layout, no absolute positioning,
 * per-connector SVGs (uniform scaling, no distortion). Mobile-safe.
 */

interface WorkflowNode {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;
}

const NODES: WorkflowNode[] = [
    { id: 'receive', title: 'Receive Document', subtitle: 'Project Intake', icon: <Inbox size={20} />, color: '#818cf8' },
    { id: 'analyze', title: 'Analyze Problem', subtitle: 'Requirements Deep-Dive', icon: <Search size={20} />, color: '#22d3ee' },
    { id: 'upgrade', title: 'Address Upgrade', subtitle: 'Scope & Solutions', icon: <Wrench size={20} />, color: '#34d399' },
    { id: 'document', title: 'Document Process', subtitle: 'Screenshots & Specs', icon: <Camera size={20} />, color: '#f59e0b' },
    { id: 'develop', title: 'Develop System', subtitle: 'Build & Engineer', icon: <Code2 size={20} />, color: '#f472b6' },
    { id: 'repo', title: 'Update Repo', subtitle: 'Commit & Push', icon: <GitBranch size={20} />, color: '#22d3ee' },
    { id: 'deploy', title: 'Deploy & Verify', subtitle: 'Ship to Production', icon: <Rocket size={20} />, color: '#f59e0b' },
    { id: 'deliver', title: 'Deliver Value', subtitle: 'Handoff & Growth', icon: <Trophy size={20} />, color: '#f472b6' },
];

// flow order: 0→1→2→3 (top L→R), 3→4 (down right), 4→5→6→7 (bottom R→L), 7→0 (loop left)
const TOP_ORDER = [0, 1, 2, 3];
const BOTTOM_ORDER = [7, 6, 5, 4];

// Right arrow connector (points right)
const ArrowRight = ({ color, dashed = false }: { color: string; dashed?: boolean }) => (
    <svg viewBox="0 0 60 24" style={{ width: '100%', height: 28, display: 'block' }} aria-hidden="true">
        <line x1="2" y1="12" x2="48" y2="12" stroke={color} strokeWidth="2"
            strokeDasharray={dashed ? '5 4' : 'none'} />
        <path d="M44 6 L54 12 L44 18" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Left arrow connector (points left)
const ArrowLeft = ({ color, dashed = false }: { color: string; dashed?: boolean }) => (
    <svg viewBox="0 0 60 24" style={{ width: '100%', height: 28, display: 'block' }} aria-hidden="true">
        <line x1="58" y1="12" x2="12" y2="12" stroke={color} strokeWidth="2"
            strokeDasharray={dashed ? '5 4' : 'none'} />
        <path d="M16 6 L6 12 L16 18" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Down arrow (from top row right node to bottom row right node)
const ArrowDown = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 60" style={{ width: 28, height: '100%', display: 'block', margin: '0 auto' }} aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="48" stroke={color} strokeWidth="2" />
        <path d="M6 44 L12 54 L18 44" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Up arrow (loop back, left side: bottom-left node up to top-left node)
const ArrowUp = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 60" style={{ width: 28, height: '100%', display: 'block', margin: '0 auto' }} aria-hidden="true">
        <line x1="12" y1="58" x2="12" y2="12" stroke={color} strokeWidth="2"
            strokeDasharray="5 4" />
        <path d="M6 16 L12 6 L18 16" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const NodeCard = ({ node }: { node: WorkflowNode }) => {
    const { resolved } = useThemeMode();
    const isLight = resolved === 'light';
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: 0.6, textAlign: 'center',
            height: '100%', minHeight: 96, py: 1.5, px: 1,
            background: isLight ? 'rgba(255,255,255,0.95)' : 'rgba(17,25,40,0.95)',
            border: `1.5px solid ${node.color}`,
            borderTop: `4px solid ${node.color}`,
            borderRadius: 3,
            boxShadow: isLight ? '0 6px 20px -4px rgba(15,23,42,0.25)' : '0 6px 20px -4px rgba(0,0,0,0.6)',
            transition: 'transform 0.25s, box-shadow 0.25s',
            '&:hover': {
                transform: 'translateY(-3px) scale(1.04)',
                boxShadow: `0 10px 28px -4px ${node.color}66`,
            },
        }}>
            <Box sx={{ color: node.color, display: 'flex' }}>{node.icon}</Box>
            <Typography sx={{
                fontSize: { xs: '0.58rem', sm: '0.66rem' }, fontWeight: 800,
                color: isLight ? '#1e293b' : '#f1f5f9', lineHeight: 1.15,
            }}>
                {node.title}
            </Typography>
            <Typography sx={{
                fontSize: { xs: '0.42rem', sm: '0.5rem' }, fontWeight: 600,
                color: isLight ? '#64748b' : '#94a3b8', lineHeight: 1.1,
            }}>
                {node.subtitle}
            </Typography>
        </Box>
    );
};

const WorkflowInfographic = () => {
    const { resolved } = useThemeMode();
    const isLight = resolved === 'light';

    const dotColor = isLight ? 'rgba(100,116,139,0.18)' : 'rgba(148,163,184,0.12)';
    const gridBg = isLight ? '#ffffff' : '#0b1220';
    const nodeBorder = isLight ? 'rgba(15,23,42,0.12)' : 'rgba(148,163,184,0.2)';
    const lineColor = isLight ? 'rgba(99,102,241,0.55)' : 'rgba(129,140,248,0.6)';

    return (
        <Box sx={{
            position: 'relative',
            borderRadius: 4,
            border: `1px solid ${nodeBorder}`,
            background: gridBg,
            backgroundImage: `radial-gradient(${dotColor} 1.2px, transparent 1.2px)`,
            backgroundSize: '22px 22px',
            overflow: 'hidden',
            p: { xs: 2, sm: 3 },
        }}>
            {/* workflow title chip */}
            <Box sx={{
                position: 'absolute', top: 12, left: '50%', transform: 'translateX(-50%)',
                zIndex: 5, px: 2.5, py: 0.75, borderRadius: 2,
                background: isLight ? 'rgba(255,255,255,0.95)' : 'rgba(17,25,40,0.95)',
                border: `1px solid ${nodeBorder}`, whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}>
                <Typography sx={{ fontWeight: 800, fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'primary.main' }}>
                    ⚡ My Delivery Workflow
                </Typography>
            </Box>

            {/* grid: 7 cols x 3 rows */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 44px 1fr 44px 1fr 44px 1fr',
                gridTemplateRows: '1fr 36px 1fr',
                gap: 1,
                alignItems: 'stretch',
                mt: 4,   // room for title chip
            }}>
                {/* Row 1 — top nodes with right arrows */}
                {TOP_ORDER.map((idx, i) => (
                    <Box key={`top-${idx}`} sx={{ gridColumn: i * 2 + 1, gridRow: 1 }}>
                        <NodeCard node={NODES[idx]} />
                    </Box>
                ))}
                {TOP_ORDER.slice(0, 3).map((idx, i) => (
                    <Box key={`tarrow-${i}`} sx={{ gridColumn: i * 2 + 2, gridRow: 1, display: 'flex', alignItems: 'center' }}>
                        <ArrowRight color={NODES[idx].color} dashed={i % 2 === 1} />
                    </Box>
                ))}

                {/* down connector — col 7, row 2 (4→5) */}
                <Box sx={{ gridColumn: 7, gridRow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowDown color={NODES[3].color} />
                </Box>

                {/* Row 3 — bottom nodes (reversed flow, left arrows) */}
                {BOTTOM_ORDER.map((idx, i) => (
                    <Box key={`bot-${idx}`} sx={{ gridColumn: i * 2 + 1, gridRow: 3 }}>
                        <NodeCard node={NODES[idx]} />
                    </Box>
                ))}
                {BOTTOM_ORDER.slice(0, 3).map((idx, i) => (
                    <Box key={`barr-${i}`} sx={{ gridColumn: i * 2 + 2, gridRow: 3, display: 'flex', alignItems: 'center' }}>
                        <ArrowLeft color={NODES[idx].color} dashed={i % 2 === 1} />
                    </Box>
                ))}

                {/* up connector (loop 8→1) — col 1, row 2 */}
                <Box sx={{ gridColumn: 1, gridRow: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUp color={NODES[7].color} />
                </Box>
            </Box>

            {/* bottom status bar */}
            <Box sx={{
                mt: 2, px: 1.5, py: 0.75, borderRadius: 1.5,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1,
                background: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(17,25,40,0.9)',
                border: `1px solid ${nodeBorder}`,
            }}>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: isLight ? '#64748b' : '#94a3b8', fontFamily: 'monospace' }}>
                    workflow: fde-delivery-v2
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#34d399' }} />
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>
                        ● Success — 8/8 nodes executed
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkflowInfographic;
