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
                    DEFAULT: '#4f46e5', // Deeper indigo for contrast
                    light: '#6366f1',
                },
                secondary: {
                    DEFAULT: '#db2777', // Deeper pink for contrast
                    light: '#ec4899',
                },
                light: {
                    DEFAULT: '#ffffff',
                    dark: '#f3f4f6',
                },
                dark: {
                    DEFAULT: '#111827',
                    light: '#374151',
                }
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
