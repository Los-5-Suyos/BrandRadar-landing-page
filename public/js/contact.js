/* ============================================================
    contact.js — Contact form logic + validación
   ============================================================ */
(function () {
    'use strict';

    const form    = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');

    if (!form) return;

    /* ── Helpers ──────────────────────────────────────────────── */
    function showError(field, msg) {
        field.classList.add('input--error');
        let err = field.parentElement.querySelector('.form-error');
        if (!err) {
            err = document.createElement('span');
            err.className = 'form-error';
            field.parentElement.appendChild(err);
        }
        err.textContent = msg;
    }

    function clearError(field) {
        field.classList.remove('input--error');
        const err = field.parentElement.querySelector('.form-error');
        if (err) err.remove();
    }

    function isValidEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }

    /* ── Validar un campo individual ──────────────────────────── */
    function validateField(field) {
        const val = field.value.trim();

        if (field.hasAttribute('required') && !val) {
            showError(field, 'Este campo es obligatorio.');
            return false;
        }

        if (field.type === 'email' && val && !isValidEmail(val)) {
            showError(field, 'Ingresa un correo electrónico válido.');
            return false;
        }

        if (field.id === 'message' && val.length < 10) {
            showError(field, 'El mensaje debe tener al menos 10 caracteres.');
            return false;
        }

        clearError(field);
        return true;
    }

    /* ── Limpiar error al escribir ────────────────────────────── */
    form.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('input', () => validateField(el));
        el.addEventListener('blur',  () => validateField(el));
    });

    /* ── Submit ───────────────────────────────────────────────── */
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const fields = form.querySelectorAll('input, textarea, select');
        let valid = true;

        fields.forEach(field => {
            if (!validateField(field)) valid = false;
        });

        if (!valid) {
            // Scroll al primer error
            const firstError = form.querySelector('.input--error');
            if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Simular envío
        const submitBtn = form.querySelector('.form-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        setTimeout(() => {
            form.style.display = 'none';
            if (success) {
                success.classList.add('visible');
                success.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 900);
    });

})();