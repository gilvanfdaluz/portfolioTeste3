const suspended = document.querySelector('.suspended');
const nav = document.querySelector('.navigation');

suspended.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.addEventListener('click', () => {
    nav.classList.remove('open');
});