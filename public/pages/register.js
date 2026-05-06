const translations = {
    es: {
        pageTitle: "Registro – BrandRadar",
        regTitle: "Crea tu cuenta",
        regSubtitle: "Regístrate para empezar a monitorear tu marca en tiempo real.",
        labelName: "Nombre completo",
        errorName: "Por favor, ingresa tu nombre completo.",
        labelEmail: "Correo electrónico",
        errorEmail: "Por favor, ingresa un correo electrónico real y válido.",
        labelPass: "Contraseña",
        errorPass: "La contraseña debe tener al menos 6 caracteres.",
        submitBtn: "Registrarse",
        haveAccount: "¿Ya tienes una cuenta?",
        loginLink: "Iniciar sesión"
    },
    en: {
        pageTitle: "Sign Up – BrandRadar",
        regTitle: "Create your account",
        regSubtitle: "Sign up to start monitoring your brand in real time.",
        labelName: "Full name",
        errorName: "Please enter your full name.",
        labelEmail: "Email address",
        errorEmail: "Please enter a real and valid email address.",
        labelPass: "Password",
        errorPass: "Password must be at least 6 characters long.",
        submitBtn: "Sign up",
        haveAccount: "Already have an account?",
        loginLink: "Sign in"
    }
};

function setLanguage(lang) {
    document.getElementById('es-btn').classList.toggle('active', lang === 'es');
    document.getElementById('en-btn').classList.toggle('active', lang === 'en');

    document.getElementById('pageTitle').innerText = translations[lang].pageTitle;
    document.getElementById('regTitle').innerText = translations[lang].regTitle;
    document.getElementById('regSubtitle').innerText = translations[lang].regSubtitle;
    document.getElementById('labelName').innerText = translations[lang].labelName;
    document.getElementById('errorName').innerText = translations[lang].errorName;
    document.getElementById('labelEmail').innerText = translations[lang].labelEmail;
    document.getElementById('errorEmail').innerText = translations[lang].errorEmail;
    document.getElementById('labelPass').innerText = translations[lang].labelPass;
    document.getElementById('errorPass').innerText = translations[lang].errorPass;
    document.getElementById('submitBtn').innerText = translations[lang].submitBtn;
    document.getElementById('haveAccount').innerText = translations[lang].haveAccount;
    document.getElementById('loginLink').innerText = translations[lang].loginLink;
}

const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const name = document.getElementById('regName');
        const email = document.getElementById('regEmail');
        const password = document.getElementById('regPassword');

        document.querySelectorAll('.form-group').forEach(g => g.classList.remove('error'));

        if (!name.value || name.value.trim().length < 2) {
            document.getElementById('nameGroup').classList.add('error');
            isValid = false;
        }

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
            alert('¡Registro exitoso! Redirigiendo a la app...');
        }
    });
}