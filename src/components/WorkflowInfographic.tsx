import { Box, Typography, useTheme } from '@mui/material';
import {
    Inbox, Search, Wrench, Camera, Code2, GitBranch, Rocket, Trophy
} from 'lucide-react';
import { useThemeMode } from '../theme/ThemeContext';

/**
 * n8n-style workflow infographic — my FDE delivery approach.
 * Dot-grid canvas + colored nodes + bezier connectors, like the n8n editor.
 */

interface WorkflowNode {
    id: string;
    title: string;
    subtitle: string;
    icon: React.ReactNode;
    color: string;      // node accent color
    x: number;          // percent position (0-100)
    y: number;          // percent position (0-100)
}

const NODES: WorkflowNode[] = [
    { id: 'receive', title: 'Receive Document', subtitle: 'Project Intake', icon: <Inbox size={18} />, color: '#818cf8', x: 8, y: 30 },
    { id: 'analyze', title: 'Analyze Problem', subtitle: 'Requirements Deep-Dive', icon: <Search size={18} />, color: '#22d3ee', x: 27, y: 30 },
    { id: 'upgrade', title: 'Address Upgrade', subtitle: 'Scope & Solutions', icon: <Wrench size={18} />, color: '#34d399', x: 46, y: 30 },
    { id: 'document', title: 'Document Process', subtitle: 'Screenshots & Specs', icon: <Camera size={18} />, color: '#f59e0b', x: 65, y: 30 },
    { id: 'develop', title: 'Develop System', subtitle: 'Build & Engineer', icon: <Code2 size={18} />, color: '#f472b6', x: 84, y: 30 },
    { id: 'repo', title: 'Update Repo', subtitle: 'Commit & Push', icon: <GitBranch size={18} />, color: '#22d3ee', x: 84, y: 74 },
    { id: 'deploy', title: 'Deploy & Verify', subtitle: 'Ship to Production', icon: <Rocket size={18} />, color: '#f59e0b', x: 65, y: 74 },
    { id: 'deliver', title: 'Deliver Value', subtitle: 'Handoff & Growth', icon: <Trophy size={18} />, color: '#f472b6', x: 46, y: 74 },
];

// connection pairs (node id -> node id)
const CONNECTIONS: [string, string][] = [
    ['receive', 'analyze'],
    ['analyze', 'upgrade'],
    ['upgrade', 'document'],
    ['document', 'develop'],
    ['develop', 'repo'],
    ['repo', 'deploy'],
    ['deploy', 'deliver'],
    ['deliver', 'receive'],  // loop back — continuous improvement
];

