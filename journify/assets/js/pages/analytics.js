// analytics.js

document.addEventListener("DOMContentLoaded", function() {
    const moodData = JSON.parse(localStorage.getItem('moodEntries')) || [];
    const ctx = document.getElementById('moodTrendChart').getContext('2d');

    const moodCounts = {};
    moodData.forEach(entry => {
        const mood = entry.mood;
        moodCounts[mood] = (moodCounts[mood] || 0) + 1;
    });

    const labels = Object.keys(moodCounts);
    const data = Object.values(moodCounts);

    const moodTrendChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Mood Frequency',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const sentimentAnalysis = analyzeSentiment(moodData);
    displaySentimentAnalysis(sentimentAnalysis);
});

function analyzeSentiment(entries) {
    let positive = 0;
    let negative = 0;

    entries.forEach(entry => {
        const score = entry.sentimentScore;
        if (score > 0) {
            positive++;
        } else if (score < 0) {
            negative++;
        }
    });

    return {
        positive,
        negative,
        total: entries.length
    };
}

function displaySentimentAnalysis(sentiment) {
    const sentimentContainer = document.getElementById('sentimentAnalysis');
    sentimentContainer.innerHTML = `
        <p>Positive Entries: ${sentiment.positive}</p>
        <p>Negative Entries: ${sentiment.negative}</p>
        <p>Total Entries: ${sentiment.total}</p>
    `;
}