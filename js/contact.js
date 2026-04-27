/* ============================================================
   contact.js — Contact form logic
   ============================================================ */
(function () {
    'use strict';

    const form      = document.getElementById('contactForm');
    const success   = document.getElementById('formSuccess');

    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        const required = form.querySelectorAll('[required]');
        let valid = true;
        required.forEach(field => {
            field.style.borderColor = '';
            if (!field.value.trim()) {
                field.style.borderColor = '#ef4444';
                valid = false;
            }
        });
        if (!valid) return;

        // Simulate send (replace with real fetch/API call)
        const submitBtn = form.querySelector('.form-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = '...';

        setTimeout(() => {
            form.style.display = 'none';
            if (success) {
                success.classList.add('visible');
                success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 900);
    });

    // Remove red border on input
    form.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('input', () => { el.style.borderColor = ''; });
    });

})();
