// File: assets/js/script.js

// Fungsi untuk menerapkan efek fade-in saat scroll
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.content-section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)'; 
        section.style.transition = 'opacity 0.9s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.9s cubic-bezier(0.075, 0.82, 0.165, 1)'; // Transisi lebih halus
        observer.observe(section);
    });
});

// Animasi Pulse untuk Floating Discord Button
const discordBtn = document.querySelector('.floating-discord-btn');
if(discordBtn) {
    discordBtn.classList.add('pulse'); // Tambahkan kelas pulse agar animasi berjalan
}
