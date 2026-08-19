import { useEffect, useRef } from 'react';

/**
 * Animated neural network background — lightweight canvas particle network
 * Nodes pulse with data flow along connections, AI/ML theme.
 */
const NeuralNetwork = ({ opacity = 0.55, color = '#818cf8' }: { opacity?: number; color?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let raf: number;
        let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
        const CONNECT_DIST = 140;
        const NODE_COUNT = 55;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // init nodes
        const init = () => {
            nodes = Array.from({ length: NODE_COUNT }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 1.8 + 0.8,
            }));
        };
        init();

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // connections
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const dist = Math.hypot(dx, dy);
                    if (dist < CONNECT_DIST) {
                        const alpha = (1 - dist / CONNECT_DIST) * opacity * 0.5;
                        ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
                        ctx.lineWidth = 0.6;
                        ctx.beginPath();
                        ctx.moveTo(nodes[i].x, nodes[i].y);
                        ctx.lineTo(nodes[j].x, nodes[j].y);
                        ctx.stroke();
                    }
                }
            }

            // nodes
            for (const n of nodes) {
                n.x += n.vx;
                n.y += n.vy;
                if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
                if (n.y < 0 || n.y > canvas.height) n.vy *= -1;

                const pulse = 0.5 + 0.5 * Math.sin(Date.now() / 600 + n.x / 40);
                const a = 0.35 + pulse * 0.5;
                const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 3);
                g.addColorStop(0, `rgba(129, 140, 248, ${a})`);
                g.addColorStop(1, 'rgba(129, 140, 248, 0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
                ctx.fill();
            }
            raf = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', resize);
        };
    }, [opacity, color]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            aria-hidden="true"
        />
    );
};

export default NeuralNetwork;
