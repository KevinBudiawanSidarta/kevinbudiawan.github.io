/* ==========================================================================
   Kevin Budiawan Sidarta — Portfolio scripts
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* Lucide icons */
  if (window.lucide) lucide.createIcons();

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.querySelector('.navtoggle');
  const navLinks = document.querySelector('.navlinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('is-open'));
    });
  }
  
  const marquee = document.querySelector(".marquee__track");

  if (marquee) {
      marquee.innerHTML += marquee.innerHTML;
  }

  /* ---- Mark active nav link ---- */
  const current = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.navlinks a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });

  /* ---- Navbar scroll state + lap-trace progress ---- */
  const navbar = document.querySelector('.navbar');
  const lapFill = document.querySelector('.lap-trace__fill');
  const backToTop = document.querySelector('.back-to-top');

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop;
    if (navbar) navbar.classList.toggle('is-scrolled', y > 8);
    if (backToTop) backToTop.classList.toggle('is-visible', y > 500);

    if (lapFill) {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docH > 0 ? (y / docH) * 100 : 0;
      lapFill.style.width = Math.min(100, Math.max(0, pct)) + '%';
    }
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => entry.target.classList.add('is-visible'), Number(delay));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---- Skill bar fill on reveal ---- */
  const bars = document.querySelectorAll('.bar__fill[data-level]');
  if ('IntersectionObserver' in window && bars.length) {
    const barIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.width = entry.target.getAttribute('data-level') + '%';
          barIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    bars.forEach(b => barIo.observe(b));
  } else {
    bars.forEach(b => b.style.width = b.getAttribute('data-level') + '%');
  }

  /* ---- Animated counters ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const countIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const decimals = (el.getAttribute('data-count').split('.')[1] || '').length;
        const suffix = el.getAttribute('data-suffix') || '';
        const duration = 1100;
        const start = performance.now();
        function tick(now) {
          const p = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          const val = (target * eased).toFixed(decimals);
          el.textContent = val + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countIo.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(c => countIo.observe(c));
  }

  /* ---- Footer year ---- */
  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

});
