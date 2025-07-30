// Authentication logic for the Journify web application

// Function to handle user login
function loginUser(email, password) {
    // Simulate an API call to authenticate the user
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = '/pages/dashboard.html'; // Redirect to dashboard
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Function to handle user signup
function signupUser(email, password, name) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
        alert('User already exists. Please log in.');
    } else {
        const newUser = {
            id: Date.now(),
            email: email,
            password: password,
            name: name,
            createdAt: new Date().toISOString(),
            preferences: {
                theme: 'light',
                moodBasedTheme: false,
                notifications: true
            }
        };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Signup successful! You can now log in.');
        window.location.href = '/pages/login.html'; // Redirect to login
    }
}

// Function to handle user logout
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = '/pages/login.html'; // Redirect to login
}

// Function to check if user is authenticated
function isAuthenticated() {
    return localStorage.getItem('currentUser') !== null;
}

// Export functions for use in other modules
export { loginUser, signupUser, logoutUser, isAuthenticated };