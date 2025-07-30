// Streak Counter Component Logic

class StreakCounter {
    constructor() {
        this.streakElement = document.getElementById('streak-counter');
        this.currentStreak = 0;
        this.longestStreak = 0;
        this.loadStreakData();
        this.updateStreakDisplay();
    }

    loadStreakData() {
        const streakData = JSON.parse(localStorage.getItem('streakData')) || {};
        this.currentStreak = streakData.currentStreak || 0;
        this.longestStreak = streakData.longestStreak || 0;
    }

    incrementStreak() {
        this.currentStreak++;
        if (this.currentStreak > this.longestStreak) {
            this.longestStreak = this.currentStreak;
        }
        this.saveStreakData();
        this.updateStreakDisplay();
    }

    resetStreak() {
        this.currentStreak = 0;
        this.saveStreakData();
        this.updateStreakDisplay();
    }

    saveStreakData() {
        const streakData = {
            currentStreak: this.currentStreak,
            longestStreak: this.longestStreak
        };
        localStorage.setItem('streakData', JSON.stringify(streakData));
    }

    updateStreakDisplay() {
        this.streakElement.innerHTML = `
            <p>Current Streak: ${this.currentStreak} days</p>
            <p>Longest Streak: ${this.longestStreak} days</p>
        `;
    }
}

// Initialize Streak Counter
document.addEventListener('DOMContentLoaded', () => {
    const streakCounter = new StreakCounter();
    // Example usage: Call incrementStreak() when a mood entry is successfully saved
    // streakCounter.incrementStreak();
});