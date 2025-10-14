// File: assets/js/script.js

// Fungsi untuk menerapkan efek fade-in saat scroll (Fitur Premium Keren)
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
        section.style.transform = 'translateY(40px)'; // Geser lebih jauh
        section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'; // Transisi lebih lambat
        observer.observe(section);
    });
});

// Animasi Pulse untuk Floating Discord Button
const discordBtn = document.querySelector('.floating-discord-btn');
if(discordBtn) {
    // Tambahkan kelas pulse agar animasi berjalan (defined di style.css)
    discordBtn.classList.add('pulse'); 
}
