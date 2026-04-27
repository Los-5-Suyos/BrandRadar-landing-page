/* ============================================================
   main.js — Scroll reveal & shared animations
   ============================================================ */
(function () {
    'use strict';

    /* ── Scroll reveal ─────────────────────────────────────────── */
    const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
    if (revealEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        revealEls.forEach(el => observer.observe(el));
    }

})();
