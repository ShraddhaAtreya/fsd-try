const sidebar = (() => {
    const sidebarElement = document.getElementById('sidebar');

    const moodButtons = [
        { mood: 'happy', color: 'green' },
        { mood: 'sad', color: 'blue' },
        { mood: 'angry', color: 'red' },
        { mood: 'anxious', color: 'orange' },
        { mood: 'calm', color: 'lightblue' },
        { mood: 'excited', color: 'yellow' },
        { mood: 'neutral', color: 'gray' },
    ];

    const renderMoodButtons = () => {
        moodButtons.forEach(({ mood, color }) => {
            const button = document.createElement('button');
            button.innerText = mood.charAt(0).toUpperCase() + mood.slice(1);
            button.className = `mood-button ${mood}`;
            button.style.backgroundColor = color;
            button.onclick = () => changeBackgroundColor(color);
            sidebarElement.appendChild(button);
        });
    };

    const changeBackgroundColor = (color) => {
        document.body.style.backgroundColor = color;
    };

    const init = () => {
        renderMoodButtons();
    };

    return {
        init,
    };
})();

document.addEventListener('DOMContentLoaded', sidebar.init);