import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls window to top on every route change.
 */
const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
        document.body.style.overflow = '';
    }, [pathname]);

    return null;
};

export default ScrollToTop;
