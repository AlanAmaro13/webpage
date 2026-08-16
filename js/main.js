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

  /* ===== Contact form ===== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var btn = contactForm.querySelector('button[type="submit"]');
      var originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = originalText;
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }

  /* ===== Visitor counter ===== */
  var counterDisplay = document.getElementById('visitorCount');
  var counterWrapper = document.getElementById('visitorCounter');

  if (counterDisplay && counterWrapper) {
    var today = new Date().toISOString().slice(0, 10);
    var lastVisit = localStorage.getItem('lastVisitDate');
    var count = parseInt(localStorage.getItem('visitorCount'), 10) || 0;

    if (lastVisit !== today) {
      count += 1;
      localStorage.setItem('visitorCount', count);
      localStorage.setItem('lastVisitDate', today);
      counterWrapper.classList.add('pulse');
      setTimeout(function () {
        counterWrapper.classList.remove('pulse');
      }, 600);
    }

    counterDisplay.textContent = count.toLocaleString();
  }
})();
