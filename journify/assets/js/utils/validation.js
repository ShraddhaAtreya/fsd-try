function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6; // Minimum length of 6 characters
}

function validateRequiredField(value) {
    return value.trim() !== ''; // Field should not be empty
}

function validateMoodEntry(mood, moodNote) {
    return mood !== '' && validateRequiredField(moodNote);
}

function validateJournalEntry(wentWell, couldImprove, tomorrowGoal) {
    return validateRequiredField(wentWell) && validateRequiredField(couldImprove) && validateRequiredField(tomorrowGoal);
}

function validateForm(formData) {
    const { email, password, mood, moodNote, wentWell, couldImprove, tomorrowGoal } = formData;

    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);
    const moodEntryValid = validateMoodEntry(mood, moodNote);
    const journalEntryValid = validateJournalEntry(wentWell, couldImprove, tomorrowGoal);

    return {
        emailValid,
        passwordValid,
        moodEntryValid,
        journalEntryValid,
    };
}