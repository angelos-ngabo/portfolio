/**
 * Portfolio — vanilla JS
 * - Sticky nav + mobile menu
 * - Active section highlighting (IntersectionObserver)
 * - Portfolio filter tabs
 * - Scroll fade-in animations
 * - Contact form (prevent default)
 */

(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const sections = document.querySelectorAll('section[id]');
  const fadeSections = document.querySelectorAll('.section-fade');
  const tabs = document.querySelectorAll('.portfolio-tabs .tab');
  const cards = document.querySelectorAll('.portfolio-card');
  const contactForm = document.getElementById('contact-form');

  /* ---------- Mobile navigation ---------- */
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-contact-btn');
  const mobileMq = window.matchMedia('(max-width: 768px)');

  const setMenuOpen = (open) => {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    if (hamburger) hamburger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  };

  const closeMenu = () => setMenuOpen(false);

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      if (mobileMq.matches) {
        setMenuOpen(!mobileMenu.classList.contains('open'));
        return;
      }
      if (!mainNav) return;
      const open = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', String(!open));
      mainNav.classList.toggle('is-open');
      document.body.style.overflow = open ? '' : 'hidden';
    });

    if (menuClose) menuClose.addEventListener('click', closeMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    const menuLogo = mobileMenu.querySelector('.mobile-menu-top .nav-logo');
    if (menuLogo) menuLogo.addEventListener('click', closeMenu);
  }

  if (navLinks.length && mainNav) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        hamburger?.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('is-open');
        closeMenu();
        document.body.style.overflow = '';
      });
    });
  }

  mobileMq.addEventListener('change', () => {
    closeMenu();
    mainNav?.classList.remove('is-open');
    document.body.style.overflow = '';
  });

  /* ---------- Header shadow on scroll ---------- */
  const hero = document.querySelector('.hero');
  const desktopMq = window.matchMedia('(min-width: 769px)');

  const onScroll = () => {
    if (header) {
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;
      const scrolled = desktopMq.matches ? window.scrollY > heroHeight - 80 : window.scrollY > 40;
      header.classList.toggle('is-scrolled', scrolled);
      header.classList.toggle('scrolled', scrolled);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Active nav link (IntersectionObserver) ---------- */
  const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      const id = visible[0].target.id;
      navLinks.forEach((link) => {
        const match = link.getAttribute('data-section') === id;
        link.classList.toggle('active', match);
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.15, 0.35] }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

  /* ---------- Section fade-in ---------- */
  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
  );

  fadeSections.forEach((section) => fadeObserver.observe(section));

  /* ---------- Portfolio filter ---------- */
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const filter = tab.getAttribute('data-filter');

      tabs.forEach((t) => {
        const active = t === tab;
        t.classList.toggle('active', active);
        t.setAttribute('aria-selected', String(active));
      });

      cards.forEach((card) => {
        const categories = (card.getAttribute('data-category') || '').split(' ');
        const show = filter === 'ALL' || categories.includes(filter);
        card.classList.toggle('is-hidden', !show);
      });
    });
  });

  /* ---------- Contact form ---------- */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('.btn-submit');
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Sent!';
        setTimeout(() => {
          btn.textContent = original;
          contactForm.reset();
        }, 2000);
      }
    });
  }

})();
