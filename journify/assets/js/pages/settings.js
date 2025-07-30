// settings.js

document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const moodSelect = document.getElementById("mood-select");
    const settingsForm = document.getElementById("settings-form");

    // Load user preferences from localStorage
    const userPreferences = JSON.parse(localStorage.getItem("userPreferences")) || {
        theme: "light",
        moodBasedTheme: false,
        notifications: true,
    };

    // Apply saved theme
    applyTheme(userPreferences.theme);

    // Set initial values in the form
    themeToggle.checked = userPreferences.theme === "dark";
    moodSelect.checked = userPreferences.moodBasedTheme;

    // Event listener for theme toggle
    themeToggle.addEventListener("change", (event) => {
        const newTheme = event.target.checked ? "dark" : "light";
        applyTheme(newTheme);
        saveUserPreferences({ ...userPreferences, theme: newTheme });
    });

    // Event listener for mood-based theming
    moodSelect.addEventListener("change", (event) => {
        const moodBased = event.target.checked;
        saveUserPreferences({ ...userPreferences, moodBasedTheme: moodBased });
        applyMoodBasedTheme(moodBased);
    });

    // Save settings form
    settingsForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const notifications = settingsForm.notifications.checked;
        saveUserPreferences({ ...userPreferences, notifications });
        alert("Settings saved successfully!");
    });

    function applyTheme(theme) {
        document.body.classList.toggle("dark-theme", theme === "dark");
    }

    function applyMoodBasedTheme(isEnabled) {
        if (isEnabled) {
            // Logic to change theme based on selected mood
            const mood = getCurrentMood(); // Assume this function retrieves the current mood
            document.body.style.backgroundColor = getMoodColor(mood);
        } else {
            document.body.style.backgroundColor = ""; // Reset to default
        }
    }

    function saveUserPreferences(preferences) {
        localStorage.setItem("userPreferences", JSON.stringify(preferences));
    }

    function getMoodColor(mood) {
        const moodColors = {
            happy: "lightgreen",
            sad: "lightblue",
            angry: "lightcoral",
            anxious: "lightyellow",
            calm: "lightgray",
            excited: "lightpink",
            neutral: "white",
        };
        return moodColors[mood] || "white";
    }

    function getCurrentMood() {
        // Placeholder function to get the current mood
        return "happy"; // Default mood for demonstration
    }
});