const menuTarget = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

menuTarget.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle('hidden');
});
