/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import '@fortawesome/fontawesome-free/css/all.css';
import 'swiper/swiper.css';
import 'swiper/modules/navigation.css';
import 'swiper/modules/pagination.css';
import * as bootstrap from 'bootstrap';
import Lenis from 'lenis';
import Swiper from 'swiper';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import * as CookieConsent from 'vanilla-cookieconsent';
import { config as cookieConfig } from './cookieconsent-config.js';
import Swal from 'sweetalert2';

// Inicialitza el banner de cookies amb la configuració definida
CookieConsent.run(cookieConfig);


//Configuració lenis
const lenis = new Lenis();
lenis.on('scroll', () => { });
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



const currentPath = window.location.pathname;

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  const linkPath = new URL(link.href, window.location.origin).pathname;

  if (linkPath === currentPath) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  } else {
    link.classList.remove('active');
    link.removeAttribute('aria-current');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.ponents-swiper')) {
    new Swiper('.ponents-swiper', {
      modules: [Navigation, Pagination, A11y],
      slidesPerView: 1,
      spaceBetween: 32,
      breakpoints: {
        576: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      a11y: true,
    });
  }

  document.querySelectorAll('.form-check__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      Swal.fire({
        title: link.dataset.title,
        text: link.dataset.text,
        icon: link.dataset.icon ?? 'info',
        confirmButtonText: 'Tancar',
      });
    });
  });

  const colorInput = document.querySelector('#color-preferit');
  const page = document.querySelector('.page-inscripcio');

  if (page && colorInput) {
    colorInput.addEventListener('input', (e) => {
      console.log('color seleccionat:', e.target.value);
      page.style.setProperty('--gradient-start', e.target.value);
    });
  }
});

