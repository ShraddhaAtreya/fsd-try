// sentimentService.js

const Sentiment = require('sentiment');

const sentimentAnalyzer = new Sentiment();

/**
 * Analyzes the sentiment of a given text.
 * @param {string} text - The text to analyze.
 * @returns {Object} - The sentiment analysis result.
 */
function analyzeSentiment(text) {
    const result = sentimentAnalyzer.analyze(text);
    return {
        score: result.score,
        comparative: result.comparative,
        words: result.words,
        positive: result.positive,
        negative: result.negative
    };
}

/**
 * Analyzes the sentiment of journal entries.
 * @param {Array} entries - An array of journal entries.
 * @returns {Array} - An array of sentiment analysis results for each entry.
 */
function analyzeEntries(entries) {
    return entries.map(entry => {
        return {
            entryId: entry.id,
            sentiment: analyzeSentiment(entry.journalEntry)
        };
    });
}

export { analyzeSentiment, analyzeEntries };