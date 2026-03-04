/* =========================================================
   Yoga by Sofia — Main JS
   ========================================================= */

// ── Nav scroll behaviour ──────────────────────────────────
(function () {
  var nav = document.getElementById('main-nav');
  if (!nav) return;

  var hasHero = !!document.querySelector('.hero');

  if (hasHero) {
    function updateNav() {
      if (window.scrollY > 60) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();
  }
  // Inner pages already have class="scrolled" in HTML markup
})();

// ── Newsletter form feedback ──────────────────────────────
document.querySelectorAll('.newsletter-form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn   = form.querySelector('button');
    var input = form.querySelector('input');
    btn.textContent  = 'Subscribed ✓';
    btn.disabled     = true;
    input.value      = '';
    input.disabled   = true;
    setTimeout(function () {
      btn.textContent = 'Subscribe';
      btn.disabled    = false;
      input.disabled  = false;
    }, 4000);
  });
});

// ── Contact form feedback ─────────────────────────────────
(function () {
  var form = document.querySelector('.contact-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Message Sent ✓';
    btn.disabled    = true;
    setTimeout(function () {
      btn.textContent = 'Send Message';
      btn.disabled    = false;
      form.reset();
    }, 4000);
  });
})();

// ── Fade-in on scroll (Intersection Observer) ─────────────
(function () {
  if (!('IntersectionObserver' in window)) return;

  var targets = document.querySelectorAll(
    '.class-card, .about-image, .about-text, .contact-grid > *, .schedule-wrapper'
  );

  targets.forEach(function (el) { el.classList.add('fade-in-ready'); });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  targets.forEach(function (el) { observer.observe(el); });
})();
