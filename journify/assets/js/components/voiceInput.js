// voiceInput.js

const voiceInputButton = document.getElementById('voice-input-button');
const moodNoteInput = document.getElementById('mood-note-input');

if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = function() {
        voiceInputButton.classList.add('active');
    };

    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        moodNoteInput.value = transcript;
        voiceInputButton.classList.remove('active');
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
        voiceInputButton.classList.remove('active');
    };

    recognition.onend = function() {
        voiceInputButton.classList.remove('active');
    };

    voiceInputButton.addEventListener('click', function() {
        recognition.start();
    });
} else {
    console.warn('Speech recognition not supported in this browser.');
    voiceInputButton.disabled = true;
}