// ── Traducciones ──────────────────────────────────────────
const i18n = {
    es: {
        pageTitle:    'Iniciar Sesión – BrandRadar',
        loginTitle:   'Hola, ¡Bienvenido!',
        loginSubtitle:'Inicia sesión para gestionar tu monitoreo en tiempo real.',
        labelEmail:   'Correo electrónico',
        labelPass:    'Contraseña',
        errorEmail:   'Por favor, ingresa un correo electrónico real y válido.',
        errorPass:    'La contraseña debe tener al menos 6 caracteres.',
        forgotPass:   '¿Olvidaste tu contraseña?',
        submitBtn:    'Iniciar sesión',
        noAccount:    '¿No tienes una cuenta?',
        registerLink: 'Regístrate',
    },
    en: {
        pageTitle:    'Sign In – BrandRadar',
        loginTitle:   'Hello, Welcome!',
        loginSubtitle:'Sign in to manage your real-time monitoring.',
        labelEmail:   'Email address',
        labelPass:    'Password',
        errorEmail:   'Please enter a valid email address.',
        errorPass:    'Password must be at least 6 characters.',
        forgotPass:   'Forgot your password?',
        submitBtn:    'Sign in',
        noAccount:    "Don't have an account?",
        registerLink: 'Sign up',
    }
};

// ── setLanguage expuesta globalmente (necesario para onclick inline) ──
window.setLanguage = function(lang) {
    const t = i18n[lang];
    if (!t) return;

    localStorage.setItem('br_lang', lang);

    const ids = [
        'pageTitle', 'loginTitle', 'loginSubtitle',
        'labelEmail', 'labelPass',
        'errorEmail', 'errorPass',
        'forgotPass', 'submitBtn',
        'noAccount',  'registerLink'
    ];

    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.textContent = t[id];
    });

    document.title = t.pageTitle;
    document.documentElement.lang = lang;

    const esBt = document.getElementById('es-btn');
    const enBt = document.getElementById('en-btn');
    if (esBt) esBt.classList.toggle('active', lang === 'es');
    if (enBt) enBt.classList.toggle('active', lang === 'en');
};

// ── Validación ────────────────────────────────────────────
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── Init al cargar el DOM ─────────────────────────────────
document.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('br_lang') || 'es';
    window.setLanguage(saved);

    const form       = document.getElementById('loginForm');
    const email      = document.getElementById('email');
    const password   = document.getElementById('password');
    const emailGroup = document.getElementById('emailGroup');
    const passGroup  = document.getElementById('passGroup');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email.value.trim())) {
            emailGroup.classList.add('error');
            valid = false;
        } else {
            emailGroup.classList.remove('error');
        }

        if (password.value.length < 6) {
            passGroup.classList.add('error');
            valid = false;
        } else {
            passGroup.classList.remove('error');
        }

        if (valid) {
            console.log('Login válido, procesando...');
        }
    });

    email.addEventListener('input',    () => emailGroup.classList.remove('error'));
    password.addEventListener('input', () => passGroup.classList.remove('error'));
});