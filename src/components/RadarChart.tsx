import { Box, Typography, useTheme } from '@mui/material';
import { useThemeMode } from '../theme/ThemeContext';

interface RadarSkill {
    label: string;
    value: number;
}

/**
 * Custom SVG radar (spider) chart — no chart library dependency.
 * Renders a pentagon grid with the skill polygon + labels.
 */
const RadarChart = ({ skills, size = 360 }: { skills: RadarSkill[]; size?: number }) => {
    const theme = useTheme();
    const { resolved } = useThemeMode();
    const isLight = resolved === 'light';

    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 62; // leave room for labels
    const n = skills.length;

    const point = (i: number, r: number) => {
        const angle = (Math.PI * 2 * i) / n - Math.PI / 2;
        return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
    };

    const polygon = (r: number) =>
        Array.from({ length: n }, (_, i) => point(i, r).join(',')).join(' ');

    // skill polygon
    const skillPolygon = skills
        .map((s, i) => point(i, (radius * s.value) / 100).join(','))
        .join(' ');

    const gridColor = isLight ? 'rgba(100,116,139,0.25)' : 'rgba(148,163,184,0.15)';
    const labelColor = isLight ? '#334155' : '#cbd5e1';

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label="FDE skill radar chart">
                {/* grid rings */}
                {[0.25, 0.5, 0.75, 1].map((f) => (
                    <polygon
                        key={f}
                        points={polygon(radius * f)}
                        fill="none"
                        stroke={gridColor}
                        strokeWidth={1}
                    />
                ))}
                {/* spokes */}
                {Array.from({ length: n }, (_, i) => {
                    const [x, y] = point(i, radius);
                    return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke={gridColor} strokeWidth={1} />;
                })}

                {/* skill polygon with glow */}
                <polygon
                    points={skillPolygon}
                    fill={isLight ? 'rgba(99,102,241,0.2)' : 'rgba(129,140,248,0.25)'}
                    stroke={isLight ? '#6366f1' : '#818cf8'}
                    strokeWidth={2.5}
                    strokeLinejoin="round"
                />
                {/* vertex dots */}
                {skills.map((s, i) => {
                    const [x, y] = point(i, (radius * s.value) / 100);
                    return (
                        <circle key={i} cx={x} cy={y} r={4.5}
                            fill={isLight ? '#6366f1' : '#818cf8'}
                            stroke={isLight ? '#ffffff' : '#0f172a'}
                            strokeWidth={2} />
                    );
                })}

                {/* labels */}
                {skills.map((s, i) => {
                    const [x, y] = point(i, radius + 34);
                    return (
                        <g key={i}>
                            <text
                                x={x} y={y - 8}
                                textAnchor="middle" dominantBaseline="middle"
                                fill={labelColor}
                                style={{ fontSize: 11, fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}
                            >
                                {s.label}
                            </text>
                            <text
                                x={x} y={y + 10}
                                textAnchor="middle" dominantBaseline="middle"
                                fill={isLight ? '#4f46e5' : '#818cf8'}
                                style={{ fontSize: 12, fontWeight: 800, fontFamily: 'Outfit, sans-serif' }}
                            >
                                {s.value}%
                            </text>
                        </g>
                    );
                })}
            </svg>
        </Box>
    );
};

export default RadarChart;
