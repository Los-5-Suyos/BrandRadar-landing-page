
(function () {
    'use strict';

  /* ── Nav shadow al hacer scroll ── */
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
    }, { passive: true });

  /* ── Menú mobile ── */
    const burger = document.querySelector('.nav__burger');

  // Crear el overlay del menú mobile dinámicamente
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu';
    mobileMenu.innerHTML = `
    <ul>
        <li><a href="#features">Características</a></li>
        <li><a href="#benefits">Beneficios</a></li>
        <li><a href="#pricing">Precios</a></li>
        <li><a href="#cta">Contacto</a></li>
    </ul>
    <a href="#" class="btn btn--primary" style="align-self:flex-start;">Empezar ahora →</a>
    `;
    document.body.insertBefore(mobileMenu, document.body.querySelector('#hero'));

    burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!isOpen));
    mobileMenu.classList.toggle('is-open', !isOpen);
    });

  // Cerrar menú al hacer clic en cualquier enlace
    mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
    });

    function closeMobileMenu() {
    burger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    }

  /* ── 3. Smooth scroll para anchors ── */
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

})();

(function () {
    const featuresSection = document.querySelector('.features-section');
    if (!featuresSection) return;
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                featuresSection.classList.add('is-visible');
                observer.disconnect();
            }
        },
        { threshold: 0.12 }
    );
    observer.observe(featuresSection);
})();