const WorkflowInfographic = () => {
    const theme = useTheme();
    const { resolved } = useThemeMode();
    const isLight = resolved === 'light';

    const dotColor = isLight ? 'rgba(100,116,139,0.18)' : 'rgba(148,163,184,0.12)';
    const gridBg = isLight ? '#ffffff' : '#0b1220';
    const nodeBg = isLight ? 'rgba(255,255,255,0.92)' : 'rgba(17,25,40,0.92)';
    const nodeBorder = isLight ? 'rgba(15,23,42,0.12)' : 'rgba(148,163,184,0.2)';
    const textMain = isLight ? '#1e293b' : '#f1f5f9';
    const textSub = isLight ? '#64748b' : '#94a3b8';
    const lineColor = isLight ? 'rgba(99,102,241,0.5)' : 'rgba(129,140,248,0.55)';

    const nodeById = Object.fromEntries(NODES.map(n => [n.id, n]));

    return (
        <Box sx={{
            position: 'relative',
            borderRadius: 4,
            border: `1px solid ${nodeBorder}`,
            background: gridBg,
            backgroundImage: `radial-gradient(${dotColor} 1.2px, transparent 1.2px)`,
            backgroundSize: '22px 22px',
            overflow: 'hidden',
            p: 3,
        }}>
            {/* workflow title chip — n8n style "sticky" */}
            <Box sx={{
                position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)',
                zIndex: 5, px: 2.5, py: 0.75, borderRadius: 2,
                background: isLight ? 'rgba(255,255,255,0.95)' : 'rgba(17,25,40,0.95)',
                border: `1px solid ${nodeBorder}`, whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
            }}>
                <Typography sx={{ fontWeight: 800, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'primary.main' }}>
                    ⚡ My Delivery Workflow
                </Typography>
            </Box>

            {/* SVG connectors */}
            <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    pointerEvents: 'none', zIndex: 1,
                }}
                aria-hidden="true"
            >
                <defs>
                    <marker id="wf-arrow" markerWidth="5" markerHeight="5" refX="4.5" refY="2.5" orient="auto">
                        <path d="M0,0 L5,2.5 L0,5 Z" fill={lineColor} />
                    </marker>
                </defs>
                {CONNECTIONS.map(([fromId, toId], i) => {
                    const a = nodeById[fromId];
                    const b = nodeById[toId];
                    if (!a || !b) return null;
                    const x1 = a.x + 6, y1 = a.y + 7;
                    const x2 = b.x - 6, y2 = b.y + 7;
                    // cubic bezier — control points extend horizontally
                    const dx = Math.max(10, Math.abs(x2 - x1) * 0.6);
                    const dir = a.y === b.y ? (x2 > x1 ? 1 : -1) : 0;
                    const c1x = x1 + (a.y === b.y ? dx * dir : dx * 0.4);
                    const c1y = y1;
                    const c2x = x2 - (a.y === b.y ? dx * dir : dx * 0.4);
                    const c2y = y2;
                    return (
                        <path
                            key={i}
                            d={`M ${x1} ${y1} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${x2} ${y2}`}
                            fill="none"
                            stroke={lineColor}
                            strokeWidth={0.45}
                            strokeDasharray={i % 2 === 0 ? 'none' : '1.6 1.1'}
                            markerEnd="url(#wf-arrow)"
                            style={{ filter: `drop-shadow(0 0 2px ${lineColor})` }}
                        />
                    );
                })}
            </svg>

            {/* Nodes */}
            {NODES.map((node) => (
                <Box
                    key={node.id}
                    sx={{
                        position: 'absolute',
                        left: `calc(${node.x}% - 42px)`,
                        top: `calc(${node.y}% - 26px)`,
                        width: 84, minHeight: 52,
                        zIndex: 3,
                        display: 'flex', flexDirection: 'column',
                        alignItems: 'center', justifyContent: 'center',
                        gap: 0.4, textAlign: 'center',
                        background: nodeBg,
                        border: `1.5px solid ${node.color}`,
                        borderTop: `4px solid ${node.color}`,
                        borderRadius: 2.5,
                        boxShadow: `0 6px 20px -4px ${isLight ? 'rgba(15,23,42,0.25)' : 'rgba(0,0,0,0.6)'}`,
                        transition: 'transform 0.25s, box-shadow 0.25s',
                        cursor: 'default',
                        '&:hover': {
                            transform: 'translateY(-3px) scale(1.06)',
                            boxShadow: `0 10px 28px -4px ${node.color}66`,
                        },
                    }}
                >
                    <Box sx={{
                        color: node.color,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        {node.icon}
                    </Box>
                    <Typography sx={{
                        fontSize: '0.52rem', fontWeight: 800, color: textMain, lineHeight: 1.15,
                        letterSpacing: '0.02em',
                    }}>
                        {node.title}
                    </Typography>
                    <Typography sx={{
                        fontSize: '0.4rem', fontWeight: 600, color: textSub, lineHeight: 1.1,
                        letterSpacing: '0.03em',
                    }}>
                        {node.subtitle}
                    </Typography>
                </Box>
            ))}

            {/* bottom status bar — n8n execution style */}
            <Box sx={{
                position: 'absolute', bottom: 8, left: 12, right: 12, zIndex: 4,
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                px: 1.5, py: 0.5, borderRadius: 1.5,
                background: isLight ? 'rgba(255,255,255,0.9)' : 'rgba(17,25,40,0.9)',
                border: `1px solid ${nodeBorder}`,
            }}>
                <Typography sx={{ fontSize: '0.58rem', fontWeight: 700, color: textSub, fontFamily: 'monospace' }}>
                    workflow: fde-delivery-v2
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#34d399' }} />
                    <Typography sx={{ fontSize: '0.58rem', fontWeight: 700, color: '#34d399', fontFamily: 'monospace' }}>
                        ● Success — 8/8 nodes executed
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default WorkflowInfographic;
