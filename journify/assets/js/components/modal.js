const modal = (() => {
    const modalElement = document.createElement('div');
    modalElement.classList.add('modal');
    modalElement.innerHTML = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <div class="modal-body">
                <!-- Content will be injected here -->
            </div>
        </div>
    `;

    const closeButton = modalElement.querySelector('.close-button');

    const openModal = (content) => {
        modalElement.querySelector('.modal-body').innerHTML = content;
        document.body.appendChild(modalElement);
        modalElement.style.display = 'block';
    };

    const closeModal = () => {
        modalElement.style.display = 'none';
        modalElement.remove();
    };

    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => {
        if (event.target === modalElement) {
            closeModal();
        }
    });

    return {
        open: openModal,
        close: closeModal
    };
})();

export default modal;