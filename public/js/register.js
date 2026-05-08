// ── Traducciones ──────────────────────────────────────────
const i18n = {
    es: {
        pageTitle:    'Registro – BrandRadar',
        regTitle:     'Crea tu cuenta',
        regSubtitle:  'Regístrate para empezar a monitorear tu marca en tiempo real.',
        labelName:    'Nombre completo',
        labelEmail:   'Correo electrónico',
        labelPass:    'Contraseña',
        errorName:    'Por favor, ingresa tu nombre completo.',
        errorEmail:   'Por favor, ingresa un correo electrónico real y válido.',
        errorPass:    'La contraseña debe tener al menos 6 caracteres.',
        submitBtn:    'Registrarse',
        haveAccount:  '¿Ya tienes una cuenta?',
        loginLink:    'Iniciar sesión',
    },
    en: {
        pageTitle:    'Sign Up – BrandRadar',
        regTitle:     'Create your account',
        regSubtitle:  'Sign up to start monitoring your brand in real time.',
        labelName:    'Full name',
        labelEmail:   'Email address',
        labelPass:    'Password',
        errorName:    'Please enter your full name.',
        errorEmail:   'Please enter a valid email address.',
        errorPass:    'Password must be at least 6 characters.',
        submitBtn:    'Sign up',
        haveAccount:  'Already have an account?',
        loginLink:    'Sign in',
    }
};

// ── Aplicar idioma ─────────────────────────────────────────
function setLanguage(lang) {
    const t = i18n[lang];
    if (!t) return;

    // Guardar preferencia
    localStorage.setItem('br_lang', lang);

    // Actualizar textos
    document.getElementById('pageTitle').textContent    = t.pageTitle;
    document.title                                      = t.pageTitle;
    document.getElementById('regTitle').textContent     = t.regTitle;
    document.getElementById('regSubtitle').textContent  = t.regSubtitle;
    document.getElementById('labelName').textContent    = t.labelName;
    document.getElementById('labelEmail').textContent   = t.labelEmail;
    document.getElementById('labelPass').textContent    = t.labelPass;
    document.getElementById('errorName').textContent    = t.errorName;
    document.getElementById('errorEmail').textContent   = t.errorEmail;
    document.getElementById('errorPass').textContent    = t.errorPass;
    document.getElementById('submitBtn').textContent    = t.submitBtn;
    document.getElementById('haveAccount').textContent  = t.haveAccount;
    document.getElementById('loginLink').textContent    = t.loginLink;

    // Actualizar botones del toggle
    document.getElementById('es-btn').classList.toggle('active', lang === 'es');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');

    // Atributo lang del html
    document.documentElement.lang = lang;
}

// ── Validación del formulario ──────────────────────────────
function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

document.getElementById('registerForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const name     = document.getElementById('regName');
    const email    = document.getElementById('regEmail');
    const password = document.getElementById('regPassword');
    const nameGroup  = document.getElementById('nameGroup');
    const emailGroup = document.getElementById('emailGroup');
    const passGroup  = document.getElementById('passGroup');

    // Validar nombre
    if (name.value.trim().length < 2) {
        nameGroup.classList.add('error');
        valid = false;
    } else {
        nameGroup.classList.remove('error');
    }

    // Validar email
    if (!validateEmail(email.value.trim())) {
        emailGroup.classList.add('error');
        valid = false;
    } else {
        emailGroup.classList.remove('error');
    }

    // Validar contraseña
    if (password.value.length < 6) {
        passGroup.classList.add('error');
        valid = false;
    } else {
        passGroup.classList.remove('error');
    }

    if (valid) {
        // Aquí iría la lógica de registro real
        console.log('Registro válido, procesando...');
    }
});

// Limpiar errores al escribir
document.getElementById('regName').addEventListener('input', () =>
    document.getElementById('nameGroup').classList.remove('error'));
document.getElementById('regEmail').addEventListener('input', () =>
    document.getElementById('emailGroup').classList.remove('error'));
document.getElementById('regPassword').addEventListener('input', () =>
    document.getElementById('passGroup').classList.remove('error'));

// ── Inicializar con idioma guardado o español por defecto ──
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('br_lang') || 'es';
    setLanguage(saved);
});