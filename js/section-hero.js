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