/* ============================================================
   nav.js — Header, burger menu, language toggle
   ============================================================ */
(function () {
    'use strict';

    /* ── Nav shadow on scroll ──────────────────────────────────── */
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 24);
        }, { passive: true });
    }

    /* ── Mobile burger menu ────────────────────────────────────── */
    const burger = document.querySelector('.nav__burger');
    let mobileMenu = document.querySelector('.mobile-menu');

    if (burger && !mobileMenu) {
        mobileMenu = document.createElement('div');
        mobileMenu.className = 'mobile-menu';
        mobileMenu.innerHTML = `
          <ul>
            <li><a href="index.html#features"   data-i18n="nav.features">Características</a></li>
            <li><a href="index.html#benefits"   data-i18n="nav.benefits">Beneficios</a></li>
            <li><a href="index.html#pricing"    data-i18n="nav.pricing">Precios</a></li>
            <li><a href="contact.html"          data-i18n="nav.contact">Contacto</a></li>
          </ul>
          <a href="#" class="btn btn--primary" style="align-self:flex-start;" data-i18n="nav.cta">Empezar ahora →</a>
        `;
        const hero = document.querySelector('#hero') || document.querySelector('main') || document.body.firstElementChild;
        document.body.insertBefore(mobileMenu, hero);
    }

    function closeMobileMenu() {
        if (!burger) return;
        burger.setAttribute('aria-expanded', 'false');
        if (mobileMenu) mobileMenu.classList.remove('is-open');
    }

    if (burger) {
        burger.addEventListener('click', () => {
            const isOpen = burger.getAttribute('aria-expanded') === 'true';
            burger.setAttribute('aria-expanded', String(!isOpen));
            if (mobileMenu) mobileMenu.classList.toggle('is-open', !isOpen);
        });
        if (mobileMenu) {
            mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMobileMenu));
        }
    }

    /* ── Smooth scroll (index page only) ─────────────────────── */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const id = anchor.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                closeMobileMenu();
            }
        });
    });

    /* ── Language toggle ───────────────────────────────────────── */
    const langBtns = document.querySelectorAll('.lang-toggle__opt');
    const currentLang = localStorage.getItem('br-lang') || 'es';

    // Mark active on load
    langBtns.forEach(btn => {
        if (btn.dataset.lang === currentLang) btn.classList.add('active');
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            localStorage.setItem('br-lang', lang);
            langBtns.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
            applyTranslations(lang);
        });
    });

    // Apply on page load
    applyTranslations(currentLang);

    function applyTranslations(lang) {
        const dict = window.BR_TRANSLATIONS || {};
        const t = dict[lang] || {};
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            const val = getNestedKey(t, key);
            if (val !== undefined) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = val;
                } else {
                    el.innerHTML = val;
                }
            }
        });
        // Update html lang attribute
        document.documentElement.lang = lang;
    }

    function getNestedKey(obj, path) {
        return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined ? acc[k] : undefined), obj);
    }

    // Expose for other scripts
    window.BR_applyTranslations = applyTranslations;

})();
