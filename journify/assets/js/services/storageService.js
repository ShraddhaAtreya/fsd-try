// This file provides a wrapper for localStorage operations, allowing for easy data management.

const storageService = {
    // Save data to localStorage
    save(key, value) {
        try {
            const serializedValue = JSON.stringify(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error("Error saving to localStorage", error);
        }
    },

    // Load data from localStorage
    load(key) {
        try {
            const serializedValue = localStorage.getItem(key);
            return serializedValue ? JSON.parse(serializedValue) : null;
        } catch (error) {
            console.error("Error loading from localStorage", error);
            return null;
        }
    },

    // Remove data from localStorage
    remove(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error("Error removing from localStorage", error);
        }
    },

    // Clear all localStorage data
    clear() {
        try {
            localStorage.clear();
        } catch (error) {
            console.error("Error clearing localStorage", error);
        }
    }
};

export default storageService;