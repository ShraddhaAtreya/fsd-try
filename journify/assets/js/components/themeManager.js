// themeManager.js

const ThemeManager = (() => {
    const themes = {
        light: {
            background: '#ffffff',
            color: '#000000',
        },
        dark: {
            background: '#000000',
            color: '#ffffff',
        },
        happy: {
            background: '#d4edda',
            color: '#155724',
        },
        sad: {
            background: '#cce5ff',
            color: '#004085',
        },
        angry: {
            background: '#f8d7da',
            color: '#721c24',
        },
        anxious: {
            background: '#fff3cd',
            color: '#856404',
        },
        calm: {
            background: '#e2e3e5',
            color: '#383d41',
        },
        excited: {
            background: '#d1ecf1',
            color: '#0c5460',
        },
        neutral: {
            background: '#fefefe',
            color: '#6c757d',
        },
    };

    const setTheme = (theme) => {
        if (themes[theme]) {
            document.body.style.backgroundColor = themes[theme].background;
            document.body.style.color = themes[theme].color;
            localStorage.setItem('theme', theme);
        }
    };

    const loadTheme = () => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    };

    return {
        setTheme,
        loadTheme,
    };
})();

document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.loadTheme();
});