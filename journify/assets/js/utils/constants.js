const MOODS = {
    HAPPY: { id: 1, label: 'Happy', color: '#4CAF50' }, // Green
    SAD: { id: 2, label: 'Sad', color: '#2196F3' }, // Blue
    ANGRY: { id: 3, label: 'Angry', color: '#F44336' }, // Red
    ANXIOUS: { id: 4, label: 'Anxious', color: '#FF9800' }, // Orange
    CALM: { id: 5, label: 'Calm', color: '#9C27B0' }, // Purple
    EXCITED: { id: 6, label: 'Excited', color: '#FFC107' }, // Yellow
    NEUTRAL: { id: 7, label: 'Neutral', color: '#9E9E9E' } // Grey
};

const API_URL = 'https://api.journify.com'; // Placeholder for future API integration

const LOCAL_STORAGE_KEYS = {
    USER: 'journify_user',
    MOOD_ENTRIES: 'journify_mood_entries',
    SETTINGS: 'journify_settings'
};

const DATE_FORMAT = 'YYYY-MM-DD'; // Format for date handling

export { MOODS, API_URL, LOCAL_STORAGE_KEYS, DATE_FORMAT };