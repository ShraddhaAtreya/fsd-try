const themeConfig = {
    themes: {
        light: {
            background: '#ffffff',
            text: '#000000',
            primary: '#4a90e2',
            secondary: '#50e3c2',
            accent: '#f5a623',
            moodColors: {
                happy: '#4caf50', // Green
                sad: '#2196f3',   // Blue
                angry: '#f44336', // Red
                anxious: '#ff9800', // Orange
                calm: '#8bc34a',  // Light Green
                excited: '#ffeb3b', // Yellow
                neutral: '#9e9e9e' // Grey
            }
        },
        dark: {
            background: '#121212',
            text: '#ffffff',
            primary: '#bb86fc',
            secondary: '#03dac6',
            accent: '#ffab40',
            moodColors: {
                happy: '#66bb6a', // Light Green
                sad: '#42a5f5',   // Light Blue
                angry: '#ef5350', // Light Red
                anxious: '#ffb74d', // Light Orange
                calm: '#a5d6a7',  // Light Green
                excited: '#ffd54f', // Light Yellow
                neutral: '#bdbdbd' // Light Grey
            }
        }
    },
    currentTheme: 'light', // Default theme
    setTheme(theme) {
        if (this.themes[theme]) {
            this.currentTheme = theme;
        }
    },
    getCurrentTheme() {
        return this.themes[this.currentTheme];
    }
};

export default themeConfig;