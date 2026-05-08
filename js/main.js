(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animFrame;
  let mouseX = 0;
  let mouseY = 0;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createStars() {
    const count = Math.floor((canvas.width * canvas.height) / 2200);
    stars = [];

    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2.2 + 0.4,
        baseAlpha: Math.random() * 0.6 + 0.3,
        alpha: Math.random() * 0.6 + 0.3,
        twinkleSpeed: Math.random() * 0.015 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
        hue: Math.random() < 0.08 ? 45 : Math.random() < 0.04 ? 170 : 220,
      });
    }
  }

  function drawStars(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const parallaxX = (mouseX - canvas.width / 2) * 0.008;
    const parallaxY = (mouseY - canvas.height / 2) * 0.008;

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      const twinkle = Math.sin(time * s.twinkleSpeed + s.twinkleOffset) * 0.3 + 0.7;
      const alpha = s.baseAlpha * twinkle;

      const sx = s.x + parallaxX * (s.radius / 2.5);
      const sy = s.y + parallaxY * (s.radius / 2.5);

      ctx.beginPath();
      ctx.arc(sx, sy, s.radius, 0, Math.PI * 2);

      const hue = s.hue === 45 ? `hsla(${s.hue}, 90%, 75%, ${alpha})`
        : s.hue === 170 ? `hsla(${s.hue}, 60%, 65%, ${alpha * 0.85})`
        : `hsla(${s.hue}, 30%, 85%, ${alpha})`;

      ctx.fillStyle = hue;
      ctx.fill();

      if (s.radius > 1.5 && alpha > 0.55) {
        ctx.beginPath();
        ctx.arc(sx, sy, s.radius * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = hue.replace(/[\d.]+\)$/, `${alpha * 0.08})`);
        ctx.fill();
      }
    }
  }

  function animate(time) {
    drawStars(time);
    animFrame = requestAnimationFrame(animate);
  }

  function onMouseMove(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }

  function onResize() {
    resize();
    createStars();
  }

  resize();
  createStars();
  animFrame = requestAnimationFrame(animate);

  window.addEventListener('resize', onResize);
  document.addEventListener('mousemove', onMouseMove);

  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

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

  const revealEls = document.querySelectorAll('.reveal');

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    for (let i = 0; i < revealEls.length; i++) {
      const el = revealEls[i];
      const top = el.getBoundingClientRect().top;
      if (top < windowHeight * 0.85) {
        el.classList.add('visible');
      }
    }
  }

  window.addEventListener('scroll', revealOnScroll, { passive: true });
  revealOnScroll();

  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent!';
      btn.style.background = '#4fd1c5';
      btn.style.color = '#05060f';
      btn.disabled = true;

      setTimeout(function () {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
        btn.disabled = false;
        contactForm.reset();
      }, 2500);
    });
  }
})();
