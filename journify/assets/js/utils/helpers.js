function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
}

function generateRandomId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function getLocalStorageItem(key) {
    return JSON.parse(localStorage.getItem(key));
}

function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function removeLocalStorageItem(key) {
    localStorage.removeItem(key);
}

export {
    formatDate,
    generateRandomId,
    debounce,
    isValidEmail,
    getLocalStorageItem,
    setLocalStorageItem,
    removeLocalStorageItem
};