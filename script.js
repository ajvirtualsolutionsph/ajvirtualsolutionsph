/* ============================================================
   AJ Virtual Solutions — Portfolio Script
   - Smooth scroll
   - Active nav link via IntersectionObserver
   - Mobile hamburger menu
   - Contact form feedback
   - Footer year
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Hero: typewriter + dots ---------- */
  const roles = [
    'AI Automation Specialist',
    'Bookkeeper',
    'Admin Assistant',
    'Virtual Professional'
  ];
  let roleIndex = 0, charIndex = 0, deleting = false;
  const roleEl = document.getElementById('role-text');

  function updateDot(index) {
    document.querySelectorAll('.dot').forEach((d, i) => {
      d.classList.toggle('active', i === index);
    });
  }

  function type() {
    if (!roleEl) return;
    const word = roles[roleIndex];
    if (!deleting) {
      roleEl.textContent = word.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(type, 1600);
        return;
      }
    } else {
      roleEl.textContent = word.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        updateDot(roleIndex);
        setTimeout(type, 300);
        return;
      }
    }
    setTimeout(type, deleting ? 55 : 90);
  }

  if (roleEl) type();

  /* ---------- Hero: floating particles ---------- */
  const heroSection = document.getElementById('hero');
  const particleData = [
    { left: '10%', delay: '0s',   dur: '7s',   dx: '30px',  color: '#c9a240' },
    { left: '25%', delay: '1.2s', dur: '5.5s', dx: '-20px', color: '#c9a240' },
    { left: '40%', delay: '2.5s', dur: '8s',   dx: '15px',  color: '#c9a240' },
    { left: '60%', delay: '0.5s', dur: '6.5s', dx: '-35px', color: '#c9a240' },
    { left: '75%', delay: '1.8s', dur: '5s',   dx: '25px',  color: '#c9a240' },
    { left: '88%', delay: '3.2s', dur: '7.5s', dx: '-10px', color: '#c9a240' },
    { left: '50%', delay: '4s',   dur: '6s',   dx: '40px',  color: '#0d9488' },
    { left: '15%', delay: '2s',   dur: '9s',   dx: '-25px', color: '#0d9488' },
  ];
  if (heroSection) {
    particleData.forEach(p => {
      const el = document.createElement('div');
      el.className = 'particle';
      el.style.cssText = [
        `left:${p.left}`,
        `animation-delay:${p.delay}`,
        `animation-duration:${p.dur}`,
        `--dx:${p.dx}`,
        `background:${p.color}`,
        'bottom:-10px',
      ].join(';');
      heroSection.insertBefore(el, heroSection.firstChild);
    });
  }

  /* ---------- Hamburger menu ---------- */
  const header   = document.getElementById('site-header');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  function closeMenu() {
    header.classList.remove('nav-open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    header.classList.add('nav-open');
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
  }

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const isOpen = header.classList.contains('nav-open');
      isOpen ? closeMenu() : openMenu();
    });
  }

  // Close menu when a nav link is clicked
  if (navLinks) {
    navLinks.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (header.classList.contains('nav-open') &&
        !header.contains(e.target)) {
      closeMenu();
    }
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('nav-open')) {
      closeMenu();
      hamburger.focus();
    }
  });

  /* ---------- Active nav link via IntersectionObserver ---------- */
  const sections   = document.querySelectorAll('section[id]');
  const navLinkEls = document.querySelectorAll('.nav-link');

  function setActive(id) {
    navLinkEls.forEach(link => {
      const href = link.getAttribute('href');
      if (href === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );

    sections.forEach(section => observer.observe(section));
  }

  /* ---------- Smooth scroll (fallback for older browsers) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;

      // CSS scroll-behavior handles modern browsers; this is a fallback
      if (!CSS.supports('scroll-behavior', 'smooth')) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---------- Demo booking form ---------- */
  const form       = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name                 = form.name.value.trim();
      const email                = form.email.value.trim();
      const message              = form.message.value.trim();
      const serviceInterest      = form.serviceInterest.value.trim();
      const preferredContactTime = form.preferredContactTime.value.trim();

      if (!name || !email || !message) {
        showStatus('Please fill in your name, email, and message.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';

      try {
        const response = await fetch('/api/submit-demo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, message, serviceInterest, preferredContactTime })
        });

        const data = await response.json();

        if (response.ok && data.success) {
          showStatus("Thanks! I'll be in touch shortly to confirm your demo time.", 'success');
          form.reset();
        } else {
          showStatus(data.error || 'Something went wrong. Please try again.', 'error');
        }
      } catch (err) {
        showStatus('Network error. Please check your connection and try again.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Book My Free Demo Call';
      }
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showStatus(message, type) {
    if (!formStatus) return;
    formStatus.textContent = message;
    formStatus.style.color = type === 'success'
      ? 'var(--color-accent)'
      : '#f87171';
    setTimeout(() => {
      formStatus.textContent = '';
    }, 5000);
  }

  /* ---------- Sticky nav shadow on scroll ---------- */
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      header.style.background = 'rgba(10, 46, 44, 0.97)';
    } else {
      header.style.background = 'rgba(10, 46, 44, 0.92)';
    }
  }, { passive: true });

  /* ---------- Scroll animations ---------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initScrollAnimations() {
    if (prefersReducedMotion) return;
    if (!('IntersectionObserver' in window)) return;

    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
          animObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('scroll-hidden');
      animObserver.observe(el);
    });
  }

  function initProjectsTilt() {
    if (prefersReducedMotion) return;
    const grid = document.querySelector('.projects-3d-wrap');
    if (!grid) return;

    window.addEventListener('scroll', () => {
      const rect = grid.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / vh));
      const angle = 18 * (1 - progress);
      grid.style.transform = `perspective(1000px) rotateX(${angle}deg)`;
    }, { passive: true });
  }

  initScrollAnimations();
  initProjectsTilt();

})();
