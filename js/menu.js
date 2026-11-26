// Menú lateral en móvil y resaltado de la sección activa
const sidebar = document.getElementById('sidebar');
const btn = document.getElementById('menuBtn');
const enlaces = document.querySelectorAll('nav a');

btn.addEventListener('click', () => sidebar.classList.toggle('abierto'));
enlaces.forEach(a => a.addEventListener('click', () => sidebar.classList.remove('abierto')));

const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      enlaces.forEach(a => a.classList.toggle('activo', a.getAttribute('href') === '#' + e.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

document.querySelectorAll('main section').forEach(s => observador.observe(s));
