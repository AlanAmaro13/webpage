(function () {
  'use strict';

  /* ===== Theme toggle (light/dark) ===== */
  var html = document.documentElement;
  var themeToggle = document.getElementById('themeToggle');

  function getPreferredTheme() {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  applyTheme(getPreferredTheme());

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }

  /* ===== Mobile navigation ===== */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('active');
      });
    });
  }

  /* ===== Scroll-reveal ===== */
  var revealEls = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    var windowHeight = window.innerHeight;
    for (var i = 0; i < revealEls.length; i++) {
      var el = revealEls[i];
      var top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.85) {
        el.classList.add('visible');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  /* ===== Contact form (opens email provider via mailto) ===== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (document.getElementById('name') || {}).value || '';
      var email = (document.getElementById('email') || {}).value || '';
      var message = (document.getElementById('message') || {}).value || '';

      var subject = encodeURIComponent('Portfolio contact from ' + name);
      var body = encodeURIComponent(
        'Name: ' + name + '\nEmail: ' + email + '\n\n' + message
      );

      window.location.href = 'mailto:alan@amarox.dev?subject=' + subject + '&body=' + body;
    });
  }

})();
