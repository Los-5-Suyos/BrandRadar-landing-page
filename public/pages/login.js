const translations = {
    es: {
        pageTitle: "Iniciar Sesión – BrandRadar",
        loginTitle: "Hola, ¡Bienvenido!",
        loginSubtitle: "Inicia sesión para gestionar tu monitoreo en tiempo real.",
        labelEmail: "Correo electrónico",
        errorEmail: "Por favor, ingresa un correo electrónico real y válido.",
        labelPass: "Contraseña",
        errorPass: "La contraseña debe tener al menos 6 caracteres.",
        forgotPass: "¿Olvidaste tu contraseña?",
        submitBtn: "Iniciar sesión",
        noAccount: "¿No tienes una cuenta?",
        registerLink: "Regístrate"
    },
    en: {
        pageTitle: "Sign In – BrandRadar",
        loginTitle: "Hello, Welcome!",
        loginSubtitle: "Log in to manage your real-time monitoring.",
        labelEmail: "Email address",
        errorEmail: "Please enter a real and valid email address.",
        labelPass: "Password",
        errorPass: "Password must be at least 6 characters long.",
        forgotPass: "Forgot your password?",
        submitBtn: "Sign In",
        noAccount: "Don't have an account?",
        registerLink: "Sign up"
    }
};

let currentLang = 'es';

function setLanguage(lang) {
    currentLang = lang;
    
    document.getElementById('es-btn').classList.toggle('active', lang === 'es');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');

    document.getElementById('pageTitle').innerText = translations[lang].pageTitle;
    document.getElementById('loginTitle').innerText = translations[lang].loginTitle;
    document.getElementById('loginSubtitle').innerText = translations[lang].loginSubtitle;
    document.getElementById('labelEmail').innerText = translations[lang].labelEmail;
    document.getElementById('errorEmail').innerText = translations[lang].errorEmail;
    document.getElementById('labelPass').innerText = translations[lang].labelPass;
    document.getElementById('errorPass').innerText = translations[lang].errorPass;
    document.getElementById('forgotPass').innerText = translations[lang].forgotPass;
    document.getElementById('submitBtn').innerText = translations[lang].submitBtn;
    document.getElementById('noAccount').innerText = translations[lang].noAccount;
    document.getElementById('registerLink').innerText = translations[lang].registerLink;
}

const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const email = document.getElementById('email');
        const password = document.getElementById('password');

        document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.value || !emailRegex.test(email.value)) {
            document.getElementById('emailGroup').classList.add('error');
            isValid = false;
        }

        if (!password.value || password.value.length < 6) {
            document.getElementById('passGroup').classList.add('error');
            isValid = false;
        }

        if (isValid) {
            alert('¡Datos validados correctamente! Iniciando sesión...');
        }
    });
}