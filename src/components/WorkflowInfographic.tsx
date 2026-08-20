import { Box, Typography } from '@mui/material';
import {
    Inbox, Search, MessagesSquare, Wrench, Camera, Compass, Code2,
    FlaskConical, GitBranch, Rocket, LineChart, Trophy
} from 'lucide-react';
import { useThemeMode } from '../theme/ThemeContext';

/**
 * n8n-style workflow infographic — 12-node approach.
 * 4-row serpentine: CSS grid, per-connector SVGs (no distortion), mobile-safe.
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
    { id: 'consult', title: 'Client Consultation', subtitle: 'Clarify & Align', icon: <MessagesSquare size={20} />, color: '#34d399' },
    { id: 'upgrade', title: 'Address Upgrade', subtitle: 'Scope & Solutions', icon: <Wrench size={20} />, color: '#f59e0b' },
    { id: 'document', title: 'Document Process', subtitle: 'Screenshots & Specs', icon: <Camera size={20} />, color: '#f472b6' },
    { id: 'design', title: 'System Design', subtitle: 'Architecture & Plan', icon: <Compass size={20} />, color: '#a78bfa' },
    { id: 'develop', title: 'Develop System', subtitle: 'Build & Engineer', icon: <Code2 size={20} />, color: '#818cf8' },
    { id: 'test', title: 'Test & Validate', subtitle: 'QA & Review', icon: <FlaskConical size={20} />, color: '#22d3ee' },
    { id: 'repo', title: 'Update Repo', subtitle: 'Commit & Push', icon: <GitBranch size={20} />, color: '#34d399' },
    { id: 'deploy', title: 'Deploy & Verify', subtitle: 'Ship to Production', icon: <Rocket size={20} />, color: '#f59e0b' },
    { id: 'monitor', title: 'Monitor & Optimize', subtitle: 'Performance & Scale', icon: <LineChart size={20} />, color: '#f472b6' },
    { id: 'deliver', title: 'Deliver Value', subtitle: 'Handoff & Growth', icon: <Trophy size={20} />, color: '#a78bfa' },
];

// Serpentine rows (display order left→right):
// Row 1: 1,2,3  |  Row 2: 6,5,4  |  Row 3: 7,8,9  |  Row 4: 12,11,10
const ROWS = [
    [0, 1, 2],
    [5, 4, 3],
    [6, 7, 8],
    [11, 10, 9],
];

// Vertical connectors: (topNodeIdx, bottomNodeIdx, which column: 'left'|'right', direction)
const VERTICALS: { top: number; bottom: number; col: 'left' | 'right'; dir: 'down' | 'up' }[] = [
    { top: 2, bottom: 3, col: 'right', dir: 'down' },    // 3 → 4
    { top: 5, bottom: 6, col: 'left', dir: 'down' },     // 6 → 7
    { top: 8, bottom: 9, col: 'right', dir: 'down' },    // 9 → 10
    { top: 11, bottom: 0, col: 'left', dir: 'up' },      // 12 → 1 (loop)
];

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

// Down arrow
const ArrowDown = ({ color }: { color: string }) => (
    <svg viewBox="0 0 24 60" style={{ width: 28, height: '100%', display: 'block', margin: '0 auto' }} aria-hidden="true">
        <line x1="12" y1="2" x2="12" y2="48" stroke={color} strokeWidth="2" />
        <path d="M6 44 L12 54 L18 44" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

// Up arrow (loop back)
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
            gap: 0.5, textAlign: 'center',
            height: '100%', minHeight: 88, py: 1.2, px: 1,
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
                fontSize: { xs: '0.56rem', sm: '0.64rem' }, fontWeight: 800,
                color: isLight ? '#1e293b' : '#f1f5f9', lineHeight: 1.15,
            }}>
                {node.title}
            </Typography>
            <Typography sx={{
                fontSize: { xs: '0.4rem', sm: '0.48rem' }, fontWeight: 600,
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

            {/* grid: 5 cols (3 nodes + 2 arrow lanes) x 7 rows (4 node rows + 3 connector rows) */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 40px 1fr 40px 1fr',
                gridTemplateRows: '1fr 32px 1fr 32px 1fr 32px 1fr',
                gap: 0.75,
                alignItems: 'stretch',
                mt: 4,
            }}>
                {/* node rows */}
                {ROWS.map((row, r) => (
                    row.map((idx, c) => (
                        <Box key={`n-${idx}`} sx={{ gridColumn: c * 2 + 1, gridRow: r * 2 + 1 }}>
                            <NodeCard node={NODES[idx]} />
                        </Box>
                    ))
                ))}

                {/* horizontal arrows — row 1 & 3 point right; row 2 & 4 point left (serpentine) */}
                {ROWS.map((row, r) => {
                    const dir = r % 2 === 0 ? 'right' : 'left';
                    return row.slice(0, 3).map((idx, c) => (
                        <Box key={`a-${r}-${c}`} sx={{ gridColumn: c * 2 + 2, gridRow: r * 2 + 1, display: 'flex', alignItems: 'center' }}>
                            {dir === 'right'
                                ? <ArrowRight color={NODES[idx].color} dashed={c % 2 === 1} />
                                : <ArrowLeft color={NODES[idx].color} dashed={c % 2 === 1} />}
                        </Box>
                    ));
                })}

                {/* vertical connectors */}
                {VERTICALS.map((v, i) => (
                    <Box key={`v-${i}`} sx={{
                        gridColumn: v.col === 'right' ? 5 : 1,
                        gridRow: v.top > v.bottom || v.dir === 'up' ? 2 : 6,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        {v.dir === 'down'
                            ? <ArrowDown color={NODES[v.top].color} />
                            : <ArrowUp color={NODES[v.top].color} />}
                    </Box>
                ))}
            </Box>

            {/* bottom status bar */}
            <Box sx={{
                mt: 2, px: 1.5, py: 0.75, borderRadius: 1.5,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 1,
                background: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(17,25,40,0.9)',
                border: `1px solid ${nodeBorder}`,
            }}>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: isLight ? '#64748b' : '#94a3b8', fontFamily: 'monospace' }}>
                    workflow: fde-delivery-v12
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#34d399' }} />
                    <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>
                        ● Success — 12/12 nodes executed
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkflowInfographic;
