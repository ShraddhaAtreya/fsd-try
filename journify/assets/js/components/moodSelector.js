const moodOptions = [
    { id: 'happy', label: 'Happy', color: 'bg-green-500' },
    { id: 'sad', label: 'Sad', color: 'bg-blue-500' },
    { id: 'angry', label: 'Angry', color: 'bg-red-500' },
    { id: 'anxious', label: 'Anxious', color: 'bg-yellow-500' },
    { id: 'calm', label: 'Calm', color: 'bg-teal-500' },
    { id: 'excited', label: 'Excited', color: 'bg-purple-500' },
    { id: 'neutral', label: 'Neutral', color: 'bg-gray-500' },
];

const moodSelector = document.getElementById('mood-selector');
const moodDisplay = document.getElementById('mood-display');

moodOptions.forEach(mood => {
    const button = document.createElement('button');
    button.className = `mood-button ${mood.color} text-white p-2 rounded m-1`;
    button.innerText = mood.label;
    button.onclick = () => selectMood(mood);
    moodSelector.appendChild(button);
});

function selectMood(mood) {
    moodDisplay.innerText = `You selected: ${mood.label}`;
    document.body.className = mood.color; // Change background color based on mood
}