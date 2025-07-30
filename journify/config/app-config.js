const appConfig = {
    appName: "Journify",
    tagline: "Track how you feel. Transform how you live.",
    version: "1.0.0",
    apiUrl: "", // Placeholder for future API integration
    localStorageKey: "journifyData",
    moodOptions: [
        { value: "happy", color: "#4CAF50" }, // Green
        { value: "sad", color: "#2196F3" },   // Blue
        { value: "angry", color: "#F44336" }, // Red
        { value: "anxious", color: "#FF9800" }, // Orange
        { value: "calm", color: "#9C27B0" },   // Purple
        { value: "excited", color: "#FFEB3B" }, // Yellow
        { value: "neutral", color: "#9E9E9E" }  // Grey
    ],
    theme: {
        default: "light",
        dark: "dark",
        moodBased: true
    },
    analytics: {
        enabled: true,
        trackingId: "" // Placeholder for future analytics integration
    }
};

export default appConfig;