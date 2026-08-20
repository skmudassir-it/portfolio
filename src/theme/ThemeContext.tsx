import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type ThemeMode = 'dark' | 'light' | 'system';

interface ThemeContextType {
    mode: ThemeMode;
    resolved: 'dark' | 'light';
    setMode: (m: ThemeMode) => void;
    cycleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    mode: 'dark',
    resolved: 'dark',
    setMode: () => { },
    cycleMode: () => { },
});

const STORAGE_KEY = 'portfolio-theme-mode';

const getSystem = (): 'dark' | 'light' =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>(() => {
        const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
        return (saved === 'light' || saved === 'dark' || saved === 'system') ? saved as ThemeMode : 'dark';
    });

    const [systemPref, setSystemPref] = useState<'dark' | 'light'>(getSystem);

    useEffect(() => {
        const mq = window.matchMedia('(prefers-color-scheme: light)');
        const handler = (e: MediaQueryListEvent) => setSystemPref(e.matches ? 'light' : 'dark');
        mq.addEventListener('change', handler);
        return () => mq.removeEventListener('change', handler);
    }, []);

    const resolved: 'dark' | 'light' = mode === 'system' ? systemPref : mode;

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, mode);
        document.documentElement.setAttribute('data-theme', resolved);
        document.body.classList.toggle('light-theme', resolved === 'light');
    }, [mode, resolved]);

    const cycleMode = () => {
        setMode(prev => prev === 'dark' ? 'light' : prev === 'light' ? 'system' : 'dark');
    };

    return (
        <ThemeContext.Provider value={{ mode, resolved, setMode, cycleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useThemeMode = () => useContext(ThemeContext);
