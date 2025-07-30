// Main application controller for Journify Web Application

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // Set up routing based on the current URL
    setupRouting();

    // Initialize theme settings
    initializeTheme();

    // Add event listeners for mood buttons
    setupMoodButtons();
});

// Function to set up routing
function setupRouting() {
    const path = window.location.pathname;
    switch (path) {
        case '/':
        case '/index.html':
            loadPage('dashboard');
            break;
        case '/login.html':
            loadPage('login');
            break;
        case '/signup.html':
            loadPage('signup');
            break;
        case '/calendar.html':
            loadPage('calendar');
            break;
        case '/journal.html':
            loadPage('journal');
            break;
        case '/analytics.html':
            loadPage('analytics');
            break;
        case '/export.html':
            loadPage('export');
            break;
        case '/settings.html':
            loadPage('settings');
            break;
        default:
            loadPage('404'); // Handle 404 page
    }
}

// Function to load a specific page
function loadPage(page) {
    const pageScript = document.createElement('script');
    pageScript.src = `assets/js/pages/${page}.js`;
    document.body.appendChild(pageScript);
}

// Function to initialize theme settings
function initializeTheme() {
    const theme = localStorage.getItem('theme') || 'light';
    document.body.classList.add(theme);
}

// Function to set up mood button event listeners
function setupMoodButtons() {
    const moodButtons = document.querySelectorAll('.mood-button');
    moodButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const mood = event.target.dataset.mood;
            changeBackgroundColor(mood);
        });
    });
}

// Function to change background color based on mood
function changeBackgroundColor(mood) {
    const moodColors = {
        happy: '#a8e6cf',
        sad: '#dcedc1',
        angry: '#ff8b8b',
        anxious: '#ffab91',
        calm: '#ffe57f',
        excited: '#ffd740',
        neutral: '#e0e0e0'
    };
    document.body.style.backgroundColor = moodColors[mood] || '#ffffff';
}