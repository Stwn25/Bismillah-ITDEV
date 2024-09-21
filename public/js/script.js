const searchbt = document.querySelector('.bt-search');
const choosebt = document.querySelectorAll('.container-cs figure')

choosebt.forEach(button => {
    button.addEventListener('mousedown', () => {
        window.location.href = 'katalog.html';
    });
});

const headerlogo = document.querySelector('.logo-header');

headerlogo.addEventListener('mousedown', () => {
    window.location.href = 'index.html';
})