document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопки Sign Up и Sign In
    const buttons = document.querySelectorAll('[data-modal]');
    // Находим все крестики для закрытия окон
    const closeButtons = document.querySelectorAll('.modal-close');
    // Находим полупрозрачные фоны окон
    const overlays = document.querySelectorAll('.modal-overlay');

    // 1. Открытие нужного окна при клике на кнопки
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Защита от перезагрузки страницы
            const modalId = `modal-${btn.getAttribute('data-modal')}`;
            const targetModal = document.getElementById(modalId);
            
            if (targetModal) {
                targetModal.classList.add('active');
            }
        });
    });

    // 2. Закрытие окна при клике на крестик
    closeButtons.forEach(cross => {
        cross.addEventListener('click', () => {
            cross.closest('.modal-overlay').classList.remove('active');
        });
    });

    // 3. Закрытие окна при клике на темный фон вокруг окошка
    overlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    });
});