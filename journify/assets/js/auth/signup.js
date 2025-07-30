// signup.js

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        errorMessage.textContent = '';

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        if (!validateEmail(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            return;
        }

        // Save user data to localStorage
        const userData = {
            email: email,
            password: password,
            createdAt: new Date().toISOString(),
        };

        localStorage.setItem('user', JSON.stringify(userData));

        // Redirect to onboarding page
        window.location.href = '/pages/onboarding/step1.html';
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});