// /journify/journify/assets/js/pages/journal.js

document.addEventListener("DOMContentLoaded", function() {
    const moodButtons = document.querySelectorAll(".mood-button");
    const moodNoteInput = document.getElementById("mood-note");
    const wentWellInput = document.getElementById("went-well");
    const couldImproveInput = document.getElementById("could-improve");
    const goalInput = document.getElementById("goal");
    const autoSaveInterval = 5000; // Auto-save every 5 seconds

    let currentMood = null;

    // Mood button click event
    moodButtons.forEach(button => {
        button.addEventListener("click", function() {
            currentMood = this.dataset.mood;
            document.body.style.backgroundColor = this.dataset.color; // Change background color
            moodNoteInput.focus();
        });
    });

    // Auto-save functionality
    setInterval(() => {
        if (currentMood) {
            saveEntry();
        }
    }, autoSaveInterval);

    // Save entry function
    function saveEntry() {
        const entry = {
            mood: currentMood,
            moodNote: moodNoteInput.value,
            journalEntry: {
                wentWell: wentWellInput.value,
                couldImprove: couldImproveInput.value,
                tomorrowGoal: goalInput.value
            },
            date: new Date().toISOString().split('T')[0]
        };

        localStorage.setItem(`journalEntry_${entry.date}`, JSON.stringify(entry));
        console.log("Entry saved:", entry);
    }

    // Load existing entry if available
    function loadEntry() {
        const date = new Date().toISOString().split('T')[0];
        const savedEntry = localStorage.getItem(`journalEntry_${date}`);
        if (savedEntry) {
            const entry = JSON.parse(savedEntry);
            currentMood = entry.mood;
            moodNoteInput.value = entry.moodNote;
            wentWellInput.value = entry.journalEntry.wentWell;
            couldImproveInput.value = entry.journalEntry.couldImprove;
            goalInput.value = entry.journalEntry.tomorrowGoal;
            document.body.style.backgroundColor = document.querySelector(`[data-mood="${currentMood}"]`).dataset.color; // Set background color
        }
    }

    loadEntry(); // Load entry on page load
});