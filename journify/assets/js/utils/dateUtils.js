// Date handling utilities

// Get the current date in YYYY-MM-DD format
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Format a date to a readable string
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Calculate the difference in days between two dates
function dateDifference(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end - start;
    return Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days
}

// Check if a date is today
function isToday(date) {
    const today = new Date();
    const targetDate = new Date(date);
    return today.getFullYear() === targetDate.getFullYear() &&
           today.getMonth() === targetDate.getMonth() &&
           today.getDate() === targetDate.getDate();
}

// Exporting the utility functions
export { getCurrentDate, formatDate, dateDifference, isToday };