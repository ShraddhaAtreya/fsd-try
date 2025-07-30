// dataService.js

const dataService = (() => {
    const getUserData = () => {
        const userData = localStorage.getItem('user');
        return userData ? JSON.parse(userData) : null;
    };

    const saveUserData = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    };

    const getMoodEntries = () => {
        const moodEntries = localStorage.getItem('moodEntries');
        return moodEntries ? JSON.parse(moodEntries) : [];
    };

    const saveMoodEntry = (entry) => {
        const moodEntries = getMoodEntries();
        moodEntries.push(entry);
        localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
    };

    const deleteMoodEntry = (entryId) => {
        let moodEntries = getMoodEntries();
        moodEntries = moodEntries.filter(entry => entry.id !== entryId);
        localStorage.setItem('moodEntries', JSON.stringify(moodEntries));
    };

    const clearAllData = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('moodEntries');
    };

    return {
        getUserData,
        saveUserData,
        getMoodEntries,
        saveMoodEntry,
        deleteMoodEntry,
        clearAllData
    };
})();

export default dataService;