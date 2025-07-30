// /journify/journify/assets/js/pages/dashboard.js

document.addEventListener("DOMContentLoaded", function() {
    const moodButtons = document.querySelectorAll(".mood-button");
    const moodDisplay = document.getElementById("mood-display");

    moodButtons.forEach(button => {
        button.addEventListener("click", function() {
            const mood = this.dataset.mood;
            changeBackgroundColor(mood);
            saveMoodEntry(mood);
        });
    });

    function changeBackgroundColor(mood) {
        const moodColors = {
            happy: "#c6f6d5", // light green
            sad: "#bee3f8",   // light blue
            angry: "#fed7e2", // light red
            anxious: "#fefcbf", // light yellow
            calm: "#e6fffa",  // light cyan
            excited: "#fff5e1", // light orange
            neutral: "#edf2f7" // light gray
        };
        document.body.style.backgroundColor = moodColors[mood] || "#ffffff"; // default to white
    }

    function saveMoodEntry(mood) {
        const moodEntry = {
            mood: mood,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem("moodEntry", JSON.stringify(moodEntry));
        displayMoodEntry(moodEntry);
    }

    function displayMoodEntry(entry) {
        moodDisplay.innerText = `You are feeling: ${entry.mood}`;
    }

    // Load existing mood entry on page load
    const existingEntry = localStorage.getItem("moodEntry");
    if (existingEntry) {
        const entry = JSON.parse(existingEntry);
        displayMoodEntry(entry);
        changeBackgroundColor(entry.mood);
    }
});