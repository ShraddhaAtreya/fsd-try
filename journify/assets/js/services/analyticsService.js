// analyticsService.js

const AnalyticsService = (() => {
    const moodEntries = [];

    const addMoodEntry = (entry) => {
        moodEntries.push(entry);
    };

    const calculateMoodTrends = () => {
        const moodCounts = {};
        moodEntries.forEach(entry => {
            moodCounts[entry.mood] = (moodCounts[entry.mood] || 0) + 1;
        });
        return moodCounts;
    };

    const getMoodDistribution = () => {
        const totalEntries = moodEntries.length;
        const moodCounts = calculateMoodTrends();
        const distribution = {};

        for (const mood in moodCounts) {
            distribution[mood] = (moodCounts[mood] / totalEntries) * 100;
        }

        return distribution;
    };

    const getStreakStatistics = () => {
        let currentStreak = 0;
        let longestStreak = 0;

        moodEntries.forEach((entry, index) => {
            if (index === 0 || entry.date - moodEntries[index - 1].date === 1) {
                currentStreak++;
            } else {
                currentStreak = 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        });

        return {
            currentStreak,
            longestStreak,
            totalEntries: moodEntries.length
        };
    };

    return {
        addMoodEntry,
        calculateMoodTrends,
        getMoodDistribution,
        getStreakStatistics
    };
})();

export default AnalyticsService;