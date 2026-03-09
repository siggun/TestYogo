// Ember & Root — V2 — main.js

// Nav scroll state
const nav = document.querySelector('.site-nav');
if (nav) {
  const tick = () => nav.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', tick, { passive: true });
  tick();
}

// Mobile menu
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      document.body.style.overflow = '';
    })
  );
}
