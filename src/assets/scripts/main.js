/**
 * Import dependencies from node_modules
 * see commented examples below
 */
import * as bootstrap from 'bootstrap';
// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

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
  const colorInput = document.querySelector('#color-preferit');
  const page = document.querySelector('.page-inscripcio');

  if (page && colorInput) {
    colorInput.addEventListener('input', (e) => {
      console.log('color seleccionat:', e.target.value);
      page.style.setProperty('--gradient-start', e.target.value);
    });
  }
});

