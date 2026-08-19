/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#818cf8', // Indigo-400 (softer on dark)
                    dark: '#6366f1',
                },
                secondary: {
                    DEFAULT: '#f472b6', // Pink-400
                    dark: '#ec4899',
                },
                accent: {
                    DEFAULT: '#22d3ee', // Cyan-400 (fresh accent)
                    light: '#67e8f9',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    dark: '#020617', // Slate 950 (deep bg)
                },
                light: {
                    DEFAULT: '#0f172a', // Slate 900 (page bg)
                    dark: '#1e293b', // Slate 800 (cards)
                },
                dark: {
                    DEFAULT: '#f1f5f9', // Slate 100 (text on dark)
                    light: '#cbd5e1', // Slate 300 (muted text)
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'premium-gradient': 'linear-gradient(135deg, #818cf8 0%, #f472b6 50%, #22d3ee 100%)',
                'soft-gradient': 'linear-gradient(135deg, rgba(129, 140, 248, 0.08) 0%, rgba(244, 114, 182, 0.08) 50%, rgba(34, 211, 238, 0.08) 100%)',
                'dark-grid': 'linear-gradient(rgba(148, 163, 184, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
            },
            backgroundSize: {
                'grid': '48px 48px',
            },
            boxShadow: {
                'glow': '0 0 40px -8px rgba(129, 140, 248, 0.4)',
                'glow-pink': '0 0 40px -8px rgba(244, 114, 182, 0.4)',
                'card': '0 8px 32px -6px rgba(2, 6, 23, 0.6)',
            },
        },
    },
    plugins: [],
}
