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
    'Custom CRM Builder',
    'No Monthly Fees. Ever.',
    'Your Business, Your System.',
    'Built in 2–4 Weeks'
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
    { left: '8%',  delay: '0s',   dur: '7s',   dx: '30px',  color: '#c9a240' },
    { left: '22%', delay: '1.2s', dur: '5.5s', dx: '-20px', color: '#c9a240' },
    { left: '38%', delay: '2.5s', dur: '8s',   dx: '15px',  color: '#c9a240' },
    { left: '58%', delay: '0.5s', dur: '6.5s', dx: '-35px', color: '#c9a240' },
    { left: '72%', delay: '1.8s', dur: '5s',   dx: '25px',  color: '#c9a240' },
    { left: '86%', delay: '3.2s', dur: '7.5s', dx: '-10px', color: '#c9a240' },
    { left: '50%', delay: '4s',   dur: '6s',   dx: '40px',  color: '#0d9488' },
    { left: '14%', delay: '2s',   dur: '9s',   dx: '-25px', color: '#0d9488' },
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
      heroSection.appendChild(el);
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

      const name    = form.name.value.trim();
      const email   = form.email.value.trim();
      const message = form.message.value.trim();

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
          body: JSON.stringify({ name, email, message })
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

  /* ---------- Scroll animations ---------- */
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function initScrollAnimations() {
    if (prefersReducedMotion) return;
    if (!('IntersectionObserver' in window)) return;

    const animObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-visible');
        } else {
          entry.target.classList.remove('scroll-visible');
        }
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.1 });

    document.querySelectorAll('[data-animate]').forEach(el => {
      el.classList.add('scroll-hidden');
      animObserver.observe(el);
    });
  }

  /* ---------- Scroll handler ---------- */
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  initScrollAnimations();

  /* ---------- FAQ accordion ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.closest('.faq-item').classList.remove('faq-open');
      });

      // Open clicked (unless it was already open)
      if (!isOpen) {
        btn.setAttribute('aria-expanded', 'true');
        item.classList.add('faq-open');
      }
    });
  });

  /* ---------- Feature tabs ---------- */
  const tabBtns = document.querySelectorAll('.crm-tab-btn');
  const tabPanels = document.querySelectorAll('.crm-tab-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      const panel = document.querySelector(`.crm-tab-panel[data-panel="${target}"]`);
      if (panel) panel.classList.add('active');

      document.dispatchEvent(new CustomEvent('crm-tab-change', { detail: { tab: target } }));
    });
  });

  // Jump-to-demo CTA: scroll to the tabs section (Lead Pipeline tab is active by default)
  const demoJumpBtn = document.getElementById('crm-demo-jump');
  if (demoJumpBtn) {
    demoJumpBtn.addEventListener('click', () => {
      document.getElementById('live-demo').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ---------- ROI Calculator ---------- */
  const roiInput = document.getElementById('roi-monthly');
  const roiBreakeven = document.getElementById('roi-breakeven');
  const roiSavings = document.getElementById('roi-savings');
  const roiCurrentDisplay = document.getElementById('roi-current-display');

  function updateROI() {
    if (!roiInput || !roiBreakeven || !roiSavings) return;
    const monthly = parseFloat(roiInput.value) || 0;
    const setup = 750;
    const ajMonthly = 250;
    const monthlySavings = monthly - ajMonthly;

    if (roiCurrentDisplay) roiCurrentDisplay.textContent = monthly.toFixed(0);

    if (monthlySavings <= 0) {
      roiBreakeven.textContent = 'N/A';
      roiSavings.textContent = '$0';
      return;
    }

    const breakeven = setup / monthlySavings;
    const threeYrCurrent = monthly * 36;
    const threeYrAJ = setup + (ajMonthly * 36);
    const savings = threeYrCurrent - threeYrAJ;

    roiBreakeven.textContent = breakeven.toFixed(1) + ' months';
    roiSavings.textContent = '$' + Math.round(savings).toLocaleString();
  }

  if (roiInput) {
    roiInput.addEventListener('input', updateROI);
    updateROI();
  }

  // Screenshot lightbox
  const lightbox = document.getElementById('crm-lightbox');
  const lightboxImg = document.getElementById('crm-lightbox-img');
  const lightboxClose = document.getElementById('crm-lightbox-close');

  document.querySelectorAll('.crm-screenshot-card').forEach(card => {
    card.addEventListener('click', () => {
      const img = card.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

  // Screenshot carousel
  const carouselTrack = document.getElementById('crm-carousel-track');
  const carouselDotsWrap = document.getElementById('crm-carousel-dots');
  const carouselPrev = document.getElementById('crm-carousel-prev');
  const carouselNext = document.getElementById('crm-carousel-next');

  if (carouselTrack && carouselDotsWrap) {
    const slides = Array.from(carouselTrack.children);

    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.className = 'crm-carousel-dot';
      dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
      dot.addEventListener('click', () => scrollToSlide(i));
      carouselDotsWrap.appendChild(dot);
    });
    const dots = Array.from(carouselDotsWrap.children);

    function activeIndex() {
      return Math.round(carouselTrack.scrollLeft / carouselTrack.clientWidth);
    }

    function updateDots() {
      const idx = Math.min(activeIndex(), dots.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }

    function scrollToSlide(i) {
      carouselTrack.scrollTo({ left: carouselTrack.clientWidth * i, behavior: 'smooth' });
    }

    carouselPrev.addEventListener('click', () => scrollToSlide(Math.max(activeIndex() - 1, 0)));
    carouselNext.addEventListener('click', () => scrollToSlide(Math.min(activeIndex() + 1, slides.length - 1)));

    carouselTrack.addEventListener('scroll', () => window.requestAnimationFrame(updateDots), { passive: true });
    window.addEventListener('resize', updateDots);
    updateDots();

    // Autoplay — pauses on hover/touch
    let autoplayTimer;
    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(() => scrollToSlide((activeIndex() + 1) % slides.length), 4500);
    }
    function stopAutoplay() { clearInterval(autoplayTimer); }

    const carouselViewport = carouselTrack.closest('.crm-carousel-viewport');
    carouselViewport.addEventListener('mouseenter', stopAutoplay);
    carouselViewport.addEventListener('mouseleave', startAutoplay);
    carouselViewport.addEventListener('touchstart', stopAutoplay, { passive: true });

    startAutoplay();
  }

  /* ---------- Live CRM Demo (Leads Kanban, Finance, Calendar & Tasks) ---------- */
  {
    const demoData     = window.CRM_DEMO_DATA;
    const demoLive     = document.getElementById('crm-live-announcer');
    const canHoverDrag = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    function el(tag, className, text) {
      const node = document.createElement(tag);
      if (className) node.className = className;
      if (text !== undefined) node.textContent = text;
      return node;
    }

    function announce(msg) {
      if (demoLive) demoLive.textContent = msg;
    }

    /* ===== Leads Kanban ===== */
    let leadsBoard, leadsDetail, openLeadId = null;

    function stageLabel(stageId) {
      const stage = demoData.stages.find(s => s.id === stageId);
      return stage ? stage.label : stageId;
    }

    function renderLeadsWidget(mount) {
      leadsBoard = el('div', 'crm-demo-board');
      leadsDetail = el('div', 'crm-demo-detail');
      leadsDetail.hidden = true;
      mount.append(leadsBoard, leadsDetail);
      renderDemoBoard();
    }

    function renderDemoBoard() {
      leadsBoard.textContent = '';
      demoData.stages.forEach(stage => {
        const col = el('div', 'crm-demo-column');

        const leadsInStage = demoData.leads.filter(l => l.stage === stage.id);
        const head = el('div', 'crm-demo-column-head');
        head.append(
          el('span', null, stage.label),
          el('span', 'crm-demo-column-count', String(leadsInStage.length))
        );
        col.appendChild(head);

        const cardsWrap = el('div', 'crm-demo-column-cards');
        cardsWrap.dataset.stage = stage.id;
        leadsInStage.forEach(lead => cardsWrap.appendChild(renderLeadCard(lead)));
        col.appendChild(cardsWrap);

        leadsBoard.appendChild(col);
      });
    }

    function renderLeadCard(lead) {
      const card = el('div', 'crm-demo-card');
      card.dataset.leadId = lead.id;
      card.setAttribute('role', 'group');
      card.setAttribute('tabindex', '0');
      card.setAttribute('aria-label', `${lead.name}, ${lead.company}, stage: ${stageLabel(lead.stage)}. Press Enter to view history.`);

      const info = el('div', 'crm-demo-card-info');
      info.append(
        el('span', 'crm-demo-card-name', lead.name),
        el('span', 'crm-demo-card-company', lead.company),
        el('span', 'crm-demo-card-value', '$' + lead.value.toLocaleString())
      );
      card.appendChild(info);

      const moveBtn = document.createElement('button');
      moveBtn.type = 'button';
      moveBtn.className = 'crm-demo-move-btn';
      moveBtn.textContent = 'Move ▾';
      moveBtn.setAttribute('aria-label', `Move ${lead.name} to a different stage`);
      moveBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMoveMenu(moveBtn, lead);
      });
      card.appendChild(moveBtn);

      card.addEventListener('click', () => openLeadDetail(lead.id));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openLeadDetail(lead.id);
        }
      });

      if (canHoverDrag) setupPointerDrag(card, lead);

      return card;
    }

    function toggleMoveMenu(moveBtn, lead) {
      const existing = leadsBoard.querySelector('.crm-demo-move-menu');
      const reopening = existing && existing.dataset.leadId === lead.id;
      if (existing) existing.remove();
      if (reopening) return;

      const menu = el('div', 'crm-demo-move-menu');
      menu.dataset.leadId = lead.id;
      demoData.stages.filter(s => s.id !== lead.stage).forEach(stage => {
        const item = document.createElement('button');
        item.type = 'button';
        item.textContent = stage.label;
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          moveLead(lead.id, stage.id);
          menu.remove();
        });
        menu.appendChild(item);
      });
      moveBtn.parentElement.appendChild(menu);

      function closeOnOutside(e) {
        if (!menu.contains(e.target) && e.target !== moveBtn) {
          menu.remove();
          document.removeEventListener('click', closeOnOutside);
        }
      }
      setTimeout(() => document.addEventListener('click', closeOnOutside), 0);
    }

    function moveLead(leadId, newStageId) {
      const lead = demoData.leads.find(l => l.id === leadId);
      if (!lead || lead.stage === newStageId) return;
      lead.stage = newStageId;
      renderDemoBoard();
      announce(`Moved ${lead.name} to ${stageLabel(newStageId)}.`);
      if (openLeadId === leadId) openLeadDetail(leadId);
    }

    function openLeadDetail(leadId) {
      const lead = demoData.leads.find(l => l.id === leadId);
      if (!lead) return;
      openLeadId = leadId;

      leadsDetail.textContent = '';

      const title = el('h4', 'crm-demo-detail-title', `${lead.name} — ${lead.company}`);
      const meta  = el('p', 'crm-demo-detail-meta',
        `${lead.phone} · ${lead.email} · $${lead.value.toLocaleString()} · ${stageLabel(lead.stage)}`);

      const historyList = el('ul', 'crm-demo-history-list');
      lead.history.slice().reverse().forEach(h => {
        const item = el('li', 'crm-demo-history-item');
        item.append(
          el('span', 'crm-demo-history-when', h.when),
          el('span', 'crm-demo-history-text', h.text)
        );
        historyList.appendChild(item);
      });

      const noteForm = document.createElement('form');
      noteForm.className = 'crm-demo-note-form';
      const noteInput = document.createElement('textarea');
      noteInput.placeholder = 'Add a note about this lead…';
      noteInput.rows = 2;
      noteInput.setAttribute('aria-label', 'Add a note');
      const noteSubmit = document.createElement('button');
      noteSubmit.type = 'submit';
      noteSubmit.textContent = 'Add Note';
      noteForm.append(noteInput, noteSubmit);
      noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = noteInput.value.trim();
        if (!text) return;
        addDemoNote(lead.id, text);
      });

      leadsDetail.append(title, meta, historyList, noteForm);
      leadsDetail.hidden = false;
    }

    function addDemoNote(leadId, text) {
      const lead = demoData.leads.find(l => l.id === leadId);
      if (!lead) return;
      lead.history.push({ type: 'note', when: 'just now', text });
      openLeadDetail(leadId);
      announce('Note added.');
    }

    function setupPointerDrag(card, lead) {
      card.addEventListener('pointerdown', (e) => {
        if (e.target.closest('.crm-demo-move-btn')) return;
        const startX = e.clientX;
        const startY = e.clientY;
        let dragging = false;
        card.setPointerCapture(e.pointerId);

        function onMove(ev) {
          const dx = ev.clientX - startX;
          const dy = ev.clientY - startY;
          if (!dragging && Math.hypot(dx, dy) > 6) {
            dragging = true;
            card.classList.add('dragging');
          }
          if (dragging) card.style.transform = `translate(${dx}px, ${dy}px)`;
        }

        function onUp(ev) {
          card.removeEventListener('pointermove', onMove);
          card.removeEventListener('pointerup', onUp);
          card.style.transform = '';
          card.classList.remove('dragging');

          if (dragging) {
            card.style.visibility = 'hidden';
            const dropEl = document.elementFromPoint(ev.clientX, ev.clientY);
            card.style.visibility = '';
            const column = dropEl && dropEl.closest('.crm-demo-column-cards');
            if (column) moveLead(lead.id, column.dataset.stage);
          }
        }

        card.addEventListener('pointermove', onMove);
        card.addEventListener('pointerup', onUp);
      });
    }

    /* ===== Finance (invoices) ===== */
    let financeSummary, financeList;

    function renderFinanceWidget(mount) {
      financeSummary = el('div', 'crm-finance-summary');
      financeList = el('div', 'crm-finance-list');
      mount.append(financeSummary, financeList);
      renderFinance();
    }

    function renderFinance() {
      const collected = demoData.invoices.filter(i => i.status === 'Paid').reduce((sum, i) => sum + i.amount, 0);
      const outstanding = demoData.invoices.filter(i => i.status !== 'Paid').reduce((sum, i) => sum + i.amount, 0);

      financeSummary.textContent = '';
      const collectedStat = el('div', 'crm-finance-stat');
      collectedStat.append(el('span', 'crm-finance-stat-label', 'Collected'), el('span', 'crm-finance-stat-value', '$' + collected.toLocaleString()));
      const outstandingStat = el('div', 'crm-finance-stat');
      outstandingStat.append(el('span', 'crm-finance-stat-label', 'Outstanding'), el('span', 'crm-finance-stat-value', '$' + outstanding.toLocaleString()));
      financeSummary.append(collectedStat, outstandingStat);

      financeList.textContent = '';
      demoData.invoices.forEach(inv => financeList.appendChild(renderInvoiceRow(inv)));
    }

    function renderInvoiceRow(inv) {
      const row = el('div', 'crm-invoice-row');

      const info = el('div', 'crm-invoice-info');
      info.append(
        el('span', 'crm-invoice-number', inv.number),
        el('span', 'crm-invoice-client', inv.client),
        el('span', 'crm-invoice-due', 'Due ' + inv.dueDate)
      );
      row.appendChild(info);

      row.appendChild(el('span', 'crm-invoice-amount', '$' + inv.amount.toLocaleString()));

      const badge = el('span', 'crm-invoice-badge crm-invoice-badge--' + inv.status.toLowerCase(), inv.status);
      row.appendChild(badge);

      if (inv.status !== 'Paid') {
        const payBtn = document.createElement('button');
        payBtn.type = 'button';
        payBtn.className = 'crm-invoice-pay-btn';
        payBtn.textContent = 'Mark Paid';
        payBtn.addEventListener('click', () => {
          inv.status = 'Paid';
          renderFinance();
          announce(`${inv.number} marked as paid.`);
        });
        row.appendChild(payBtn);
      } else {
        row.appendChild(el('span', 'crm-invoice-paid-spacer', ''));
      }

      return row;
    }

    /* ===== Calendar & Tasks ===== */
    let calendarDaysWrap, calendarEventsWrap, tasksWrap, activeDayId = null;

    function renderCalendarWidget(mount) {
      const calendarSection = el('div', 'crm-calendar-section');
      calendarDaysWrap = el('div', 'crm-calendar-days');
      calendarEventsWrap = el('div', 'crm-calendar-events');
      calendarSection.append(calendarDaysWrap, calendarEventsWrap);

      const tasksSection = el('div', 'crm-tasks-section');
      tasksSection.appendChild(el('p', 'crm-tasks-heading', 'Tasks'));
      tasksWrap = el('div', 'crm-tasks-list');
      tasksSection.appendChild(tasksWrap);

      mount.append(calendarSection, tasksSection);

      renderCalendarDays();
      selectDay(demoData.calendarDays[0].id);
      renderTasks();
    }

    function renderCalendarDays() {
      calendarDaysWrap.textContent = '';
      demoData.calendarDays.forEach(day => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'crm-calendar-day-btn' + (day.id === activeDayId ? ' active' : '');
        btn.dataset.dayId = day.id;
        btn.append(el('span', 'crm-calendar-day-label', day.label));
        if (day.events.length) btn.append(el('span', 'crm-calendar-day-dot', String(day.events.length)));
        btn.addEventListener('click', () => selectDay(day.id));
        calendarDaysWrap.appendChild(btn);
      });
    }

    function selectDay(dayId) {
      activeDayId = dayId;
      renderCalendarDays();

      const day = demoData.calendarDays.find(d => d.id === dayId);
      calendarEventsWrap.textContent = '';
      if (!day.events.length) {
        calendarEventsWrap.appendChild(el('p', 'crm-calendar-empty', 'No appointments scheduled.'));
        return;
      }
      day.events.forEach(ev => {
        const item = el('div', 'crm-calendar-event');
        item.append(el('span', 'crm-calendar-event-time', ev.time), el('span', 'crm-calendar-event-title', ev.title));
        calendarEventsWrap.appendChild(item);
      });
    }

    function renderTasks() {
      tasksWrap.textContent = '';
      demoData.tasks.forEach(task => tasksWrap.appendChild(renderTaskRow(task)));
    }

    function renderTaskRow(task) {
      const row = el('div', 'crm-task-row');
      const info = el('div', 'crm-task-info');
      info.append(el('span', 'crm-task-title', task.title), el('span', 'crm-task-assignee', task.assignee));
      row.appendChild(info);

      const statusBtn = document.createElement('button');
      statusBtn.type = 'button';
      statusBtn.className = 'crm-task-status crm-task-status--' + task.status.toLowerCase().replace(/\s+/g, '-');
      statusBtn.textContent = task.status;
      statusBtn.setAttribute('aria-label', `${task.title}, status ${task.status}. Click to advance.`);
      statusBtn.addEventListener('click', () => {
        const statuses = demoData.taskStatuses;
        const next = statuses[(statuses.indexOf(task.status) + 1) % statuses.length];
        task.status = next;
        renderTasks();
        announce(`${task.title} moved to ${next}.`);
      });
      row.appendChild(statusBtn);

      return row;
    }

    /* ===== Lazy render per tab ===== */
    const renderedWidgets = {};
    const widgetRenderers = {
      leads: () => renderLeadsWidget(document.getElementById('crm-live-leads')),
      finance: () => renderFinanceWidget(document.getElementById('crm-live-finance')),
      calendar: () => renderCalendarWidget(document.getElementById('crm-live-calendar'))
    };

    function ensureWidgetRendered(tab) {
      if (renderedWidgets[tab] || !widgetRenderers[tab]) return;
      const mount = document.getElementById('crm-live-' + tab);
      if (!mount || !demoData) return;
      widgetRenderers[tab]();
      renderedWidgets[tab] = true;
    }

    if (demoData) {
      ensureWidgetRendered('leads'); // active tab by default, visible on load
      document.addEventListener('crm-tab-change', (e) => ensureWidgetRendered(e.detail.tab));
    }
  }

})();
