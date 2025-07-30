// calendar.js

document.addEventListener("DOMContentLoaded", function() {
    const moodButtons = document.querySelectorAll(".mood-button");
    const calendarGrid = document.querySelector(".calendar-grid");

    moodButtons.forEach(button => {
        button.addEventListener("click", function() {
            const moodColor = this.dataset.color;
            calendarGrid.style.backgroundColor = moodColor;
            updateMoodEntries(this.dataset.mood);
        });
    });

    function updateMoodEntries(mood) {
        // Logic to update mood entries in the calendar
        console.log(`Mood entry updated to: ${mood}`);
    }

    // Additional calendar functionalities can be added here
});