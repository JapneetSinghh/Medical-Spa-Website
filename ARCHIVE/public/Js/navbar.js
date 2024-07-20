openBtn = document.querySelector('.openBtn');
closeBtn = document.querySelector('.closeBtn');

navbar = document.getElementById('navbar');

openBtn.addEventListener('click', () => {
    navbar.classList.toggle('openNavbar');
});
closeBtn.addEventListener('click', () => {
    navbar.classList.toggle('openNavbar');
});

document.querySelectorAll('*').forEach(el => {
    if (el.offsetWidth > document.documentElement.offsetWidth) {
        console.log('Found the worst element ever: ', el);
    }
  });