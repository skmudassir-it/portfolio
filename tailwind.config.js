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
                    DEFAULT: '#6366f1', // Indigo (Modern & Professional)
                    dark: '#4f46e5',
                },
                secondary: {
                    DEFAULT: '#db2777', // Pink/Rose (Vibrant Accent)
                    dark: '#be185d',
                },
                accent: {
                    DEFAULT: '#8b5cf6', // Violet
                    light: '#a78bfa',
                },
                surface: {
                    DEFAULT: '#ffffff',
                    dark: '#0f172a', // Slate 900
                },
                light: {
                    DEFAULT: '#f8fafc', // Slate 50
                    dark: '#f1f5f9', // Slate 100
                },
                dark: {
                    DEFAULT: '#1e293b', // Slate 800
                    light: '#334155', // Slate 700
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
            backgroundImage: {
                'premium-gradient': 'linear-gradient(135deg, #6366f1 0%, #db2777 100%)',
                'soft-gradient': 'linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(219, 39, 119, 0.05) 100%)',
            },
        },
    },
    plugins: [],
}
