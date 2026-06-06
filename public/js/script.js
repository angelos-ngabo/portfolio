/**
 * Portfolio — vanilla JS
 * Nav, mobile menu, section highlighting, portfolio filter, scroll animations.
 */

(function () {
  'use strict';

  const header = document.getElementById('site-header');
  const hamburger = document.getElementById('menuToggle');
  const mainNav = document.getElementById('main-nav');
  const navLinks = document.querySelectorAll('.nav-link[data-section]');
  const fadeSections = document.querySelectorAll('.section-fade');
  const tabs = document.querySelectorAll('.portfolio-tabs .tab');
  const cards = document.querySelectorAll('.portfolio-card');
  const contactForm = document.getElementById('contact-form');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuClose = document.getElementById('menuClose');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-contact-btn');
  const mobileMq = window.matchMedia('(max-width: 768px)');

  const getTimeGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 4 && hour < 12) return 'Good morning, I am';
    if (hour >= 12 && hour < 18) return 'Good afternoon, I am';
    return 'Good evening, I am';
  };

  document.querySelectorAll('.greeting').forEach((el) => {
    el.textContent = getTimeGreeting();
  });

  const setMenuOpen = (open) => {
    if (!mobileMenu) return;
    mobileMenu.classList.toggle('open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    hamburger?.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) header?.classList.remove('nav-hidden');
  };

  const closeMenu = () => setMenuOpen(false);

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      setMenuOpen(!mobileMenu.classList.contains('open'));
    });

    menuClose?.addEventListener('click', closeMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    mobileMenu.querySelector('.mobile-menu-top .nav-logo')?.addEventListener('click', closeMenu);
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger?.setAttribute('aria-expanded', 'false');
      closeMenu();
    });
  });

  mobileMq.addEventListener('change', closeMenu);

  let lastScrollY = window.scrollY;
  let scrollUpTimer = null;
  const NAV_SCROLL_MIN = 80;
  const NAV_SCROLL_DELTA = 4;
  const NAV_SHOW_DELAY = 300;

  const showHeader = () => {
    header?.classList.remove('nav-hidden');
  };

  const onScroll = () => {
    const scrollY = window.scrollY;
    const menuOpen = mobileMenu?.classList.contains('open');

    header?.classList.toggle('scrolled-past-hero', scrollY > NAV_SCROLL_MIN);

    if (!header || menuOpen) {
      clearTimeout(scrollUpTimer);
      scrollUpTimer = null;
      showHeader();
      lastScrollY = scrollY;
      return;
    }

    if (scrollY <= NAV_SCROLL_MIN) {
      clearTimeout(scrollUpTimer);
      scrollUpTimer = null;
      showHeader();
      lastScrollY = scrollY;
      return;
    }

    if (scrollY > lastScrollY + NAV_SCROLL_DELTA) {
      clearTimeout(scrollUpTimer);
      scrollUpTimer = null;
      header.classList.add('nav-hidden');
    } else if (scrollY < lastScrollY - NAV_SCROLL_DELTA) {
      if (!scrollUpTimer) {
        scrollUpTimer = setTimeout(() => {
          showHeader();
          scrollUpTimer = null;
        }, NAV_SHOW_DELAY);
      }
    }

    lastScrollY = scrollY;
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const sectionIds = ['hero', 'about', 'skills', 'portfolio', 'contact'];

  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (!visible.length) return;

      const id = visible[0].target.id;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('data-section') === id);
      });
    },
    { rootMargin: '-35% 0px -55% 0px', threshold: [0, 0.15, 0.35] }
  );

  sectionIds.forEach((id) => {
    const el = document.getElementById(id);
    if (el) navObserver.observe(el);
  });

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
        card.classList.toggle('is-hidden', filter !== 'ALL' && !categories.includes(filter));
      });
    });
  });

  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.btn-submit');
    if (!btn) return;

    const original = btn.textContent;
    btn.textContent = 'Sent!';
    setTimeout(() => {
      btn.textContent = original;
      contactForm.reset();
    }, 2000);
  });
})();
