import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import './index.css'
import { ThemeProvider, useThemeMode } from './theme/ThemeContext'

// Dark AI/ML engineer theme
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#818cf8', dark: '#6366f1' },
        secondary: { main: '#f472b6', dark: '#ec4899' },
        background: {
            default: '#0f172a',
            paper: 'rgba(255,255,255,0.04)',
        },
        text: {
            primary: '#f1f5f9',
            secondary: '#94a3b8',
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
        h1: { fontWeight: 900 },
        h2: { fontWeight: 900 },
        h3: { fontWeight: 800 },
        h4: { fontWeight: 800 },
        h5: { fontWeight: 800 },
        h6: { fontWeight: 800 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
        MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
})

// Light theme — clean professional
const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: { main: '#6366f1', dark: '#4f46e5' },
        secondary: { main: '#db2777', dark: '#be185d' },
        background: {
            default: '#f8fafc',
            paper: '#ffffff',
        },
        text: {
            primary: '#1e293b',
            secondary: '#64748b',
        },
    },
    typography: {
        fontFamily: 'Outfit, sans-serif',
        h1: { fontWeight: 900 },
        h2: { fontWeight: 900 },
        h3: { fontWeight: 800 },
        h4: { fontWeight: 800 },
        h5: { fontWeight: 800 },
        h6: { fontWeight: 800 },
    },
    shape: { borderRadius: 12 },
    components: {
        MuiCard: { styleOverrides: { root: { backgroundImage: 'none' } } },
        MuiPaper: { styleOverrides: { root: { backgroundImage: 'none' } } },
    },
})

const ThemedApp = () => {
    const { resolved } = useThemeMode();
    return (
        <MuiThemeProvider theme={resolved === 'light' ? lightTheme : darkTheme}>
            <CssBaseline />
            <App />
        </MuiThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    </React.StrictMode>,
)
