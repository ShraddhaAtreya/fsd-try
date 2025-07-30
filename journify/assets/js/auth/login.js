// login.js - Logic for the login page

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const email = emailInput.value;
        const password = passwordInput.value;

        if (validateInputs(email, password)) {
            try {
                const response = await authenticateUser(email, password);
                if (response.success) {
                    localStorage.setItem('user', JSON.stringify(response.user));
                    window.location.href = '/pages/dashboard.html';
                } else {
                    showError(response.message);
                }
            } catch (error) {
                showError('An error occurred. Please try again later.');
            }
        } else {
            showError('Please enter a valid email and password.');
        }
    });

    function validateInputs(email, password) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email) && password.length > 0;
    }

    async function authenticateUser(email, password) {
        // Simulate an API call for user authentication
        return new Promise((resolve) => {
            setTimeout(() => {
                if (email === 'test@example.com' && password === 'password') {
                    resolve({ success: true, user: { email } });
                } else {
                    resolve({ success: false, message: 'Invalid email or password.' });
                }
            }, 1000);
        });
    }

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('visible');
    }
});